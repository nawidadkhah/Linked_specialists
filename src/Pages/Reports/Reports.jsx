import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import gender from "../../Images/GENDER.jpg";
import CountUp from "react-countup";
import worldWide from '../../Images/world.jpg'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Reports.css";

export const Reports = () => {
  const [isValue, SetisValue] = useState("0");
  const [isType, SetisType] = useState({
    gender: false,
    age: false,
    crowd: false,
  });

  const handleChange = (e) => {
    SetisValue(e.target.value);
    console.log(isValue);
  };

  const handleSearch = () => {
    if (isValue === "age") {
      SetisType({
        age: true,
        gender: false,
        crowd: false,
      });
    }
    if (isValue === "gender") {
      SetisType({
        age: false,
        gender: true,
        crowd: false,
      });
    }
    if (isValue === "crowd") {
      SetisType({
        age: false,
        gender: false,
        crowd: true,
      });
    }
  };
  return (
    <div>
      <Navbar />
      <div className="reports-div">
        <div className="reports-div-items">
          <label for="reports">انتخاب گزارش:</label>
          <select id="reports" name="reports" onChange={handleChange}>
            <option value="default"></option>
            <option value="crowd">
              توزیع جمعیت ایرانیان در منطقه جغرافیایی دنیا (linkedin)
            </option>
            <option value="age">
              توزیع سن ایرانیان در منطقه جغرافیایی دنیا (linkedin)
            </option>
            <option value="gender">
              توزیع جنسیت ایرانیان در منطقه جغرافیایی دنیا (linkedin)
            </option>
          </select>
        </div>

        <button className="search-page-button" onClick={handleSearch}>
          جستجو
        </button>
      </div>
      <div className="reports-content">
        {isType.gender && (
          <div className="reports-is">
            <div className="reports-content-gen">
              <span>
                <CountUp start={0} end={42} duration={3} delay={0} />%
              </span>
              <span className="reports-content-gen-text">
                .از جمعیت لینکدین، بانوان هستند
              </span>
            </div>
            <img src={gender} alt="" />
            <div className="reports-content-gen">
              <span>
                <CountUp start={0} end={58} duration={3} delay={0} />%
              </span>
              <span className="reports-content-gen-text">
                .از جمعیت لینکدین، آقایان هستند
              </span>
            </div>
          </div>
        )}
        {isType.age && (
          <div className="reports-is">
            <div className="report-age">
              <span>
                <CircularProgressbar
                  value={20.4}
                  maxValue={100}
                  text={`20.4%`}
                  styles={buildStyles({
                    pathColor: `rgba(0, 89, 147, 1)`,
                    textColor: "rgba(0, 89, 147, 1",
                  })}
                />
              </span>
              <span>18 - 24</span>
            </div>
            <div className="report-age">
              <span>
                <CircularProgressbar
                  value={59.1}
                  maxValue={100}
                  text={`59.1%`}
                  styles={buildStyles({
                    pathColor: `rgba(0, 89, 147, ${100 / 100})`,
                    textColor: "#f88",
                  })}
                />
              </span>
              <span>25 - 34</span>
            </div>
            <div className="report-age">
              <span>
                <CircularProgressbar
                  value={17.7}
                  maxValue={100}
                  text={`17.7%`}
                  styles={buildStyles({
                    pathColor: `rgba(0, 89, 147, 1)`,
                    textColor: "rgba(0, 89, 147, 1",
                  })}
                />
              </span>
              <span>35 - 54</span>
            </div>
            <div className="report-age">
              <span>
                <CircularProgressbar
                  value={2.9}
                  maxValue={100}
                  text={`2.9%`}
                  styles={buildStyles({
                    pathColor: `rgba(0, 89, 147, 1)`,
                    textColor: "rgba(0, 89, 147, 1",
                  })}
                />
              </span>
              <span>55 +</span>
            </div>
          </div>
        )}
        {isType.crowd && (
          <div className="reports-crowds">
            <img src={worldWide} alt="world wide" />
          </div>
        )}
      </div>
    </div>
  );
};
