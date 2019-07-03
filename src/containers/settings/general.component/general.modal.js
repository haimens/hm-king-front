import React, { Component } from "react";
import { Modal } from "../../../components/shared";

export default class KeyModal extends Component {
  state = {
    key: "",
    value: ""
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleClose = () => {
    this.props.onClose();
  };
  render() {
    const { key, value } = this.state;
    return (
      <Modal
        title="Add Key Value"
        onClose={this.handleClose}
        position="center"
        getWidth={"580px"}
        getHeight={"289px"}
        zIndex="1080"
      >
        <div className="container">
          <form className="p-3" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="key">Key</label>
              <input
                type="text"
                className="form-control"
                name="key"
                id="key"
                value={key}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="value">Value</label>
              <input
                type="text"
                className="form-control"
                name="value"
                id="value"
                value={value}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group text-center p-3">
              <button className="hm-bg-green btn btn-sm px-4 text-white hm-3">Add</button>
              <button onClick={this.handleClose} className="btn btn-sm btn-outline-secondary px-4">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}
