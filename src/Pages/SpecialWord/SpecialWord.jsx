import React, { useState } from 'react'
import { SearchCom } from '../../Components/SearchCom/SearchCom'
import { Navbar } from '../../Components/Navbar/Navbar'
import { Table } from '../../Components/Table/Table'
import "./SpecialWord.css"

export const SpecialWord = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className='special'>
      <Navbar />
      <SearchCom
        title="حوزه تخصصی"
        option="هوش مصنوعی"
        setIsSearch={setIsSearch}
      />
      {isSearch && (
        <div>
          <Table
            firstTh="رصد تکرار در حوزه تخصصی"
            secTh="کلیدواژه"
            thirdTh="جایگاه"
            firstTd1="Machine Learning"
            firstTd2="90%"
            firstTd3="1"
            secTd1="Image Processing"
            secTd2="40%"
            secTd3="2"
          />
        </div>
      )}
    </div>
  );
}
