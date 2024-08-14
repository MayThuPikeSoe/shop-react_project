import exclusive_image from "../Assets/exclusive_image.png";
import "./offer.css";
const Offer = () => {
  return (
    <div className="flex mx-auto offer justify-center gap-40 mt-28">
      <div className="offers_left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers_right">
        <img src={exclusive_image} alt="" className="w-64" />
      </div>
    </div>
  );
};

export default Offer;
