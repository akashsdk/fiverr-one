import React from "react";
import "./Footer.css";

import { Button } from "antd";
import { Link } from "react-router-dom";

import {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="footerBody">
      <div className="footerBox1">Logo</div>
      <div className="footerBox2">
      <Link className="footerBox2-Link" to="/" >Home</Link>
      <Link className="footerBox2-Link" to="/About-Us" >About Us</Link>
      <Link className="footerBox2-Link" to="/Contact" >Contact</Link>
          
        <Button className="footerBox2-Button" type="text" block>
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
