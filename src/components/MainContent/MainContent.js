import React from "react";
import "./MainContent.scss";
import Card from "../Card/Card";

export default function MainContent() {
  return (
    <div className="main-content">
      <div className="container">
        <div className="title">Ты сегодня покормил кота?</div>

        <div className="cards row">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
