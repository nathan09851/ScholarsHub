import logo from "@/assets-optimized/logo.webp";
import { siteConfig } from "@/content/site";

interface BrandMarkProps {
  compact?: boolean;
  dark?: boolean;
  showSubtitle?: boolean;
  className?: string;
}

const BrandMark = ({
  compact = false,
  dark = false,
  showSubtitle = true,
  className,
}: BrandMarkProps) => {
  const titleClass = dark ? "text-white" : "text-foreground";
  const subtitleClass = dark ? "text-white/60" : "text-muted-foreground";

  return (
    <div className={["flex items-center gap-3", className].filter(Boolean).join(" ")}>
      <div
        className={`flex items-center justify-center overflow-hidden rounded-[14px] bg-white/95 shadow-sm ring-1 ring-slate-900/5 ${
          compact ? "h-9 w-9 p-1 md:h-11 md:w-11 md:p-1.5" : "h-14 w-14 p-1.5"
        }`}
      >
        <img
          alt={`${siteConfig.brandDisplayName} logo`}
          className="h-full w-full object-contain"
          loading="eager"
          decoding="async"
          width={compact ? 36 : 56}
          height={compact ? 36 : 56}
          src={logo}
        />
      </div>

      <div className="flex flex-col justify-center min-w-0 leading-[1.1]">
        <p
          className={`truncate font-serif font-bold tracking-tight ${
            compact ? "text-base md:text-xl" : "text-2xl"
          } ${titleClass}`}
        >
          {siteConfig.brandDisplayName}
        </p>
        {showSubtitle ? (
          <p
            className={`truncate uppercase font-bold tracking-[0.2em] ${
              compact ? "text-[8px] md:text-[10px]" : "text-[11px]"
            } ${subtitleClass} opacity-80`}
          >
            {siteConfig.brandSubtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default BrandMark;
