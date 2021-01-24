import React, { useState } from "react";
import "./header.less";
import gridViewImg from "../../../src/images/grid-view-icon.svg";
import listViewImg from "../../../src/images/list-view-icon.svg";
import menuImg from "../../../src/images/menu.svg";
import logoImg from "../../../src/images/logo.svg";

const Header = ({ onViewChanged }) => {
  const [state, setstate] = useState(false);

  const changeView = (action) => {
    setstate(!state);
    onViewChanged(action);
  };

  return (
    <nav className="top-nav">
      <div className="top-nav-menu">
        <div className="responsive-header">
          <svg
            className="waves-arc"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#e7edf6"
              fillOpacity="1"
              d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,101.3C672,128,768,160,864,149.3C960,139,1056,85,1152,53.3C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div>
            <img src={logoImg} alt="logoImg" />
          </div>
          <div>
            <img src={menuImg} alt="menuImg" />
          </div>
        </div>
        <div className="left-nav">
          <span className="header-text">Discover great places to visit</span>
        </div>
        <div className="right-nav">
          <div className="grid-sec">
            <div
              className={`oval ${state ? "white" : ""}`}
              onClick={() => changeView(false)}
            >
              <img src={gridViewImg} alt="gridImg" />
            </div>
            <div
              className={`oval ${state ? "" : "white"}`}
              onClick={() => changeView(true)}
            >
              <img src={listViewImg} alt="listImg" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
