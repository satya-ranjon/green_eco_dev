import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./header.scss";
import AppWrap from "../../wrapper/AppWrap";
import { useEffect } from "react";
import { useState } from "react";
import { client, urlFor } from "../../client";

const Header = () => {
  const [about, setAbout] = useState([]);
  const [image, setImage] = useState([]);
  const query = '*[_type == "abouts"]';
  const haderimag = '*[_type == "headerimage"]';

  useEffect(() => {
    client.fetch(query).then((data) => {
      setAbout(data);
    });
    client.fetch(haderimag).then((data) => {
      setImage(data);
    });
  }, []);
  return (
    <div className="app__header">
      <div className="hader_info">
        <h3 className="header_titel">
          <span>Green Echo 🌏 </span> <br /> is an Environmental Organization
        </h3>
        <div className="hader_about">
          {about &&
            about.map((about) => (
              <div key={Math.random()}>
                <p>{about.description.slice(0, 300)}</p>
                <a href="#about">
                  <button className="button">Read More</button>
                </a>
              </div>
            ))}
        </div>
      </div>
      <div className="header_carousel">
        <Carousel showArrows={true}>
          {image &&
            image.map((img) => (
              <img
                className="image_carousel"
                key={img._id}
                src={urlFor(img.imgUrl)}
                alt={img.imgUrl}
              />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
