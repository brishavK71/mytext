import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand text-decoration-none " href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-a active text-decoration-none text-reset mx-4" aria-current="page" href="/">{props.navcomp1}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-a text-decoration-none text-reset p-3" href="/about">{props.navcomp2}</a>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} m-1`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" // eslint-disable-next-line
                                role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'dark' ? 'light' : 'dark'}Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    navcomp1: PropTypes.string,
    navcomp2: PropTypes.string,
}

Navbar.defaultProps = {
    title: "set title here",
    navcomp1: "set 1st component here",
    navcomp2: "set 2st component here"
}