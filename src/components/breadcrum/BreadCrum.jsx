/* eslint-disable react/prop-types */
import "./breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const BreadCrum = ({ product }) => {
  return (
    <div className="flex m-9 items-center gap-2">
      HOME
      <img src={arrow_icon} /> SHOP <img src={arrow_icon} alt="" />
      {product.category}
      <img src={arrow_icon} alt="" />
    </div>
  );
};

export default BreadCrum;
