import React, { useEffect, useState } from "react";
import "./card.less";
import messageImg from "../../../src/images/message-square.svg";
import heartImg from "../../../src/images/heart.svg";

const Card = ({ title, imageUrl, places, body, onSelect, changeView }) => {
  const [select, setSelect] = useState(false);
  const [count, setCount] = useState(0);
  const selectedCard = () => {
    setSelect(!select);
    if (!select) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    onSelect(count);
  }, [count]);

  return (
    <div className={`card-content-main ${changeView ? "list-view-grid" : ""}`}>
      <div className={`card-container ${select ? "checked" : ""}`}>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div
            className={`circle-container ${select ? "checked" : ""}`}
            onClick={() => selectedCard()}
          ></div>
        </div>
        <div className="place-container">
          {places.map((place) => (
            <span key={place}>{place}</span>
          ))}
        </div>
        <h3 className={`${select ? "checked" : ""}`}>{title}</h3>
        <div className={`body-conatiner ${select ? "checked" : ""}`}>
          {body}
        </div>
        <div className="like-comment-container">
          <img src={messageImg} alt="img" />
          <img src={heartImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Card;
