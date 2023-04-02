import Logo from "../../img/food.png";
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

export default Header;
