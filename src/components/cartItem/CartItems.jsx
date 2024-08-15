import { useContext } from "react";
import "./cartitem.css";
import { ShopContent } from "../content/ShopContent";
import remove_icon from "../Assets/cart_cross_icon.png";
const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContent);
  return (
    <div className="my-24">
      <div className=" text-gray-950 borer border-b-1 cart_item grid">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="">
                <div className="cart_item grid h-20 border border-b-1 border-t-0 border-l-0 border-r-0 py-2 items-center">
                  <img src={e.image} alt="" className="h-16 pr-3" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="w-9 h-7 bg-gray-400 text-white">
                    {cartItems[e.id]}
                  </button>
                  <p>{e.new_price * cartItems[e.id]}</p>
                  <img
                    src={remove_icon}
                    className="h-4 cursor-pointer"
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="flex gap-20 mt-12">
        <div className="cart_item_left ">
          <h1 className="font-bold text-2xl">Cart Total</h1>
          <div className="flex flex-col">
            <div className="flex justify-between h-10 items-center">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between h-10 items-center ">
              <p>Shopping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between h-10 items-center">
              <h3>total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-40 h-12 bg-red-500 text-white text-xs mt-10">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div>
          <p className="py-8">If you have a promo code, Enter it here</p>
          <div>
            <input
              type="text"
              placeholder="promo code"
              className="bg-gray-200 h-10 px-3"
            />
            <button className="bg-black text-white w-24 h-10">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
