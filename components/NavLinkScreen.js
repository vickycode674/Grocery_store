import React from 'react';
import "../style.css";

export const NavLinkScreen=()=>{
    return(
     <div className="nav-links-screen">
        <div className='div'>
        {/* <NavLinks className="nav-links-instance" divClassName="design-component-instance-node" property="default"/>
            <NavLinks className="nav-links-instance" divClassName="nav-links-2" property1="default" text="Shop" />
            <NavLinks className="nav-links-instance" divClassName="nav-links-2" property1="default" text="Pages" />
            <NavLinks className="nav-links-instance" divClassName="nav-links-2" property1="default" text="Blog" />
            <NavLinks className="nav-links-instance" divClassName="nav-links-2" property1="default" text="About Us" />
            <NavLinks className="nav-links-instance" divClassName="nav-links-2" property1="default" text="Contact Us" /> */}
        </div>
        <div className='call-now'>
            <img className='phonecall' alt='Phonecal' src="./images/PhoneCall.svg"/>
            <div className='text-wrapper'>+91 465788389383</div>
        </div>
     </div>
    );
};
