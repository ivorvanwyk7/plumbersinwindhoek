import { Helmet } from "react-helmet-async";
import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import contactHero from "@/assets/contact-hero.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+264 85 787 5100",
    href: "tel:+264857875100",
    description: "Call us anytime — 24/7 availability",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@061plumbers.com",
    href: "mailto:info@061plumbers.com",
    description: "We respond within a few hours",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Windhoek & Surrounding Areas",
    href: undefined,
    description: "Serving all suburbs across Windhoek",
  },
  {
    icon: Clock,
    label: "Operating Hours",
    value: "24/7 — Always Available",
    href: undefined,
    description: "Emergencies don't wait and neither do we",
  },
];

const serviceOptions = [
  "General Plumbing",
  "Emergency Plumbing (24/7)",
  "Geyser Installation / Repair",
  "Blocked Drains / Sewer",
  "Kitchen Plumbing",
  "Bathroom Renovation",
  "Tap Installation / Repair",
  "Toilet Repair / Installation",
  "Other",
];

const ContactPage = () => {
  const detailsReveal = useScrollReveal();
  const formReveal = useScrollReveal();
  const mapReveal = useScrollReveal();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting 061 Plumbers. We'll get back to you shortly.",
      });
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Contact 061 Plumbers | Get a Free Quote in Windhoek</title>
        <meta
          name="description"
          content="Contact 061 Plumbers for a free plumbing quote in Windhoek. Call +264 85 787 5100 or fill out our contact form. Available 24/7 for emergencies."
        />
      </Helmet>

      <HeroSection
        headline="Get in Touch with 061 Plumbers"
        subheadline="Have a plumbing question or need a quote? Reach out to us — we're happy to help. Whether it's a small repair or a big project, our friendly team is just a call or message away."
        backgroundImage={contactHero}
      />

      {/* Contact Details */}
      <section
        ref={detailsReveal.ref as React.RefObject<HTMLElement>}
        className={cn(
          "w-full py-16 md:py-24 transition-all duration-700",
          detailsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="container mx-auto px-4">
          <span className="mb-2 block text-center text-xs font-bold uppercase tracking-widest text-accent">
            Reach Us
          </span>
          <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground md:text-4xl">
            Contact Details
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="group rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <detail.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-1 text-sm font-bold uppercase tracking-wide text-muted-foreground">
                  {detail.label}
                </h3>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="text-lg font-bold text-foreground hover:text-accent transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-lg font-bold text-foreground">{detail.value}</p>
                )}
                <p className="mt-2 text-xs text-muted-foreground">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        ref={formReveal.ref as React.RefObject<HTMLElement>}
        className={cn(
          "w-full bg-secondary/50 py-16 md:py-24 transition-all duration-700",
          formReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="container mx-auto max-w-2xl px-4">
          <span className="mb-2 block text-center text-xs font-bold uppercase tracking-widest text-accent">
            Send Us a Message
          </span>
          <h2 className="mb-4 text-center text-3xl font-extrabold text-foreground md:text-4xl">
            Request a Free Quote
          </h2>
          <p className="mb-10 text-center text-muted-foreground">
            Fill out the form below and we'll get back to you as soon as possible — usually within a few hours.
          </p>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+264 ..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Service Needed *</Label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option value="">Select a service...</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                placeholder="Describe your plumbing issue or what you need help with..."
                className="min-h-[120px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="w-full h-12 text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {submitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* Map */}
      <section
        ref={mapReveal.ref as React.RefObject<HTMLElement>}
        className={cn(
          "w-full py-16 md:py-24 transition-all duration-700",
          mapReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="container mx-auto px-4">
          <span className="mb-2 block text-center text-xs font-bold uppercase tracking-widest text-accent">
            Our Location
          </span>
          <h2 className="mb-10 text-center text-3xl font-extrabold text-foreground md:text-4xl">
            Serving All of Windhoek
          </h2>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              title="061 Plumbers Service Area — Windhoek, Namibia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117608.04854379286!2d17.0202!3d-22.5609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1b5c5e4c34ab%3A0x7a3b0a09c3e1df01!2sWindhoek%2C%20Namibia!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTABanner showSecondary={false} />
    </>
  );
};

export default ContactPage;
