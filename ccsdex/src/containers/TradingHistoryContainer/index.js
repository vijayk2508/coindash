import React from "react";
import TradeHistory from "../../components/trading/trader-history";
import PrivateLayout from "../../layout/privatelayout";

function TradingHistoryContainer(props) {
  return (
    <PrivateLayout>
      <TradeHistory></TradeHistory>
    </PrivateLayout>
  );
};

export default TradingHistoryContainer;