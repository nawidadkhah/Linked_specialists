import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { SearchCom } from "../../Components/SearchCom/SearchCom";
import { Table } from "../../Components/Table/Table";
import "./Process.css";
export const Process = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className="process">
      <Navbar />
      <SearchCom
        title="حوزه تخصصی"
        option="هوش مصنوعی"
        setIsSearch={setIsSearch}
      />

      {isSearch && (
        <div>
          <table id="customers">
            <tr>
              <th>زیر حوزه</th>
              <th>حوزه</th>
              <th>ردیف</th>
            </tr>
            <tr>
              <td>
                <span className="td-item">laas</span>
                <span className="td-item">paas</span>
                <span className="td-item">saas</span>
                <span className="td-item">faas</span>
              </td>
              <td>Machine Learning</td>
              <td>1</td>
            </tr>
            <tr>
              <td>
                <span className="td-item">IAM</span>
                <span className="td-item">Data Enryption</span>
                <span className="td-item">Compliance</span>
                <span className="td-item">faas</span>
              </td>
              <td>Image Processing</td>
              <td>2</td>
            </tr>
          </table>
        </div>
        // <div>
        //   <Table
        //     firstTh="زیر حوزه"
        //     secTh="حوزه"
        //     thirdTh="ردیف"
        //     firstTd2="Machine Learning"
        //     firstTd1="laas"
        //     firstTd12="paas"
        //     firstTd13="saas"
        //     firstTd14="faas"
        //     firstTd3="1"
        //     secTd2="Image Processing"
        //     secTd1="40%"
        //     secTd3="2"
        //   />
        // </div>
      )}
    </div>
  );
};
