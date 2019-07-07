import React, { Component } from "react";
import { Modal } from "../../../../components/shared";
import alertify from "alertifyjs";
import { isNumber } from "util";
export default class FeeModal extends Component {
  state = {
    amount: "",
    note: ""
  };

  handleCreatingFee = () => {
    const { amount, note } = this.state;
    if (amount > 0 && !isNaN(amount) && note !== "") {
      this.props.handleCreatingFee({ coin_token: amount * 100, note });
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
    const { amount, note } = this.state;
    return (
      <Modal
        title="Add Fee"
        onClose={this.handleClose}
        position="center"
        getWidth={"467px"}
        getHeight={"339px"}
        zIndex="1080"
      >
        <div className="container">
          <div className="p-3">
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control hm-input-height mt-3"
                id="amount"
                value={amount}
                placeholder="Amount"
                onChange={this.handleInputChange}
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control hm-input-height mt-3"
                id="note"
                placeholder="Note"
                value={note}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group text-right pt-3">
              <button
                className="button-main-background btn button-main-size px-4 text-white mr-3"
                onClick={this.handleCreatingFee}
              >
                Add
              </button>
              <button onClick={this.handleClose} className="btn button-main-size btn-outline-secondary px-4">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
