import React, { useState } from "react";
import "./main.less";
import Card from "../Card/Card";
import Selectedcontainer from "../SelectedContainer/Selectedcontainer";
import placesData from "../../../src/placesJSON/places.json";

const Main = ({ changeView }) => {
  const [totalCount, setTotalCount] = useState(0);
  const [showSelected, setShowSelected] = useState(false);
  const itemsCount = (count) => {
    if (count) {
      setShowSelected(true);
      setTotalCount(totalCount + 1);
    } else {
      setTotalCount(totalCount - 1);
      if (totalCount === 0) {
        setShowSelected(false);
      }
    }
  };

  return (
    <main className="main-container">
      <div className="scroll-area">
        <div className="simple-scroll-content">
          <div className="root-scrollable__content">
            <div className="root-scrollable__wrapper">
              <div className="full-height-main">
                <div
                  className={`card-main-container ${
                    changeView ? "list-view-grid-main" : ""
                  }`}
                >
                  {placesData.map((place, index) => (
                    <Card
                      key={index}
                      title={place.title}
                      imageUrl={place.imageUrl}
                      places={place.places}
                      body={place.body}
                      onSelect={itemsCount}
                      changeView={changeView}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showSelected && <Selectedcontainer count={totalCount} />}
    </main>
  );
};

export default Main;
