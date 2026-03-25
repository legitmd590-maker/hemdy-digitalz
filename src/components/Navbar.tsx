import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-lg border-b border-primary-foreground/5">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-heading font-bold text-xl text-primary-foreground">
          Hemdy <span className="text-gradient">Digitalz</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-heading"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/2348137941463"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent-gradient text-accent-foreground px-6 py-2 rounded-full text-sm font-heading font-semibold hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary/95 backdrop-blur-lg border-t border-primary-foreground/5 pb-6">
          <div className="container flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground font-heading text-sm py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/2348137941463"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-gradient text-accent-foreground px-6 py-3 rounded-full text-sm font-heading font-semibold text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
