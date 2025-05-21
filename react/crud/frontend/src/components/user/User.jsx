import React, { Component } from "react";
import Main from "../template/Main";
import axios from "axios";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir!",
};

const baseUrl = "http://localhost:3001/users";
const initialState = {
  user: { name: "", email: "" },
  list: [],
};

export default class User extends Component {
  state = { ...initialState };

  componentWillUnmount() {
    axios(baseUrl).then((response) => {
      this.setState({ list: response.data });
    });
  }

  clear() {
    this.setState({ user: initialState.user });
  }
  save() {
    const user = this.state.user;
    const method = user.id ? "PUT" : "POST";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method.toLowerCase()](url, user)
      .then((response) => {
        const list = this.getUpdatedList(response.data);
        this.setState({ user: initialState.user, list });
      })
      .catch((err) => {
        console.error("Error saving user:", err);
      });
  }

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter((u) => u.id !== user.id);
    if (add) list.unshift(user);
    return list;
  }

  updateField(event) {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  renderForm() {
    return (
      <div className="form">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={this.state.user.name}
            onChange={(e) => this.updateField(e)}
            placeholder="Digite o nome..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={this.state.user.email}
            onChange={(e) => this.updateField(e)}
            placeholder="Digite o e-mail..."
          />
        </div>
      </div>
    );
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>{this.renderTableRows()}</tbody>
      </table>
    );
  }

  load(user) {
    this.setState({ user });
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then((response) => {
      const list = this.getUpdatedList(user, false);
      this.setState({ list });
    });
  }
  renderTableRows() {
    return this.state.list.map((user) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <button className="btn btn-warning" onClick={() => this.load(user)}>
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="btn btn-danger ml-2"
            onClick={() => this.remove(user)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <Main {...headerProps}>
        <div className="display-4">Usuário</div>
        <hr />
        <p className="mb-0">Cadastro de usuários</p>
        {this.renderForm()}
        <button className="btn btn-primary mt-3" onClick={() => this.save()}>
          Salvar
        </button>
        {this.renderTable()}
      </Main>
    );
  }

  // componentDidMount() {
  //   fetch(baseUrl)
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ list: data }));
  // }
}
// Compare this snippet from frontend/src/components/template/Footer.jsx:
