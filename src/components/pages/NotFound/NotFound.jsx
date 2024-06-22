import React from 'react'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>NotFound</h1>
      <button
        onClick={() => {
          location.href = window.location.origin
        }}
      >
        Back To Home
      </button>
    </div>
  );
};

export default NotFound