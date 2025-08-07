import { TbBrandDatabricks } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black/15 backdrop-blur-lg py-2.5 flex items-center justify-between font-lato border-b-1 border-b-black/10 px-3 lg:px-32">
        <div className="mx-2 flex items-center">
          <TbBrandDatabricks className="text-white" />
          <h1 className="text-white ml-1 text-lg font-extrabold tracking-wide">
            BrickBasket
          </h1>
        </div>
        <div className="text-white/60 space-x-4 text-xs mx-3 flex items-center">
          <button className="hover:text-white transition cursor-pointer">
            Home
          </button>
          <button className="hover:text-white transition cursor-pointer">
            Products
          </button>
          <button className="hover:text-white transition cursor-pointer">
            Orders
          </button>
        </div>
        <div className="flex items-center space-x-6 mx-4 text-white/80">
          <button className="hover:text-white transition cursor-pointer">
            <CgProfile />
          </button>
          <button className="hover:text-white  transition cursor-pointer">
            <FaShoppingCart className="relative" />
            <p className="text-xs absolute translate-x-1.5 -translate-y-0.5 font-extrabold shadow-2xl ">
              3
            </p>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
