import React, { useState } from "react";
import { images } from "../../constant";
import "./navBar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
const NavBar = () => {
  const pages = [
    "home",
    "about",
    "New Activate",
    "WORKS",
    "CONTACT",
    "BLOG",
    "JOIN US",
  ];
  const [toggle, setToggle] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <a
          href="https://greenecho.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={images.logo} alt="logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {pages.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item.replace(/\s/g, "").toLocaleLowerCase()}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {pages.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.replace(/\s/g, "").toLocaleLowerCase()}`}
                    onClick={() => setToggle(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
