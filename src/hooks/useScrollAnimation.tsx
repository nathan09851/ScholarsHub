import { useEffect, useRef, useState } from 'react';

export type AnimationVariant = 'fade-up' | 'fade-left' | 'fade-right' | 'scale-in' | 'fade-in';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const useScrollAnimation = (
  threshold = 0.12,
  options?: UseScrollAnimationOptions,
) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing (no re-trigger on scroll back up)
          if (currentElement) observer.unobserve(currentElement);
        }
      },
      {
        threshold: options?.threshold ?? threshold,
        rootMargin: options?.rootMargin ?? '0px 0px -40px 0px',
      },
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, options?.threshold, options?.rootMargin]);

  return { ref, isVisible };
};
