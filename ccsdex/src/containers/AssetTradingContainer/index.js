/* eslint-disable array-callback-return */
import React, { useLayoutEffect } from "react";
import Trades from "../../components/trading/trades";
import { loadScript } from "../../helper/scriptLoader";
import PrivateLayout from "../../layout/privatelayout";

import "../../assets/css/lib/amchart/export.css";
import "../../assets/css/lib/owl.carousel.min.css";
import "../../assets/css/lib/owl.theme.default.min.css";

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


function AssetTradingContainer(props) {
  useLayoutEffect(() => {
    scriptLink.map((item) => {
      loadScript(item.includes('https') ? item : `assets/${item}`)
    })
  }, [])

  return (
    <>
      <PrivateLayout>
        <Trades></Trades>
      </PrivateLayout>
    </>
  );
};

export default AssetTradingContainer;
