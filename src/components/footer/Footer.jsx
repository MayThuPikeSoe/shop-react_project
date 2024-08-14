import "./footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagran_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 footer">
      <div className="footer_logo flex items-center gap-8 ">
        <img src={footer_logo} alt="" />
        <p className="text-gray-800 font-bold text-4xl">SHOPPER</p>
      </div>
      <ul className="footer_links flex text-gray-800 gap-10 text-xl">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-icon flex gap-8">
        <div className="footer_icon_item p-4">
          <img src={instagran_icon} alt="" />
        </div>
        <div className="footer_icon_item p-4">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer_icon_item p-4">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <hr className=" text-gray-600 border mx-auto" />
      <div className="footer_copyright flex flex-col items-center gap-9 mb-3">
        <p>Copyright @ 2024 -All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
