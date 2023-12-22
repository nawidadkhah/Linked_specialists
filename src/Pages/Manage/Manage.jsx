import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar.jsx";
import { ToastContainer, toast } from "react-toastify";
import "./Manage.css";

export const Manage = () => {
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

  const [isLinkdinType, setIsLinkdinType] = useState({
    job: true,
    education: false,
  });

  const handleLinkedin=(e) =>{
      if (e.target.value === "job") {
        setIsLinkdinType({
          job: true,
          education: false,
        });
      }
      if (e.target.value === "education") {
        setIsLinkdinType({
          job: false,
          education: true,
        });
      }
  }
  const handleFuture = (e) => {
    document.querySelectorAll(".manage").forEach(function (el) {
      el.style.height = "100%";
    });
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
        <button value="artifact" onClick={handleFuture}>
          تنظیمات مقاله
        </button>
        <button value="linkedin" onClick={handleFuture}>
          تنظیمات لینکدین
        </button>
        <button value="user" onClick={handleFuture}>
          تعریف کاربر
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
                  type="password"
                  className="infoInput"
                  name="password"
                  placeholder="رمزعبور"
                />
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
          <table id="table">
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
            className="button user-button"
            id="infoButton"
            type="submit"
            onClick={handleSubmit}
          >
            ایجاد
          </button>
          <ToastContainer limit={5} rtl className={"notification"} />
        </form>
      )}
      {isType.artifact && (
        <div className="artifact">
          <div className="search-com-div">
            <div className="search-com-div-items">
              <label for="search-com">نام ژورنال یا کنفرانس:</label>
              <select id="search-com" name="search-com">
                <option value="default"></option>
                <option value="crowd">
                  کنفرانس تحقیقاتی هوش مصنوعی سال 2021
                </option>
              </select>
            </div>
          </div>
          <table id="table">
            <tr>
              <th>ردیف</th>
              <th>درجه معتبر بودن</th>
              <th>انتخاب</th>
            </tr>
            <tr>
              <td>1</td>
              <td>چارک 1</td>
              <td>
                <input type="checkbox" className="check-button" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>چارک 2</td>
              <td>
                <input type="checkbox" className="check-button" />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>چارک 3</td>
              <td>
                <input type="checkbox" className="check-button" />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>چارک 4</td>
              <td>
                <input type="checkbox" className="check-button" />
              </td>
            </tr>
          </table>
          <button
            className="button arti-button"
            id="infoButton"
            type="submit"
            // onClick={handleSubmit}
          >
            ثبت
          </button>
        </div>
      )}
      {isType.linkedin && (
        <div className="artifact">
          <div className="linkedin-buttons">
            <button value="job" onClick={handleLinkedin}>
              جستجو تحصیل
            </button>
            <button value="education" onClick={handleLinkedin}>
              جستجو شغل
            </button>
          </div>
          <div className="search-com-div search-linkedin">
            <div className="search-com-div-items">
              <label for="search-com">
                {isLinkdinType.job ? "شغل:" : "تحصیل:"}
              </label>
              <select id="search-com" name="search-com">
                <option value="default"></option>
                <option value="crowd">هوش مصنوعی</option>
              </select>
            </div>
          </div>
          <table id="table">
            <tr>
              <th>ردیف</th>
              <th>درجه معتبر بودن</th>
              <th>انتخاب</th>
            </tr>
            <tr>
              <td>1</td>
              <td>
                {isLinkdinType.job ? "پراهمیت" : "در بین 100 دانشگاه برتر دنیا"}
              </td>
              <td>
                <input type="checkbox" className="check-button" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                {isLinkdinType.job
                  ? "خوب"
                  : "در بین  100-200 دانشگاه برتر دنیا"}
              </td>
              <td>
                <input type="checkbox" className="check-button" />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                {isLinkdinType.job
                  ? "متوسط"
                  : "در بین  200-500 دانشگاه برتر دنیا"}
              </td>
              <td>
                <input type="checkbox" className="check-button" />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                {isLinkdinType.job
                  ? "کم اهمیت"
                  : "بالاتر از 500"}
              </td>
              <td>
                <input type="checkbox" className="check-button" />
              </td>
            </tr>
          </table>
          <button
            className="button arti-button"
            id="infoButton"
            type="submit"
            // onClick={handleSubmit}
          >
            ثبت
          </button>
        </div>
      )}
    </div>
  );
};
