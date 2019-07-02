import React, { Component } from "react";
import { ImageButton } from "../shared";
import alertify from "alertifyjs";

class Nav extends Component {
  handleClick = type => {
    if (type === "notification") alertify.alert("Bell", "click");
    if (type === "sidebar") {
      this.props.parentProps.toggleSideBar();
    }
  };

  handleLogOut = () => {
    this.props.parentProps.history.push("/");
  };

  handleChangePassword = () => {
    this.props.parentProps.resetPassword(localStorage.getItem("username"));
    alertify.notify("已发送修改密码连接至Email", "已发送修改密码连接至Email", 5);
  };

  handleSideBarBeenOpened = () => {
    this.props.handleSideBarBeenOpened();
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg border-bottom  background-linear navbar-light d-flex 
    justify-content-between align-items-center"
        style={{ height: "77px" }}
      >
        <div className="d-flex align-items-center">
          <i
            className="fas fa-bars p-3 hm-pointer-cursor text-white"
            style={{ fontSize: "18px" }}
            onClick={this.handleSideBarBeenOpened}
          />
        </div>
        <div className="d-flex flex-row align-items-center">
          <div className="btn-group mr-2">
            <button
              type="button"
              className="btn dropdown-toggle text-white"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {localStorage.getItem("username").toUpperCase()}
            </button>

            <div className="dropdown-menu shadow-sm p-3">
              <div className="pb-2">Welcome!</div>
              <div>
                <button
                  className="dropdown-item px-0"
                  type="button"
                  onClick={() => {
                    this.handleChangePassword();
                  }}
                >
                  <small>
                    <i className="fas fa-cog mr-3" />
                  </small>
                  Change Password
                </button>
              </div>
              <div>
                <hr />
                <button
                  className="dropdown-item p-0"
                  type="button"
                  onClick={() => {
                    this.handleLogOut();
                  }}
                >
                  <small>
                    <i className="fas fa-running mr-3" />
                  </small>
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
