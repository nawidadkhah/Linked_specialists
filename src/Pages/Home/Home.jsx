import { React } from 'react'
import Logo from '../../Images/logo.jpg'
import { Card } from '../../Components/Card/Card'
import sherkat2 from '../../Images/Related-ins/لوگو-مشتریان_بیمه-ما.jpg'
import sherkat3 from '../../Images/Related-ins/لوگوی-مشتریان-پیش-فرض_موننکو-ایران.jpg'
import './Home.css'

export const Home = () => {

  return (
    <div className='HomePage'>
      <div className="navbar">
        <div className="nav-img">
          <img src={Logo} alt="Logo" />
          <span>سامانه هوشمند متخصص یاب ایرانی</span>
        </div>
        <ul className="nav-tools">
          <i className="nav-items"><a href="#" className="items">جستجوی متخصص</a></i>
          <i className="nav-items"><a href="#" className="items">کلید واژه‌های تخصصی</a></i>
          <i className="nav-items"><a href="#" className="items">روند علمی متخصصین</a></i>
          <i className="nav-items"><a href="#" className="items">تنظیمات مدیریت کاربران</a></i>
          <i className="nav-items"><a href="#" className="items">گزارشات</a></i>
        </ul>
      </div>
      <div className="about-page">
      </div>
      <div className="data-showing">
      </div>
      <div className="related">
        <Card name="taghi" logo={sherkat2} />
        <Card name="naghi" logo={sherkat3} />
        <Card name="taghi" logo={sherkat2} />
        <Card name="naghi" logo={sherkat3} />
        <Card name="taghi" logo={sherkat2} />
        <Card name="naghi" logo={sherkat3} />
      </div>
    </div>
  )
}
