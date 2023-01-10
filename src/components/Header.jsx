import React from "react";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import useIsAuth from "../hooks/isAuth";

import { logout } from "../redux/actions/loginActions";

const Header = () => {
  const { data, result } = useIsAuth();
  const dispatch=useDispatch()

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to={"/"}>
                Home
              </Link>
            </li>
            {data && result && (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to={"/profile"}>
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <a onClick={()=>dispatch(logout())} className="nav-link active" >
                    Logout
                  </a>
                </li>
              </>
            )}
            {!data && result && (
              <>
                <Link className="nav-link active" to={"/login"}>
                  Login
                </Link>
                <Link className="nav-link active" to={"/register"}>
                  Register
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
