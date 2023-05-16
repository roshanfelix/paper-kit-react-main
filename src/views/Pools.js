import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import PoolHeader from "components/Headers/PoolHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionForm from "views/index-sections/SectionForm.js";
import SectionTable from "views/index-sections/SectionTable.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <PoolHeader />
      <div className="main">
        <SectionForm />
        <SectionTable />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
