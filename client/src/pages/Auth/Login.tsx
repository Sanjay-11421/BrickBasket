import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="h-[100vh] flex justify-center items-center bg-gradient-to-br from-dark via-primary to-light font-lato">
      <div className="bg-black/30 p-8 rounded-2xl shadow-2xl">
        <div className="md:px-16">
          <h1 className="text-white text-center text-2xl md:text-4xl font-bold">
            Welcome Back
          </h1>
          <p className="text-white text-center text-sm mt-2">
            Log in to your account
          </p>
        </div>
        <form className="flex flex-col mt-4 md:mt-8 w-full">
          <input
            type="email"
            className="bg-white/10 px-3 py-2 text-white md:my-4 my-2 text-sm md:text-lg rounded-md focus:outline-0 focus:bg-white/15 "
            placeholder="Email"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="bg-white/10 px-3 py-2 text-white my-3 text-sm md:text-lg md:my-4 rounded-md focus:outline-0 focus:bg-white/15 pr-10 w-full"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 focus:outline-0 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button className="mt-4 text-sm md:text-lg bg-red-500 text-white py-2 font-bold rounded-md cursor-pointer tracking-widest hover:bg-red-600 transition shadow-md shadow-red-600">
            Login
          </button>
        </form>
        <p className="text-center text-white mt-6 font-light text-sm">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-red-500 cursor-pointer hover:text-red-600 transition font-normal"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
