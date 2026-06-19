import { SiteBanner } from "@/components/layout/SiteBanner";

export function PageShell({
  title,
  children,
  wide = false,
}: {
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <>
      <SiteBanner />
      <div className="px-6 py-12 md:py-16 lg:px-10">
        <div
          className={
            wide ? "mx-auto max-w-5xl" : "mx-auto max-w-3xl"
          }
        >
          <h1 className="text-navy">{title}</h1>
          <div className="mt-8 space-y-10 text-base leading-relaxed text-text-light">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
