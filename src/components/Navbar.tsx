import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-card/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="061 Plumbers" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-accent",
                location.pathname === link.href
                  ? "text-accent bg-accent/5"
                  : "text-foreground/70 hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex bg-accent text-accent-foreground hover:bg-accent/90 shadow-md active:scale-[0.97] transition-transform">
            <a href="tel:+264857875100">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-foreground hover:bg-muted transition-colors lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/50 bg-card transition-all duration-300 ease-out lg:hidden",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-t-0"
        )}
      >
        <div className="px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                location.pathname === link.href
                  ? "text-accent bg-accent/5"
                  : "text-foreground/70 hover:bg-muted hover:text-accent"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="mt-2 mb-2 w-full sm:hidden bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:+264857875100">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
