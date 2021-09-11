import React from "react";
import logo from "../view/logo.gif";

function Header() {
  return (
    <>
      <header id="header">
        <div className="navbar navbar-inverse" role="banner">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <a className="navbar-brand" href="index.html">
                <h1 className="App-logo-text">
                  <img src={logo} className="App-logo" alt="logo" />
                  Icat
                </h1>
              </a>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li className="dropdown">
                  <a href="#features">Features</a>
                </li>
                <li className="dropdown">
                  <a href="#timeline">TimeLine</a>
                </li>
                <li className="dropdown">
                  <a href="#airdrop">Airdrop</a>
                </li>
                <li>
                  <a href="#subscribe">NewsLetter</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
