import "./newletter.css";
const NewLetter = () => {
  return (
    <div className="new_letter flex flex-col justify-center items-center px-64 gap-10 w-auto mt-10">
      <h1 className="text-gray-500 text-3xl font-bold">Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter snd stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" className="w-96 h-12 border border-gray-400 rounded-3xl px-4" />
        <button className="px-7 bg-gray-800 text-white py-3 rounded-3xl -ml-4">Subscribe</button>
      </div>
    </div>
  );
};

export default NewLetter;
