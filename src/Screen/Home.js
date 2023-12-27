import React, { useState, useEffect } from "react";
import "../Style/Home.css";

import { Image } from "antd";

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
          <p>What I Do, For You!</p>
          <div className="sliding-box-container">
            <div className={`box ${activeBox === 1 ? "active" : ""}`}>
              Box 1
            </div>
            <div className={`box ${activeBox === 2 ? "active" : ""}`}>
              Box 2
            </div>
            <div className={`box ${activeBox === 3 ? "active" : ""}`}>
              Box 3
            </div>
            <div className="buttons">
              <button
                onClick={() => handleBoxChange(1)}
                className={activeBox === 1 ? "active-button" : ""}
              >
                Button 1
              </button>
              <button
                onClick={() => handleBoxChange(2)}
                className={activeBox === 2 ? "active-button" : ""}
              >
                Button 2
              </button>
              <button
                onClick={() => handleBoxChange(3)}
                className={activeBox === 3 ? "active-button" : ""}
              >
                Button 3
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
