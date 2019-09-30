import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav wrapper red darken-3">
            <div className="container">
                <a className="brand-logo">Poké'Times</a>
                <ul className="right">
                    <li><Link to="/">Início</Link></li>
                    <li><NavLink to="/about">Sobre</NavLink></li>
                    <li><NavLink to="/contact">Contato</NavLink></li>
                </ul>
            </div>
        </nav>
    )
        
    
}
export default Navbar