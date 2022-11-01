import * as React from "react";

import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";

import { Route, Routes } from "react-router-dom";
import SignupPage from "./Pages/Signup";

const RoutesComponent: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default RoutesComponent;
