/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withRouter } from "react-router";
import routeLink from "../../../constants/routeLinkConstant";

function Sidebar(props) {
  return (
    <div className="left-sidebar">
      {/* Sidebar scroll*/}
      <div className="scroll-sidebar">
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav">
          <ul id="sidebar-menu">
            <li className="nav-devider" />
            <li className="nav-label">Home</li>
            <li className="active">
              <a className="has-arrow " href="#" aria-expanded="true">
                <i className="fa fa-tachometer" />
                <span className="hide-menu">
                  Dashboard
                  <span className="label label-rouded label-primary pull-right">
                    6
                  </span>
                </span>
              </a>
              <ul aria-expanded="true" className="collapse in">
                <li>
                  <a
                    onClick={() => {
                      props.history.push(routeLink.TradingDashboard);
                    }}
                  >
                    Trading Dashboard
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.history.push(routeLink.AssetTrading);
                    }}
                  >
                    Asset Trading
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.history.push(routeLink.UserDashboard);
                    }}
                  >
                    User Dashboard{" "}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.history.push(routeLink.TradingHistory);
                    }}
                  >
                    Trading History
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.history.push(routeLink.FullBalancePage);
                    }}
                  >
                    Full Balance Page
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-label">Markets</li>
            <li>
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-columns" />
                <span className="hide-menu">MUXE Pair</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a>MUXE / ETH</a>
                </li>
                <li>
                  <a>MUXE / CcS</a>
                </li>
                <li>
                  <a>MUXE / HOLE</a>
                </li>
                <li>
                  <a href="layout-fix-sidebar.php">MUXE / EVI</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-columns" />
                <span className="hide-menu">CcS Pair</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a>CcS / ETH</a>
                </li>
                <li>
                  <a>CcS / MUXE</a>
                </li>
                <li>
                  <a>CcS / HOLE</a>
                </li>
                <li>
                  <a>CcS / EVI</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-columns" />
                <span className="hide-menu">Eth Pair</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a>ETH / MUXE</a>
                </li>
                <li>
                  <a>ETH / CcS</a>
                </li>
                <li>
                  <a>ETH / HOLE</a>
                </li>
                <li>
                  <a>ETH / EVI</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-columns" />
                <span className="hide-menu">Additional Pairs</span>
              </a>
            </li>
            <li className="nav-label">Apps &amp; Charts</li>
            <li>
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-envelope" />
                <span className="hide-menu">Mailbox</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a>Compose</a>
                </li>
                <li>
                  <a>Read</a>
                </li>
                <li>
                  <a>Inbox</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-bar-chart" />
                <span className="hide-menu">Charts</span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a>Morris</a>
                </li>
                <li>
                  <a>ChartJs</a>
                </li>
                <li>
                  <a>Chartist </a>
                </li>
                <li>
                  <a>AmChart</a>
                </li>
                <li>
                  <a>EChart</a>
                </li>
                <li>
                  <a>Sparkline</a>
                </li>
                <li>
                  <a>Peity</a>
                </li>
              </ul>
            </li>
            <li className="nav-label">Features</li>
            <li>
              <a className="has-arrow  " href="#" aria-expanded="false">
                <i className="fa fa-suitcase" />
                <span className="hide-menu">
                  Ui Elements
                  <span className="label label-rouded label-danger pull-right">
                    12
                  </span>
                </span>
              </a>
              <ul aria-expanded="false" className="collapse">
                <li>
                  <a>Alert</a>
                </li>
                <li>
                  <a>Button</a>
                </li>
                <li>
                  <a>Dropdown</a>
                </li>
                <li>
                  <a>Progressbar</a>
                </li>
                <li>
                  <a>Tab</a>
                </li>
                <li>
                  <a>Typography</a>
                </li>
                <li>
                  <a>Calender</a>
                </li>
                <li>
                  <a>Datamap</a>
                </li>
                <li>
                  <a>Nestedable</a>
                </li>
                <li>
                  <a>Sweetalert</a>
                </li>
                <li>
                  <a>Toastr</a>
                </li>
                <li>
                  <a>Weather</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
    </div>
  );
}

export default withRouter(Sidebar);
