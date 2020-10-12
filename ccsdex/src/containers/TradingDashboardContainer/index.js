import React from "react";
import TransactionToplist from "../../components/trading/transaction-toplist";
import PrivateLayout from "../../layout/privatelayout";

function TradingDashboardContainer(props) {
  return (
    <PrivateLayout>
      <TransactionToplist></TransactionToplist>
  </PrivateLayout>
  );
};

export default TradingDashboardContainer;