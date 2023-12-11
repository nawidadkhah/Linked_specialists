import React from 'react'
import './Card.css'

export const Card = (prop) => {
  return (
    <div className='card-com'>
          <div className='card-logo'>
              <img src={prop.logo} alt="logo" />
          </div>
        </div>
  )
}
