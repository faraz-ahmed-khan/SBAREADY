import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
  inverse = false,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
  /** Use on dark/navy sections so the H2 reads in white. */
  inverse?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "eyebrow text-gold",
          align === "center" && "mx-auto",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 font-display",
          inverse ? "text-white" : "text-navy",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </h2>
      <div
        className={cn("section-divider", align === "center" && "mx-auto")}
        aria-hidden
      />
    </div>
  );
}
