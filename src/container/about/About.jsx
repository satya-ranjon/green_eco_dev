import React from "react";
import AppWrap from "../../wrapper/AppWrap";
import "./about.scss";
import { images } from "../../constant";
const About = () => {
  return (
    <div className="app_about">
      <div className="app__title">
        <h1>About Us</h1>
        <span></span>
      </div>
      <div className="conten_container">
        <div className="about__img">
          <img className="about_img_one" src={images.oneCarousel} alt="" />
          <div className="about_img_box">
            <img className="about_img_two" src={images.oneCarousel} alt="" />
            <img className="about_img_three" src={images.oneCarousel} alt="" />
          </div>
        </div>
        <div className="about__info">
          <h3>Who We Are</h3>
          <div className="about__title_section">
            The Nature Conservancy is a global environmental nonprofit working
            to create a world where people and nature can thrive
          </div>
          <div className="about__discription">
            Leveraging the world’s largest repository of agroforestry science
            and look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like.It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as t
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(About, "about");
