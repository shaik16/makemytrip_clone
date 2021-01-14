import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav class="navbar sticky-top navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="logo"
              width="120"
              height="40"
            />
          </a>
          <div class="d-flex">
            <button
              type="button"
              class="btn btn-primary px-4"
              data-bs-toggle="modal"
              data-bs-target="#loginBackdrop"
            >
              Login
            </button>
            <button
              type="button"
              class="btn btn-primary px-4 ms-2"
              data-bs-toggle="modal"
              data-bs-target="#signUpBackdrop"
            >
              Signup
            </button>
            <div class="dropdown ms-2">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shyam Mahato
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a class="dropdown-item" href="#">
                    My Profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    My Trips
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
