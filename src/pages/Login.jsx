import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="login_container m-auto">
        <h1 className="font-bold text-xl">Sign Up</h1>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className="input h-12 border block mb-4 px-5"
          />
          <input
            type="email"
            placeholder="Email address"
            className="input h-12 border block mb-4 px-5"
          />
          <input
            type="password"
            placeholder="Password"
            className="input h-12 border block mb-4 px-5"
          />
        </div>
        <button className="bg-red-600 text-white h-12">Continue</button>
        <p className="mt-4">
          Already have an account?{" "}
          <span className="text-red-500 ">login here</span>
        </p>
        <div className="flex mt-4">
          <input type="checkbox" className="w-5 h-5 mr-2" />
          <p className="text-sm">By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
