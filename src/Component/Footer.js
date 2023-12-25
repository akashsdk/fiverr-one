import React, { useState } from "react";
import "./Footer.css";

import { Button, Drawer } from "antd";
import { Link } from "react-router-dom";

import {
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Portfolio from "../Screen/Portfolio";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="footerBody">
      <Drawer
        placement="bottom"
        closable={false}
        onClose={onClose}
        open={open}
        key="bottom"
        height={"95vh"}
        style={{
          width: "60%",
          marginLeft: "20%",
        }}
      >
        <div>
          <div className="footer-CloseBox">
            <Button
              style={{
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={onClose}
              shape="circle"
              icon={<CloseOutlined style={{ fontSize: "25px" }} />}
              danger
            />
          </div>
            <Portfolio />
        </div>
      </Drawer>
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
          onClick={showDrawer}
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
