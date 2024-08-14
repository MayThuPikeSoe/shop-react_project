import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContentProvider from "./components/content/ShopContent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContentProvider>
    <App />
  </ShopContentProvider>
);
