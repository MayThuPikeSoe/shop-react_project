/* eslint-disable react/prop-types */
import "./productdisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div>
      <div className="product_display_left">
        <div className="img_list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div>
          <img src={product.image} alt="" />
        </div>
        <div className="product-right">
          <h1>{product.name}</h1>
          <div className="product-display-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="product_display_prices">
            <div>{product.old_price}</div>
            <div>{product.new_price}</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            expedita voluptatum molestias explicabo voluptatem?
          </div>
          <div>
            <h1>Select Size</h1>
            <div>
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
            <button> ADD TO CART</button>
            <p>
              {" "}
              <span>Category : </span> Women, T-Shirt, CropTop
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
