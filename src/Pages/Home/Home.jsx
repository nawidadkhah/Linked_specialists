import { React, useEffect, useState } from "react";
import { Card } from "../../Components/Card/Card";
import { Navbar } from "../../Components/Navbar/Navbar";
import About from "../../Images/about.jpg";
import { Count } from "../../Components/Count/Count";
import sherkat2 from "../../Images/Related-ins/لوگو-مشتریان_بیمه-ما.jpg";
import sherkat3 from "../../Images/Related-ins/لوگوی-مشتریان-پیش-فرض_موننکو-ایران.jpg";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { RiContactsFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import sherkat21 from "../../Gifs/solution-engineering-3.gif";

import "./Home.css";

export const Home = () => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [counterOn, setCounterOn] = useState(false);

  function toFarsiNumber(n) {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    console.log(n.toString().replace(/\d/g, (x) => farsiDigits[x]));
    return n.toString().replace(/\d/g, (x) => farsiDigits[x]);
  }

  const handleScroll = (direction) => {
    const container = document.getElementById("scroll-container");
    const scrollAmount = 200; // You can adjust the scroll amount

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
      setScrollLeft(container.scrollLeft);
    } else if (direction === "right") {
      container.scrollLeft += scrollAmount;
      setScrollLeft(container.scrollLeft);
    }
  };

  return (
    <div className="HomePage">
      <Navbar />
      <div className="about-page">
        <div className="about-page-title">
          <div className="about-page-title-titr">ساهمتا</div>
          <div className="about-page-title-about">
            راهی برای آشنایی با متخصصان برتر در سرار دنیا با استفاده از بهترین
            متدهای حال حاضر
          </div>
        </div>
      </div>
      <div className="data-showing">
        <Count className="a" title="مشتریان" number="823000" />
        <Count title="متخصصان" number="45923" />
        <Count title="مقالات" number="29300000" />
        <Count title="شرکت‌ها" number="136000" />
        <Count title="قاره‌ها" number="5" />
      </div>
      <div className="related">
        <div className="related-title">
          بیش از 2600 برند به ما اعتماد کرده‌اند
        </div>
        <div className="cards-scroll">
          <button className="scroll-btn" onClick={() => handleScroll("left")}>
            <GoArrowLeft />
          </button>
          <div className="related-cards" id="scroll-container">
            <Card name="taghi" logo={sherkat2} />
            <Card name="naghi" logo={sherkat3} />
            <Card name="taghi" logo={sherkat2} />
            <Card name="naghi" logo={sherkat3} />
            <Card name="taghi" logo={sherkat2} />
            <Card name="naghi" logo={sherkat3} />
            <Card name="taghi" logo={sherkat2} />
            <Card name="naghi" logo={sherkat3} />
            <Card name="taghi" logo={sherkat2} />
            <Card name="naghi" logo={sherkat3} />
            <Card name="taghi" logo={sherkat2} />
            <Card name="naghi" logo={sherkat3} />
            <Card name="taghi" logo={sherkat2} />
            <Card name="naghi" logo={sherkat3} />
            <Card name="taghi" logo={sherkat2} />
            <Card name="naghi" logo={sherkat3} />
          </div>
          <button className="scroll-btn" onClick={() => handleScroll("right")}>
            <GoArrowRight />
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-table">
          <div className="footer-info">
            <div className="footer-info-item-title">
              <span className="footer-info-title-logo">
                <RiContactsFill />
              </span>
              <span className="footer-info-title-titr">تماس با فراگستر</span>
            </div>
            <div className="footer-info-item">
              تهران، خیابان مطهری،خیابان کوه نور، خیابان سمنان، پلاک 7
            </div>
            <div className="footer-info-item">تلفن: 42623-021</div>
            <div className="footer-info-item">فکس: 88172998-021</div>
            <div className="footer-info-item">info@faragostar.net :ایمیل</div>
            <div className="footer-info-item">کدپستی: 1587695611</div>
          </div>
          <div className="footer-menu">
            <div className="footer-menu-title">
              <span className="footer-menu-title-logo">
                <IoInformationCircle />
              </span>
              <span className="footer-menu-title-titr">درباره</span>
            </div>
            <div className="footer-menu-infos">
              این سایت در هدف ایجاد یک راه راحت برای دسترسی به اطلاعات افراد
              متخصص طراحی شده است تا با استفاده از آن بتوانند از هر جای دنیا به
              بهترین افراد که در آن زمینه تخصص دارند، کار بدهند.
            </div>
          </div>
          <div className="footer-about">
            <div className="footer-about-title">
              <span className="footer-about-title-logo">
                <IoMdMenu />
              </span>
              <span className="footer-about-title-titr">منو</span>
            </div>
            <a href="#">جستجوی متخصص</a>
            <a href="#">کلید واژه‌های تخصصی</a>
            <a href="#">روند علمی متخصصین</a>
            <a href="#">تنظیمات مدیریت کاربران</a>
            <a href="#">گزارشات</a>
          </div>
        </div>
        <div className="footer-copy-right">
          &copy; تمامی حقوق مادی و معنوی این وب‌سایت برای شرکت فراگستر محفوظ
          است.
        </div>
      </div>
    </div>
  );
};
