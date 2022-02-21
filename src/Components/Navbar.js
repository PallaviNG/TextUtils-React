import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar({ title, mode, toggleMode, darkColors }) {
  let handleBgColor = (color) => {
    document.body.style.backgroundColor = color;
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          {mode==="dark" ? <><h6 style={{color:"white"}}>Select Color: &nbsp;</h6><div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-sm" style={{backgroundColor:darkColors[0]}} onClick={(color) =>handleBgColor(darkColors[0])}></button>
            <button type="button" className="btn btn-sm" style={{backgroundColor:darkColors[1]}} onClick={(color) =>handleBgColor(darkColors[1])}></button>
            <button type="button" className="btn btn-sm" style={{backgroundColor:darkColors[2]}} onClick={(color) =>handleBgColor(darkColors[2])}></button>
          </div></>:null}

          <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'} mx-3`}>
            <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set Title Here",
};
