import React, { useState } from "react";
import "./MainContent.scss";
import Card from "../Card/Card";

export default function MainContent() {
  const [data] = useState([
    {
      id: 1,
      topline: {
        default: "Сказочное заморское яство",
        selectedHover: "Котэ не одобряет?",
      },
      title: "Нямушка",
      subtitle: "с фуа-гра",
      subtext: ["10 порций", "мышь в подарок"],
      weight: "0,5",
      cardBottomText: {
        selected: "Печень утки разварная с артишоками.",
        notAvalible: "Печалька, с фуа-гра закончился.",
      },
      available: true,
    },
    {
      id: 2,
      topline: {
        default: "Сказочное заморское яство",
        selectedHover: "Котэ не одобряет?",
      },
      title: "Нямушка",
      subtitle: "с рыбой",
      subtext: ["40 порций", "2 мыши в подарок"],
      weight: 2,
      cardBottomText: {
        selected: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        notAvalible: "Печалька, с рыбой закончился.",
      },
      available: true,
    },
    {
      id: 3,
      topline: {
        default: "Сказочное заморское яство",
        selectedHover: "Котэ не одобряет?",
      },
      title: "Нямушка",
      subtitle: "с курой",
      subtext: ["100 порций", "5 мышей в подарок", "заказчик доволен"],
      weight: 5,
      cardBottomText: {
        selected: "Филе из цыплят с трюфелями в бульоне.",
        notAvalible: "Печалька, с курой закончился.",
      },
      available: false,
    },
  ]);

  return (
    <div className="main-content">
      <div className="container">
        <div className="title">Ты сегодня покормил кота?</div>

        <div className="cards row">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
