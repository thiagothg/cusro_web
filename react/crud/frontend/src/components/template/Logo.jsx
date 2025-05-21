import "./Logo.css";
import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";

export default (props) => (
  <aside className="logo">
    <Link to="/" className="logo">
      <img src={Logo} alt="Logo" />
    </Link>
  </aside>
);
