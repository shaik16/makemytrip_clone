import React, { Component } from "react";
import "./SearchResult.css";

import currentDate from "../CurrentDate";
import arrowIcon from "../../images/right-arrow.png";
import checkedIcon from "../../images/checked.png";

export class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateToday: currentDate(),
    };
  }

  render() {
    return (
      <div className="search-result-section bg-light">
        <div className="search-head pt-2 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-2 col-6 text-primary rounded py-2">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelectGrid"
                    aria-label="Floating label select example"
                  >
                    <option selected>Bengaluru</option>
                    <option value="1">Bengaluru</option>
                    <option value="2">GOA</option>
                    <option value="3">MUMBAI</option>
                  </select>
                  <label for="floatingSelectGrid">FROM</label>
                </div>
              </div>
              <div className="col-md-2 col-6 text-primary rounded py-2">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelectGrid"
                    aria-label="Floating label select example"
                  >
                    <option selected>GOA</option>
                    <option value="1">Bengaluru</option>
                    <option value="2">GOA</option>
                    <option value="3">MUMBAI</option>
                  </select>
                  <label for="floatingSelectGrid">TO</label>
                </div>
              </div>
              <div className="col-md-2 col-6 text-primary rounded py-2">
                <div class="form-floating">
                  <input
                    type="date"
                    className="form-control"
                    defaultValue={this.state.dateToday}
                  />
                  <label for="floatingSelectGrid">Departure Date</label>
                </div>
              </div>
              <div className="col-md-2 col-6 text-primary rounded py-2">
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelectGrid"
                    aria-label="Floating label select example"
                  >
                    <option selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  <label for="floatingSelectGrid">No of travellers</label>
                </div>
              </div>
              <div className="col-md-2 col-12 text-center text-primary rounded py-2 pt-3">
                <button type="submit" className="btn btn-primary px-5 ">
                  SEARCH
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container search-body bg-light">
          <div className="accordion-item search-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div className="row" style={{ width: "100%" }}>
                  <div className="col-lg-2 .d-none .d-sm-block"></div>
                  <div className="col-lg-2 col-sm-3">
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
                  <div className="col-lg-2 col-sm-3 d-none d-sm-block">
                    <div className="departure-time">
                      <h5>20:45</h5>
                      <p>Bengaluru</p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-3 d-none d-sm-block">
                    <div className="duration">
                      <p>01 hr 20 mins</p>
                      <hr />
                      <p>Non-stop </p>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-2 d-none d-sm-block">
                    <div className="arrival-time">
                      <h5>22:10</h5>
                      <p>Bengaluru</p>
                    </div>
                  </div>
                  <div className="col-lg-2 d-none"></div>
                </div>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="container">
                  <div className="row mb-4 d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-xl-none text-center">
                    <div className="col-4">
                      <h5>20:45</h5>
                      <p>Bengaluru</p>
                    </div>
                    <div className="col-3">
                      <img
                        src={arrowIcon}
                        alt="Arrow"
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                      ></img>
                    </div>
                    <div className="col-5">
                      <div className="arrival-time">
                        <h5>22:10</h5>
                        <p>Bengaluru</p>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4 d-lg-none d-xl-block d-md-none d-lg-block d-sm-none d-xl-none">
                    <div className="col-12 text-center">
                      <div className="duration">
                        <p>01 hr 20 mins</p>
                        <hr />
                        <p>Non-stop </p>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <h6>
                            <strong>Economy</strong>
                          </h6>
                          <span
                            className="text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Fare offered by airline
                          </span>
                          <div className="economy d-flex justify-content-between">
                            <div className="list-items">
                              <div className="mt-1 mb-1">
                                <img
                                  src={checkedIcon}
                                  width="15"
                                  height="15"
                                  alt="tick"
                                />
                                <p className="d-inline px-2">
                                  Cabin baggage 7 Kgs, Check-in baggage included
                                </p>
                              </div>
                              <div className="mt-1 mb-1">
                                <img
                                  src={checkedIcon}
                                  width="15"
                                  height="15"
                                  alt="tick"
                                />
                                <p className="d-inline px-2">
                                  Cancellation fee starting ₹ 3,500
                                </p>
                              </div>
                              <div className="mt-1 mb-1">
                                <img
                                  src={checkedIcon}
                                  width="15"
                                  height="15"
                                  alt="tick"
                                />
                                <p className="d-inline px-2">
                                  Date change fee starting ₹ 3,000
                                </p>
                              </div>
                              <div className="mt-1 mb-1">
                                <img
                                  src={checkedIcon}
                                  width="15"
                                  height="15"
                                  alt="tick"
                                />
                                <p className="d-inline px-2">
                                  Free seats available
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <h2 className="pt-2 text-center">
                            <strong> &#8377; 10,665</strong>
                          </h2>
                        </div>
                        <div className="col-md-4 text-center pt-3">
                          <button className="btn btn-primary book-now">
                            BOOK NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row mt-4">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-6">
                          <h6>
                            <strong>Business</strong>
                          </h6>
                          <span
                            className="text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Fare offered by airline
                          </span>
                          <div className="economy d-flex justify-content-between">
                            <div className="list-items">
                              <div className="mt-1 mb-1">
                                <img
                                  src={checkedIcon}
                                  width="15"
                                  height="15"
                                  alt="tick"
                                />
                                <p className="d-inline px-2">
                                  Cabin baggage 7 Kgs, Check-in baggage included
                                </p>
                              </div>
                              <div className="mt-1 mb-1">
                                <img
                                  src={checkedIcon}
                                  width="15"
                                  height="15"
                                  alt="tick"
                                />
                                <p className="d-inline px-2">
                                  Cancellation fee starting ₹ 3,500
                                </p>
                              </div>
                              <div className="mt-1 mb-1">
                                <img
                                  src={checkedIcon}
                                  width="15"
                                  height="15"
                                  alt="tick"
                                />
                                <p className="d-inline px-2">
                                  Date change fee starting ₹ 3,000
                                </p>
                              </div>
                              <div className="mt-1 mb-1">
                                <img
                                  src={checkedIcon}
                                  width="15"
                                  height="15"
                                  alt="tick"
                                />
                                <p className="d-inline px-2">
                                  Free seats available
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <h2 className="pt-2 text-center">
                            <strong> &#8377; 10,665</strong>
                          </h2>
                        </div>
                        <div className="col-md-4 text-center pt-3">
                          <button className="btn btn-primary book-now">
                            BOOK NOW
                          </button>
                        </div>
                      </div>
                    </div>
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

export default SearchResults;
