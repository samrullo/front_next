import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <div className="container">{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
