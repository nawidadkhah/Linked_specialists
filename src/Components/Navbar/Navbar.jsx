import React from "react";
import Logo from "../../Images/logo.jpg";
import { SearchPage } from "../../Pages/SearchPage/SearchPage.jsx";
import { Link } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-img">
        <Link to="/home">
          <img src={Logo} alt="Logo" />
        </Link>
        <span>سامانه هوشمند متخصص یاب ایرانی</span>
      </div>
      <ul className="nav-tools">
        <Link to="/Reports">
          <span className="items items1">گزارشات</span>
        </Link>
        <Link to="/special-words">
          <span className="items items2">کلید واژه‌های تخصصی</span>
        </Link>
        <span className="items items3">تنظیمات مدیریت کاربران</span>
        <Link to="/Process">
          <span className="items items4">روند علمی متخصصین</span>
        </Link>

        <Link to="/Search">
          <span className="items items5">جستجوی متخصص</span>
        </Link>
      </ul>
    </div>
  );
};
