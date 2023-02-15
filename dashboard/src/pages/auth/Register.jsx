import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUserLine,
} from "react-icons/ri";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-secondary-100 p-8 rounded-xl  w-auto lg:w-[450px]">
      <h1 className="text-center text-3xl uppercase font-bold tracking-[5px] text-white mb-8">
        Create <span className="text-primary">account</span>
      </h1>
      <form className="mb-8">
        <button className="flex items-center py-3 px-4 gap-4 bg-secondary-900 w-full justify-center rounded-full mb-8 text-gray-100">
          <img
            src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
            className="w-4 h4"
          />
          Sign up with google
        </button>
        <div className="relative mb-4">
          <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="text"
            className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder="First Name"
          />
        </div>
        <div className="relative mb-4">
          <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="text"
            className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder="Last Name"
          />
        </div>
        <div className="relative mb-4">
          <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="email"
            className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder="Email Address"
          />
        </div>
        <div className="relative mb-8">
          <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2  text-primary" />
          <input
            type="password"
            className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder="Password"
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer  text-primary"
            />
          ) : (
            <RiEyeLine
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer  text-primary"
            />
          )}
        </div>
        <div className="relative mb-8">
          <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2  text-primary" />
          <input
            type="password"
            className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder="Confirm password"
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer  text-primary"
            />
          ) : (
            <RiEyeLine
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer  text-primary"
            />
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-primary text-white uppercase  font-bold text-sm w-full py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
          >
            Sign up
          </button>
        </div>
      </form>
      <span className="flex items-center gap-2 justify-center">
        Already have an account?
        <Link
          to="/auth"
          className="text-primary hover:text-gray-100 transition-colors"
        >
          Log in
        </Link>
      </span>
    </div>
  );
}

export default Register;
