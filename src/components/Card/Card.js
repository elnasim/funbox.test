import React, { useState } from "react";
import "./Card.scss";

export default function Card({ data }) {
  const [isSelected, setIsSelected] = useState(false);
  const [dontHover, setDontHover] = useState(false);

  const selectHandler = () => {
    setIsSelected(!isSelected);
  };

  const selectHandlerCard = () => {
    selectHandler();
    setDontHover(true);
  };

  let cardClasses = ["card"];

  if (!data.available) {
    cardClasses.push("disabled");
  }

  if (isSelected) {
    cardClasses.push("selected");
  }

  if (dontHover) {
    cardClasses.push("donthover");
  }

  return (
    <div className="card-col">
      <a
        href="#"
        className={cardClasses.join(" ")}
        onClick={selectHandlerCard}
        onMouseLeave={() => setDontHover(false)}
      >
        <div className="card__inner">
          <div className="card__toptext">{data.topline.default}</div>
          <div className="card__title">{data.title}</div>
          <div className="card__subtitle">{data.subtitle}</div>
          {data.subtext.map((item) => (
            <div className="card__thin-text" key={item}>
              {item}
            </div>
          ))}
          <div className="round-card card__round">
            <div className="round-card__num">{data.weight}</div>
            <div className="round-card__text">кг</div>
          </div>
        </div>
      </a>

      {!data.available && (
        <div className="card-botline card-botline--notavailible">{data.cardBottomText.notAvalible}</div>
      )}

      {data.available && isSelected && (
        <div className="card-botline">{data.cardBottomText.selected}</div>
      )}

      {data.available && !isSelected && (
        <div className="card-botline">
          Чего сидишь? Порадуй котэ,{" "}
          <span  onClick={selectHandler}>
            купи
          </span>
        </div>
      )}
    </div>
  );
}
