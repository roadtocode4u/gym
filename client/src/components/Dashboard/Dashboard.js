import React from "react";
import DashboardUserMenu from "../DashboardUserMenu/DashboardUserMenu";
import "./Dashboard.css";
import ImgCat from "./img/cat-image.jpg";

function Dashboard() {
  return (
    <>
    {/* dashboard */}
      <div className="container">
        <div className="card user-card mt-2">
          <div className="row">
            <div className="col-md-10">
              <h3>Good Morning, Anand...</h3>
            </div>
            <div className="col-md-2">
              <img className="dashboard-img" src={ImgCat} alt="" />
            </div>
          </div>
        </div>

        <div className="row">
        <DashboardUserMenu title="menu1" DashImg={ImgCat}/>
        <DashboardUserMenu title="menu2" DashImg={ImgCat}/>
        <DashboardUserMenu title="menu3" DashImg={ImgCat}/>
        <DashboardUserMenu title="menu4" DashImg={ImgCat}/>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
