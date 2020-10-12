import React from "react";
import UserDashboard from "../../components/user/dashboard";
import PrivateLayout from "../../layout/privatelayout";

function UserDashboardContainer(props) {
  return (
    <PrivateLayout>
      <UserDashboard></UserDashboard>
    </PrivateLayout>
  );
};

export default UserDashboardContainer;