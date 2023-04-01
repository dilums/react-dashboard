import Content from "@/components/Content";
import Sidebar from "@/components/Sidebar";
import SEO from "components/common/SEO";
import { useState } from "react";

export default function Home() {
  const [showSidebar, onSetShowSidebar] = useState(false);
  return (
    <>
      <SEO title="Dashboard" slug="" />
      <div className="flex">
        <Sidebar
          onSidebarHide={() => {
            onSetShowSidebar(false);
          }}
          showSidebar={showSidebar}
        />
        <Content
          onSidebarHide={() => {
            onSetShowSidebar(true);
          }}
        />
      </div>
    </>
  );
}
