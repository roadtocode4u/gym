import React from "react";
import DashboardUserMenu from "../DashboardUserMenu/DashboardUserMenu";
import "./Dashboard.css";
import ImgCat from "./img/cat-image.jpg";
import getUser from "./../../utils/getUser";
import {Link} from 'react-router-dom';

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
        <DashboardUserMenu title="Exercise" DashImg={ImgCat} MenuLink="/exercise"/>
        <DashboardUserMenu title="Nutrians" DashImg={ImgCat} MenuLink="/nutrians"/>
        <DashboardUserMenu title="menu3" DashImg={ImgCat} MenuLink="/chat"/>
        <DashboardUserMenu title="menu4" DashImg={ImgCat} MenuLink="/exercise"/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
