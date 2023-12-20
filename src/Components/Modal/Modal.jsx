import React from "react";
import "./Modal.css";
import { IoHomeSharp } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import wordCloud from "../../Images/wc.png";
import graph from "../../Images/graph.jpg";
import "../../Pages/SearchPage/SearchPage.css";

export const Modal = ({ data }) => {
  const handleExit = () => {
    document.querySelectorAll(".modal").forEach(function (el) {
      el.style.display = "none";
    });
    document.body.style.overflow = "unset";
  };
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <div className="modal-title">
            <span onClick={handleExit}>
              <RxCross2 />
            </span>
            <span className="modal-city">{data.university}</span>
          </div>
          <div className="modal-line" />
          <div className="modal-inside">
            <div className="modal-inside-name-image">
              <div className="modal-inside-image">
                <img src={data.image} alt="ax" />
              </div>
              <span>{data.name}</span>
            </div>

            <div className="modal-inside-job">{data.job}</div>
            <div className="modal-inside-info">
              <div className="modal-inside-info-item">
                <span>
                  <IoHomeSharp />
                </span>
                <span>{data.city}</span>
              </div>
              <div className="modal-inside-info-item">
                <span>
                  <MdAlternateEmail />
                </span>
                <span>
                  <a href="mailto:{webmaster@example.com}">{data.email}</a>
                </span>
              </div>
              <div className="modal-inside-info-item">
                <span>
                  <FaPhoneFlip />
                </span>
                <span className="modal-phone">{data.phone}</span>
              </div>
            </div>
          </div>
          <div className="modal-fotter">
            <div className="modal-fotter-2">لینک‌ها</div>
            <a href="Google.com">{data.site}</a>
          </div>
          <div className="modal-datas">
            <div className="modal-word-cloud">
              <span>Word Cloud</span>
              <img src={wordCloud} alt="worldcloud" />
            </div>
            <div className="modal-graph">
              <span>Graph</span>
              <img src={graph} alt="graph" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//  university: "",
//  name: props.name,
//  image: ax,
//  job: "AI Professor",
//  city: "abs",
//  email: "nnd1380@gmail",
//  phone: "09109207102",
//  site: "www.ccc.com",
