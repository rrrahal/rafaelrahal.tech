import React from 'react'

import './Polaroid.css'

export const Polaroid = () => {
    return (
    <div className="polaroid">
      <div className="picture-container">
        <img src="https://i.ibb.co/Gvp7t6H/porto-retrato.jpg" alt="my-polaroid-pic" className="picture" />
      </div>
      <p className="caption">Hello</p>
    </div>
    )
}
