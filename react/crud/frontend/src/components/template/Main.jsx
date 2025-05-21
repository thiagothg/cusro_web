import Header from "./Header";
import "./Main.css";
import React from "react";

export default (props) => (
  <React.Fragment>
    <Header {...props} />
    <main className="content container-fluid">
      Conteudo
      <div className="p-3 mt-3">{props.children}</div>
    </main>
  </React.Fragment>
);
