import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { PeopleCard } from "../../Components/PeopleCard/PeopleCard";
import { Modal } from "../../Components/Modal/Modal";
import ghobadi  from "../../Images/people/Manya-Ghobadi.png";
import ghasemi from "../../Images/people/Marziyeh-Ghasemi.png" 
import madooei from "../../Images/people/Ali-Madooei.png" 
import sadigh from "../../Images/people/Dorsa-Sadigh.png" 
import sahami  from "../../Images/people/Mehran-Sahami.png";
import fazlyab from "../../Images/people/mahyar-fazlyab.png"; 
import mozafari from '../../Images/people/mozafari.png'
import negahban from "../../Images/people/negahban.png";
import "./SearchPage.css";

export const SearchPage = () => {
  const [isSearch, SetisSearch] = useState(false);
  const [data, SetData] = useState({
    university: "",
    name:"",
    image: "",
    job: "",
    city: "",
    email: "",
    phone: "",
    site: "",
  });

  const handleSearch= ()=>{
SetisSearch(true)
  }
  return (
    <div className="search">
      <Modal data={data} />
      <div className="search-content">
        <Navbar />
        <div className="search-div">
          <div className="search-div-items">
            <label for="specialWork">حوزه تخصصی:</label>
            <select id="specialWork" name="specialWork">
              <option value="default"></option>
              <option value="ai">هوش مصنوعی</option>
            </select>
          </div>
          <div className="search-div-items">
            <label for="specialWord">کلید واژه تخصصی:</label>
            <select id="specialWord" name="specialWord">
              <option value="default"></option>
              <option value="ai">----------------------</option>
            </select>
          </div>
          <button className="search-page-button" onClick={handleSearch}>
            جستجو
          </button>
        </div>
        {isSearch && (
          <div className="search-items">
            <PeopleCard
              setData={SetData}
              name="مانیا قبادی"
              image={ghobadi}
              university="MIT University"
              city="Massachusetts"
              job="Professor"
              email="ghobadi@csail.mit.edu"
              phone=""
              site="http://people.csail.mit.edu/ghobadi/"
              title1="سیستم های یادگیری ماشین"
              title2="شبکه سازی داده های مرکزی"
              title3="بهینه سازی شبکه "
            />
            <PeopleCard
              setData={SetData}
              name="مرضیه قاسمی"
              image={ghasemi}
              university="Stanford"
              city="california University"
              job="Professor"
              email="dorsa@cs.stanford.edu"
              phone="(617) 253-4030"
              site="https://dorsa.fyi/"
              title1="هوش مصنوعی"
              title2="Big Data"
              title3="يادگيري ماشين رفتاري"
            />
            <PeopleCard
              setData={SetData}
              name="درسا صدیق"
              image={sadigh}
              university="Stanford University"
              city="california"
              job="Professor"
              email="dorsa@cs.stanford.edu"
              phone=""
              site="https://dorsa.fyi/"
              title1="رباتیک"
              title2="یادگیری ماشین"
              title3="تئوری کنترل"
            />
            <PeopleCard
              setData={SetData}
              name="مهران سهامی"
              image={sahami}
              university="Stanford University"
              city="california"
              job="Professor"
              email="sahami@cs.stanford.edu"
              phone="(650) 723-6059"
              site="http://web.eecs.umich.edu/~mozafari/"
              title1="علوم کامپیوتر"
              title2="یادگیری ماشین"
              title3="بازیابی اطلاعات در وب"
            />
            <PeopleCard
              setData={SetData}
              name="علی مدوئی"
              image={madooei}
              university="Johns Hopkins University"
              city="Baltimore"
              job="Professor"
              email="madooei@jhu.edu"
              phone="(410) 516-7708"
              site="https://www.cs.jhu.edu/faculty/ali-madooei/"
              title1="بینایی ماشین"
              title2="یادگیری ماشین"
              title3=" پردازش تصویر پزشکی "
            />
            <PeopleCard
              setData={SetData}
              name="مهیار فضل‌یاب"
              image={fazlyab}
              university="Johns Hopkins University"
              city="Baltimore"
              job="Professor"
              email="mahyarfazlyab@jhu.edu"
              phone="(410) 516-7031"
              site="https://www.ece.jhu.edu/mahyarfazlyab/"
              title1="بهینه سازی"
              title2="یادگیری ماشین"
              title3="نظریه کنترل"
            />
            <PeopleCard
              setData={SetData}
              name="برزان مظفری"
              image={mozafari}
              university="Michigan University"
              city="Michigan"
              job="Professor"
              email="mozafari@umich.edu"
              phone="(347) 763-3669"
              site="https://www.ece.jhu.edu/mahyarfazlyab/"
              title1="سیستم های قابل پیش بینی"
              title2="یادگیری ماشین"
              title3="محاسبات تقریبی "
            />
            <PeopleCard
              setData={SetData}
              name="سهند نگهبان"
              image={negahban}
              university="Yale University"
              city="New Haven"
              job="Professor"
              email="sahand.negahban@yale.edu"
              phone="(203) 432-0639"
              site="https://sahandnegahban.com/"
              title1="پردازش سیگنال"
              title2="یادگیری ماشین"
              title3="سنجش فشرده"
            />
          </div>
        )}
      </div>
    </div>
  );
};
