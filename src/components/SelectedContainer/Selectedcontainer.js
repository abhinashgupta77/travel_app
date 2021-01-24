import React from "react";
import "./selectedcontainer.less";
import minusImg from "../../../src/images/minus.svg";
import groupImg from "../../../src/images/Group.svg";
import heartImg from "../../../src/images/heart.svg";

const Selectedcontainer = ({ count }) => {
  return (
    <div className="select-container">
      <div className="selected-wrapper">
        <div>
          <img src={minusImg} alt="minus-img" />
        </div>
        <div className="selected-items">{count + 1} item selected</div>
        <div>
          <img src={heartImg} alt="heart-img" />
        </div>
        <div>
          <img src={groupImg} alt="minus-img" />
        </div>
      </div>
    </div>
  );
};

export default Selectedcontainer;
