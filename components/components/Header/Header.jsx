// src/components/NavigationBar.js
import React from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Icons } from './icons';
import './style.css';
// library.add(faSearch);


const NavigationBar = () => {
  return (

    <div className="navigation-bar">
     <div className="logo">
      <img src="./Images/Header/Traceworks_dark.png" alt="traceworks" />
    </div>


      <div className="search-bar">
        {/* <FontAwesomeIcon icon={faSearch}/> */}
        <img className='group' alt="Group" src='./Images/Header/Search.png'/>
        {/* <i class="fa fa-search" aria-hidden="true"></i> */}
      <input type="text" placeholder="Search..." />
      <img className='group' alt="Group" src='./Images/Header/Search.png'/>
      <button className='text-wrapper'>Search</button>
    </div>
      {/* Add other details or components here */}
      <div className='icons'>
      <img className='heart' alt="Heart" src="./images/Heart.svg"/>
      <img  className='divider' alt="Divider" src="./images/Devider.svg"/>
     <div className='shopping-card'>
        <div className='cart'>
        <img className='cart' alt="Shopping Cart's Icon" src="./images/Bag.svg" />

        <div className='no'>
            <div className='text-wrapper'>2</div>
        </div>
    </div>
    <div className="info">
        <div className="div">Shopping Cart:</div>
        <div className='text-wrapper2'>$25.00</div>
    </div>
 </div>
</div>
    </div>
  );
};

export default NavigationBar;
