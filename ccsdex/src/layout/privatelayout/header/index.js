/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { getAssetImage } from "../../../helper/getServerImage";


function Header() {
  return (
    <div className="header">
      <nav className="navbar top-navbar navbar-expand-md navbar-light">
        {/* Logo */}
        <div className="navbar-header">
          <a className="navbar-brand" href="index.html">
            {/* Logo icon */}
            <b>
              <img
                src={getAssetImage("logo.png")}
                alt="homepage"
                className="dark-logo"
              />
            </b>
            {/*End Logo icon */}
            {/* Logo text */}
            <span>
              <img
                src={getAssetImage("logo-text.png")}
                alt="homepage"
                className="dark-logo"
              />
            </span>
          </a>
        </div>
        {/* End Logo */}
        <div className="navbar-collapse">
          {/* toggle and nav items */}
          <ul className="navbar-nav mr-auto mt-md-0">
            {/* This is  */}
            <li className="nav-item">
              <a
                className="nav-link toggle-nav hidden-md-up text-muted  "
                href="#"
              >
                <i className="mdi mdi-menu" />
              </a>
            </li>
            <li className="nav-item m-l-10">
              <a
                className="nav-link sidebartoggle hidden-sm-down text-muted  "
                href="#"
              >
                <i className="ti-menu" />
              </a>
            </li>
            {/* Messages */}
            <li className="nav-item dropdown mega-menu">
              <a
                className="nav-link dropdown-toggle text-muted  "
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ti-wallet m-r-5" /> Wallet
              </a>
              <div className="dropdown-menu animated slideInDown">
                <ul className="mega-menu-menu row">
                  <li className="col-lg-3  m-b-30">
                    <h4 className="m-b-20">Wallet Balances:</h4>
                    {/* Contact */}
                    <ul className="list-style-none">
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> MUXE Tokens: 495840294.92
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> Ethereum: 3.98
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> Bat Token: 9348.23
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> Hole Tokens: 9402.29
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> Reap Token: 30459.84
                        </a>
                      </li>
                      <li>
                        <a href="full-balance-page.php">
                          <b>All Balances</b>
                        </a>
                      </li>
                      <a href="full-balance-page.php"></a>
                    </ul>
                    <a href="full-balance-page.php"></a>
                  </li>
                  <a href="full-balance-page.php"></a>
                  <li className="col-lg-3 col-xlg-3 m-b-30">
                    <a href="full-balance-page.php">
                      <h4 className="m-b-20">Trading History</h4>
                      {/* List style */}
                    </a>
                    <ul className="list-style-none">
                      <a href="full-balance-page.php"></a>
                      <li>
                        <a href="full-balance-page.php" />
                        <a href="#">
                          <i className="cc BTC" /> 594832 MUXE Tokens
                          Transaction
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> 8.1 Ethereum Transaction
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> 9342 Bat Tokens Transaction
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> 928 Hole Tokens Transaction
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> 92834 Reap Tokens Transaction
                        </a>
                      </li>
                      <li>
                        <a href="trading-history-page.php">
                          <b>Full Trade History</b>
                        </a>
                      </li>
                      <a href="trading-history-page.php"></a>
                    </ul>
                    <a href="trading-history-page.php"></a>
                  </li>
                  <a href="trading-history-page.php"></a>
                  <li className="col-lg-3 col-xlg-3 m-b-30">
                    <a href="trading-history-page.php">
                      <h4 className="m-b-20">Open Orders</h4>
                      {/* List style */}
                    </a>
                    <ul className="list-style-none">
                      <a href="trading-history-page.php"></a>
                      <li>
                        <a href="trading-history-page.php" />
                        <a href="#">
                          <i className="cc BTC" /> 5000 MUXE for 0.01 Eth per
                          MUXE
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> 392 MUXE for 0.008 Eth per
                          MUXE
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> 8.1 ETH for 5000 MUXE per ETH
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> 392 HOLE for 2.1 MUXE per
                          HOLE
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> 832 BAT for 21 MUXE per BAT
                        </a>
                      </li>
                      <li>
                        <a href="open-orders-page.php">
                          <b>All Open Orders</b>
                        </a>
                      </li>
                      <a href="open-orders-page.php"></a>
                    </ul>
                    <a href="open-orders-page.php"></a>
                  </li>
                  <a href="open-orders-page.php"></a>
                  <li className="col-lg-3 col-xlg-3 m-b-30">
                    <a href="open-orders-page.php">
                      <h4 className="m-b-20">Latest Deposits/Withdrawals</h4>
                      {/* List style */}
                    </a>
                    <ul className="list-style-none">
                      <a href="open-orders-page.php"></a>
                      <li>
                        <a href="open-orders-page.php" />
                        <a href="#">
                          <i className="cc BTC" /> 7500 MUXE Withdrawal
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> 2 Ethereum Deposit
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> 500 BAT Deposit
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> 4020 HOLE Withdrawal
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="cc BTC" /> 900000 MUXE Deposit
                        </a>
                      </li>
                      <li>
                        <a href="deposits-withdrawals-page.php">
                          <b>All Deposits/Withdrawals</b>
                        </a>
                      </li>
                      <a href="deposits-withdrawals-page.php"></a>
                    </ul>
                    <a href="deposits-withdrawals-page.php"></a>
                  </li>
                  <a href="deposits-withdrawals-page.php"></a>
                </ul>
                <a href="deposits-withdrawals-page.php"></a>
              </div>
              <a href="deposits-withdrawals-page.php"></a>
            </li>
            <a href="deposits-withdrawals-page.php">{/* End Messages */}</a>
          </ul>
          <a href="deposits-withdrawals-page.php">
            {/* User profile and search */}
          </a>
          <ul className="navbar-nav my-lg-0">
            <a href="deposits-withdrawals-page.php">{/* Comment */}</a>
            <li className="nav-item dropdown">
              <a href="deposits-withdrawals-page.php"></a>
              <a
                className="nav-link dropdown-toggle text-muted text-muted  "
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-bell" />
                <div className="notify">
                  <span className="heartbit" /> <span className="point" />
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right mailbox animated slideInRight">
                <ul>
                  <li>
                    <div className="drop-title">Notifications</div>
                  </li>
                  <li>
                    <div className="header-notify">
                      {/* Message */}
                      <a href="#">
                        <i className="cc BTC m-r-10 f-s-40" title="BTC" />
                        <div className="notification-contnet">
                          <h5>All Transaction BTC</h5>
                          <span className="mail-desc">
                            Just see the my new admin!
                          </span>
                        </div>
                      </a>
                      {/* Message */}
                      <a href="#">
                        <i className="cc LTC m-r-10 f-s-40" title="BTC" />
                        <div className="notification-contnet">
                          <h5>This is LTC coin</h5>
                          <span className="mail-desc">
                            Just a reminder that you have event
                          </span>
                        </div>
                      </a>
                      {/* Message */}
                      <a href="#">
                        <i className="cc DASH m-r-10 f-s-40" title="BTC" />
                        <div className="notification-contnet">
                          <h5>This is DASH coin</h5>
                          <span className="mail-desc">
                            You can customize this template as you want
                          </span>
                        </div>
                      </a>
                      {/* Message */}
                      <a href="#">
                        <i className="cc XRP m-r-10 f-s-40" title="BTC" />
                        <div className="notification-contnet">
                          <h5>This is LTC coin</h5>
                          <span className="mail-desc">
                            Just see the my admin!
                          </span>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link text-center"
                      href="#;"
                    >
                      Check all notifications
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* End Comment */}
            {/* Messages */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-muted  "
                href="#"
                id="2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-envelope" />
                <div className="notify">
                  <span className="heartbit" /> <span className="point" />
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right mailbox animated slideInRight"
                aria-labelledby="2"
              >
                <ul>
                  <li>
                    <div className="drop-title">You have 4 new messages</div>
                  </li>
                  <li>
                    <div className="header-notify">
                      {/* Message */}
                      <a href="#">
                        <div className="notification-contnet">
                          <h5>Michael Qin</h5>
                          <span className="mail-desc">
                            Just see the my admin!
                          </span>
                        </div>
                      </a>
                      {/* Message */}
                      <a href="#">
                        <div className="notification-contnet">
                          <h5>John Doe</h5>
                          <span className="mail-desc">
                            I've sung a song! See you at
                          </span>
                        </div>
                      </a>
                      {/* Message */}
                      <a href="#">
                        <div className="notification-contnet">
                          <h5>Mr. John</h5>
                          <span className="mail-desc">I am a singer!</span>
                        </div>
                      </a>
                      {/* Message */}
                      <a href="#">
                        <div className="notification-contnet">
                          <h5>Michael Qin</h5>
                          <span className="mail-desc">
                            Just see the my admin!
                          </span>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a
                      className="nav-link text-center"
                      href="#;"
                    >
                      See all e-Mails <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            {/* End Messages */}
            {/* Profile */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-muted  "
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-user" />
              </a>
              <div className="dropdown-menu dropdown-menu-right animated slideInRight">
                <ul className="dropdown-user">
                  <li role="separator" className="divider" />
                  <li>
                    <a href="#"> Profile</a>
                  </li>
                  <li>
                    <a href="#"> Balance</a>
                  </li>
                  <li>
                    <a href="#"> Inbox</a>
                  </li>
                  <li role="separator" className="divider" />
                  <li>
                    <a href="#"> Setting</a>
                  </li>
                  <li role="separator" className="divider" />
                  <li>
                    <a href="#"> Logout</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
