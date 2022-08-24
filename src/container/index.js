import React from "react";
import NavBar from "../components/navbar/navBar";
import About from "./about/About";
import Contact from "./contact/contact";
import Header from "./header/header";
import NewActivate from "./newActivate/newActivate";
import Works from "./works/works";

const index = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <NewActivate />
      <Works />
      <Contact />
    </div>
  );
};

export default index;
