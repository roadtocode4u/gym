import React from 'react'

export default function DashboardUserMenu(props) {
  return (
    <>
          <div className="col-md-6 col-sm-12 mt-5">
            <div className="user-dashboard-container">
              <div className="d-flex align-items-center d-flex justify-content-between">
                <h4 className="user-dashboard-title">{props.title}</h4>
                <img
                  className="img-dashboard-user float-end"
                //   src={ImgCat}
                  alt=""
                />
              </div>
            </div>
          </div>
    </>
  )
}
