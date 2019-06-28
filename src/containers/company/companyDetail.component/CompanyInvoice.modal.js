import React, { Component } from "react";
import { Modal } from "../../../components/shared";

class CompanyInvoice extends Component {
  state = {
    img_url: "",
    showImage: false,
    showPreview: false,
    company_name: "",
    company_address: "",
    company_title: "",
    fee_rate: ""
  };

  handleInputChange = e => {
    const { id, value } = e.target;
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
    const { img_url, showImage, showPreview, company_name, company_address, company_title, fee_rate } = this.state;
    return (
      <Modal
        title="Add Invoice"
        onClose={this.handleClose}
        position="center"
        getWidth={"580px"}
        getHeight={"384px"}
        zIndex="1080"
      >
        <div className="container">
          <form className="p-3" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="company_name">Name</label>
              <div>{300}</div>
            </div>

            <div className="form-group">
              <label htmlFor="company_address">Cell</label>
              <div>{300}</div>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="company_title">Email</label>
              <input
                type="cell"
                className="form-control"
                name="company_title"
                id="company_title"
                value={company_title}
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

export default CompanyInvoice;
