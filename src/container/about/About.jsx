import React from "react";
import AppWrap from "../../wrapper/AppWrap";
import "./about.scss";
import { useState, useEffect } from "react";
import { client, urlFor } from "../../client";

const About = () => {
  const [about, setAbout] = useState([]);
  const query = '*[_type == "abouts"]';

  useEffect(() => {
    client.fetch(query).then((data) => {
      setAbout(data);
    });
  }, []);
  // about.map((item) => console.log(item.imageone)).slice(0, 1);
  return (
    <div className="app_about">
      <div className="app__title">
        <h1>About Us</h1>
        <span></span>
      </div>
      {about &&
        about
          .map((about) => (
            <div className="conten_container" key={about}>
              <div className="about__img">
                <img
                  className="about_img_one"
                  src={urlFor(about.imageone)}
                  alt={about.imageone}
                />
                <div className="about_img_box">
                  <img
                    className="about_img_two"
                    src={urlFor(about.imagetwo)}
                    alt={about.imageone}
                  />
                  <img
                    className="about_img_two"
                    src={urlFor(about.imagethree)}
                    alt={about.imagethree}
                  />
                </div>
              </div>
              <div className="about__info">
                <h3>Who We Are</h3>
                <div className="about__title_section">{about.title}</div>
                <div className="about__discription">{about.description}</div>
              </div>
            </div>
          ))
          .slice(0, 1)}
    </div>
  );
};

export default AppWrap(About, "about");
