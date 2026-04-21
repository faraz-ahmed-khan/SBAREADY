import Link from "next/link";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({
  items,
  className,
  inverted,
}: {
  items: Crumb[];
  className?: string;
  /** Light text for dark/navy hero backgrounds */
  inverted?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-2 text-gray-mid">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-2">
              {i > 0 ? (
                <span className="text-gold" aria-hidden>
                  /
                </span>
              ) : null}
              {isLast || !item.href ? (
                <span
                  className={cn(
                    "font-medium",
                    isLast
                      ? inverted
                        ? "text-white"
                        : "text-navy"
                      : inverted
                        ? "text-white/70"
                        : "text-gray-mid",
                  )}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "link-gold-underline",
                    inverted
                      ? "text-white/70 hover:text-white"
                      : "text-gray-mid hover:text-navy",
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
