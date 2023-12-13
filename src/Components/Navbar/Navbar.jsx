import React from 'react'
import Logo from "../../Images/logo.jpg";
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-img">
        <img src={Logo} alt="Logo" />
        <span>سامانه هوشمند متخصص یاب ایرانی</span>
      </div>
      <ul className="nav-tools">
        <i className="nav-items">
          <a href="#" className="items">
            جستجوی متخصص
          </a>
        </i>
        <i className="nav-items">
          <a href="#" className="items">
            کلید واژه‌های تخصصی
          </a>
        </i>
        <i className="nav-items">
          <a href="#" className="items">
            روند علمی متخصصین
          </a>
        </i>
        <i className="nav-items">
          <a href="#" className="items">
            تنظیمات مدیریت کاربران
          </a>
        </i>
        <i className="nav-items">
          <a href="#" className="items">
            گزارشات
          </a>
        </i>
      </ul>
    </div>
  );
}
