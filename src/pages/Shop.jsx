import Hero from "../components/Hero/Hero";
import NewCollection from "../components/newcollection/NewCollection";
import NewLetter from "../components/newLetter/NewLetter";
import Offer from "../components/offer/Offer";
import Popular from "../components/popular/Popular";
import Login from "./Login";

const Shop = () => {
  return (
    <div>
      <Login />
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewLetter />
    </div>
  );
};

export default Shop;
