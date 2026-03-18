import { useParams } from "react-router-dom";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getBathroomServiceConfig } from "@/data/serviceConfigs";

const BathroomServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const config = getBathroomServiceConfig(slug || "");
  return <ServicePageTemplate config={config} />;
};

export default BathroomServicePage;
