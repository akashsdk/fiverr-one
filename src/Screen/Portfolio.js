import React from "react";
import "../Style/Portfolio.css";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

import Line from '../Img/—Pngtree—blue wavy shapes curved lines_3550280.png';

export default function Portfolio() {
  return (
    <div className="portfolioBody">
      <div className="portfolio-Box1">
        <div className="portfolio-Left">
          <h3>Portfolio</h3>
          <div className="portfolio-Left-Round1">
            <div className="portfolio-Left-Round2">
              <div className="portfolio-Left-Round3">
                <div className="portfolio-Left-Round4"> img</div>
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
          <div style={{display:'flex', marginTop:'-10px'}}>
            <img className="portfolio-RightImgLine" src={Line} alt=""/>
            <img className="portfolio-RightImgLine2" src={Line} alt=""/>
          </div>

        </div>
      </div>
      <div className="portfolio-Box1-Line" />

      <div>bbb</div>
    </div>
  );
}
