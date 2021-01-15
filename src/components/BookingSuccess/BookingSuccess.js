import React, { Component } from "react";

export class BookingSuccess extends Component {
  render() {
    return (
      <>
        <div className="search-result-section bg-light">
          <div className="search-head pt-4 pb-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h4>Booking Successful</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5 " style={{ backgroundColor: "#ffffff" }}>
          <div className="row">
            <div className="col-lg-9">
              <div className="card bg-boxshadow">
                <div className="card-body">
                  <div
                    className="card-header"
                    style={{ backgroundColor: "#ffffff" }}
                  >
                    <div className="row">
                      <div className="col-lg-3">
                        <div className="departure-time">
                          <h5>Kolkata - Bengaluru</h5>
                          <p>Departure Fri, 15 Jan</p>
                        </div>
                      </div>
                      <div className="col-lg-9 text-end mt-2">
                        Flight Details
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row mb-5">
                      <div className="col-lg-2">
                        <div className="airline d-flex">
                          <img
                            src="https://media.glassdoor.com/sqll/2006190/indigo-airlines-squarelogo-1585307627941.png"
                            alt="log"
                            width="40"
                            height="40"
                          />
                          <div
                            className="flex-column"
                            style={{ marginLeft: "1rem" }}
                          >
                            <p>Indigo</p>
                            <p>6E-529</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="departure-time">
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: "1.2rem",
                            }}
                          >
                            20:45
                          </p>
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: "0.8rem",
                            }}
                          >
                            Fri, 15 Jan 21
                          </p>
                          <p style={{ fontSize: "0.8rem" }}>Kolkata</p>
                          <p style={{ fontSize: "0.8rem" }}>
                            Netaji Subhash Chandra Bose International Airport
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-lg-2"
                        style={{ marginLeft: "-3rem", marginRight: "2rem" }}
                      >
                        <div className="duration text-center">
                          <p>01 hr 20 mins</p>
                          <hr />
                          <p>Non-stop </p>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="arrival-time">
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: "1.2rem",
                            }}
                          >
                            22:10
                          </p>
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: "0.8rem",
                            }}
                          >
                            Fri, 15 Jan 21
                          </p>
                          <p style={{ fontSize: "0.8rem" }}>Bangalore</p>
                          <p style={{ fontSize: "0.8rem" }}>
                            Kempegowda International Airport
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
                          Fare Type
                        </p>
                        <p style={{ fontSize: "0.8rem" }}>Premium Economy</p>
                        <p style={{ fontWeight: "bold", fontSize: "1rem" }}>
                          Luggage
                        </p>
                        <p style={{ fontSize: "0.8rem" }}>20Kgs</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row mt-3">
                      <div class="col-sm-4">
                        <div className="card">
                          <div class="card-body">
                            <label>Name</label> - Shyam Janam Mahato
                            <label>Gender</label> - Male
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div class="col-sm-12">
                        <label>Country</label> - India <br />
                        <label>Phone</label> - 8272923244 <br />
                        <label>Email</label> - shyamjanammahto@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card bg-boxshadow">
                <div className="card-body">
                  <div className="row mb-2">
                    <label>Base Fare</label>
                    <div className="col-lg-8">
                      Adult(s) (1 X &#8377; 8,479):{" "}
                    </div>
                    <div className="col-lg-4">&#8377; 8,479</div>
                  </div>
                  <hr />
                  <div className="row mt-2 mb-2">
                    <label>Fee & Surcharges</label>
                    <div className="col-lg-8">Total fee & surcharges: </div>
                    <div className="col-lg-4">&#8377; 2,186</div>
                  </div>
                  <hr />
                  <div className="row mt-2 mb-2">
                    <label>Other Services</label>
                    <div className="col-lg-8">Charity</div>
                    <div className="col-lg-4">&#8377; 10</div>
                  </div>
                  <hr />
                  <div className="row mt-2 mb-2">
                    <div className="col-lg-6">
                      {" "}
                      <label>Total Amount</label>
                    </div>
                    <div className="col-lg-6">
                      <h3>
                        <strong>&#8377; 10,675</strong>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BookingSuccess;
