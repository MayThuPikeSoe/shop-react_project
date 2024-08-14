import Item from "../item/Item";
import "./popular.css";
import data_product from "../Assets/data";
const Popular = () => {
  return (
    <div className="popular text-center">
      <h1 className="mb-6">POPULAR IN WOMEN</h1>
      <hr className="w-52 h-2 border bg-gray-900 mx-auto" />
      <div className="popular-item flex mt-6 gap-10">
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

export default Popular;
