import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`space-y-4 opacity-0 ${isVisible ? 'animate-fade-in' : ''} ${
        centered ? 'text-center' : ''
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-primary rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;
