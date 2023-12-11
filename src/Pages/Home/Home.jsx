import { React, useState } from 'react'
import Logo from '../../Images/logo.jpg'
import { Card } from '../../Components/Card/Card'
import { Circle } from '../../Components/Circle/Circle'
import sherkat2 from '../../Images/Related-ins/لوگو-مشتریان_بیمه-ما.jpg'
import sherkat3 from '../../Images/Related-ins/لوگوی-مشتریان-پیش-فرض_موننکو-ایران.jpg'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import './Home.css'

export const Home = () => {
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (direction) => {
    const container = document.getElementById('scroll-container');
    const scrollAmount = 300; // You can adjust the scroll amount

    if (direction === 'left') {
      container.scrollLeft -= scrollAmount;
      setScrollLeft(container.scrollLeft);
    } else if (direction === 'right') {
      container.scrollLeft += scrollAmount;
      setScrollLeft(container.scrollLeft);
    }
  };

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
        <Circle title="تعداد کاربران" number="1200" />
        <Circle title="تعداد مقالات" number="90" />
        <Circle title="تعداد متخصصان" number="5231" />
        <Circle title="تعداد سازمان‌ها" number="2600" />
        <Circle title="تعداد کاربران" number="1200" />
        <Circle title="تعداد کاربران" number="1200" />
        <Circle title="تعداد کاربران" number="1200" />
      
      </div>
      <div className="related">
        <div className="related-title">بیش از 2600 برند به ما اعتماد کرده‌اند</div>
          <div className="cards-scroll">
          <button className='scroll-btn' onClick={() => handleScroll('left')}><GoArrowLeft/></button>
            <div className="related-cards" id="scroll-container" >
              <Card name="taghi" logo={sherkat2} />
              <Card name="naghi" logo={sherkat3} />
              <Card name="taghi" logo={sherkat2} />
              <Card name="naghi" logo={sherkat3} />
              <Card name="taghi" logo={sherkat2} />
              <Card name="naghi" logo={sherkat3} />
              <Card name="taghi" logo={sherkat2} />
              <Card name="naghi" logo={sherkat3} />
              <Card name="taghi" logo={sherkat2} />
              <Card name="naghi" logo={sherkat3} />
              <Card name="taghi" logo={sherkat2} />
              <Card name="naghi" logo={sherkat3} />
              <Card name="taghi" logo={sherkat2} />
              <Card name="naghi" logo={sherkat3} />
              <Card name="taghi" logo={sherkat2} />
              <Card name="naghi" logo={sherkat3} />
           </div>
          <button className='scroll-btn' onClick={() => handleScroll('right')}><GoArrowRight/></button>
        </div>
      </div>
    </div>
  )
}
