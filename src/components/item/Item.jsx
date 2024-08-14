import { Link } from "react-router-dom";
import "./item.css";
/* eslint-disable react/prop-types */
const Item = ({ image, name, new_price, old_price, id }) => {
  return (
    <div className="cursor-pointer transition-all duration-300 scale-100 hover:scale-105">
      <Link to={`/product/${id}`}>
        <img src={image} alt="" />
      </Link>

      <p>{name}</p>
      <div className="item-prices"></div>
      <div className="new_price text-gray-500">{new_price}</div>
      <div className="old_price text-gray-400">{old_price}</div>
    </div>
  );
};

export default Item;
