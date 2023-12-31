import React from "react";
import "../Style/Portfolio.css";

import { Button, Image } from "antd";

import Line from "../Img/—Pngtree—blue wavy shapes curved lines_3550280.png";
import OnTime from "../Img/on-time.png";
import Review from "../Img/review.png";
import work from "../Img/workplace.png";
import ProfileImg from "../Img/Profile.jpg";

import {
  DownloadOutlined,
  TwitterOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import PortfolioCart from "../Cart/PortfolioCart";

export default function Portfolio() {
  return (
    <div className="portfolioBody">
      {/* Top Box */}
      <div className="portfolio-Box1">
        <div className="portfolio-Left">
          <h3>Portfolio</h3>
          <div className="portfolio-Left-Round1">
            <div className="portfolio-Left-Round2">
              <div className="portfolio-Left-Round3">
                <div className="portfolio-Left-Round4">
                  <Image
                    width={200}
                    style={{
                      borderRadius: "100px",
                    }}
                    src={ProfileImg}
                  />
                </div>
              </div>
            </div>
          </div>
          <p>BE CREATIVE </p>
        </div>
        <div className="portfolio-Right">
          <Button
            className="portfolio-RightButton"
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
          >
            Download CV
          </Button>
          <div className="portfolio-RightTextDiv">
            <div style={{ display: "flex" }}>
              <p className="portfolio-RightText1">My</p>
              <p className="portfolio-RightText2">Work</p>
            </div>
            <p className="portfolio-RightText3">Web & visual Designer</p>
          </div>
          <div style={{ display: "flex", marginTop: "-10px" }}>
            <img className="portfolio-RightImgLine" src={Line} alt="" />
            <img className="portfolio-RightImgLine2" src={Line} alt="" />
          </div>
          <div className="portfolio-RightDownBox">
            <p className="portfolio-RightDownText">follow me:</p>
            <div className="portfolio-RightDownLine" />
            <a
              style={{ textDecoration: "none" }}
              href="https://www.google.com/"
              target="_blank"
            >
              <TwitterOutlined className="portfolio-RightDownIcon" />
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.google.com/"
              target="_blank"
            >
              <FacebookOutlined className="portfolio-RightDownIcon" />
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.google.com/"
              target="_blank"
            >
              <LinkedinOutlined className="portfolio-RightDownIcon" />
            </a>
          </div>
        </div>
      </div>
      <div className="portfolio-Box1-Line" />
      {/* Down Box */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
          marginBottom:'15px',
        }}
      >
        <PortfolioCart
          img={OnTime}
          fastText="On Time"
          scendText="client Satisfaction client Satisfactionclient Satisfaction..."
        />
        <PortfolioCart
          img={work}
          fastText="Clean Work"
          scendText="client Satisfaction client Satisfactionclient Satisfaction..."
        />
        <PortfolioCart
          img={Review}
          fastText="Client Satisfaction"
          scendText="client Satisfaction client Satisfactionclient Satisfaction..."
        />
      </div>
      <footer className="footer">
          
          <Button
            type="link"
            href="https://my-portfolio-d43ec.web.app/"
            target="_blank"
          >
            <p className="footer-p">
            &copy; {new Date().getFullYear()} Tasnim Shahriar Akash | All rights
            reserved | Feedback
            
          </p>
          </Button>
      </footer>
    </div>
  );
}
