import { Helmet } from "react-helmet-async";

const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Helmet>
);

export default JsonLd;
