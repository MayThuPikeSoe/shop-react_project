import "./breadcrum.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const BreadCrum = ({ product }) => {
  return (
    <div>
      HOME
      <img src={arrow_icon} /> SHOP <img src={arrow_icon} alt="" />
      {product.category}
      <img src={arrow_icon} alt="" />
    </div>
  );
};

export default BreadCrum;
