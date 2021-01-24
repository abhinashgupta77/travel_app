import React from "react";
import "./sidebar.less";
import logoutImg from "../../../src/images/log-out.svg";
import homeImg from "../../../src/images/home.svg";
import logoImg from "../../../src/images/logo.svg";
import briefcaseImg from "../../../src/images/briefcase.svg";
import compass from "../../../src/images/compass.svg";
import bell from "../../../src/images/bell.svg";
import gear from "../../../src/images/gear.svg";

const Sidebar = () => {
  return (
    <div id="sideNav">
      <div className="side-nav">
        <div className="side-wrap">
          <div className="wrap-top">
            <div className="wrap-cont">
              <div className="side-nav-card">
                <img src={logoImg} alt="logo-Img" />
              </div>
              <div className="side-nav-card">
                <div className="home">
                  <img src={homeImg} alt="home-Img" />
                </div>
              </div>
              <div className="side-nav-card">
                <img src={briefcaseImg} alt="briefcase-Img" />
              </div>
              <div className="side-nav-card">
                <img src={compass} alt="compass-Img" />
              </div>
              <div className="side-nav-card">
                <div className="notification-container">
                  <img src={bell} alt="bell-Img" />
                </div>
              </div>
              <div className="side-nav-card">
                <img src={gear} alt="gear-Img" />
              </div>
            </div>
          </div>
          <div className="wrap-bottom">
            <div className="side-nav-card">
              <img src={logoutImg} alt="logout-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
