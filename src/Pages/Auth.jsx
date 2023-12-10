import React from 'react'
import './Auth.css'
import Logo from './Images/logo.jpg'

export const Auth = () => {
    return (
        <div className="background-image-login">
            <div className="auth-side">
               <div className="cards">
                 <div className="logo"><img src={Logo} alt="Logo" /></div>
                    <div className="title">سامانه هوشمند متخصص یاب ایرانی (ساهمتا)</div>
                 <div className="inputs">
                    <form >
                        <label className='labels' htmlFor="username">نام کاربری</label>
                            <input
                                type="text"
                                className="infoInput"
                                name="username"
                                placeholder="نام کاربری"

                            />
                            <label className='labels' htmlFor="password">رمز عبور</label>
                            <input
                                type="email"
                                className="infoInput"
                                name="password"
                                placeholder="رمز عبور"

                            />
                            
                    </form>
                       
                 </div>
               </div>
            </div>
        </div>
    )
}

