import "./newcollection.css";
import new_collection from "../Assets/new_collections";
import Item from "../item/Item";
const NewCollection = () => {
  return (
    <div className="new_collection mt-10">
      <h1 className="mb-5 text-2xl">NEW COLLECTION</h1>
      <hr />
      <div className="collections grid grid-cols-4 gap-7">
        {new_collection.map((item, i) => {
       return   <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />;
        })}
      </div>
    </div>
  );
};

export default NewCollection;
