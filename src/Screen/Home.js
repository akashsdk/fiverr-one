import React, { useState, useEffect } from "react";
import "../Style/Home.css";

import { Image, Button } from "antd";

export default function Home() {
  const [activeBox, setActiveBox] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBox((prevBox) => (prevBox % 3) + 1); // Cycle through boxes 1, 2, 3
    }, 5000); // Change box after every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleBoxChange = (boxNumber) => {
    setActiveBox(boxNumber);
  };
  return (
    <div className="homeBody">
      <div className="home-box1">
        <div className="home-box1-div">
          <h2>Hello There! </h2>
          <h2 style={{ marginTop: "0px" }}>I'm Tasnim Shahriar Akash</h2>
        </div>
      </div>
      <div className="home-box2">
        <div className="df">
          <Image
            width={120}
            src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png"
          />
          <div style={{ width: "50px" }} />
          <Image
            width={150}
            src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-team-working-on-website-launch-5691625-4759507.png"
          />
          <div style={{ width: "50px" }} />
          <Image
            width={150}
            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703462400&semt=ais"
          />
        </div>

        <div className="home-box2-1">
          <p>SERVICES </p>
          <div className="home-sliding-box-container">
            <div className={`home-box ${activeBox === 1 ? "active" : ""}`}>
              <div className="HomeSlid-box2">
                <img
                  className="HomeSlid-box2-img"
                  src="https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg"
                  alt=""
                />
                <p className="HomeSlid-box2-Text1">What I Do, For You!</p>
                <div style={{ margin: "20px", marginTop: "-25px" }}>
                  <p className="HomeSlid-box2-Text">
                    I help ambitious businesses like yours generate more profits
                    by building awareness, driving web traffic, connecting with
                    customers and growing overall sales.
                  </p>
                </div>
              </div>
              <div className="HomeSlid-box3" />
            </div>
            <div className={`home-box ${activeBox === 2 ? "active" : ""}`}>
            <div className="HomeSlid-box2">
                <img
                  className="HomeSlid-box2-img"
                  src="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b53d6186fc53_ABM%20College%20Web%20developer%20main.jpg"
                  alt=""
                />
                <p className="HomeSlid-box2-Text1">Text1</p>
                <div style={{ margin: "20px", marginTop: "-25px" }}>
                  <p className="HomeSlid-box2-Text">
                    Text2
                  </p>
                </div>
              </div>
              <div className="HomeSlid-box3" />
            </div>
            <div className={`home-box ${activeBox === 3 ? "active" : ""}`}>
            <div className="HomeSlid-box2">
                <img
                  className="HomeSlid-box2-img"
                  src="https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62efdf9840dca733692cdd48_web%20dev%20basics.jpg"
                  alt=""
                />
                <p className="HomeSlid-box2-Text1">Text1</p>
                <div style={{ margin: "20px", marginTop: "-25px" }}>
                  <p className="HomeSlid-box2-Text">
                    Text2
                    </p>
                </div>
              </div>
              <div className="HomeSlid-box3" />
            </div>
            <div className="home-buttons">
              <button
                onClick={() => handleBoxChange(1)}
                className={
                  activeBox === 1
                    ? "home-active-button"
                    : "home-deactive-button"
                }
              ></button>
              <button
                onClick={() => handleBoxChange(2)}
                className={
                  activeBox === 2
                    ? "home-active-button"
                    : "home-deactive-button"
                }
              ></button>
              <button
                onClick={() => handleBoxChange(3)}
                className={
                  activeBox === 3
                    ? "home-active-button"
                    : "home-deactive-button"
                }
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
