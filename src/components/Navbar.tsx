import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "HVAC & Geysers", href: "/hvac-geyser-services-windhoek" },
  { label: "Drainage", href: "/drainage-services-windhoek" },
  { label: "Kitchen", href: "/kitchen-plumbing-windhoek" },
  { label: "Bathroom", href: "/bathroom-renovations-windhoek" },
  { label: "Emergency Plumbing", href: "/emergency-plumbing-windhoek" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="061 Plumbers" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:+264857875100">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-card px-4 pb-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-muted hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="mt-2 w-full sm:hidden bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:+264857875100">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
