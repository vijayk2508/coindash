import React from "react";
import FullBalance from "../../components/trading/full-balances";
import PrivateLayout from "../../layout/privatelayout";

function FullBalancePageContainer(props) {
  return (
    <PrivateLayout>
      <FullBalance></FullBalance>
    </PrivateLayout>
  );
};

export default FullBalancePageContainer;