import React from "react";
import AppWrap from "../../wrapper/AppWrap";
import "./works.scss";
import useWindowSize from "../../hooks/useWindows";
import { useState } from "react";
import { useEffect } from "react";
import { client, urlFor } from "../../client";
const Works = () => {
  const { width } = useWindowSize();
  const [works, setWorks] = useState([]);
  const work = '*[_type == "works"]';

  useEffect(() => {
    client.fetch(work).then((data) => {
      setWorks(data);
    });
  }, []);

  return (
    <div className="app_works">
      <div className="app__title">
        <h1>Our Works</h1>
        <span></span>
      </div>
      <div className="works_section">
        {works
          .map((works, index) => (
            <div className="work__box" key={index}>
              <img src={urlFor(works.imgUrl)} alt={works.imgUrl} />
              <p className="work_discription">{works.title.slice(0, 100)}</p>
            </div>
          ))
          .slice(0, width < 900 ? 3 : 6)}
      </div>
    </div>
  );
};

export default AppWrap(Works, "works");
