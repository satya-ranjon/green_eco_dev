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
            image
              .map((img) => (
                <img
                  src={urlFor(img.image1)}
                  key={img.image1}
                  alt={img.image1}
                />
              ))
              .slice(0, 1)}

          {image &&
            image
              .map((img) => (
                <img
                  src={urlFor(img.image2)}
                  key={img.image2}
                  alt={img.image2}
                />
              ))
              .slice(0, 1)}

          {image &&
            image
              .map((img) => (
                <img
                  src={urlFor(img.image3)}
                  key={img.image3}
                  alt={img.image3}
                />
              ))
              .slice(0, 1)}

          {image &&
            image
              .map((img) => (
                <img
                  src={urlFor(img.image4)}
                  key={img.image4}
                  alt={img.image4}
                />
              ))
              .slice(0, 1)}

          {image &&
            image
              .map((img) => (
                <img
                  src={urlFor(img.image5)}
                  key={img.image5}
                  alt={img.image5}
                />
              ))
              .slice(0, 1)}

          {image &&
            image
              .map((img) => (
                <img
                  src={urlFor(img.image6)}
                  key={img.image6}
                  alt={img.image6}
                />
              ))
              .slice(0, 1)}
        </Carousel>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
