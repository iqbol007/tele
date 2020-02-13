import React from "react";

export default function Tariff({ tele }) {
    const mon = '/Месясц';
    const rub = '₽';
  return (
    <div className="item">
      <div className="hit">{tele.isHit && <div className="hit-icon"></div>} </div>
      <div className="t-name">{tele.name}</div>
  <div className="rub">{rub}</div>
  <div className="mon">{mon}</div>
      <div className="t-price">{tele.price}</div>
      <small className="text">
        <b>безлимит</b> на Теле2 в России
      </small>
      <div className="t-time">
        <b>{tele.minLim}</b>мин.
      </div>
      <small className="descript">{tele.description}</small>
      <div className="tr-size">
        <b>{tele.trafficSize}</b>ГБ интернета
      </div>
      <div className="img-icons"></div>
      <button className="by">Купить</button>
        
    </div>
  );
}
