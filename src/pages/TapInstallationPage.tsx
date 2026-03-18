import ServicePageTemplate from "@/components/ServicePageTemplate";
import { sharedServiceConfigs } from "@/data/serviceConfigs";

const TapInstallationPage = () => (
  <ServicePageTemplate config={sharedServiceConfigs["tap-installation"]} />
);

export default TapInstallationPage;
