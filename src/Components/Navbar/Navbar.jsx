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
        <Link to="/Search">
          <a href="#" className="items">
            گزارشات
          </a>
        </Link>
        <a href="#" className="items">
          کلید واژه‌های تخصصی
        </a>

        <a href="#" className="items">
          تنظیمات مدیریت کاربران
        </a>
        <a href="#" className="items">
          روند علمی متخصصین
        </a>
        <a href="#" className="items">
          جستجوی متخصص
        </a>
      </ul>
    </div>
  );
};
