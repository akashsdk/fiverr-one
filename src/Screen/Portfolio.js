import React from "react";
import "../Style/Portfolio.css";
import { DownloadOutlined } from '@ant-design/icons';
import { Button,} from 'antd';


export default function Portfolio() {
  return (
    <div className="portfolioBody">
      <div className="portfolio-Box1">
        <div className="portfolio-Left">
          <h3>Portfolio</h3>
        </div>
        <div className="portfolio-Right">
        <Button className="portfolio-RightButton" type="primary" shape="round" icon={<DownloadOutlined />}>
            Download CV
          </Button>
        </div>
      </div>
      <div className="portfolio-Box1-Line" />

      <div>bbb</div>
    </div>
  );
}
