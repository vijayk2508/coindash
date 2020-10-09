import routeLink from "../constants/routeLinkConstant";

const routes = {
  DASHBOARD: {
    path: routeLink.Dashboard,
    exact: true,
    isAuthenticated : true,
    routeComponentParent: "containers",
    routeComponentPath: "Dashboard",
  },
  DASHBOARD1: {
    path: routeLink.Dashboard,
    exact: true,
    isAuthenticated : true,
    routeComponentParent: "containers",
    routeComponentPath: "Dashboard",
  },
  DASHBOARD2: {
    path: routeLink.Dashboard,
    exact: true,
    isAuthenticated : true,
    routeComponentParent: "containers",
    routeComponentPath: "Dashboard",
  }

};


export default routes;
