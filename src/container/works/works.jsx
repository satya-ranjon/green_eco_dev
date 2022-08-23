import React from "react";
import { images } from "../../constant";
import AppWrap from "../../wrapper/AppWrap";
import "./works.scss";
import useWindowSize from "../../hooks/useWindows";

const Works = () => {
  //--> after delete
  const imgAryy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 3];
  const { height, width } = useWindowSize();

  return (
    <div className="app_works">
      <div className="app__title">
        <h1>Our Works</h1>
        <span></span>
      </div>
      <div className="works_section">
        {imgAryy
          .map((item) => (
            <div className="work__box" key={item}>
              <img src={images.twoCarousel} alt="" />
              <p className="work_discription">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                consectetur ut modi! Nam saepe, doloremque veritatis deleniti
                nihil est voluptate beatae odit rem et, consequuntur corporis
                illo veniam asperiores! Cum!
              </p>
            </div>
          ))
          .slice(0, width < 900 ? 3 : 6)}
      </div>
    </div>
  );
};

export default AppWrap(Works, "works");
