import React, { useContext } from 'react'
import "./CartItems.css"
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import add_more from '../Assets/plus.png'

const Cartitems = () => {

    // Calling function using Context

    const {all_product, cartItems, removeFromCart, getCartTotalAmount, addToCart} = useContext(ShopContext)
    
    

  return (
    <div className='cartItems'>
        <div className="cartItems_main_format">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>

        {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartItems_format cartItems_main_format">
                <div className='images'>
                  <img src={e.image} alt="" className='CartIcon_product_icon' />
                  <img
                    src={add_more}
                    alt=""
                    className='cartItems_quantity'
                    onClick={() => { addToCart(e.id) }}
                  />
                </div>
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <div className='quantity'>
                  <p>{cartItems[e.id]}</p>
                </div>
                <p>₹{e.new_price * cartItems[e.id]}</p>
                <img
                  className='removeIcon'
                  src={remove_icon}
                  onClick={() => { removeFromCart(e.id) }}
                />
              </div>
            </div>
          );
        }
        return null;
        })}

        <div className="cartItems_down">
            <div className="cartItems_total">
                <h1>Your Cart Total</h1>
                <div>
                    <div className="cartItems_total_items">
                        <p>Subtotal</p>
                        <p>₹{getCartTotalAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartItems_total_items">
                        <p>Shipping Fee</p>
                        <p>₹{0}</p>
                    </div>
                    <div className="cartItems_total_items">
                        <p>Discount</p>
                        <p>-₹{0}</p>
                    </div>
                    <hr />
                    <div className="cartItems_total_items">
                        <h3>Total</h3>
                        <h2>₹{getCartTotalAmount()}</h2>
                    </div>
                </div>
                <button>Buy Now</button>
            </div>
            <div className="cartItems_promoCode">
                <p>Get Discount</p>
                <div className="cartItems_promoBox">
                    <input type="text" name="" id="" placeholder='Enter Your Promo Code' />
                    <button>Let Check</button>
                </div>
            </div>
        </div>
    </div>
  )
}
 
export default Cartitems

