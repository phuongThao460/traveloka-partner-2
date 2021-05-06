import React, { Component } from "react";
import "../../App.css";
import { SidebarData } from "../data/SidebarData";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from "react-router-dom";

class MiniNavbar  extends Component{
  state ={
    isActive: false,
  }
  render(){
    return (
      <div className="oka-page">
      <div className="container css-theme">
        <Router>
          <div className="table-row css-row">
            <div className="table__column css-column">
              <div className="table__detail css-detail">
                <span>
                  <div className="slidebar css-sidebar">
                    {SidebarData.map((item, index) => {
                      return (
                        <Link key={index} className={this.state.isActive ? item.cLinkName : item.cLinkActive} to={item.path} onClick={() => this.setState({ isActive: !this.state.isActive })}>
                          <div className={item.cFlexbox}>
                            <span className={item.cText}>{item.title}</span>
                            <span className={item.cNumber} style={{paddingRight: "10px", paddingLeft: "10px"}}>
                              {item.number}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </span>
                <div className="table__block css-tbl-block" style={{marginTop: "30px"}}>
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
                          style={{width: "52%"}}
                        ></div>
                      </div>
                    </div>
                    <div align="right" className="column css-col" style={{paddingLeft: "0px"}}>
                      <span className="text css-text">52%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Switch>
            {SidebarData.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main/>}
              />
            ))}
            </Switch>
          </div>
        </Router>
      </div>
    </div>
    );
  }
  
}

export default MiniNavbar;
