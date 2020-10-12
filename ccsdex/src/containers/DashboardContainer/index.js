/* eslint-disable react/jsx-no-undef */
import React from "react";
import TransactionToplist from "../../components/trading/transaction-toplist";
import { loadScript } from "../../helper/scriptLoader";
import PrivateLayout from "../../layout/privatelayout";

var scriptLink = [
  "dashboard-1.js"
]

scriptLink.map((item, idx) => {
   loadScript(`assets/js/${item}`)
})


function DashboardContainer(props) {
  return (
    <PrivateLayout>
      <TransactionToplist></TransactionToplist>
    </PrivateLayout>
  );
};

export default DashboardContainer;