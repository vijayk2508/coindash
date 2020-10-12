/* eslint-disable array-callback-return */
import React, { useLayoutEffect } from "react";
import Trades from "../../components/trading/trades";
import PrivateLayout from "../../layout/privatelayout";

function AssetTradingContainer(props) {
  return (
    <>
      <PrivateLayout>
        <Trades></Trades>
      </PrivateLayout>
    </>
  );
};

export default AssetTradingContainer;
