import React from "react";
import "./PortfolioCart.css";

import { Button } from "antd";


export default function PortfolioCart(props) {
  return (
    <div className="PorCartBody">
      <img className="PorCartLogo" src={props.img} alt="" />
      <p className="PorCartText-1">{props.fastText}</p>
      <p className="PorCartText-2">{props.scendText}</p>
      <Button className="PorCartButton" type="primary" shape="round">
        Learn More
      </Button>
    </div>
  );
}
