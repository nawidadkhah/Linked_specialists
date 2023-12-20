import React from "react";
import "./PeopleCard.css";

export const PeopleCard = (props) => {
  return (
    <div className="peopleCard">
      <div className="peopleCard-image">ax</div>
      <div className="peopleCard-name">{props.name}</div>
      <div className="peopleCard-items">
        <ul className="peopleCard-list">
          <i className="people-list-item">مهارت در حوزه:</i>
          <i className="people-list-item">هوش مصنوعی</i>
          <i className="people-list-item">ابیای</i>
          <i className="people-list-item">یببب</i>
        </ul>
      </div>
      <div className="peopleCard-button">
        <button>ادامه</button>
      </div>
    </div>
  );
};
