// containerPath will always be relative to src

import routeLink from "../constants/routeLinkConstant";

/*
  {
    path: string,
    exact: oneOf([true, false]),
    routeComponentParent: oneOf(["containers", "components", "UIComponents", "common"]),
    routeComponentPath: string,
    isAuthenticated: oneOf([true, false])
  }
*/


const routes = {
  Login: {
    path: routeLink.Home,
    exact: true,
    routeComponentParent: "containers",
    routeComponentPath: "LoginContainer",
  },

  SignUp: {
    path: routeLink.SignUp,
    exact: true,
    routeComponentParent: "containers",
    routeComponentPath: "SignUpContainer",
  },

  Dashbaord: {
    path: routeLink.Dashboard,
    exact: true,
    routeComponentParent: "containers",
    routeComponentPath: "DashboardContainer",
  },

  TradingDashboard: {
    path: routeLink.TradingDashboard,
    exact: true,
    routeComponentParent: "containers",
    routeComponentPath: "TradingDashboardContainer",
  },

  AssetTrading: {
    path: routeLink.AssetTrading,
    exact: true,
    routeComponentParent: "containers",
    routeComponentPath: "AssetTradingContainer",
  },

  UserDashboard: {
    path: routeLink.UserDashboard,
    exact: true,
    routeComponentParent: "containers",
    routeComponentPath: "UserDashboardContainer",
  },

  TradingHistory: {
    path: routeLink.TradingHistory,
    exact: true,
    routeComponentParent: "containers",
    routeComponentPath: "TradingHistoryContainer",
  },

  FullBalancePage: {
    path: routeLink.FullBalancePage,
    exact: true,
    routeComponentParent: "containers",
    routeComponentPath: "FullBalancePageContainer",
  },
};


export default routes;
