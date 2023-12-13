import {React, useState} from 'react'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import './Count.css'

export const Count = (props) => {
      const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        {counterOn && (
          <div className="data-showing-items">
            <span>{props.title}</span>
            <span>
              <CountUp start={0} end={props.number} duration={3} delay={0} />
            </span>
          </div>
        )}
      </ScrollTrigger>
    </div>
  );
}
