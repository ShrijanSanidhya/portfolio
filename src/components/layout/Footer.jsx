export function Footer() {
  return (
    <footer className="border-t border-border py-6 px-6 w-full mt-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        
        <a
          href="#"
          className="font-display font-semibold text-xl text-text-primary hover:scale-105 transition-transform"
        >
          SS
        </a>

        <div className="font-mono text-[11px] text-text-tertiary text-center">
          Built with passion by Shrijan Sanidhya © 2026
        </div>

        <div className="font-mono text-[11px] text-text-tertiary text-center">
          Made in India 🇮🇳
        </div>

      </div>
    </footer>
  );
}
