import React from "react";
import Footer from "../Footer/Footer"
import Header from "../Header/Header";

const Layout = (props) => {
  return (
    <div className="bg-color2 grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <div className="flex justify-center">
        <main className="w-full text-primary">{props.children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
