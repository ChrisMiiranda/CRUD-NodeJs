import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg justify-content-center">
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mx-auto text-center">
                        <li className="navbar-item">
                            <Link to="/listagem" className="nav-link">Listagem</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/cadastro" className="nav-link">Cadastro</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}