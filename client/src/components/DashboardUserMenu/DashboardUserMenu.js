import React from 'react';
import {Link} from 'react-router-dom';

export default function DashboardUserMenu(props) {
  return (
    <>
          <div className="col-md-6 col-sm-12 mt-5">
            <Link to={props.MenuLink}>
            <div className="user-dashboard-container">
              <div className="d-flex align-items-center d-flex justify-content-between">
                <h4 className="user-dashboard-title">{props.title}</h4>
                <img
                  className="img-dashboard-user float-end"
                  src={props.DashImg}
                  alt=""
                />
              </div>
            </div>
            </Link>
          </div>
    </>
  )
}
