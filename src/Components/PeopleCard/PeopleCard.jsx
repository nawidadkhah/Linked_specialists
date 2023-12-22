import React from "react";
import "./PeopleCard.css";
import '../../Pages/SearchPage/SearchPage.css'

export const PeopleCard = (props) => {

    const handleClick =()=>{

        document.querySelectorAll(".modal").forEach(function (el) {
          el.style.display = "flex";
        });
         document.body.style.overflow = "hidden";

       props.setData({
         university: props.university,
         name: props.name,
         image: props.image,
         job: props.job,
         city: props.city,
         email: props.email,
         phone: props.phone,
         site: props.site,
         rate:props.rate
       });
    }

  return (
    <div className="peopleCard">
      <div className="peopleCard-image">
        <img onClick={handleClick} src={props.image} alt="" />
      </div>
      <div className="star" rate={props.rate}></div>

      <div className="peopleCard-name">{props.name}</div>
      <div className="peopleCard-items">
        <ul className="peopleCard-list">
          <i className="people-list-item">مهارت در حوزه:</i>
          <i className="people-list-item">{props.title1}</i>
          <i className="people-list-item">{props.title2}</i>
          <i className="people-list-item">{props.title3}</i>
        </ul>
      </div>
      <div className="peopleCard-button">
        <button onClick={handleClick}>دیدن پروفایل</button>
      </div>
    </div>
  );
};
