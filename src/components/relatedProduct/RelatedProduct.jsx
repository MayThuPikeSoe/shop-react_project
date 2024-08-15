import "./relatedProduct.css";
import data_product from "../Assets/data";
import Item from "../item/Item";
const RelatedProduct = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center my-10">
      <h1 className="text-3xl">Related Product</h1>
      <hr className="w-52 h-2 border bg-gray-900 mx-auto" />

      <div className="items flex  gap-5">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
