import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-4">
      <div>
        <img src={logo} alt="061 Plumbers" className="mb-4 h-10 w-auto brightness-0 invert" />
        <p className="text-sm opacity-70">
          Your trusted plumbers in Windhoek. Available 24/7 for all your plumbing needs.
        </p>
      </div>
      <div>
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">Navigation</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/" className="opacity-70 hover:opacity-100">Home</Link></li>
          <li><Link to="/about-us" className="opacity-70 hover:opacity-100">About Us</Link></li>
          <li><Link to="/contact" className="opacity-70 hover:opacity-100">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">Services</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/hvac-geyser-services-windhoek" className="opacity-70 hover:opacity-100">HVAC & Geysers</Link></li>
          <li><Link to="/drainage-services-windhoek" className="opacity-70 hover:opacity-100">Drainage</Link></li>
          <li><Link to="/kitchen-plumbing-windhoek" className="opacity-70 hover:opacity-100">Kitchen</Link></li>
          <li><Link to="/bathroom-renovations-windhoek" className="opacity-70 hover:opacity-100">Bathroom</Link></li>
          <li><Link to="/emergency-plumbing-windhoek" className="opacity-70 hover:opacity-100">Emergency</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-70">Contact</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2 opacity-70">
            <Phone className="h-4 w-4" />
            <a href="tel:+264857875100" className="hover:opacity-100">+264 85 787 5100</a>
          </li>
          <li className="flex items-center gap-2 opacity-70">
            <Mail className="h-4 w-4" />
            <span>[EMAIL PLACEHOLDER]</span>
          </li>
          <li className="flex items-center gap-2 opacity-70">
            <MapPin className="h-4 w-4" />
            <span>Windhoek, Namibia</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4 text-center text-sm opacity-50">
      © {new Date().getFullYear()} 061 Plumbers. All rights reserved.
    </div>
  </footer>
);

export default Footer;
