export function Footer() {
  return (
    <footer className="w-full py-8 text-center border-t border-glass-border bg-surface/50">
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} Shrijan Sanidhya. Built with React & Tailwind.
      </p>
    </footer>
  );
}
