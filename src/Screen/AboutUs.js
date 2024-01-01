import React, { useState } from "react";
import "../Style/AboutUs.css";

import { FastBackwardOutlined } from '@ant-design/icons';


export default function AboutUs() {
  const [page, setPage] = useState(1);

  return (
    <div className="aboutBody">
      <button
        onClick={() => {
          setPage(1);
        }}
      >
        <FastBackwardOutlined />
      </button>
      <button
        onClick={() => {
          setPage(2);
        }}
      >
        button-2
      </button>
      <button
        onClick={() => {
          setPage(3);
        }}
      >
        button-3
      </button>
      <button
        onClick={() => {
          setPage(4);
        }}
      >
        button-4
      </button>

      <div>
        {page === 1 ? (
          <div className="aboutDiv">
            <h1>hbhbhb</h1>
          </div>
        ) : page === 2 ? (
          <div className="aboutDiv">akashhb 2</div>
        ) : page === 3 ? (
          <div className="aboutDiv">akashhb 3</div>
        ) : page === 4 ? (
          <div className="aboutDiv">akashhb 4</div>
        ) : (
          <h1>error</h1>
        )}
      </div>
    </div>
  );
}
