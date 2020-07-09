import React from 'react'
import {Link} from 'react-router-dom'
// import './header.css'

function Header() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Otra cosa
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Otra cosa 2
                    </Link>
                  </li>
                  </ul>
            </nav>
          );
}

export default Header
