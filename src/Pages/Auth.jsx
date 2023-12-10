import React from 'react'
import './Auth.css'
import Logo from './Images/logo.jpg'
import 'react-toastify/dist/ReactToastify.css';
import  '../Components/Button'
import { ToastContainer, toast } from 'react-toastify';

export const Auth = () => {

    const handleSubmit= (e)=>{
        e.preventDefault()
        notify(".کاربر وارد شد", "success")
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
            theme: "light",
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
            theme: "light",
            className:"notification"
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
                            <ToastContainer />
                    </form>
                       
                 </div>
            </div>
          </div>
        </div>
    )
}

