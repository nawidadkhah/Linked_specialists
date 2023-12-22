import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css'
export const Button = () => {
  return (
    <div className="button">
      <Link to="/home">
        <div className="submit">ورود</div>
      </Link>
    </div>
  );
}

