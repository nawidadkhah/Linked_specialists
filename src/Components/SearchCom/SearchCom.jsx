import React from 'react'
import './SearchCom.css'

export const SearchCom = (props) => {
    const handleSearch = () => {
      props.setIsSearch(true)
    }
  return (
    <div className="search-com-div">
      <div className="search-com-div-items">
        <label for="search-com">{props.title}</label>
        <select id="search-com" name="search-com">
          <option value="default"></option>
          <option value="crowd">
            {props.option}
          </option>
        </select>
      </div>

      <button className="search-com-page-button" onClick={handleSearch}>
        جستجو
      </button>
    </div>
  );
}
