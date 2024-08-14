import logo from "./Assets/logo.png";
import cart_icon from "./Assets/cart_icon.png";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className=" flex justify-between align-middle ">
      <div className="nav-logo">
        <img src={logo} alt="" className="h-12 w-12" />
        <p>SHOPPER</p>
      </div>
      <ul
        className="flex items-center justify-center gap-4 nav-menu cursor-pointer
      "
      >
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/"> Shop</Link> {menu === "shop" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens"> Men</Link> {menu === "mens" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women"> Women</Link> {menu === "women" ? <hr /> : <> </>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <> </>}
        </li>
      </ul>
      <div className="flex items-center justify-center ">
        <Link to="/login">
          <button className="outline-none border border-gray-500 active:bg-white px-6 py-1 rounded-2xl mr-10">
            Login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" className="h-8 w-8" />
        </Link>
        <div className="nav-cart-count bg-red-500 -mt-8 -ml-4 h-5 w-5 border rounded-full text-center text-sm">
          0
        </div>
      </div>
    </div>
  );
};

export default NavBar;
