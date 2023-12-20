import React from 'react';
// import logo from './logo.svg';
// import {NavLinks} from "./Navlinks";
// import "/.style.css"
// import { Midle } from './components/navigation/Midle';
// index.js or your component file

// library.add(faSearch);

import './App.css';
import './style.css'
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
// import { Product } from './components/Product/product';
import Shop1 from './components/shop1';
import { NavLinkScreen } from "./components/NavLinkScreen";

function App() {
  return (
    <React.Fragment>
    <NavigationBar />
    <NavLinkScreen />
    {/* <Header/> */}
    <Shop1/>
    {/* <Product/> */}

  </React.Fragment>
 
)
}

export default App;
