import ServicePageTemplate from "@/components/ServicePageTemplate";
import { sharedServiceConfigs } from "@/data/serviceConfigs";

const TapRepairPage = () => (
  <ServicePageTemplate config={sharedServiceConfigs["tap-repair"]} />
);

export default TapRepairPage;
