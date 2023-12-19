import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import './SearchPage.css'

export const SearchPage = () => {
  return (
    <div>
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
        <button className='search-page-button'>جستجو</button>
      </div>
    </div>
  );
}
