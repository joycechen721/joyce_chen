"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const CloudsLanding: React.FC = () => {
  const router = useRouter();
  const [category, setCategory] = useState("red");
  let itemsList: Array<string> = [
    "school",
    "cats",
    "music",
    "shower thoughts",
    "food",
    "life",
    "random",
  ];

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    itemsList = [
      "meow",
      "meow",
      "music",
      "shower thoughts",
      "food",
      "life",
      "random",
    ];
  };

  return (
    <div className={`frame cloudlayout ${isDarkTheme ? "dark-theme" : ""}`}>
      <div className="clouds-heading">
        <h2>thoughts.</h2>
        ☀️
        <label
          className="switch"
          onChange={() => {
            handleThemeToggle();
          }}
        >
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
        🌛
      </div>
      <div className="separator"></div>
      <div id="blog">
        <div className="clouds">
          {itemsList.map((item) => (
            <div
              key={item}
              className="cloud"
              onClick={() => {
                router.push(`/thoughts/${item}`);
              }}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CloudsLanding;
