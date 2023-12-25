import React, { useState, useEffect } from "react";
import "./Footer.css";

import { Button } from "antd";
import { Link } from "react-router-dom";

import {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Portfolio from "../Screen/Portfolio";

export default function Footer() {
  const [showBox, setShowBox] = useState(true);

  const handleClose = () => {
    setShowBox(false);
  };
  const handleOpen = () => {
    setShowBox(true);
  };

  const handleReload = () => {
    setShowBox(true);
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleReload);

    return () => {
      window.removeEventListener("beforeunload", handleReload);
    };
  }, []);
  return (
    <div className="footerBody">
      {showBox && (
        <div className="footer-showBox">
          <div style={{ display: "flex" }}>
            <div style={{ flex:'5' }}></div>
            <div style={{ flex:'1' }}>
              <Button
              style={{backgroundColor:'transparent'}}
                onClick={handleClose}
                shape="circle"
                icon={<CloseOutlined />}
                danger
              />
            </div>
          </div>
          <div style={{ marginTop:'10px' }}>
            <Portfolio />
          </div>
        </div>
      )}
      <div className="footerBox1">Logo</div>
      <div className="footerBox2">
        <Link className="footerBox2-Link" to="/">
          Home
        </Link>
        <Link className="footerBox2-Link" to="/About-Us">
          About Us
        </Link>
        <Link className="footerBox2-Link" to="/Contact">
          Contact
        </Link>

        <Button
          className="footerBox2-Button"
          onClick={handleOpen}
          type="text"
          block
        >
          Portfolio
        </Button>
        <Button className="footerBox2-Button" type="text" block>
          Download CV
        </Button>
      </div>
      <div className="footerBox3">
        <a
          style={{ textDecoration: "none" }}
          href="https://www.google.com/"
          target="_blank"
        >
          <TwitterOutlined className="footerIcon" />
        </a>
        <a
          style={{ textDecoration: "none" }}
          href="https://www.google.com/"
          target="_blank"
        >
          <FacebookOutlined className="footerIcon" />
        </a>
        <a
          style={{ textDecoration: "none" }}
          href="https://www.google.com/"
          target="_blank"
        >
          <LinkedinOutlined className="footerIcon" />
        </a>
      </div>
    </div>
  );
}
