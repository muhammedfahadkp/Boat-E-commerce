import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionBox'>
      <div className="descriptionBox_Nav">
        <div className="descriptionBox_Nav_Box">Description</div>
        <div className="descriptionBox_Nav_Box fade">User Reviews (122)</div>
      </div>
      <div className="descriptionBox_Description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit magnam ipsa, maiores nam provident quod.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, itaque.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi exercitationem modi sunt?</p>
      </div>
    </div>
  )
}

export default DescriptionBox
