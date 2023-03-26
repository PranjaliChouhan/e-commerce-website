import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import vg from "../assets/logo.png";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav>
      
      <img src={vg} alt="logo" width={50} height={50} />

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag />{/*react icons */}
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
