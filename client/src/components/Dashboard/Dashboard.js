import React from "react";
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
          <div className="col-md-6 col-sm-12 mt-5">
            <div className="user-dashboard-container">
              <div className="d-flex align-items-center d-flex justify-content-between">
                <h4 className="user-dashboard-title">Dashboard</h4>
                <img
                  className="img-dashboard-user float-end"
                  src={ImgCat}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mt-5">
            <div className="user-dashboard-container">
              <div className="d-flex align-items-center d-flex justify-content-between">
                <h4 className="user-dashboard-title">Dashboard</h4>
                <img
                  className="img-dashboard-user float-end"
                  src={ImgCat}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mt-4">
            <div className="user-dashboard-container">
              <div className="d-flex align-items-center d-flex justify-content-between">
                <h4 className="user-dashboard-title">Dashboard</h4>
                <img
                  className="img-dashboard-user float-end"
                  src={ImgCat}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mt-4">
            <div className="user-dashboard-container">
              <div className="d-flex align-items-center d-flex justify-content-between">
                <h4 className="user-dashboard-title">Dashboard</h4>
                <img
                  className="img-dashboard-user float-end"
                  src={ImgCat}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
