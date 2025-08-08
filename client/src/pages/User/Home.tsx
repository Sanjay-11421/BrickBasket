import Navbar from "../../components/Navbar";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-dark via-primary to-light min-h-[100vh]">
      <Navbar />
      <div className="font-lato text-white flex flex-col  justify-center items-center min-h-[90vh] mx-6 sm:mx-4">
        <h1 className="font-extrabold text-center text-2xl  md:text-4xl lg:w-[70%]">
          Book Quality Construction Materials Online Fast, Reliable, On-Time
          Delivery
        </h1>
        <p className="md:text-sm text-xs max-w-2xl mt-4 text-center text-white/60">
          Your one-stop destination for high-quality, innovative, and
          sustainable construction materials, delivered with futuristic
          efficiency.
        </p>
        <div className="w-full flex justify-center items-center">
          <div className="relative md:w-1/2 mt-8">
            <input
              className="w-full px-5 pr-14 py-2 rounded-2xl text-sm
                 bg-white/5 backdrop-blur-lg border border-white/20
                 text-white placeholder-white/70
                 focus:outline-none focus:bg-white/10
                 shadow-lg"
              placeholder="Search for materials"
            />

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2
                 bg-primary backdrop-blur-lg border border-white/20
                 text-white px-5 py-2.5 rounded-2xl text-sm font-bold cursor-pointer"
            >
              <FaSearch className="text-white/70" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
