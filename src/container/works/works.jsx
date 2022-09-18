import React from "react";
import AppWrap from "../../wrapper/AppWrap";
import "./works.scss";
// import useWindowSize from "../../hooks/useWindows";
import { useState } from "react";
import { useEffect } from "react";
import { client, urlFor } from "../../client";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Works = () => {
  // const { width } = useWindowSize();
  const [works, setWorks] = useState([]);
  const [next, setNext] = useState(2);
  const [prv, setPrv] = useState(0);

  const PrvWork = () => {
    setNext((prv) => prv - 3);
    setPrv((prv) => prv - 3);
  };
  const NextWork = () => {
    setNext((prv) => prv + 3);
    setPrv((prv) => prv + 3);
  };

  //   "01ca7a44-9993-424e-88cb-916e80a6619f"
  const work1 = `*[_type == "works"]`;
  const work = `*[_type == "works"][${prv}..${next}]`;

  useEffect(() => {
    client.fetch(work).then((data) => {
      setWorks(data);
    });
  }, [next]);

  useEffect(() => {
    client.fetch(work1).then((data) => {});
  }, []);

  const [sinWork, setSingleWork] = useState();

  function singleWork(id) {
    const work22 = `*[_type == "works" && _id == "${id}"]`;
    client.fetch(work22).then((data) => {
      setSingleWork(data[0]);
    });
  }
  function singleWorkOf(id) {
    setSingleWork();
  }
  console.log(sinWork);
  // console.log(works);

  return (
    <div className="app_works">
      <div className="app__title">
        <h1>Our Works</h1>
        <span></span>
      </div>
      <div className="works_section">
        {works.map((works, index) => (
          <div
            className="work__box"
            key={index}
            onClick={() => singleWork(works._id)}
          >
            <img src={urlFor(works.imgUrl)} alt={works.imgUrl} />
            <p className="work_discription">{works.title.slice(0, 100)}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {prv !== 0 && (
          <AiOutlineArrowLeft className="pagination__btn" onClick={PrvWork} />
        )}
        {next <= work1.length ? (
          <AiOutlineArrowRight className="pagination__btn" onClick={NextWork} />
        ) : null}
      </div>

      {sinWork && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={singleWorkOf}>
              &times;
            </span>
            <div className="modelBox">
              <img
                className="modelImage"
                src={urlFor(sinWork.imgUrl)}
                alt={sinWork.imgUrl}
              />
              <br></br>
              <br></br> <h3> {sinWork.title}</h3>
              <br></br>
              <p>{sinWork.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppWrap(Works, "works");
