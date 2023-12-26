import React from "react";
import "./PortfolioCart.css";

import logo from "../Img/on-time.png";
import { Button } from "antd";

export default function PortfolioCart(props) {
  return (
    <div className="PorCartBody">
      <img className="PorCartLogo" src={logo} alt="" />
      <p className="PorCartText-1">Client Satisfaction</p>
      <p className="PorCartText-2">
        client Satisfaction client Satisfactionclient Satisfaction
      </p>
      <Button className="PorCartButton" type="primary" shape="round">
        Learn More
      </Button>
    </div>
  );
}
