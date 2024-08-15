/* eslint-disable react/prop-types */
import "./productdisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { useContext } from "react";
import { ShopContent } from "../content/ShopContent";
const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart}=useContext(ShopContent)
  return (
    <div className="flex">
      <div className="product_display_left flex">
        <div className="img_list flex flex-col gap-5 w-40 h-40">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product_img mx-8">
          <img src={product.image} alt="" />
        </div>
        <div className="product-right">
          <h1 className="text-2xl">{product.name}</h1>
          <div className="product-display-star flex mt-4">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="product_display_prices flex gap-4 mt-6">
            <div className="text-gray-500 font-bold">${product.old_price}</div>
            <div className="text-red-500 font-bold">${product.new_price}</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            expedita voluptatum molestias explicabo voluptatem?
          </div>
          <div>
            <h1>Select Size</h1>
            <div className="flex gap-7 my-8">
              <div className=" bg-gray-100 h-9 w-10 items-center flex justify-center">
                S
              </div>
              <div className=" bg-gray-100 h-9 w-10 items-center flex justify-center">
                M
              </div>
              <div className=" bg-gray-100 h-9 w-10 items-center flex justify-center">
                L
              </div>
              <div className=" bg-gray-100 h-9 w-10 items-center flex justify-center">
                XL
              </div>
              <div className=" bg-gray-100 h-9 w-10 items-center flex justify-center">
                XXL
              </div>
            </div>
            <button className="bg-red-500 text-white w-32 h-9 my-4" onClick={() => {addToCart(product.id)}}> ADD TO CART</button>
            <p>
              {" "}
              <span className="font-bold">Category : </span> Women, T-Shirt, CropTop
            </p>
            <p>
              {" "}
              <span className="font-bold"> Tags : </span> Modern, Latest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
