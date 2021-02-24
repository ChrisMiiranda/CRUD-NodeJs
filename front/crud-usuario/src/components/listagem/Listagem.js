import React, { Component } from "react";
import ListagemDataService from "./listagemService";

export class Listagem extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveUsuarios = this.retrieveUsuarios.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.removeUsuarios = this.removeUsuarios.bind(this);
        this.searchTitle = this.searchTitle.bind(this);

        this.state = {
            usuarios: [],
            currentUsuario: null,
            currentIndex: -1,
            searchTitle: ""
        };
    }

    componentDidMount() {
        this.retrieveUsuarios();
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }

    retrieveUsuarios() {
        ListagemDataService.getAll()
            .then(response => {
                this.setState({
                    usuarios: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveUsuarios();
        this.setState({
            currentUsuario: null,
            currentIndex: -1
        });
    }

    removeUsuarios() {
        ListagemDataService.delete(this.usuarios.usuarioId)
            .then(response => {
                console.log(response.data);
                this.refreshList();
            })
            .catch(e => {
                console.log(e);
            });
    }

    searchTitle() {
        ListagemDataService.findByTitle(this.state.searchTitle)
            .then(response => {
                this.setState({
                    usuarios: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { searchTitle, usuarios, currentUsuario, currentIndex } = this.state;

        return (
            <div className="lista row justify-content-center">
                <div className="col-md-10">
                    <ul className="list-group">
                        {usuarios &&
                            usuarios.map((usuario, index) => (
                                <li
                                    className="usuario list-group-item"
                                    key={index}
                                >
                                    <div className="row">
                                        <div className="coluna-1 col-sm-6">
                                            <p className="dados">{usuario.nome}</p>
                                            <p className="dados">{usuario.endereco}</p>
                                            <p className="dados">{usuario.cpf} &nbsp;&nbsp;&nbsp; {usuario.rg}</p>
                                            <p className="dados" id="birth">{usuario.date_birth}</p>
                                        </div>
                                        <div className="coluna-2 col-sm-6">
                                            <p className="dados">{usuario.stack}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="botao-del">
                                            <button
                                                className="btn btn-sm btn-danger btn-block"
                                                onClick={this.removeUsuarios}
                                                >
                                                    Deletar
                                            </button>
                                        </div>
                                        <div className="botao-alt">
                                            <button
                                                className="btn btn-sm btn-primary btn-block"
                                                >
                                                    Alterar
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        );
    }
}
