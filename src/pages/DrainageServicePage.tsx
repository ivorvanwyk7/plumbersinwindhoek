import { useParams } from "react-router-dom";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { getDrainageServiceConfig } from "@/data/serviceConfigs";

const DrainageServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const config = getDrainageServiceConfig(slug || "");
  return <ServicePageTemplate config={config} />;
};

export default DrainageServicePage;
