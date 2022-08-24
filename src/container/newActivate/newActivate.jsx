import React from "react";
import AppWrap from "../../wrapper/AppWrap";
import "./newActivate.scss";
import { useEffect } from "react";
import { useState } from "react";
import { client, urlFor } from "../../client";

const NewActivate = () => {
  const [newActivate, setImage] = useState([]);
  const newactivate = '*[_type == "newactivate"]';

  useEffect(() => {
    client.fetch(newactivate).then((data) => {
      setImage(data);
    });
  }, []);
  return (
    <div className="app_newActivate">
      <div className="app__title">
        <h1> New activities</h1>
        <span></span>
      </div>
      {newActivate &&
        newActivate.map((active) => (
          <div className="app_new_activate_contant" key={Math.random() * 10}>
            <div className="activate_discription">
              <h1 className="project_name">{active.title}</h1>
              <div className="project_objectives">
                <div className="project_obj_box">
                  <span></span>
                  <h2>Project Objectives :</h2>
                </div>
                <div className="pro_obj_discription">
                  {active.project_objectives}
                </div>
              </div>
              <div className="project_objectives">
                <div className="project_obj_box">
                  <span></span>
                  <h2>[{active.reasonstitle}</h2>
                </div>
                <div className="pro_obj_discription">
                  <ol>
                    {active.reasons.map((resons) => (
                      <li key={Math.random() * 10}>{resons}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <div className="activate_image">
              <img src={urlFor(active.imgUrl)} alt="" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default AppWrap(NewActivate, "newactivate");
