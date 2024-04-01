import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import MainNav from "./MainNav";
const Main = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="mx-auto px-4">
        <div className="grid grid-cols-12 gap-4 ">
          <div className="col-span-3">
            <LeftNav />
          </div>

          <div className="col-span-6">
            <MainNav/>
          </div>

          <div className="col-span-3">
            <RightNav />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
