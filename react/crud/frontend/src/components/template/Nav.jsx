import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      <Link to="/">
        <i className="fa fa-home"></i> Inicio
      </Link>
      <Link to="/users">
        <i className="fa fa-users"></i> Usuarios
      </Link>
      <Link to="/billingCycles">
        <i className="fa fa-calendar"></i> Cicl. de Pagamento
      </Link>
    </nav>
  </aside>
);
