import React, { Component } from "react";

/**
 * IconButton
 * @icon required
 * @title required
 * @className
 */
export default class IconButton extends Component {
  handleClick = () => {
    if (this.props.onClick) this.props.onClick();
  };
  render() {
    const { icon, title, className } = this.props;
    return (
      <button
        onClick={() => this.handleClick()}
        className={`btn btn-sm d-flex justify-content-between align-items-center px-2 py-0 ${className}`}
      >
        <img src={icon} alt={icon} className="hm-2" width="20px" height="20px" />
        <small>{title || "Submit"}</small>
      </button>
    );
  }
}
