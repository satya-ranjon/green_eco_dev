import React from "react";
import AppWrap from "../../wrapper/AppWrap";
import "./contact.scss";

const Contact = () => {
  return (
    <div>
      <div className="app__title">
        <h1> Contact</h1>
        <span></span>
      </div>
    </div>
  );
};

export default AppWrap(Contact, "contact");
