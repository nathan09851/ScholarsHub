import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { type AnimationVariant } from "@/hooks/useScrollAnimation";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
}

const variantClasses: Record<AnimationVariant, { hidden: string; visible: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-6",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 -translate-x-6",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 translate-x-6",
    visible: "opacity-100 translate-x-0",
  },
  "scale-in": {
    hidden: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  "fade-in": {
    hidden: "opacity-0",
    visible: "opacity-100",
  },
};

export const AnimatedSection = ({
  children,
  className,
  variant = "fade-up",
  delay = 0,
  duration = 600,
  as: Tag = "div",
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const { hidden, visible } = variantClasses[variant];

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-all ease-out will-change-transform",
        isVisible ? visible : hidden,
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </Tag>
  );
};

/**
 * Animated number counter — counts up when element enters viewport.
 * Intelligently skips animation for "Since 2021" or year-style values
 * where a word prefix precedes the number.
 */
interface AnimatedCounterProps {
  value: string; // e.g. "40+" or "5.0" or "7 subjects" or "Since 2021"
  className?: string;
  delay?: number;
}

export const AnimatedCounter = ({ value, className, delay = 0 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(value);
  const [started, setStarted] = useState(false);

  // Extract numeric part
  const numMatch = value.match(/[\d.]+/);
  const numericVal = numMatch ? parseFloat(numMatch[0]) : null;
  // Skip animation for values like "Since 2021" (word before number, or large year numbers)
  const hasWordPrefix = /^[A-Za-z]/.test(value);
  const shouldAnimate = numericVal !== null && numericVal < 1000 && !hasWordPrefix;

  useEffect(() => {
    if (!shouldAnimate) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [started, shouldAnimate]);

  useEffect(() => {
    if (!started || !numMatch || !shouldAnimate) return;

    const target = parseFloat(numMatch[0]);
    const isDecimal = numMatch[0].includes(".");
    // Build prefix (e.g. "₹") and suffix (e.g. "+ reviews")
    const numStart = value.search(/[\d.]/);
    const prefix = numStart > 0 ? value.slice(0, numStart) : "";
    const suffix = value.slice(value.indexOf(numMatch[0]) + numMatch[0].length);
    const steps = 36;
    const interval = 800 / steps;
    let count = 0;

    const timer = setTimeout(() => {
      const tick = setInterval(() => {
        count++;
        const current = target * (count / steps);
        const formatted = isDecimal
          ? current.toFixed(1)
          : Math.floor(current).toString();
        setDisplayed(`${prefix}${formatted}${suffix}`);
        if (count >= steps) {
          setDisplayed(value);
          clearInterval(tick);
        }
      }, interval);
      return () => clearInterval(tick);
    }, delay);

    return () => clearTimeout(timer);
  }, [started, delay, value, numMatch, shouldAnimate]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
};
