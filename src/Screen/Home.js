import React, { useState } from "react";
import "../Style/Home.css";

import { Image } from "antd";

export default function Home() {
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

        </div>
      </div>
    </div>
  );
}
