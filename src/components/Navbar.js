import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const history = useHistory();

  const handleLogout = () => {
    window.localStorage.removeItem("isAuth");
    history.push("/");
  };
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary better-bootstrap-nav-left  fixed-top py-1">
          <div className="container-fluid">
            <button
              className="navbar-toggler border-0"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <a
              className="navbar-brand mx-auto"
              href="/"
              style={{ padding: "0.5rem 0" }}
            >
              <span
                style={{ fontSize: "25px", fontWeight: "bold" }}
                className="text-white"
              >
                MovieDB
              </span>
            </a>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav offset-4 ">
                <li role="presentation" className="nav-item">
                  <Link to="/homepage" style={{ textDecoration: "none" }}>
                    <span className="nav-link font-weight-bold px-4 text-white cursor">
                      Home
                    </span>
                  </Link>
                </li>
                <li role="presentation" className="nav-item">
                  <Link to="/bookmarks" style={{ textDecoration: "none" }}>
                    <span className="nav-link font-weight-bold px-4 text-white cursor">
                      Bookmarks
                    </span>
                  </Link>
                </li>
                <li role="presentation" className="nav-item">
                  <Link to="/upcomingmovies" style={{ textDecoration: "none" }}>
                    <span className="nav-link font-weight-bold px-4 text-white cursor">
                      Upcoming Movies
                    </span>
                  </Link>
                </li>
                <li role="presentation" className="nav-item">
                  <div
                    className="nav-link font-weight-bold px-4 text-white cursor"
                    onClick={handleLogout}
                  >
                    {" "}
                    Logout
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
