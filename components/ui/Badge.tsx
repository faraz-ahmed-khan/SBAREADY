import { cn } from "@/lib/utils";

type Variant = "navy" | "warm" | "gold";

const variants: Record<Variant, string> = {
  navy: "bg-navy text-surface",
  warm: "bg-warm text-navy",
  gold: "bg-gold/15 text-navy",
};

export function Badge({
  children,
  variant = "navy",
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[12px] font-medium uppercase tracking-[0.08em]",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
