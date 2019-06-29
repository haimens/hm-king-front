import React, { Component } from "react";
import { Modal } from "../../../components/shared";
import alertify from "alertifyjs";
export default class FeeModal extends Component {
  state = {
    fee_rate: ""
  };

  handleCreatingFee = () => {
    const { fee_rate } = this.state;
    if (fee_rate > 0) {
      this.props.handleCreatingFee(fee_rate * 100);
    } else {
      alertify.alert("Error!", "Please Submit Correct Rate!");
    }
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleClose = e => {
    this.props.onClose();
  };

  render() {
    const { fee_rate } = this.state;
    return (
      <Modal
        title="Add Fee Rate"
        onClose={this.handleClose}
        position="center"
        getWidth={"580px"}
        getHeight={"220px"}
        zIndex="1080"
      >
        <div className="container">
          <label>Fee Rate</label>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control border-right-0"
              id="fee_rate"
              value={fee_rate}
              onChange={this.handleInputChange}
            />
            <div className="input-group-append ">
              <span className="input-group-text bg-white border-left-0">%</span>
            </div>
          </div>
          <div className="form-group text-center p-3">
            <button className="hm-bg-green btn px-4 text-white mr-3" onClick={this.handleCreatingFee}>
              Add
            </button>
            <button onClick={this.handleClose} className="btn btn-outline-secondary px-4">
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}
