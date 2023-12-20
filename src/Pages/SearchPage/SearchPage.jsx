import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { PeopleCard } from "../../Components/PeopleCard/PeopleCard";
import { Modal } from "../../Components/Modal/Modal";
import "./SearchPage.css";

export const SearchPage = () => {
  const [isSearch, SetisSearch] = useState(false);
  const [data, SetData] = useState({
    university: "",
    name:"aliiii",
    image: "",
    job: "",
    city: "abs",
    email: "",
    phone: "",
    site: "",
  });

  const handleSearch= ()=>{
SetisSearch(true)
  }
  return (
    <div>
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
            <PeopleCard name="علی مردانی" setData={SetData} />
            <PeopleCard name="علی مردانی" setData={SetData} />
            <PeopleCard name="علی مردانی" setData={SetData} />
            <PeopleCard name="علی مردانی" setData={SetData} />
            <PeopleCard name="علی مردانی" setData={SetData} />
            <PeopleCard name="علی مردانی" setData={SetData} />
            <PeopleCard name="علی مردانی" setData={SetData} />
            <PeopleCard name="علی مردانی" setData={SetData} />
   
          </div>
        )}
      </div>
    </div>
  );
};
