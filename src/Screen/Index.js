import React, { useState } from "react";
import "../Style/Index.css";

import { Button, Input, Image } from "antd";
const { Search } = Input;

export default function Index() {
  const [page, setPage] = useState(0);
  return (
    <div>
      <div class="header">
        <a href="#default" class="logo">
          CompanyLogo
        </a>
        <div class="header-right">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
      <div style={{ margin: "30px" }}>
        <Button
          onClick={() => {
            setPage(0);
          }}
          type="primary"
        >
          Primary 1
        </Button>
        <Button
          onClick={() => {
            setPage(1);
          }}
          style={{ marginLeft: "30px" }}
          type="primary"
        >
          Primary 2
        </Button>
        <Button
          onClick={() => {
            setPage(2);
          }}
          style={{ marginLeft: "30px" }}
          type="primary"
        >
          Primary 3
        </Button>
      </div>

      <div
        style={{
          height: "500px",
          width: "40%",
          border: "1px dashed red",
          marginLeft: "30%",
        }}
      >
        {page === 0 ? (
          <h1>page 1</h1>
        ) : page === 1 ? (
          <h1>page 2</h1>
        ) : page === 2 ? (
          <h1>page 3</h1>
        ) : (
          <h1>error</h1>
        )}
      </div>

      {/* HomePage */}
      <div className="InHome-Body">
        <div className="InHome-Left">
          <p className="InHome-P1">WE ARE BRANDING AGENCY</p>
          <p className="InHome-P2">Love Design</p>
          <div style={{ display: "flex" }}>
            <p className="InHome-P3">with</p>{" "}
            <p className="InHome-P4">Your Soul</p>
          </div>
          <p className="InHome-P5">
            {" "}
            Loream ipsum 5 fghjiuhgyh vhjdfbg vuyfhiudfbdfh jvbdiuyfh viudf
            kjnfbviu hushiufhf vkjfb uyifh
          </p>
          <Search
            className="InHome-leftSearchButton"
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={""}
          />
        </div>
        <div className="InHome-Right">
          <div>
            <Image
              width={100}
              style={{ height: "300px" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div>

          <div style={{marginLeft:'20px', marginTop:'150px'}}>
            <Image
              width={100}
              style={{ height: "300px" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div>

          <div style={{marginLeft:'20px'}}>
            <Image
              width={100}
              style={{ height: "300px", }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
