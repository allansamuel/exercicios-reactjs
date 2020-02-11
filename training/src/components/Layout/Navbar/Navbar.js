import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

export class Navbar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="navbar container">
                <Link>Imagine uma logo</Link>
                <div>
                    <ul className="navbar-links">
                        <li>
                            <a href="#ComoFunciona">Como Funciona?</a>
                        </li>
                        <li>
                            <Link to="">Personagens</Link>
                        </li>
                        <li>
                            <Link to="">Livros</Link>
                        </li>
                        <li>
                            <Link to="">Fale conosco</Link>
                        </li>
                        <li>
                            <Link to="">Seja um colaborador</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

