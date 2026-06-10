/** Full-width neutral visual anchor — no text, logos, or CTAs per site spec. */
export function NeutralBanner() {
  return (
    <div
      className="relative h-28 w-full border-b border-warm bg-gradient-to-br from-[#e8e4df] via-[#ddd8d2] to-[#d4cfc8] md:h-36"
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{ backgroundImage: "var(--noise-pattern)" }}
      />
    </div>
  );
}
