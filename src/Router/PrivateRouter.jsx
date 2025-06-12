import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Authentication/AuthContext";
import Lottie from "lottie-react";
import lottieLoading from "../assets/loading.json";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Lottie loop={true} animationData={lottieLoading} className="h-[40vh] w-auto"></Lottie>;
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRouter;
