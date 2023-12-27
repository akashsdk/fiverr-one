import React from "react";
import "./PortfolioCart.css";
import { Link } from "react-router-dom";

import { Button } from "antd";

export default function PortfolioCart(props) {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className="PorCartBody">
      <img className="PorCartLogo" src={props.img} alt="" />
      <p className="PorCartText-1">{props.fastText}</p>
      <p className="PorCartText-2">{props.scendText}</p>
      <Button
        onClick={handleReload}
        className="PorCartButton"
        type="primary"
        shape="round"
      >
        <Link to="/About-Us">Learn More</Link>
      </Button>
    </div>
  );
}
