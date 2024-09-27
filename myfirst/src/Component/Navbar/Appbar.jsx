import { Link } from "react-router-dom";
import React, { useRef } from "react";

function Appbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ReactJs
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
          <div className=" navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Redux
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <Link className="nav-link" to="/counterapp">
                      Counter App
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/imageacn">
                      Image Actions
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hooks
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/usestate">
                      UseState
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useeffect">
                      UseEffect
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useref">
                      UseRef
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/usereducer">
                      UseReducer
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/usecontext">
                      UseContext
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/usecontextapi">
                      UseContext Api
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/usememo">
                      Usememo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/usecallback">
                      Usecallback
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/todo">
                      Todo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/learntodo">
                      Learning Todo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/password">
                      Password Genrator
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/passgen">
                      Password Genrator Prectice
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/signin">
                      Sign in
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/weather">
                      Weather Info
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/bgcolor">
                      BackGround Color
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Appbar;
