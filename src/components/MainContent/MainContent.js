import React, { useState } from "react";
import "./MainContent.scss";
import Card from "../Card/Card";

export default function MainContent() {
  const [data, setData] = useState([
    {
      id: 1,
      topline: "Сказочное заморское яство",
      title: "Нямушка",
      subtitle: "с фуа-гра",
      subtext: ["10 порций", "мышь в подарок"],
      weight: "0,5",
      cardBottomText: {
        default: 'Чего сидишь? Порадуй котэ, <a href="#">купи</a>',
        selected: "Печень утки разварная с артишоками.",
        notAvalible: "Печалька, с фуа-гра закончился.",
      },
      available: true,
    },
    {
      id: 2,
      topline: "Сказочное заморское яство",
      title: "Нямушка",
      subtitle: "с рыбой",
      subtext: ["40 порций", "2 мыши в подарок"],
      weight: 2,
      cardBottomText: {
        default: 'Чего сидишь? Порадуй котэ, <a href="#">купи</a>',
        selected: "Печень утки разварная с артишоками.",
        notAvalible: "Печалька, с фуа-гра закончился.",
      },
      available: true,
    },
    {
      id: 3,
      topline: "Сказочное заморское яство",
      title: "Нямушка",
      subtitle: "с курой",
      subtext: ["100 порций", "5 мышей в подарок", "заказчик доволен"],
      weight: 5,
      cardBottomText: {
        default: 'Чего сидишь? Порадуй котэ, <a href="#">купи</a>',
        selected: "Печень утки разварная с артишоками.",
        notAvalible: "Печалька, с фуа-гра закончился.",
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
