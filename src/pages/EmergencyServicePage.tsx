import { useParams } from "react-router-dom";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getEmergencyServiceConfig } from "@/data/serviceConfigs";

const EmergencyServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const config = getEmergencyServiceConfig(slug || "");
  return <ServicePageTemplate config={config} />;
};

export default EmergencyServicePage;
