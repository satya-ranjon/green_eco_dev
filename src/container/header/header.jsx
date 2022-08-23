import React from "react";
import { Carousel } from "react-responsive-carousel";
import { images } from "../../constant";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./header.scss";
import AppWrap from "../../wrapper/AppWrap";
const Header = () => {
  const imgList = [
    images.oneCarousel,
    images.twoCarousel,
    images.threeCarousel,
    images.fourCarousel,
  ];
  return (
    <div className="app__header">
      <div className="hader_info">
        <h3 className="header_titel">
          <span>Green Echo 🌏 </span> <br /> is an Environmental Organization
        </h3>
        <div className="hader_about">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 Contrary to popular belief, Lorem Ipsum is not
            simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000
          </p>
          <a href="#about">
            <button className="button">Read More</button>
          </a>
        </div>
      </div>
      <div className="header_carousel">
        <Carousel showArrows={true}>
          {imgList.map((img) => (
            <div key={img}>
              <img src={img} alt={img} />
              <p className="legend">{img}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
