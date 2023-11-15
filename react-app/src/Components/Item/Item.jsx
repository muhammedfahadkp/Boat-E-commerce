import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'

const Item = (props)=> {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,105)} src={props.image} alt="" /></Link> //used ScrollTo in onclick to go up when user click image
      <p>{props.name}</p>
      <div className="item_prices">
        <div className="item_price_new">
          ₹{props.new_price}
        </div>
        <div className="item_price_old">
          ₹{props.old_price}
        </div>
      </div>
      <div className="user_review">
          {props.user_review}
      </div>
    </div>
  )
}

export default Item
