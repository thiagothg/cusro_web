import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/home/Home";
import Users from "../components/user/User";

export default (props) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/users" element={<Users />} />
    <Route path="*" element={<Home />} />
  </Routes>
);
