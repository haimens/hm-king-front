import React, { Component } from "react";
import { Modal } from "../../../components/shared";

export default class RateModal extends Component {
  state = {
    fee_rate: ""
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    console.log(e.target);
    this.setState({ [id]: value });
  };

  handleShowImage = () => {
    this.setState(states => ({ showImage: !states.showImage }));
  };

  handleClose = () => {
    this.props.onClose();
  };
  handleImageUpload = img_path => {
    this.setState({ img_url: img_path });
  };
  componentDidMount() {}

  render() {
    const { fee_rate } = this.state;
    return (
      <Modal
        title="Add Fee Rate"
        onClose={this.handleClose}
        position="center"
        getWidth={"580px"}
        getHeight={"214px"}
        zIndex="1080"
      >
        <div className="container">
          <form className="p-3" onSubmit={this.handleSubmit}>
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
            <div className="form-group text-center">
              <button className="hm-bg-green btn px-4 text-white mr-3">Add</button>
              <button onClick={this.handleCancel} className="btn btn-outline-secondary px-4">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }
}
