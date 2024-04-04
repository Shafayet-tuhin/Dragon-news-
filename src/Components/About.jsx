import React from "react";
import MainAbout from "./MainAbout";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import Header from "./Header";
import Footer from "./Footer";
const About = () => {
    return (
        <div className="container mx-auto">
            <Header />
            <div className="lg:hidden mb-16">
                <MainAbout />
            </div>

            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-4 ">
                <div className="lg:col-span-3">
                    <LeftNav />
                </div>
                <div className="lg:col-span-6">
                    <MainAbout />
                </div>
                <div className="lg:col-span-3">
                    <RightNav />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;
