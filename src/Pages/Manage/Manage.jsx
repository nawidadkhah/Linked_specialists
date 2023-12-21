import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar.jsx";
import {Table} from '../../Components/Table/Table.jsx'
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Manage.css";

export const Manage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    notify("کاربر با موفقیت ایجاد شد.", "success");
    // notify("رمزعبور یا نام کاربری اشتباه است.", "error")
  };

  const notify = (msg, type) => {
    if (type === "error") {
      toast.error(msg, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else if (type === "success") {
      toast.success(msg, {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const [isType, setIsType] = useState({
    user: false,
    artifact: false,
    linkedin: false,
  });
  const handleFuture = (e) => {
    if (e.target.value === "user") {
      setIsType({
        user: true,
        artifact: false,
        linkedin: false,
      });
    }
    if (e.target.value === "artifact") {
      setIsType({
        user: false,
        artifact: true,
        linkedin: false,
      });
    }
    if (e.target.value === "linkedin") {
      setIsType({
        user: false,
        artifact: false,
        linkedin: true,
      });
    }
  };
  return (
    <div className="manage">
      <Navbar />
      <div className="Mange-buttons">
        <button value="user" onClick={handleFuture}>
          تعریف کاربر
        </button>
        <button value="artifact" onClick={handleFuture}>
          تنظیمات مقاله
        </button>
        <button value="linkedin" onClick={handleFuture}>
          تنظیمات لینکدین
        </button>
      </div>
      {isType.user && (
        <form className="form">
          <div className="inputs-content">
            <div className="right-side">
              <div className="input-row">
                <div className="labels">
                  <label htmlFor="lastName">نام خانوادگی:</label>
                </div>
                <input
                  type="text"
                  className="infoInput"
                  name="lastName"
                  placeholder="نام خانوادگی"
                />
              </div>
              <div className="input-row">
                <div className="labels">
                  <label htmlFor="username">نام کاربری:</label>
                </div>
                <input
                  type="text"
                  className="infoInput"
                  name="username"
                  placeholder="نام کاربری"
                />
              </div>
              <div className="input-row">
                <div className="labels">
                  <label htmlFor="phone">شماره تلفن:</label>
                </div>
                <input
                  type="text"
                  className="infoInput"
                  name="phone"
                  placeholder="شماره تلفن"
                />
              </div>
            </div>
            <div className="left-side">
              <div className="input-row">
                <div className="labels">
                  <label htmlFor="firstName">نام:</label>
                </div>
                <input
                  type="text"
                  className="infoInput"
                  name="firstName"
                  placeholder="نام"
                />
              </div>
              <div className="input-row">
                <div className="labels">
                  <label htmlFor="password">رمزعبور:</label>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="infoInput"
                  name="password"
                  placeholder="رمزعبور"
                />
                <span
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              <div className="input-row">
                <div className="labels">
                  <label htmlFor="email">ایمیل:</label>
                </div>
                <input
                  type="text"
                  className="infoInput"
                  name="email"
                  placeholder="ایمیل"
                />
              </div>
            </div>
          </div>
          <table id="customers">
            <tr>
              <th>ردیف</th>
              <th>حوزه تخصصی</th>
              <th>مجوز دسترسی</th>
            </tr>
            <tr>
              <td>1</td>
              <td>انرژی</td>
              <td>
                <input type="checkbox" className="check-button" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>آب و هوا</td>
              <td>
                <input type="checkbox" className="check-button" />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>برق</td>
              <td>
                <input type="checkbox" className="check-button" />
              </td>
            </tr>
          </table>
          <button
            className="button"
            id="infoButton"
            type="submit"
            onClick={handleSubmit}
          >
            ایجاد
          </button>
          <ToastContainer limit={5} rtl className={"notification"} />
        </form>
      )}
      {isType.artifact && <p className="a">a</p>}
      {isType.linkedin && <p className="a">salammmmmm</p>}
    </div>
  );
};
