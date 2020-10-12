/* eslint-disable jsx-a11y/heading-has-content */
import React, { useLayoutEffect } from "react";
import ActiveTraders from "../active-traders";
import BuyWall from "../buy-wall";
import MyTraders from "../my-traders";
import SellWall from "../sell-wall";

import "../../../assets/css/lib/amchart/export.css";
import "../../../assets/css/lib/owl.carousel.min.css";
import "../../../assets/css/lib/owl.theme.default.min.css";

import { loadScript } from "../../../helper/scriptLoader";

var scriptLink = [
  "js/lib/morris-chart/raphael-min.js",
  "js/lib/morris-chart/morris.js",
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
  "js/dashboard-2.js"
];



function Trades() {
  useLayoutEffect(() => {
    scriptLink.map((item) => {
      loadScript(item.includes('https') ? item : `assets/${item}`)
    })
    return () => {
      //cleanup
    };
  }, [])
  return (
    <>
      <div className="row">
        <div className="col-lg-5">
          <div id="accordion" className="accordion">
            <div className="card">
              <a
                className="card-header bg-primary-darken-5 card-title"
                data-toggle="collapse"
                aria-expanded="true"
                href="#collapseOne"
              >
                Limit
              </a>
              <div
                id="collapseOne"
                className="card-body collapse show"
                data-parent="#accordion"
              >
                <div className="row">
                  <div className="col-12 col-xl-6">
                    <div className="row my-2 p-l-15 p-r-15">
                      <div className="col-4">
                        <h5 className="text-bold-600 mb-0">Buy MUXE</h5>
                      </div>
                      <div className="col-8 text-right">
                        <p className="text-muted mb-0">ETH Balance: 5000.00</p>
                      </div>
                    </div>
                    <form className="form form-horizontal">
                      <div className="form-body">
                        <div className="form-group row">
                          <label
                            className="col-md-4 col-form-label"
                            htmlFor="btc-limit-buy-price"
                          >
                            Price
                          </label>
                          <div className="col-md-8">
                            <input
                              type="number"
                              id="btc-limit-buy-price"
                              className="form-control"
                              placeholder="ETH 11916.9"
                              name="btc-limit-buy-price"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="col-md-4 col-form-label"
                            htmlFor="btc-limit-buy-amount"
                          >
                            Amount
                          </label>
                          <div className="col-md-8">
                            <input
                              type="number"
                              id="btc-limit-buy-amount"
                              className="form-control"
                              placeholder="0.026547 MUXE"
                              name="btc-limit-buy-amount"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="col-md-4 col-form-label"
                            htmlFor="btc-limit-buy-total"
                          >
                            Total
                          </label>
                          <div className="col-md-8">
                            <input
                              type="number"
                              disabled
                              id="btc-limit-buy-total"
                              className="form-control"
                              placeholder=" ETH 318.1856"
                              name="btc-limit-buy-total"
                            />
                          </div>
                        </div>
                        <div className="form-actions pb-0 m-l-15 m-r-15">
                          <button
                            type="submit"
                            className="btn round btn-success btn-block btn-glow"
                          >
                            {" "}
                            Buy MUXE{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-12 col-xl-6">
                    <div className="row my-2 p-r-15 p-l-15">
                      <div className="col-4">
                        <h5 className="text-bold-600 mb-0">Sell MUXE</h5>
                      </div>
                      <div className="col-8 text-right">
                        <p className="text-muted mb-0">
                          MUXE Balance: 1.2654898
                        </p>
                      </div>
                    </div>
                    <form className="form form-horizontal">
                      <div className="form-body">
                        <div className="form-group row">
                          <label className="col-md-4 col-form-label">
                            Price
                          </label>
                          <div className="col-md-8">
                            <input
                              type="number"
                              id="btc-limit-sell-price"
                              className="form-control"
                              placeholder="ETH 1116.9"
                              name="btc-limit-sell-price"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="col-md-4 col-form-label"
                            htmlFor="btc-limit-sell-amount"
                          >
                            Amount
                          </label>
                          <div className="col-md-8">
                            <input
                              type="number"
                              id="btc-limit-sell-amount"
                              className="form-control"
                              placeholder="0.026547 MUXE"
                              name="btc-limit-sell-amount"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="col-md-4 col-form-label"
                            htmlFor="btc-limit-sell-total"
                          >
                            Total
                          </label>
                          <div className="col-md-8">
                            <input
                              type="number"
                              disabled
                              id="btc-limit-sell-total"
                              className="form-control"
                              placeholder="ETH 318.1856"
                              name="btc-limit-sell-total"
                            />
                          </div>
                        </div>
                        <div className="form-actions pb-0 m-l-15 m-r-15">
                          <button
                            type="submit"
                            className="btn round btn-danger btn-block btn-glow"
                          >
                            {" "}
                            Sell MUXE{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <a
                className="card-header collapsed bg-primary-darken-5 card-title"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseTwo"
              >
                Market
              </a>
              <div
                id="collapseTwo"
                className="card-body collapse"
                data-parent="#accordion"
              >
                <div className="row">
                  <div className="col-12 col-xl-6">
                    <div className="row my-2 p-l-15 p-r-15">
                      <div className="col-4">
                        <h5 className="text-bold-600 mb-0">Buy BTC</h5>
                      </div>
                      <div className="col-8 text-right">
                        <p className="text-muted mb-0">
                          USD Balance: $ 5000.00
                        </p>
                      </div>
                    </div>
                    <form className="form form-horizontal">
                      <div className="form-body">
                        <div className="form-group row">
                          <label
                            className="col-md-4 col-form-label"
                            htmlFor="btc-market-buy-price"
                          >
                            Price
                          </label>
                          <div className="col-md-8">
                            <input
                              type="number"
                              disabled
                              id="btc-market-buy-price"
                              className="form-control"
                              placeholder="Market prise $"
                              name="btc-market-buy-price"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="col-md-4 col-form-label"
                            htmlFor="btc-market-buy-amount"
                          >
                            Amount
                          </label>
                          <div className="col-md-8">
                            <input
                              type="number"
                              id="btc-market-buy-amount"
                              className="form-control"
                              placeholder="0.026547 BTC"
                              name="btc-market-buy-amount"
                            />
                          </div>
                        </div>
                        <div className="form-actions pb-0 m-l-15 m-r-15">
                          <button
                            type="submit"
                            className="btn round btn-success btn-block btn-glow"
                          >
                            {" "}
                            Buy BTC{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-12 col-xl-6">
                    <div className="row my-2 p-r-15 p-l-15">
                      <div className="col-4">
                        <h5 className="text-bold-600 mb-0">Sell BTC</h5>
                      </div>
                      <div className="col-8 text-right">
                        <p className="text-muted mb-0">
                          BTC Balance: 1.2654898
                        </p>
                      </div>
                    </div>
                    <form className="form form-horizontal">
                      <div className="form-body">
                        <div className="form-group row">
                          <label className="col-md-4 col-form-label">
                            Price
                          </label>
                          <div className="col-md-8">
                            <input
                              type="number"
                              disabled
                              id="btc-market-sell-price"
                              className="form-control"
                              placeholder="Market prise $"
                              name="btc-market-sell-price"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label
                            className="col-md-4 col-form-label"
                            htmlFor="btc-market-sell-amount"
                          >
                            Amount
                          </label>
                          <div className="col-md-8">
                            <input
                              type="number"
                              id="btc-market-sell-amount"
                              className="form-control"
                              placeholder="0.026547 BTC"
                              name="btc-market-sell-amount"
                            />
                          </div>
                        </div>
                        <div className="form-actions pb-0 m-l-15 m-r-15">
                          <button
                            type="submit"
                            className="btn round btn-danger btn-block btn-glow"
                          >
                            {" "}
                            Sell BTC{" "}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <a
                className="card-header collapsed bg-primary-darken-5 card-title"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseThree"
              >
                Stop Limit
              </a>
              <div
                id="collapseThree"
                className="collapse"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-xl-6">
                      <div className="row my-2 p-l-15 p-r-15">
                        <div className="col-4">
                          <h5 className="text-bold-600 mb-0">Buy BTC</h5>
                        </div>
                        <div className="col-8 text-right">
                          <p className="text-muted mb-0">
                            USD Balance: $ 5000.00
                          </p>
                        </div>
                      </div>
                      <form className="form form-horizontal">
                        <div className="form-body">
                          <div className="form-group row">
                            <label
                              className="col-md-4 col-form-label"
                              htmlFor="btc-stop-buy"
                            >
                              Stop
                            </label>
                            <div className="col-md-8">
                              <input
                                type="number"
                                id="btc-stop-buy"
                                className="form-control"
                                placeholder="$ 11916.9"
                                name="btc-stop-buy"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              className="col-md-4 col-form-label"
                              htmlFor="btc-stop-buy-limit"
                            >
                              Limit
                            </label>
                            <div className="col-md-8">
                              <input
                                type="number"
                                id="btc-stop-buy-limit"
                                className="form-control"
                                placeholder="$ 12000.0"
                                name="btc-stop-buy-limit"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              className="col-md-4 col-form-label"
                              htmlFor="btc-stop-buy-amount"
                            >
                              Amount
                            </label>
                            <div className="col-md-8">
                              <input
                                type="number"
                                id="btc-stop-buy-amount"
                                className="form-control"
                                placeholder="0.026547 BTC"
                                name="btc-stop-buy-amount"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              className="col-md-4 col-form-label"
                              htmlFor="btc-stop-buy-total"
                            >
                              Total
                            </label>
                            <div className="col-md-8">
                              <input
                                type="number"
                                disabled
                                id="btc-stop-buy-total"
                                className="form-control"
                                placeholder="$ 318.1856"
                                name="btc-stop-buy-total"
                              />
                            </div>
                          </div>
                          <div className="form-actions pb-0 m-l-15 m-r-15">
                            <button
                              type="submit"
                              className="btn round btn-success btn-block btn-glow"
                            >
                              Buy BTC
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-12 col-xl-6">
                      <div className="row my-2 p-r-15 p-l-15">
                        <div className="col-4">
                          <h5 className="text-bold-600 mb-0">Sell BTC</h5>
                        </div>
                        <div className="col-8 text-right">
                          <p className="text-muted mb-0">
                            BTC Balance: 1.2654898
                          </p>
                        </div>
                      </div>
                      <form className="form form-horizontal">
                        <div className="form-body">
                          <div className="form-group row">
                            <label
                              className="col-md-4 col-form-label"
                              htmlFor="btc-stop-sell"
                            >
                              Stop
                            </label>
                            <div className="col-md-8">
                              <input
                                type="number"
                                id="btc-stop-sell"
                                className="form-control"
                                placeholder="$ 11916.9"
                                name="btc-stop-sell"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              className="col-md-4 col-form-label"
                              htmlFor="btc-stop-sell-limit"
                            >
                              Limit
                            </label>
                            <div className="col-md-8">
                              <input
                                type="number"
                                id="btc-stop-sell-limit"
                                className="form-control"
                                placeholder="$ 12000.0"
                                name="btc-stop-sell-limit"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              className="col-md-4 col-form-label"
                              htmlFor="btc-stop-sell-amount"
                            >
                              Amount
                            </label>
                            <div className="col-md-8">
                              <input
                                type="number"
                                id="btc-stop-sell-amount"
                                className="form-control"
                                placeholder="0.026547 BTC"
                                name="btc-stop-sell-amount"
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              className="col-md-4 col-form-label"
                              htmlFor="btc-stop-sell-total"
                            >
                              Total
                            </label>
                            <div className="col-md-8">
                              <input
                                type="number"
                                disabled
                                id="btc-stop-sell-total"
                                className="form-control"
                                placeholder="$ 318.1856"
                                name="btc-stop-sell-total"
                              />
                            </div>
                          </div>
                          <div className="form-actions pb-0 m-l-15 m-r-15">
                            <button
                              type="submit"
                              className="btn round btn-danger btn-block btn-glow"
                            >
                              Sell BTC
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Statistics</h4>
              <div id="chartdiv3" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title"></h4>
              <BuyWall></BuyWall>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title"></h4>
              <SellWall></SellWall>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title"></h4>
              <MyTraders></MyTraders>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title"></h4>
              <ActiveTraders></ActiveTraders>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trades;
