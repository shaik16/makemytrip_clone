import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container mt-5 " style={{ backgroundColor: "#ffffff" }}>
        <div className="row mb-2">
          <div className="col-lg-9">
            <div className="card bg-boxshadow">
              <div
                className="card-header"
                style={{ backgroundColor: "#ffffff" }}
              >
                <h6>* Important Instructions</h6>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <p>
                      Certify your health status through the Aarogya Setu app or
                      the self-declaration form at the airport.
                    </p>
                  </li>
                  <li>
                    <p>
                      Certify your health status through the Aarogya Setu app or
                      the self-declaration form at the airport.
                    </p>
                  </li>
                  <li>
                    <p>
                      Certify your health status through the Aarogya Setu app or
                      the self-declaration form at the airport.
                    </p>
                  </li>
                  <li>
                    <p>
                      Certify your health status through the Aarogya Setu app or
                      the self-declaration form at the airport.
                    </p>
                  </li>
                  <li>
                    <p>
                      Certify your health status through the Aarogya Setu app or
                      the self-declaration form at the airport.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card bg-boxshadow">
              <div className="card-body">
                <div className="row mb-2">
                  <label>Cancellation Fees Apply</label>
                  <div className="col-lg-8 mt-2">
                    <p style={{ fontSize: "0.9rem" }}>
                      A penalty of upto ₹ 4,220 will be charged by the airline &
                      by MMT based on how close to the departure date you
                      cancel.
                    </p>
                  </div>
                  <div className="col-lg-4 mt-2">
                    <h5>&#8377; 8,479</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
