import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-[#0B1A3A] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-7xl font-bold">InsigtPM</h1>
          <br />
          <p className="text-white text-normal">
            Culture | Empower | Measure | Results
          </p>
        </div>
      </div>

      <div className="w-1/2 bg-white flex items-center justify-center">
        <form className="flex flex-col w-80 font-[Inter]">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sign in</h2>

          <label className="mb-1 text-gray-700 text-sm font-medium">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter your email"
            className="mb-4 p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="mb-1 text-gray-700 text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="mb-4 p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <FaEyeSlash className="w-5 h-5" />
            ) : (
              <FaEye className="w-5 h-5" />
            )}
          </button>

          <div className="flex justify-between items-center mb-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="font-medium text-sm w-full bg-[#1677ff] text-white py-3 rounded-lg hover:bg-[#125ecc] transition-colors duration-200"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
