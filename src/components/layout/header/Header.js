import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" id="login" to="/wallet">
                      Wallet
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" id="login" to="/trading">
                      Trading
                    </Link>
                    </li>
                    <li className="nav-item">                   
                    <Link className="nav-link" to="/login">
                      Log In
                    </Link>
                  </li>
                  </ul>
            </nav>
          );
}

export default Header
