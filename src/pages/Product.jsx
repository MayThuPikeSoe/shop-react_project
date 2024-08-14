/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { ShopContent } from "../components/content/ShopContent";
import { useParams } from "react-router-dom";
import BreadCrum from "../components/breadcrum/BreadCrum";
import ProductDisplay from "../components/prodcutDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContent);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
