import { React, useState } from "react";
import Logo from "../../Images/logo.jpg";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../../Components/Button/Button.jsx";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    notify("کاربر با موفقیت وارد شد.", "success");
    navigate('/home');
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
  return (
    <div className="background-login">
      <div className="auth-side">
        <div className="cards">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="title">
            <span>سامانه هوشمند متخصص یاب ایرانی</span>
            <span>(ساهمتا)</span>
          </div>
          <div className="inputs">
            <form>
              <div className="labels">
                <label htmlFor="username" className="lablesAuth">
                  نام کاربری :
                </label>
              </div>
              <input
                type="text"
                className="infoInput"
                name="username"
                placeholder="نام کاربری"
              />
              <div className="labels labels2">
                <label htmlFor="password" className="lablesAuth">
                  رمز عبور :
                </label>
              </div>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="infoInput"
                  name="password"
                  placeholder="رمز عبور"
                />
                <span
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
              <button
                className="button"
                id="infoButton"
                type="submit"
                onClick={handleSubmit}
              >
                <span>ورود</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
