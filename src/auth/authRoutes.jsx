import React from "react";
import { Route, Routes } from "react-router-dom";
// import Login from "./Login";
import Registration from "./Registration";

const AuthRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/register" element={<Registration />} />
    </Routes>
  );
};

export default AuthRoutes;
