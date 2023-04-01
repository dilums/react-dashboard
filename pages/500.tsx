import SEO from "components/common/SEO";

export default function ServerError() {
  return (
    <>
      <SEO title="ServerError" slug="/500" />
      <div className="max-w-7xl mx-auto p-4">500 | Server Error</div>
    </>
  );
}
