import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-primary-foreground">
    <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-4">
      <div>
        <div className="mb-4 text-lg font-bold">[LOGO PLACEHOLDER]</div>
        <p className="text-sm opacity-70">[COMPANY DESCRIPTION PLACEHOLDER]</p>
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
          <li className="opacity-70">[PHONE PLACEHOLDER]</li>
          <li className="opacity-70">[EMAIL PLACEHOLDER]</li>
          <li className="opacity-70">[ADDRESS PLACEHOLDER]</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4 text-center text-sm opacity-50">
      [COPYRIGHT PLACEHOLDER] © {new Date().getFullYear()} 061 Plumbers. All rights reserved.
    </div>
  </footer>
);

export default Footer;
