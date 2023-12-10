import React from 'react'
import Logo from '../Images/logo.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  '../Components/Button/Button.jsx'
import './Auth.css'

export const Auth = () => {

const handleSubmit= (e)=>{
    e.preventDefault()
    notify("کاربر با موفقیت وارد شد.", "success")
    notify("رمزعبور یا نام کاربری اشتباه است.", "error")
}

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
            theme: "light"
        });
    }
    else if (type === "success") {
        toast.success(msg, {
            position: "top-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light"
        });
    }
}
    return (
        <div className="background-image-login">
          <div className="auth-side">
            <div className="cards">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                 </div>
                <div className="title">
                        <span>
                          سامانه هوشمند متخصص یاب ایرانی 
                        </ span>
                        <span>
                          (ساهمتا)
                        </span>
                 </div>
                <div className="inputs">
                    <form >
                        <div className='labels'>
                           <label htmlFor="username">: نام کاربری</label>
                        </div> 
                            <input
                                type="text"
                                className="infoInput"
                                name="username"
                                placeholder="نام کاربری"

                            />
                        <div className='labels labels2'>
                            <label htmlFor="password">: رمز عبور</label>
                        </div> 
                            <input
                                type="email"
                                className="infoInput"
                                name="password"
                                placeholder="رمز عبور"
                            />
                            <button
                                className="button"
                                id="infoButton"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                ثبت
                            </button>
                            <ToastContainer limit={5} rtl className={"notification"} />
                    </form>
                 </div>
            </div>
          </div>
        </div>
    )
}

