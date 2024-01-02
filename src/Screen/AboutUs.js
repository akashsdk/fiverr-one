import React, { useState } from "react";
import "../Style/AboutUs.css";

import { FastBackwardOutlined } from "@ant-design/icons";

import Try from "../Cart/Try.js";

export default function AboutUs() {
  return (
    <div className="aboutBody">
      <Try
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXE9M474JrfUIlKlJrID-AOQKXwjehLD4qraImcYluQ&s"
        name="fahim 2"
        ok='name: ok'
        ardd="gchjkl jnbgvuj jhvytfgiuhk hkbugcybkj khb"
      />

      <Try
        img="https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2023_10/story_68798/assets/1.png?time=1696920077&size=*:900"
        name="fahim"
        ok='name: '
        ardd="gchjkl jnbgvuj jhvytfgiuhk hkbugcybkj khb"
      />
      <Try />
    </div>
  );
}
