import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, string> = {
  sm: "text-sm px-4 py-2 rounded-full",
  md: "text-sm md:text-[15px] px-6 py-2.5 rounded-full",
  lg: "text-base px-8 py-3 rounded-full",
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-navy hover:bg-gold-muted transition-colors duration-300 ease-editorial shadow-sm",
  secondary:
    "bg-navy text-surface hover:bg-navy-deep transition-colors duration-300 ease-editorial",
  outline: "",
  ghost:
    "bg-transparent text-navy hover:underline underline-offset-4 decoration-gold/80",
  danger: "bg-red-600 text-white hover:bg-red-700 transition-colors duration-200",
};

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  "aria-label"?: string;
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  onClick,
  type = "button",
  ...rest
}: ButtonProps) {
  const showExternalIcon = Boolean(
    external || href?.startsWith("http"),
  );

  const content = (
    <span
      className={cn(
        "relative z-10 inline-flex items-center justify-center gap-2 font-sans font-medium",
        variant === "outline" &&
          "text-gold transition-colors duration-300 ease-editorial group-hover:text-navy",
      )}
    >
      {children}
      {showExternalIcon ? (
        <ExternalLink className="h-4 w-4 opacity-90" aria-hidden />
      ) : null}
    </span>
  );

  const merged = cn(
    "inline-flex items-center justify-center font-medium focus-visible:outline-none",
    sizeClasses[size],
    variantClasses[variant],
    variant === "outline" &&
      "group relative overflow-hidden border-[1.5px] border-gold bg-transparent transition-colors duration-300 ease-editorial before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-gold before:transition-transform before:duration-300 before:ease-editorial hover:before:scale-x-100",
    className,
  );

  if (href) {
    const isExternal = external || href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          className={merged}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={merged} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={merged} {...rest}>
      {content}
    </button>
  );
}
