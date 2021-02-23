import React, { Component } from 'react';
import CadastroService from './cadastroService';

export class Cadastro extends Component {
    constructor() {
        super();
        this.state = {};
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeEndereco = this.onChangeEndereco.bind(this);
        this.onChangeCpf = this.onChangeCpf.bind(this);
        this.onChangeRg = this.onChangeRg.bind(this);
        this.onChangeDateBirth = this.onChangeDateBirth.bind(this);
        this.onChangeStack = this.onChangeStack.bind(this);
    }

    onChangeNome(e) {
        this.setState({
            nome: e.target.value
        });
    }
    onChangeEndereco(e) {
        this.setState({
            endereco: e.target.value
        });
    }
    onChangeCpf(e) {
        this.setState({
            cpf: e.target.value
        });
    }
    onChangeRg(e) {
        this.setState({
            rg: e.target.value
        });
    }
    onChangeDateBirth(e) {
        this.setState({
            date_birth: e.target.value
        });
    }
    onChangeStack(e) {
        this.setState({
            stack: e.target.value
        });
    }
    
    save() {
        var data = {
            nome: this.state.nome,
            endereco: this.state.endereco,
            cpf: this.state.cpf,
            rg: this.state.rg,
            date_birth: this.state.date_birth,
            stack: this.state.stack
        };
        CadastroService.create(data)
        .then(response => {
            this.setState({
              nome: response.data.nome,
              endereco: response.data.endereco,
              cpf: response.data.cpf,
              rg: response.data.rg,
              date_birth: response.data.date_birth,
              stack: response.data.stack,
    
              submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    render() {
        return (
            <div className="row cadastro">

                <form className="cadastro col-md-6 offset-md-3">
                    <div>
                        <label htmlFor="nome">Nome</label>
                        <div className="row">
                            <div className="input-field col s12">

                                <input type="text"
                                    class="form-control"
                                    id="nome"
                                    name="nome"
                                    value={this.state.nome}
                                    onChange={this.onChangeNome}
                                    required />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="endereco">Endereco</label>
                        <div className="row">
                            <div className="input-field col s12">

                                <input
                                    type="text"
                                    class="form-control"
                                    name="endereco"
                                    value={this.state.endereco}
                                    onChange={this.onChangeEndereco}
                                    required />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                        &nbsp;&nbsp;&nbsp;<label htmlFor="cpf">CPF</label>
                            <div className="input-field col s6">

                                <input
                                    class="form-control"
                                    type="text"
                                    name="cpf"
                                    value={this.state.cpf}
                                    onChange={this.onChangeCpf}
                                    required />
                            </div>
                        </div>
                        <div>
                        &nbsp;&nbsp;&nbsp;<label htmlFor="rg">RG</label>
                            <div className="input-field col s6">

                                <input
                                class="form-control"
                                    type="text"
                                    name="rg"
                                    value={this.state.rg}
                                    onChange={this.onChangeRg}
                                    required />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="date_birth">Data de Nascimento</label>
                        <div className="row">
                            <div className="input-field col s12">

                                <input
                                    class="form-control"
                                    type="date"
                                    name="date_birth"
                                    value={this.state.date_birth}
                                    onChange={this.onChangeDateBirth}
                                    required />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="stack">Stacks</label>
                        <div className="row">
                            <div className="input-field col s12">

                                <textarea
                                    class="form-control"
                                    id="stack"
                                    type="text"
                                    name="stack"
                                    value={this.state.stack}/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">

                        <button onClick={this.save()} className="btn btn-success">
                            salvar
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}