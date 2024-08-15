/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import "./shopcategory.css";
import { ShopContent } from "../components/content/ShopContent";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Item from "../components/item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContent);
  return (
    <div>
      <img
        className="shopcategory_banner block my-10 mx-auto"
        src={props.banner}
        alt=""
      />
      <div className="flex justify-between">
        <p>
          <span>Showing 1-12</span>
          out of 36 products
        </p>
        <button className="shopcategory_sort w-32 h-10 border rounded-2xl flex items-center justify-center gap-5">
          <span>Sort by </span> <img src={dropdown_icon} alt="" />
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-10">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
