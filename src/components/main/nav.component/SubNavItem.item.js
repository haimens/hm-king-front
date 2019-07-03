import React, { Component } from "react";

/**
 * SubNavItem
 * @is_target
 * @name
 */
export default class SubNavItem extends Component {
  handleClick = () => {
    if (this.props.onClick) this.props.onClick();
  };
  render() {
    const targetSubNavClassName = this.props.is_target
      ? "btn w-100 hm-bg-deepblue  text-white text-left pl-5 py-3 "
      : "btn w-100 hm-bg-lessdeepblue text-white text-left pl-5 py-3 ";
    const { name, path, history, showArrow = true } = this.props;
    const parsedLocation = history.location.pathname.split("/");
    return (
      <button
        onClick={() => this.handleClick()}
        className={`btn d-flex align-items-center w-100 ${parsedLocation[2] === path && "nav-selected"}`}
        type="button"
      >
        <div className="d-flex">
          <div
            className={`d-block hm-text-14 ${parsedLocation[2] === path ? "text-black" : "text-grey"}`}
            style={{ marginLeft: "70px" }}
          >
            {name}
          </div>
        </div>
      </button>
    );
  }
}
