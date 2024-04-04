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

        <div className="lg:hidden">  {/* Mobile layout - switch from sm to lg */}
          <MainNav />
        </div>


        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-4">     {/* Desktop layout - switch from sm to lg */}
          <div className="lg:col-span-3">
            <LeftNav />
          </div>
          <div className="lg:col-span-6">
            <MainNav />
          </div>
          <div className="lg:col-span-3">
            <RightNav />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
