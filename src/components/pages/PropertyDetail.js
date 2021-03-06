import React from "react";
import { Link } from "react-router-dom";

function PropertyDetail() {
  return (
    <div className="oka-page">
      <div className="container css-theme">
        <div className="table-row css-row">
        <div
            className="table__column css-column"
            style={{ marginTop: "58px" }}
          >
            <div className="table__detail css-detail">
              <span>
                <div className="slidebar css-sidebar">
                  <Link
                    key="1"
                    to="/"
                    className="slidebar-item css-check"
                  >
                    <div className="flexbox css-nb">
                      <span className="text css-nb-text">
                        General Information
                      </span>
                      <span
                        className="bagde__number bagde__color bagde__pill css-bagde"
                        style={{
                          paddingRight: "10px",
                          paddingLeft: "10px",
                        }}
                      >
                        7
                      </span>
                    </div>
                  </Link>
                  <Link
                    key="1"
                    to="/propDetail"
                    className="slidebar-item slidebar--is-active css-check"
                  >
                    <div className="flexbox css-nb">
                      <span className="text css-nb-text">Property Detail</span>
                      <span
                        className="bagde__number bagde__color bagde__pill css-bagde"
                        style={{
                          paddingRight: "10px",
                          paddingLeft: "10px",
                        }}
                      >
                        7
                      </span>
                    </div>
                  </Link>
                  <Link key="1" to="/rooms" className="slidebar-item css-check">
                    <div className="flexbox css-nb">
                      <span className="text css-nb-text">Rooms</span>
                      <span
                        className="bagde__number bagde__color bagde__pill css-bagde"
                        style={{
                          paddingRight: "10px",
                          paddingLeft: "10px",
                        }}
                      >
                        7
                      </span>
                    </div>
                  </Link>
                </div>
              </span>
              <div
                className="table__block css-tbl-block"
                style={{ marginTop: "30px" }}
              >
                <label className="block__label css-label">
                  <span>Mandatory Fields Progress</span>
                </label>
                <div className="block__row css-row">
                  <div className="block__column css-block-col">
                    <div className="progress css-progress">
                      <div
                        className="progress__bar"
                        role="progressbar"
                        aria-valuenow="52"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "52%" }}
                      ></div>
                    </div>
                  </div>
                  <div
                    align="right"
                    className="column css-col"
                    style={{ paddingLeft: "0px" }}
                  >
                    <span className="text css-text">52%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
      <div className="table__column__2 css-column-2">
        <div className="table__title css-row" style={{ marginBottom: "16px" }}>
          <div className="column2 css-col">
            <div className="text2 css-text-2">
              <h2>Property Detail</h2>
            </div>
          </div>
        </div>
        <div className="table__title css-row">
          <div className="detail__column css-col">
            <div
              className="box__detail css-bx-dtl"
              style={{ marginBottom: "30px" }}
            >
              <div className="box__detail__section header clearfix css-section">
                <span>Property Details</span>
              </div>
              <div className="box__detail__section clearfix css-section">
                {/* box row */}
                <div className="box-row css-row">
                  <div className="box-column css-box-col">
                    <label className="box-label css-label">
                      <span>Main Currency</span>
                    </label>
                  </div>
                  <div className="box-column css-col">
                    <span>Australian Dollar (AUD)</span>
                  </div>
                </div>
                <div className="line css-line" style={{ marginTop: "0px" }}></div>
                
                {/* box row */}
                <div className="box-row css-row">
                  <div
                    className="box-column css-box-col"
                    style={{ marginTop: "8px" }}
                  >
                    <label className="box-label css-label">
                      <span>Reception Area</span>
                    </label>
                  </div>
                  <div
                    className="c-column css-bxcol2"
                    style={{ marginTop: "-4px" }}
                  >
                    <div
                      touched="true"
                      value="NO_PAST_NAME"
                      class="radio-group control-container css-radio css-radio-gr"
                    >
                      <div className="radio css-btn-radio">
                        <input
                          name="generalInformation,propertyDetails,previousNameBoolean"
                          type="radio"
                          value="YES_PAST_NAME"
                          id="radio-9"
                        />
                        <label className="" for="radio-9">
                          <span>Available 24 Hours</span>
                        </label>
                      </div>
                      <div className="radio css-btn-radio">
                        <input
                          name="generalInformation,propertyDetails,previousNameBoolean"
                          type="radio"
                          value="NO_PAST_NAME"
                          id="radio-10"
                        />
                        <label className="" for="radio-10">
                          <span>Not Available 24 Hours</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line css-line" style={{ marginTop: "0px" }}></div>

                {/* box row */}
                <div className="box-row css-row">
                  <div className="box-column css-box-col">
                    <label className="box-label css-label">
                      <span>Check-In Time</span>
                    </label>
                  </div>
                  <div
                    className="box-column css-column"
                    style={{ marginRight: "20px" }}
                  >
                    <label className="box-label css-label">
                      <span>from</span>
                      <span
                        className="label-required"
                        style={{
                          marginLeft: "3px",
                          color: "rgb(87, 167, 237)",
                        }}
                      >
                        *
                      </span>
                    </label>
                    <div className="input-group css-inp">
                      <div className="input-group__inner">
                        <div className="timepicker control-container css-radio-gr">
                          <div className="__inner">
                            <div className="__padder">
                              <div
                                className="time-clock"
                                noValidate
                                style={{ position: "relative" }}
                              >
                                <input
                                  id="time"
                                  type="time"
                                  defaultValue="07:30"
                                  className="time-input css-txt"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-row css-row">
                  <div className="box-column css-box-col">
                    <label className="box-label css-label">
                      <span>Check-Out Time</span>
                    </label>
                  </div>
                  <div
                    className="box-column css-column"
                    style={{ marginRight: "20px" }}
                  >
                    <label className="box-label css-label">
                      <span>latest at</span>
                      <span
                        className="label-required"
                        style={{
                          marginLeft: "3px",
                          color: "rgb(87, 167, 237)",
                        }}
                      >
                        *
                      </span>
                    </label>
                    <div className="input-group css-inp">
                      <div className="input-group__inner">
                        <div className="timepicker control-container css-radio-gr">
                          <div className="__inner">
                            <div className="__padder">
                              <div
                                className="time-clock"
                                noValidate
                                style={{ position: "relative" }}
                              >
                                <input
                                  id="time"
                                  type="time"
                                  defaultValue="07:30"
                                  className="time-input css-txt"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line css-line" style={{ marginTop: "0px" }}></div>

                {/* box row */}
                <div className="box-row css-row">
                  <div
                    className="box-column css-box-col"
                    style={{ marginTop: "8px" }}
                  >
                    <label className="box-label css-label">
                      <span>Distance to City Center</span>
                      <span
                        className="label-required"
                        style={{
                          marginLeft: "3px",
                          color: "rgb(87, 167, 237)",
                        }}
                      >
                        *
                      </span>
                    </label>
                  </div>
                  <div className="box-column css-box-col">
                    <div
                      className="input-group css-inp"
                      style={{ display: "inline-block" }}
                    >
                      <div className="input-group__inner">
                        <div
                          className="input control-container --is-error css-radio-gr"
                          style={{ width: "130px" }}
                        >
                          <div className="__inner">
                            <div className="__padder">
                              <input
                                name="generalInformation,propertyDetails,distanceToCityCenter "
                                touched="true"
                                type="text"
                                className="css-txt -control"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="input-group-addon css-number-2">
                          <span>km</span>
                        </div>
                      </div>
                      <ul className="css-error --simple">
                        <li>
                          <span>This section must be filled.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="line css-line"
                  style={{ marginTop: "0px" }}
                ></div>
                <div className="box-row css-row">
                  <div
                    className="box-column css-box-col"
                    style={{ marginTop: "8px" }}
                  >
                    <label className="box-label css-label">
                      <span>Number of Floors</span>
                    </label>
                  </div>
                  <div className="box-column css-column">
                    <div className="input-group css-inp">
                      <div className="input-group__inner">
                        <div className="input control-container css-radio-gr">
                          <div className="__inner">
                            <div className="__padder">
                              <input
                                name="generalInformation,propertyDetails,distanceToCityCenter "
                                touched="true"
                                type="text"
                                className="css-txt -control"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="input-group-addon css-number-2">
                          <span>floors</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="line css-line"
                  style={{ marginTop: "0px" }}
                ></div>
                <div className="box-row css-row">
                  <div
                    className="box-column css-box-col"
                    style={{ marginTop: "8px" }}
                  >
                    <label className="box-label css-label">
                      <span>
                        Additional Breakfast Charge (Exclude Room Rate)
                      </span>
                    </label>
                  </div>
                  <div className="box-column css-column">
                    <div className="input-group css-inp">
                      <div className="input-group__inner">
                        <div className="input-group-addon css-number-2">
                          <span>AUD</span>
                        </div>
                        <div className="input control-container css-radio-gr">
                          <div className="__inner">
                            <div className="__padder">
                              <input
                                name="generalInformation,propertyDetails,breakfastCharge"
                                touched="true"
                                type="text"
                                className="css-txt-2 -control"
                              />
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
        </div>
        <div className="table__title css-row">
          <div className="detail__column css-col">
            <div
              className="box__detail css-bx-dtl"
              style={{ marginBottom: "30px" }}
            >
              <div className="box__detail__section header clearfix css-section">
                <span>Property Cancellation Policy</span>
                <span
                  className="label-required"
                  style={{
                    marginLeft: "3px",
                    color: "rgb(87, 167, 237)",
                  }}
                >
                  *
                </span>
              </div>
              <div className="box__detail__section clearfix css-section">
                <div className="box-row css-row">
                  <div
                    className="box-column css-box-col"
                    style={{ marginTop: "8px" }}
                  >
                    <label className="box-label css-label">
                      <span>Cancellation Policy</span>
                    </label>
                  </div>
                  <div
                    className="c-column css-bxcol2"
                    style={{ marginTop: "-4px" }}
                  >
                    <div
                      touched="true"
                      value="NO_PAST_NAME"
                      class="radio-group control-container css-radio css-radio-gr"
                    >
                      <div className="radio c-radio--is-inline css-btn-radio">
                        <input
                          name="generalInformation,propertyDetails,previousNameBoolean"
                          type="radio"
                          value="YES_PAST_NAME"
                          id="radio-9"
                        />
                        <label className="" for="radio-9">
                          <span>Yes</span>
                        </label>
                      </div>
                      <div
                        className="radio c-radio--is-inline css-btn-radio"
                        style={{ marginTop: "16px" }}
                      >
                        <input
                          name="generalInformation,propertyDetails,previousNameBoolean"
                          type="radio"
                          value="NO_PAST_NAME"
                          id="radio-10"
                        />
                        <label className="" for="radio-10">
                          <span>No</span>
                        </label>
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
    </div>
    </div>
  );
}

export default PropertyDetail;
