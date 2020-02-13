import React from "react";
import Tariff from "./Tariff";

export default function TariffList() {
  let nextId = 1;
  const tariffs = [
    {
      id: nextId++,
      name: "Мой онлайн+",
      price: 700,
      description: "на остальные номера в Росиии",
      unlim: true,
      isHit: false,
      hitImg:'https://msk.tele2.ru/api/media/asset?mediaId=m1310027',
      minLim: 800,
      trafficSize: 30,
      socialUnlim: true,
      socialImgUrl:'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
      canTune: true,
      imgBack:'./imgback/1.png'
    },
    {
      id: nextId++,
      name: "Везде онлайн",
      price: 500,
      description: "на остальные номера в Росиии",
      unlim: true,
      isHit: true,
      hitImg:'https://msk.tele2.ru/api/media/asset?mediaId=m1310027',
      minLim:500,
      trafficSize: 40,
      socialUnlim: true,
      socialImgUrl:'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
      canTune: false,
      imgBack:'./imgback/2.png'
    },
    {
      id: nextId++,
      name: "Мой онлайн",
      price: 400,
      description: "на другие мобильные номера домашнего региона",
      unlim: true,
      isHit: false,
      hitImg:'https://msk.tele2.ru/api/media/asset?mediaId=m1310027',
      minLim:500,
      trafficSize: 15,
      socialUnlim: true,
      socialImgUrl:'https://msk.tele2.ru/api/media/asset?mediaId=m1990041',
      canTune: true,
      imgBack:'./imgback/3.png'
    }
  ];
  return <div className="tariff">{tariffs.map(o=><Tariff  key={o.id} tele={o}/>)}</div>;
}
