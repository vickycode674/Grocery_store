import React from 'react';
import "./shop1.css";
import ShopFilter from "./ShopFilter";
import AllCategories from './Cateogries/AllCategories';
import Bannar from './ShopProduct/Bannar';
// import PagesChang from './PagesChang';
// import breadcrumbs from "../components/shop1/breadcrumbs";
import { Product } from './ShopProduct/Product';
import { SidePrice } from './ShopProduct/SidePrice';
import {Rating} from './ShopProduct/Rating';
import PopularTag from './ShopProduct/PopularTag';
import {HotDeals} from './ShopProduct/HotDeals';
const shop1 = () => {
  return (
    <div>
      {/* <NavigationBar/> */}
      <div className="breadcrumbs"> 
      <div className="location"> 
       < a href="/" ><img className="home" alt="Home" src="./images/shop1/home-1.png" /> </a>
       <img className="vector" alt="Vector" src="./images/shop1/Vector.png" />
          <div className="text-wrapper"><a href="/"> Categories</a></div> 
            <img className="vector" alt="Vector" src="/images/shop1/Vector.png" /> 
         <div className="div"><a href="/"> Vegetables</a></div> 
         </div> 
         {/* /*filter*/ }
    </div> 
    <ShopFilter/>

    <div className="sort-by">
      <div className="text-wrapper">Sort by:</div>
      <div className="dropdown">
        <div className="div">Latest</div>
        <div className='ChevronDown'>
          <div className="chevron-down-screen"> 
          <img className="group" alt="Group" src="./images/group.png" />
          </div>
         </div>
      </div>
    </div>
    {/* <PagesChang/> */}
    <AllCategories/>

   <SidePrice/>
  
  <Rating/>

  <PopularTag/>

  <Bannar/>

  <HotDeals/>

 
    {/* <Product property1="default" image="image1.png" text="Potatoe" rating="4.5" />
      <Product property1="hover" image="orange.jpg" text="Orange" rating="4.0" /> */} 
   <div className='ml-32 mt-[-2132px]  '>
  <div className="flex items-start gap-8 m-4 ">
              {/* <Tag property1="out of stock"/> */}

    <Product image="./images/shop1/Image-1.png" property1="default" rating="./images/shop1/Star 1.png"  text="Big Potatos" />
    <Product image="./images/shop1/Image2.png" property1="hover" rating="./images/shop1/Star 1.png" text="Chanise Cabbage" /> 
    <Product image="./images/shop1/Image-3.png" property1="default" rating="./images/shop1/Star 1.png" text="Corn" /> 
    </div>

    <div className="flex items-start gap-8 m-3">
    <Product image="./images/shop1/Image-5.png" property1="default" rating="./images/shop1/Star 1.png" text="Fresh Cauliflower" />
    <Product image="./images/shop1/Image-6.png" property1="default" rating="./images/shop1/Star 1.png" text="Green Apple" /> 
    <Product image="./images/shop1/Image-7.png" property1="default" rating="./images/shop1/Star 1.png" text="Green Capsicum" /> 
    </div>

    <div className="flex items-start gap-8 m-3">
    <Product image="./images/shop1/Image-9.png" property1="default" rating="./images/shop1/Star 1.png" text=" Green Cucumber" />
    <Product image="./images/shop1/Image-10.png" property1="default" rating="./images/shop1/Star 1.png" text="Green Littuce" /> 
    <Product image="./images/shop1/Image-11.png" property1="default" rating="./images/shop1/Star 1.png" text="Ladies Finger" /> 
    </div>

    <div className="flex items-start gap-8 m-3">
    <Product image="./images/shop1/Image-13.png" property1="default" rating="./images/shop1/Star 1.png" text=" Red Chilli" />
    <Product image="./images/shop1/Image-14.png" property1="default" rating="./images/shop1/Star 1.png" text="Tomatoes" /> 
    <Product image="./images/shop1/Image-15.png" property1="default" rating="./images/shop1/Star 1.png" text="Mangoes" /> 
    </div> 

    <div className="flex items-start gap-8 m-3">
    <Product image="./images/shop1/Image-4.png" property1="default" rating="./images/shop1/Star 1.png" text="Egg Plant" /> 
    <Product image="./images/shop1/Image-12.png" property1="default" rating="./images/shop1/Star 1.png" text="Green Capsicum" /> 
    <Product image="./images/shop1/Image-8.png" property1="default" rating="./images/shop1/Star 1.png" text="Green Chilli" /> 

    </div>
     {/* <div className='mx-3 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12'>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-0'> */}
          {/* Product Cards */}
          {/* <Product image='./images/shop1/Image-1.png' property1='default' rating='./images/shop1/Star 1.png' text='Big Potatos' />
          <Product image='./images/shop1/Image2.png' property1='hover' rating='rating-3.svg' text='Chanise Cabbage' />
          <Product image='./images/shop1/Image-3.png' property1='default' rating='rating-3.svg' text='Corn' />
          <Product image='./images/shop1/Image-4.png' property1='default' rating='rating-3.svg' text='Egg Plant' />
          <Product image='./images/shop1/Image-5.png' property1='default' rating='rating-3.svg' text='Fresh Cauliflower' />
          <Product image='./images/shop1/Image-6.png' property1='default' rating='rating-3.svg' text='Green Apple' />
          <Product image='./images/shop1/Image-1.png' property1='default' rating='rating-3.svg' text='Green Capsicum' />
          <Product image='./images/shop1/Image-1.png' property1='default' rating='rating-3.svg' text='Green Chilli' />
          <Product image='./images/shop1/Image-1.png' property1='default' rating='rating-3.svg' text='Green Cucumber' />
          <Product image='./images/shop1/Image-1.png' property1='default' rating='rating-3.svg' text='Green Littuce' />
          <Product image='./images/shop1/Image-1.png' property1='default' rating='rating-3.svg' text='Ladies Finger' /> */}
          {/* Add more Product components as needed */}

    
    {/* <Product/> */}
      </div>
 </div>
    
  )
}

export default shop1;
