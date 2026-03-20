import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-4">
      <div>
        <img src={logo} alt="061 Plumbers" className="mb-4 h-10 w-auto brightness-0 invert" />
        <p className="text-sm leading-relaxed opacity-70">
          Your trusted plumbers in Windhoek. Available 24/7 for all your plumbing needs — from dripping taps to emergency burst pipes.
        </p>
      </div>
      <div>
        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-50">Navigation</h4>
        <ul className="space-y-2.5 text-sm">
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about-us" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.href}>
              <Link to={link.href} className="opacity-70 transition-opacity duration-200 hover:opacity-100">{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-50">Services</h4>
        <ul className="space-y-2.5 text-sm">
          {[
            { label: "HVAC & Geysers", href: "/hvac-geyser-services-windhoek" },
            { label: "Drainage", href: "/drainage-services-windhoek" },
            { label: "Kitchen", href: "/kitchen-plumbing-windhoek" },
            { label: "Bathroom", href: "/bathroom-renovations-windhoek" },
            { label: "Emergency 24/7", href: "/emergency-plumbing-windhoek" },
          ].map((link) => (
            <li key={link.href}>
              <Link to={link.href} className="opacity-70 transition-opacity duration-200 hover:opacity-100">{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider opacity-50">Contact</h4>
        <ul className="space-y-3 text-sm">
          <li>
            <a href="tel:+264857875100" className="flex items-center gap-2.5 opacity-70 transition-opacity duration-200 hover:opacity-100">
              <Phone className="h-4 w-4 shrink-0" />
              +264 85 787 5100
            </a>
          </li>
          <li className="flex items-center gap-2.5 opacity-70">
            <Mail className="h-4 w-4 shrink-0" />
            <span>info@061plumbers.com</span>
          </li>
          <li className="flex items-center gap-2.5 opacity-70">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>Windhoek, Namibia</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-5 text-center text-sm opacity-40">
      © {new Date().getFullYear()} 061 Plumbers. All rights reserved.
    </div>
  </footer>
);

export default Footer;
