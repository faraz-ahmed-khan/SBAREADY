import Link from "next/link";
import { Download } from "lucide-react";
import type { Toolkit } from "@/data/toolkits";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ToolkitCard({
  toolkit,
  className,
}: {
  toolkit: Toolkit;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border border-dashed border-navy/25 bg-surface p-6 shadow-sm transition-all duration-[350ms] ease-out hover:-translate-y-1.5 hover:border-gold hover:shadow-xl",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <Download className="h-6 w-6 text-gold" aria-hidden />
        <Badge variant="warm">{toolkit.fileType}</Badge>
      </div>
      <h3 className="mt-4 font-display text-xl text-navy">{toolkit.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-text-light">
        {toolkit.description}
      </p>
      <p className="mt-4 text-xs text-gray-mid">{toolkit.fileSize}</p>
      <div className="mt-6">
        <Link href="/resources#toolkits">
          <Button variant="primary" size="sm" className="w-full sm:w-auto">
            Download toolkit
          </Button>
        </Link>
      </div>
    </article>
  );
}
