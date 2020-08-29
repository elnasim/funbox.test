import React, { useState } from "react";
import "./Card.scss";

export default function Card({ data }) {
  const [isSelected, setIsSelected] = useState(false);

  const selectHandler = (e) => {
    e.preventDefault();
    if (!data.available) return;
    setIsSelected(!isSelected);
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
        <div className="card-botline">{data.cardBottomText.notAvalible}</div>
      )}

      {data.available && isSelected && (
        <div className="card-botline">{data.cardBottomText.selected}</div>
      )}

      {data.available && !isSelected && (
        <div className="card-botline">
          Чего сидишь? Порадуй котэ,{" "}
          <a href="#" onClick={selectHandler}>
            купи
          </a>
        </div>
      )}
    </div>
  );
}
