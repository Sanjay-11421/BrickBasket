import { TbBrandDatabricks } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black/25 sticky top-0 backdrop-blur-lg py-2.5 flex items-center justify-between font-lato border-b-0.5 border-b-black/5 px-3 lg:px-32">
        <div className="mx-2 flex items-center">
          <TbBrandDatabricks className="text-glow drop-shadow-lg text-2xl drop-shadow-light glowing" />
          <h1 className="text-white ml-1 text-lg sm:text-xl font-extrabold tracking-wide glowing">
            BrickBasket
          </h1>
        </div>
        <div className="text-white/60 hidden  space-x-6 text-xs mx-3 md:flex items-center">
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
        <div className="flex items-center space-x-4 md:space-x-6 md:mx-4 text-white/80">
          <button className="hover:text-white transition cursor-pointer">
            <CgProfile />
          </button>
          <button className="hover:text-white  transition cursor-pointer">
            <FaShoppingCart className="relative" />
            <p className="text-xs absolute translate-x-1.5 -translate-y-0.5  font-extrabold shadow-2xl ">
              0
            </p>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
