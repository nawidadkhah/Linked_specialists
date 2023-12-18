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
        
          <a href="#" className="items">
            گزارشات
          </a>
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
}
