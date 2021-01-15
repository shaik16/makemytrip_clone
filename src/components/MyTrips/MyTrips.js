import React, { Component } from "react";

import calendarIcon from "../../images/calendar.png";

export class MyTrips extends Component {
  render() {
    return (
      <>
        <div className="search-result-section bg-light">
          <div className="search-head pt-4 pb-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h4>My Bookings</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5" style={{ backgroundColor: "#ffffff" }}>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <div className="card bg-boxshadow">
                <div
                  className="card-header d-flex p-3"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <img
                    src={calendarIcon}
                    alt="profile-logo"
                    height="20"
                    width="20"
                    className="mt-1"
                  />
                  <h5 className="mx-1">My Bookings</h5>
                </div>
                <div className="card-body">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Upcoming
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Cancelled
                      </a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Completed
                      </a>
                    </li>
                  </ul>
                  <div class="tab-content" id="pills-tabContent">
                    <div
                      class="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      Consequat occaecat ullamco amet non eiusmod nostrud dolore
                      irure incididunt est duis anim sunt officia. Fugiat velit
                      proident aliquip nisi incididunt nostrud exercitation
                      proident est nisi.
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      Irure magna elit commodo anim ex veniam culpa eiusmod id
                      nostrud sit cupidatat in veniam ad. Eiusmod consequat eu
                      adipisicing minim anim aliquip cupidatat culpa excepteur
                      quis.
                    </div>
                    <div
                      class="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      Occaecat sit eu exercitation irure Lorem incididunt
                      nostrud.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </>
    );
  }
}

export default MyTrips;
