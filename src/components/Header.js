import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header rendered...........");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between rounded-lg bg-pink-100 shadow-md m-2 sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-28 rounded-lg" src={LOGO_URL}></img>
      </div>
      <div className="items-center ">
        <ul className="flex  p-4 m-6 font-bold text-lg">
          <li className="px-4">
            Online Status: {onlineStatus ? "✅": "🔴"}
          </li>
          <li className="px-4" >
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4" >Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
