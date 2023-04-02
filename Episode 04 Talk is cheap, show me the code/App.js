import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./img/food.png";
import "./App.css";

/**
 *
 * @returns
 *  Header
 *   - Logo
 *   - NavItems
 * Body
 *  -Search,
 *  -RestaurantContainer,
 *  -RestaurentCard
 *      -img
 *      -NameofRes,
 *      -StarRating,
 *      -cusine,
 *      - delivery time,
 *      -Address,
 *      -Contact
 *
 * Footer
 *  -Copyright
 *  -Links
 *  -Disclaimer
 *  -Addres
 *  -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="Logo-container">
        <img className="Logo" src={Logo} alt="logo Image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Login/Signup</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = () =>{
    return(
        <div className="res-card">
        <img 
        className="res-logo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/CdbryCrack" alt="logo" 
        
        />
        <h3>Meghana Foods</h3>
        <h4>Biryani, North Indaian, South Food</h4>
        <h5>4.9</h5>
        <h6>45 Minutes</h6>


        </div>
    )
}

const Body = () => {
  return(
    <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
    <RestaurentCard/>
    <RestaurentCard/>
    <RestaurentCard/>
    <RestaurentCard/>
    
    </div>
  </div>
  )
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
