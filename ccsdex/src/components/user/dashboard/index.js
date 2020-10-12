/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useLayoutEffect } from "react";
import { getAssetImage } from "../../../helper/getServerImage";
import { loadScript } from "../../../helper/scriptLoader";

import "../../../assets/css/lib/amchart/export.css";
import "../../../assets/css/lib/owl.carousel.min.css";
import "../../../assets/css/lib/owl.theme.default.min.css";
// import '../../../assets/css/style.css'

/*
    <script src="js/lib/jquery/jquery.min.js"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="js/lib/bootstrap/js/popper.min.js"></script>
    <script src="js/lib/bootstrap/js/bootstrap.min.js"></script>
    <!-- slimscrollbar scrollbar JavaScript -->
    <script src="js/jquery.slimscroll.js"></script>
    <!--Menu sidebar -->
    <script src="js/sidebarmenu.js"></script>
    <!--stickey kit -->
    <script src="js/lib/sticky-kit-master/dist/sticky-kit.min.js"></script>
	
  <!-- Amchart -->
    <script src="https://www.amcharts.com/lib/3/amcharts.js"></script>
    <script src="js/lib/chart-amchart/serial.js"></script>
    <script src="js/lib/chart-amchart/export.min.js"></script>
    <script src="js/lib/chart-amchart/light.js"></script>
    <script src="js/lib/chart-amchart/ammap.js"></script>
    <script src="js/lib/chart-amchart/worldLow.js"></script>
    <script src="js/lib/chart-amchart/pie.js"></script>
    <script src="js/lib/chart-amchart/amstock.js"></script>
    <script src="js/lib/chart-amchart/amchart-init.js"></script>


    <script src="js/lib/weather/jquery.simpleWeather.min.js"></script>
    <script src="js/lib/weather/weather-init.js"></script>
    <script src="js/lib/owl-carousel/owl.carousel.min.js"></script>
    <script src="js/lib/owl-carousel/owl.carousel-init.js"></script>
    <script src="js/scripts.js"></script>
    <!--Custom JavaScript -->
    <script src="js/custom.min.js"></script>
*/

var scriptLink = [
  "https://www.amcharts.com/lib/3/amcharts.js",
  "js/lib/chart-amchart/serial.js",
  "js/lib/chart-amchart/export.min.js",
  "js/lib/chart-amchart/light.js",
  "js/lib/chart-amchart/ammap.js",
  "js/lib/chart-amchart/worldLow.js",
  "js/lib/chart-amchart/pie.js",
  "js/lib/chart-amchart/amstock.js",
  "js/lib/chart-amchart/amchart-init.js",
  "js/lib/weather/jquery.simpleWeather.min.js",
  "js/lib/weather/weather-init.js",
  "js/lib/owl-carousel/owl.carousel.min.js",
  "js/lib/owl-carousel/owl.carousel-init.js",
];

