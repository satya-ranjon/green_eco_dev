import React from "react";
import { images } from "../../constant";
import AppWrap from "../../wrapper/AppWrap";
import "./newActivate.scss";

const NewActivate = () => {
  const myAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 3, 4, 2];
  return (
    <div className="app_newActivate">
      <div className="app__title">
        <h1> New activities</h1>
        <span></span>
      </div>
      <div className="app_new_activate_contant">
        <div className="activate_discription">
          <h1 className="project_name">Jackfruit plantation project</h1>
          <div className="project_objectives">
            <div className="project_obj_box">
              <span></span>
              <h2>Project Objectives :</h2>
            </div>
            <div className="pro_obj_discription">
              In the first phase by planting and distributing 10,000 jackfruit
              seedlings in Kurigram district. Increasing environmental awareness
              and nature to counter negative climate change
            </div>
          </div>
          <div className="project_objectives">
            <div className="project_obj_box">
              <span></span>
              <h2>Why planting jackfruit seedlings:</h2>
            </div>
            <div className="pro_obj_discription">
              <ol>
                {myAr.map((item) => (
                  <li key={item + Math.random() * 10}>
                    Ripe jackfruit which plays a role in biodiversity
                    conservation trees are used as food by various birds. which
                    plays a role in biodiversity conservation
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="activate_image">
          <img src={images.threeCarousel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppWrap(NewActivate, "newactivate");
