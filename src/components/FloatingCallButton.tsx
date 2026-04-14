import { Phone } from "lucide-react";

const FloatingCallButton = () => (
  <a
    href="tel:+264857875100"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg ring-4 ring-accent/30 active:scale-95 transition-transform sm:hidden"
    aria-label="Call 061 Plumbers now"
  >
    <Phone className="h-6 w-6" />
  </a>
);

export default FloatingCallButton;
