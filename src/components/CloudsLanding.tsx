"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CloudsLanding: React.FC = () => {
  const router = useRouter();
  const happy: Array<string> = [
    "clubs",
    "food",
    "spring 24",
    "gym",
    "rants",
    "books",
    "random",
  ];
  const sad: Array<string> = [
    "school",
    "insecurities",
    "2am thoughts",
    "cs",
    "eggert",
    "leetcode",
  ];

  const [itemsList, setItemsList] = useState(happy);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkTheme((prevTheme) => {
      if (prevTheme == true) {
        setItemsList(happy);
      } else {
        setItemsList(sad);
      }
      return !prevTheme;
    });
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
