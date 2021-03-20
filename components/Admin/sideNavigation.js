import React from "react";

const SideNavigation = (props) => {
  return (
    <div className="sidenav d-none d-md-none d-lg-block d-xl-block d-xxl-block col-2">
      <ul>
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={(e) => props.currentTab(e.currentTarget.innerText)}
          >
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={(e) => props.currentTab(e.currentTarget.innerText)}
          >
            Users
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={(e) => props.currentTab(e.currentTarget.innerText)}
          >
            Bookings
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={(e) => props.currentTab(e.currentTarget.innerText)}
          >
            Services
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            onClick={(e) => props.currentTab(e.currentTarget.innerText)}
          >
            Main Services
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNavigation;
