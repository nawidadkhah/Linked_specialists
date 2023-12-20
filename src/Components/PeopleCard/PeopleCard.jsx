import React from "react";
import ax from '../../Images/about.jpg'
import "./PeopleCard.css";
import '../../Pages/SearchPage/SearchPage.css'

export const PeopleCard = (props) => {

    const handleClick =()=>{

        document.querySelectorAll(".modal").forEach(function (el) {
          el.style.display = "flex";
        });
         document.body.style.overflow = "hidden";

       props.setData({
         university: "شهید بهشتی",
         name: props.name,
         image: ax,
         job: "استاد دانشگاه",
         city: "آلبرتا، کانادا",
         email: "nnd1380@gmail",
         phone: "09109207102",
         site: "www.ccc.com",
       });
    }

  return (
    <div className="peopleCard">
      <div className="peopleCard-image">
        <img src={ax} alt="" />
      </div>
      <div className="peopleCard-name">{props.name}</div>
      <div className="peopleCard-items">
        <ul className="peopleCard-list">
          <i className="people-list-item">مهارت در حوزه:</i>
          <i className="people-list-item">هوش مصنوعی</i>
          <i className="people-list-item">بینایی کامپیوتر</i>
          <i className="people-list-item">یادگیری ماشین</i>
        </ul>
      </div>
      <div className="peopleCard-button">
        {/* <Link to="/"> */}
            <button onClick={handleClick}>دیدن پروفایل</button>
        {/* </Link> */}
      </div>
    </div>
  );
};
