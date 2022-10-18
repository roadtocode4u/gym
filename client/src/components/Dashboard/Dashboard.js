import React from "react";
import DashboardUserMenu from "../DashboardUserMenu/DashboardUserMenu";
import "./Dashboard.css";
import ImgCat from "./img/cat-image.jpg";
import getUser from "./../../utils/getUser";

function Dashboard() {
  const currentUser = getUser();
  if(!currentUser){
   alert("You must be logged in to view this page");
   window.location.href = "/login";
  }
  return (
    <>
    {/* dashboard */}
      <div className="container">
        <div className="card user-card mt-2">
          <div className="row">
            <div className="col-md-10">
              <h3>Good Morning, {currentUser.fullName}</h3>
              <p>Email: {currentUser.email}</p>
              <p>Phone: {currentUser.phone}</p>
            </div>
            <div className="col-md-2">
              <img className="dashboard-img" src={ImgCat} alt="" />
            </div>
          </div>
        </div>

        <div className="row">
        <DashboardUserMenu title="menu1"/>
        <DashboardUserMenu title="menu2" />
        <DashboardUserMenu title="menu3"/>
        <DashboardUserMenu title="menu4"/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
