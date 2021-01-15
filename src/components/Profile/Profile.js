import React, { Component } from "react";

import checkedIcon from "../../images/checked.png";
import profileUserIcon from "../../images/profile-user.png";
import lockIcon from "../../images/lock.png";

export class Profile extends Component {
  render() {
    return (
      <>
        <div className="search-result-section bg-light">
          <div className="search-head pt-4 pb-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h4>My Profile</h4>
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
                  className="card-header d-flex "
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <img
                    src={profileUserIcon}
                    alt="profile-logo"
                    height="20"
                    width="20"
                    className="mt-1"
                  />
                  <h4 className="mx-1">Profile</h4>
                </div>
                <div className="card-body">
                  <div className="row mt-3">
                    <div className="col-lg-4">
                      <label>First & Middle Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First & middle name"
                        value="Shyam Janam"
                      />
                    </div>
                    <div className="col-lg-4">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        value="Mahato"
                      />
                    </div>
                    <div className="col-lg-4">
                      <label>Gender</label>
                      <select className="form-control">
                        <option value="0">Select gender</option>
                        <option value="1" selected>
                          Male
                        </option>
                        <option value="2">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-4">
                      <label>Marital Status</label>
                      <select className="form-control">
                        <option value="0">Select</option>
                        <option value="1" selected>
                          Single
                        </option>
                        <option value="2">Married</option>
                      </select>
                    </div>
                    <div className="col-lg-4">
                      <label>Birthday</label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Birthday"
                        value="1996-07-29"
                      />
                    </div>
                    <div className="col-lg-4">
                      <br />
                      <button type="submit" className="btn btn-primary px-5 ">
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
          <div className="row mt-4 mb-5">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <div className="card bg-boxshadow">
                <div
                  className="card-header d-flex"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <img
                    src={lockIcon}
                    alt="lock-logo"
                    height="20"
                    width="20"
                    className="mt-1"
                  />
                  <h4 className="mx-1">Login Details</h4>
                </div>
                <div className="card-body">
                  <div className="row mt-3">
                    <div className="col-lg-4">
                      <label>Mobile No.</label>
                    </div>
                    <div className="col-lg-4">+91 8272923244</div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-4">
                      <label>Email</label>
                    </div>
                    <div className="col-lg-6">
                      shyamjanammahto@gmail.com
                      <span className="mx-4">
                        <img
                          src={checkedIcon}
                          alt="Checked"
                          width="20px"
                          height="20px"
                        ></img>
                        &nbsp;Verified
                      </span>
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

export default Profile;
