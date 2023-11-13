import React, { useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    
    const { product } = props;
  const [selectedColor, setSelectedColor] = useState('');

  const handleColorSelection = (colorClass) => {
    const colorDiv = document.querySelector(`.${colorClass}`);
    const isSelected = colorDiv.classList.toggle('selected');

    if (isSelected) {
      const color = window.getComputedStyle(colorDiv).backgroundColor;
      setSelectedColor(color);
    } else {
      setSelectedColor('');
    }
  };


  return (
    <div className='productDisplay'>
      <div className="productDisplay_left">
        <div className="productDisplay_image_list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productDisplay_image">
            <img className='productDisplay_main_image' src={product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay_right">
            <h1>{product.name}</h1>
            <div className="productDisplay_right_review">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(255)</p>
            </div>
            <div className="productDisplay_right_prices">
                <dic className="productDisplay_price_old">
                    ₹{product.old_price}
                </dic>
                <div className="productDisplay_price_new">
                    ₹{product.new_price}
                </div>
            </div>
            <div className="productDisplay_right_description">
                High Definition True Sound
            </div>
          <div className="productDisplay_right_color">
          <h3>Choose a Color</h3>
          <hr />
          <div className="productDisplay_right_color_choices">
            <div className="color_1" onClick={() => handleColorSelection('color_1')}></div>
            <div className="color_2" onClick={() => handleColorSelection('color_2')}></div>
            <div className="color_3" onClick={() => handleColorSelection('color_3')}></div>
            <div className="color_4" onClick={() => handleColorSelection('color_4')}></div>
          </div>
          <div className='selectedColor'>
          {selectedColor && (
            <p>You Selected</p>
          )}
          {selectedColor && (
            <div className="selectedColorDisplay" style={{ backgroundColor: selectedColor }}></div>
          )}
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDisplay
