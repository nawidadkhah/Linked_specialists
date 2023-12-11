import React from 'react'
import './Circle.css'

export const Circle = (props) => {
  return (
    <div className='circle-outline'>
        <div className="circle-inline">
            <div className="circle-data">
                  <span className="circle-title">{props.title}</span>
                  <span className="circle-number">{props.number}</span>
            </div>
        </div>
    </div>
  )
}
