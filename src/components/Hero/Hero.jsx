import "./hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="flex justify-between mt-20">
      <div className="hero-left">
        <h2 className="text-xl">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-icon flex">
            <p className="text-7xl font-medium">new</p>
            <img src={hand_icon} alt="" className="h-20 w-20" />
          </div>
          <p className="text-7xl font-medium">collections</p>
          <p className="text-7xl font-medium">for everyone</p>
        </div>

        <div className="hero-latest-btn">
          <button className="px-8 bg-red-500 py-3 mt-10 text-white cursor-pointer rounded-3xl">
            Latest Collection
          </button>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
