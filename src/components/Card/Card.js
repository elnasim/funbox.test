import React from "react";
import "./Card.scss";

export default function Card() {
  return (
    <div className="card-col">
      <div className="card">
        <div className="card__inner">
          <div className="card__toptext">Сказочное заморское яство</div>
          <div className="card__title">Нямушка</div>
          <div className="card__subtitle">с фуа-гра</div>
          <div className="card__thin-text">10 порций</div>
          <div className="card__thin-text">мышь в подарок</div>
          <div className="round-card card__round">
            <div className="round-card__num">2</div>
            <div className="round-card__text">кг</div>
          </div>
        </div>
      </div>

      <div className="card-botline">
        Чего сидишь? Порадуй котэ, <a href="#">купи</a>.
      </div>
    </div>
  );
}