function UserDashboard() {
  useLayoutEffect(() => {
    scriptLink.map((item) => {
      loadScript(item.includes("https") ? item : `assets/${item}`);
    });
  }, []);
  return (
    <div>
      {/* Start Page Content */}
      <div className="row">
        <div className="col-md-3">
          <div className="card p-30">
            <div className="media">
              <div className="media-left meida media-middle">
                <span>
                  <i className="ti-bag f-s-40 color-primary" />
                </span>
              </div>
              <div className="media-body text-right">
                <h4>2780</h4>
                <p className="m-b-0">New Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-30">
            <div className="media">
              <div className="media-left meida media-middle">
                <span>
                  <i className="ti-comment f-s-40 color-success" />
                </span>
              </div>
              <div className="media-body text-right">
                <h4>178</h4>
                <p className="m-b-0">Total Message</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-30">
            <div className="media">
              <div className="media-left meida media-middle">
                <span>
                  <i className="ti-vector f-s-40 color-warning" />
                </span>
              </div>
              <div className="media-body text-right">
                <h4>$27647</h4>
                <p className="m-b-0">Total Earnings</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-30">
            <div className="media">
              <div className="media-left meida media-middle">
                <span>
                  <i className="ti-location-pin f-s-40 color-danger" />
                </span>
              </div>
              <div className="media-body text-right">
                <h4>278</h4>
                <p className="m-b-0">Total Visitor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* column */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Statistics</h4>
              <div id="chartdiv3" />
            </div>
          </div>
        </div>
        {/* column */}
        {/* column */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Flight Map</h4>
              <div id="chartMap" />
            </div>
          </div>
        </div>
        {/* column */}
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center bg-primary">
            <div className="m-t-10">
              <p className="color-white">Monthly Sales</p>
              <h2 className="color-white">385749</h2>
            </div>
            <ul className="widget-line-list m-b-15">
              <li className="border-right">
                95% <br />
                <span className="color-white">
                  <i className="ti-hand-point-up m-r-5" /> Sold
                </span>
              </li>
              <li>
                5% <br />
                <span className="color-white f-s-14">
                  <i className="ti-hand-point-down m-r-5" />
                  Return
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center bg-success">
            <div className="m-t-10">
              <p className="color-white">New Feedback</p>
              <h2 className="color-white">385749</h2>
            </div>
            <ul className="widget-line-list m-b-15">
              <li className="border-right">
                98% <br />
                <span className="color-white">
                  <i className="ti-hand-point-up m-r-5" /> Positive
                </span>
              </li>
              <li>
                2% <br />
                <span className="color-white f-s-14">
                  <i className="ti-hand-point-down m-r-5" />
                  Negative
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center bg-danger">
            <div className="m-t-10">
              <p className="color-white">Customer Feedback</p>
              <h2 className="color-white">385749</h2>
            </div>
            <ul className="widget-line-list m-b-15">
              <li className="border-right">
                92% <br />
                <span className="color-white">
                  <i className="ti-hand-point-up m-r-5" /> Positive
                </span>
              </li>
              <li>
                8% <br />
                <span className="color-white f-s-14">
                  <i className="ti-hand-point-down m-r-5" />
                  Negative
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Todo</h4>
              <div className="card-content">
                <div className="todo-list">
                  <div className="tdl-holder">
                    <div className="tdl-content">
                      <ul>
                        <li className="color-primary">
                          <label>
                            <input type="checkbox" />
                            <i className="bg-primary" />
                            <span>Post three to six times on Twitter.</span>
                            <a href="#" className="ti-close"></a>
                          </label>
                        </li>
                        <li className="color-success">
                          <label>
                            <input type="checkbox" defaultChecked />
                            <i className="bg-success" />
                            <span>Post one to two times on Facebook.</span>
                            <a href="#" className="ti-close"></a>
                          </label>
                        </li>
                        <li className="color-warning">
                          <label>
                            <input type="checkbox" defaultChecked />
                            <i className="bg-warning" />
                            <span>Follow back those who follow you</span>
                            <a href="#" className="ti-close"></a>
                          </label>
                        </li>
                        <li className="color-danger">
                          <label>
                            <input type="checkbox" defaultChecked />
                            <i className="bg-danger" />
                            <span>Connect with one new person</span>
                            <a href="#" className="ti-close"></a>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <input
                      type="text"
                      className="tdl-new form-control"
                      placeholder="Type here"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="card">
            <div className="card-title">
              <h4>Recent Orders </h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Product</th>
                      <th>quantity</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="round-img">
                          <a>
                            <img
                              className="w-35"
                              src={getAssetImage("avatar/1.jpg")}
                            />
                          </a>
                        </div>
                      </td>
                      <td>Lew Shawon</td>
                      <td>
                        <span>Dell-985</span>
                      </td>
                      <td>
                        <span>456 pcs</span>
                      </td>
                      <td>
                        <span className="badge badge-success">Done</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="round-img">
                          <a>
                            <img
                              className="w-35"
                              src={getAssetImage("avatar/1.jpg")}
                            />
                          </a>
                        </div>
                      </td>
                      <td>Lew Shawon</td>
                      <td>
                        <span>Asus-565</span>
                      </td>
                      <td>
                        <span>456 pcs</span>
                      </td>
                      <td>
                        <span className="badge badge-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="round-img">
                          <a>
                            <img
                              className="w-35"
                              src={getAssetImage("avatar/1.jpg")}
                            />
                          </a>
                        </div>
                      </td>
                      <td>lew Shawon</td>
                      <td>
                        <span>Dell-985</span>
                      </td>
                      <td>
                        <span>456 pcs</span>
                      </td>
                      <td>
                        <span className="badge badge-success">Done</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="round-img">
                          <a>
                            <img
                              className="w-35"
                              src={getAssetImage("avatar/1.jpg")}
                            />
                          </a>
                        </div>
                      </td>
                      <td>lew Shawon</td>
                      <td>
                        <span>Dell-985</span>
                      </td>
                      <td>
                        <span>456 pcs</span>
                      </td>
                      <td>
                        <span className="badge badge-success">Done</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-title">
              <h4>Browser</h4>
            </div>
            <div className="card-body browser">
              <p>
                Chrome<span className="pull-right">85%</span>
              </p>
              <div className="progress ">
                <div
                  role="progressbar"
                  style={{ width: "85%", height: 8 }}
                  className="progress-bar bg-danger wow animated progress-animated"
                >
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
              <p className="m-t-10">
                Firefox<span className="pull-right">90%</span>
              </p>
              <div className="progress">
                <div
                  role="progressbar"
                  style={{ width: "90%", height: 8 }}
                  className="progress-bar bg-info wow animated progress-animated"
                >
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
              <p className="m-t-10">
                Safari<span className="pull-right">65%</span>
              </p>
              <div className="progress m-b-30">
                <div
                  role="progressbar"
                  style={{ width: "65%", height: 8 }}
                  className="progress-bar bg-success wow animated progress-animated"
                >
                  <span className="sr-only">60% Complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /# column */}
        <div className="col-lg-4">
          <div className="card bg-primary">
            <div className="weather-widget">
              <div id="weather-one" className="weather-one p-22" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card bg-dark">
            <div className="testimonial-widget-one p-17">
              <div className="testimonial-widget-one owl-carousel owl-theme">
                <div className="item">
                  <div className="testimonial-content">
                    <img
                      className="testimonial-author-img"
                      src={getAssetImage("avatar/1.jpg")}
                    />
                    <div className="testimonial-author">TYRION LANNISTER</div>
                    <div className="testimonial-author-position">
                      Founder-Ceo. Dell Corp
                    </div>
                    <div className="testimonial-text">
                      <i className="fa fa-quote-left" /> Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation
                      <i className="fa fa-quote-right" />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <img
                      className="testimonial-author-img"
                      src={getAssetImage("avatar/1.jpg")}
                    />
                    <div className="testimonial-author">TYRION LANNISTER</div>
                    <div className="testimonial-author-position">
                      Founder-Ceo. Dell Corp
                    </div>
                    <div className="testimonial-text">
                      <i className="fa fa-quote-left" /> Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation
                      <i className="fa fa-quote-right" />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <img
                      className="testimonial-author-img"
                      src={getAssetImage("avatar/1.jpg")}
                    />
                    <div className="testimonial-author">TYRION LANNISTER</div>
                    <div className="testimonial-author-position">
                      Founder-Ceo. Dell Corp
                    </div>
                    <div className="testimonial-text">
                      <i className="fa fa-quote-left" /> Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation
                      <i className="fa fa-quote-right" />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <img
                      className="testimonial-author-img"
                      src={getAssetImage("avatar/1.jpg")}
                    />
                    <div className="testimonial-author">TYRION LANNISTER</div>
                    <div className="testimonial-author-position">
                      Founder-Ceo. Dell Corp
                    </div>
                    <div className="testimonial-text">
                      <i className="fa fa-quote-left" /> Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation
                      <i className="fa fa-quote-right" />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <img
                      className="testimonial-author-img"
                      src={getAssetImage("avatar/1.jpg")}
                    />
                    <div className="testimonial-author">TYRION LANNISTER</div>
                    <div className="testimonial-author-position">
                      Founder-Ceo. Dell Corp
                    </div>
                    <div className="testimonial-text">
                      <i className="fa fa-quote-left" /> Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation
                      <i className="fa fa-quote-right" />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-content">
                    <img
                      className="testimonial-author-img"
                      src={getAssetImage("avatar/1.jpg")}
                    />
                    <div className="testimonial-author">TYRION LANNISTER</div>
                    <div className="testimonial-author-position">
                      Founder-Ceo. Dell Corp
                    </div>
                    <div className="testimonial-text">
                      <i className="fa fa-quote-left" /> Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation
                      <i className="fa fa-quote-right" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End PAge Content */}
    </div>
  );
}

export default UserDashboard;
