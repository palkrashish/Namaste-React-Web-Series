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
// const RestaurentCard(props) or
const RestaurentCard = ({ resName, cuisine, rating, timeToDelvery }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/TopPicks/CdbryCrack"
        alt="logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h5>{rating}</h5>
      <h6>{timeToDelvery}</h6>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indaian, South Food"
          rating="4.9"
          timeToDelvery="30 Minutes"
        />
        <RestaurentCard
          resName="KFC"
          cuisine="Burger, Aalo Tikki"
          rating="4.4"
          timeToDelvery="15 Minutes"
        />
      </div>
    </div>
  );
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
