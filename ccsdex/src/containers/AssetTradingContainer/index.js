/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import Trades from "../../components/trading/trades";
import { loadScript } from "../../helper/scriptLoader";
import PrivateLayout from "../../layout/privatelayout";

var scriptLink = [
  "js/lib/sticky-kit-master/dist/sticky-kit.min.js",
  "js/lib/morris-chart/raphael-min.js",
  "js/lib/morris-chart/morris.js",
 // "https://www.amcharts.com/lib/3/amcharts.js",
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

scriptLink.map((item) => {
  loadScript(`assets/js/${item}`)
})

function AssetTradingContainer(props) {
  useEffect(() => {

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
