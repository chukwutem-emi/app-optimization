import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // if dependency array is empty === [] => useEffect is called on initial render(just once)
  // if dependency array is not empty === [i.e if there is value here] => useEffect is called every time the dependency changes.
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              Cart
            </li>
            <button className="login" onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") :
              setBtnNameReact("Logout");
            }}>{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;