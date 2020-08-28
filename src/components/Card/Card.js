import React, { useState } from "react";
import "./Card.scss";

export default function Card({ data }) {
  const [isSelected, setIsSelected] = useState(false);

  const selectHandler = () => {
    setIsSelected(!isSelected);
  };

  const bottomText = () => {
    if (!data.available) {
      return {
        __html: data.cardBottomText.notAvalible,
      };
    }
    if (isSelected) {
      return {
        __html: data.cardBottomText.selected,
      };
    }
    if (!isSelected) {
      return {
        __html: data.cardBottomText.default,
      };
    }
  };

  let cardStyles = ["card"];

  if (!data.available) {
    cardStyles.push("disabled");
  }

  if (isSelected) {
    cardStyles.push("selected");
  }

  return (
    <div className="card-col">
      <a href="#" className={cardStyles.join(" ")} onClick={selectHandler}>
        <div className="card__inner">
          <div className="card__toptext">{data.topline}</div>
          <div className="card__title">{data.title}</div>
          <div className="card__subtitle">{data.subtitle}</div>
          {data.subtext.map((item) => (
            <div className="card__thin-text">{item}</div>
          ))}
          <div className="round-card card__round">
            <div className="round-card__num">{data.weight}</div>
            <div className="round-card__text">кг</div>
          </div>
        </div>
      </a>

      <div
        className="card-botline"
        dangerouslySetInnerHTML={bottomText()}
      ></div>
    </div>
  );
}
