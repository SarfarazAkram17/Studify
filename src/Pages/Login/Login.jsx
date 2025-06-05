import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Authentication/AuthContext";
import { toast } from "react-toastify";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {

  return (
    <div className="px-4">
      <div className="card bg-base-100 w-full max-w-sm mx-auto my-12 shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold mb-4">Login Now!</h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              className="input mb-4 text-lg placeholder:text-[15px] placeholder:font-bold rancho"
              name="email"
              placeholder="Enter your email"
            />
            <label className="label font-semibold">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input text-lg placeholder:text-[15px] placeholder:font-bold rancho"
                name="password"
                placeholder="Enter your password"
              />
              {showPassword ? (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-6 cursor-pointer z-10"
                  size={17}
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-6 cursor-pointer z-10"
                  size={17}
                />
              )}
            </div>
            <button className="btn btn-neutral mt-4 text-2xl">Login</button>
            <p className="text-xs my-2">
              Don't have an account ? Please{" "}
              <Link
                state={location.state}
                to="/register"
                className="underline text-blue-500 font-semibold mt-10"
              >
                Register
              </Link>
            </p>
          </form>
            <div className="divider my-4">OR</div>
            <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
