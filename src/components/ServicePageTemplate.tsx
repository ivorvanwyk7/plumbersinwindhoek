import Breadcrumb from "@/components/sections/Breadcrumb";
import HeroSection from "@/components/sections/HeroSection";
import ServiceDescription from "@/components/sections/ServiceDescription";
import KeyBenefits from "@/components/sections/KeyBenefits";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import RelatedServices from "@/components/sections/RelatedServices";
import CTABanner from "@/components/sections/CTABanner";
import NumberedSteps from "@/components/sections/NumberedSteps";

interface ServicePageConfig {
  breadcrumb: { label: string; href?: string }[];
  emergency?: boolean;
  showWhyChooseUs?: boolean;
  showWhatToDo?: number;
  relatedServices: { label: string; href: string }[];
}

const ServicePageTemplate = ({ config }: { config: ServicePageConfig }) => (
  <>
    <Breadcrumb items={config.breadcrumb} />
    <HeroSection emergency={config.emergency} />
    <ServiceDescription />
    <KeyBenefits />
    {config.showWhyChooseUs !== false && <WhyChooseUs count={3} />}
    {config.showWhatToDo && <NumberedSteps label="WHAT TO DO" count={config.showWhatToDo} />}
    <RelatedServices links={config.relatedServices} />
    <CTABanner />
  </>
);

export default ServicePageTemplate;
