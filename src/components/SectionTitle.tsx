import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  eyebrow,
  centered = true,
  className,
}: SectionTitleProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={[
        "space-y-5 opacity-0",
        isVisible ? "animate-fade-in" : "",
        centered ? "text-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {eyebrow ? <div className="section-eyebrow">{eyebrow}</div> : null}
      <div className="space-y-4">
        <h2 className="font-serif text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {title}
        </h2>
        {subtitle ? (
          <p
            className={`text-base leading-7 text-muted-foreground md:text-lg ${
              centered ? "mx-auto max-w-3xl" : "max-w-2xl"
            }`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
      <div
        className={`h-1.5 w-24 rounded-full bg-gradient-to-r from-primary via-chart-2 to-chart-3 ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};

export default SectionTitle;
