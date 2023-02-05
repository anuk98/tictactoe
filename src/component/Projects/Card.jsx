import React from 'react'

function Card({key,image,category,title}) {
  return (
    <div className='box butn_shadow' >
        <div className="card_image_container">
            <img className='card_image' src={image} alt="" />
        </div>
        <div className="card_category ">
          <span>{category}</span>
        </div>
        <div className="card_title">
            <h2>{title}</h2>
        </div>
    </div>
  )
}

export default Card