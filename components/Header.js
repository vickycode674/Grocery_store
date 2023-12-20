import React from 'react'

import "../style.css";
import "../styleguide.css";
export const Header = () => {
  return (
    <div className='header'>
      <div className='overlap-group'>
        <img className='image' alt="pic" src="./images/VegBasket.png"/>
        <div className='element-OFF'>
            <div className='info'>
                <div className="text-wrapper">70%</div>
                <div className='off'>OFF</div>
            </div>
        </div>
        <div className='information'>
            <p className='div'>Free shipping on all your order .we deliver, you enjoy</p>
            <div className='heading'>
                <div className='welcome-to-shopery'>WELCOME TO SHOPERY</div>
                <div className='fresh-healthy'>
                    Fresh &amp; healthy
                    <br/>
                    Organic Food
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Header
