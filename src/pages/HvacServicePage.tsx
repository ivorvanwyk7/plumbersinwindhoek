import { useParams } from "react-router-dom";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getHvacServiceConfig } from "@/data/serviceConfigs";

const HvacServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const config = getHvacServiceConfig(slug || "");
  return <ServicePageTemplate config={config} />;
};

export default HvacServicePage;
