import React, { useState, useEffect } from "react";
import "../Style/Home.css";

import { Image, Button, Radio, Drawer, Input, Space } from "antd";

import { CloseOutlined } from "@ant-design/icons";

export default function Home() {
  const [activeBox, setActiveBox] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBox((prevBox) => (prevBox % 3) + 1);
    }, 7000); // Change box after every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleBoxChange = (boxNumber) => {
    setActiveBox(boxNumber);
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = useState(false);
  const showDrawer2 = () => {
    setOpen2(true);
  };
  const onClose2 = () => {
    setOpen2(false);
  };

  const [open3, setOpen3] = useState(false);
  const showDrawer3 = () => {
    setOpen3(true);
  };
  const onClose3 = () => {
    setOpen3(false);
  };

  return (
    <div className="homeBody">
      <div className="home-box1">
        <div className="home-box1-div">
          <h2>Hello There! </h2>
          <h2 style={{ marginTop: "0px" }}>I'm Tasnim Shahriar Akash</h2>
        </div>
        <div className="home-box1D">
          <p className="home-box2-1-MainText">BIOGRAPHY</p>
          <div className="home-box1D-line" />
          <p className="home-box1D-Text">
            Am a person who is positive about every aspect of life. There are
            many things I like to do, to see, and to experience. I like to read,
            I like to write; I like to think, I like to dream; I like to talk, I
            like to listen. I like to smell the wind coming from the ocean. I
            like to look at the clouds in the sky with a blank mind, I like to
            do thought experiment when I cannot sleep in the middle of the
            night.
          </p>
          <div>
            <Radio.Group size="large" style={{ marginTop: "25px" }}>
              <Radio.Button
                value="large"
                onClick={showDrawer}
                style={{
                  color: "rgb(116, 32, 250)",
                  borderColor: "rgb(116, 32, 250)",
                }}
              >
                Education
              </Radio.Button>
              <Radio.Button
                value="default"
                onClick={showDrawer2}
                style={{
                  color: "rgb(116, 32, 250)",
                  borderColor: "rgb(116, 32, 250)",
                }}
              >
                Skills
              </Radio.Button>
              <Radio.Button
                value="small"
                onClick={showDrawer3}
                style={{
                  color: "rgb(116, 32, 250)",
                  borderColor: "rgb(116, 32, 250)",
                }}
              >
                {" "}
                Experience
              </Radio.Button>
            </Radio.Group>
          </div>
          <Drawer
            placement="left"
            closable={false}
            onClose={onClose}
            open={open}
            key="left"
            width={"90%"}
            style={{
              marginLeft: "5%",
              borderRadius: "20px",
              height: "90vh",
              marginTop: "5vh",
            }}
          >
            <div>
              <Button
                style={{
                  backgroundColor: "transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                }}
                onClick={onClose}
                shape="circle"
                icon={<CloseOutlined style={{ fontSize: "20px" }} />}
                danger
              />
            </div>
            <p>Education</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>

          <Drawer
            placement="left"
            closable={false}
            onClose={onClose2}
            open={open2}
            key="left"
            width={"90%"}
            style={{
              marginLeft: "5%",
              borderRadius: "20px",
              height: "90vh",
              marginTop: "5vh",
            }}
          >
            <div>
              <Button
                style={{
                  backgroundColor: "transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                }}
                onClick={onClose2}
                shape="circle"
                icon={<CloseOutlined style={{ fontSize: "20px" }} />}
                danger
              />
            </div>
            <p>Skills</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>

          <Drawer
            placement="left"
            closable={false}
            onClose={onClose3}
            open={open3}
            key="left"
            width={"90%"}
            style={{
              marginLeft: "5%",
              borderRadius: "20px",
              height: "90vh",
              marginTop: "5vh",
            }}
          >
            <div>
              <Button
                style={{
                  backgroundColor: "transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "none",
                }}
                onClick={onClose3}
                shape="circle"
                icon={<CloseOutlined style={{ fontSize: "20px" }} />}
                danger
              />
            </div>
            <p>Experience</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>
      </div>
      <div className="home-box2">
        <div className="df">
          <Image
            width={100}
            src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png"
          />
          <div style={{ width: "50px" }} />
          <Image
            width={130}
            src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-team-working-on-website-launch-5691625-4759507.png"
          />
          <div style={{ width: "50px" }} />
          <Image
            width={130}
            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703462400&semt=ais"
          />
        </div>

        <div className="home-box2-1">
          <p className="home-box2-1-MainText">SERVICES </p>
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
                  <p className="HomeSlid-box2-Text">Text2</p>
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
                  <p className="HomeSlid-box2-Text">Text2</p>
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
          <div style={{marginTop:'40px'}}>
            <p className="home-box2-1-MainText">Want To Hire Me?</p>
            <p className="HomeSlid-box2-DText">If You Like My Work</p>
            <Space.Compact
              style={{
                width: "85%",
              }}
            >
              <Input placeholder="enter your email" size="large" />
              <Button type="primary" size="large" style={{backgroundColor:'rgb(116, 32, 250)'}}>
                Hire Me
              </Button>
            </Space.Compact>
          </div>
        </div>
      </div>
    </div>
  );
}
