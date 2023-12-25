import React from "react";
import "./Footer.css";

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
        Home
        About Us
        Contact
        Portfolio
      Download CV
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
