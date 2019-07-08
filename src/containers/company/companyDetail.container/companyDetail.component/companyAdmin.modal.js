import React, { Component } from "react";
import { Modal } from "../../../../components/shared";
import alertify from "alertifyjs";
export default class CompanyBasicInfo extends Component {
  state = {
    img_url: "",
    showImage: false,
    showPreview: false,
    username: "",
    name: "",
    cell: "",
    email: "",
    area: "+1"
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
  handleAddingCompanyAdmin = () => {
    const { username, name, cell, email, area } = this.state;
    const { realm_token, createALordInCompany } = this.props;
    if (username !== "" && name !== "" && cell !== "" && email !== "" && area !== "") {
      createALordInCompany(realm_token, {
        username,
        name,
        cell: `${area} ${cell}`,
        email
      });
      this.handleClose();
    } else {
      alertify.alert("Error!", "Please Finish The Form!");
    }
  };

  render() {
    const { username, name, cell, email, area } = this.state;
    return (
      <div>
        <Modal
          title="Add Company Admin"
          onClose={this.handleClose}
          position="center"
          getWidth={"467px"}
          getHeight={"500px"}
          zIndex="3"
        >
          <div className="container">
            <div className="p-3">
              <div className="form-group pt-3">
                <input
                  type="text"
                  className="form-control hm-input-height"
                  name="name"
                  placeholder="Name"
                  id="name"
                  value={name}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group input-group pt-3 d-flex">
                <input
                  type="text"
                  className="form-control hm-input-height col-2"
                  id="area"
                  placeholder="Area"
                  value={area}
                  onChange={this.handleInputChange}
                />

                <input
                  type="text"
                  className="form-control hm-input-height "
                  id="cell"
                  placeholder="Cell"
                  value={cell}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group pt-3">
                <input
                  type="email"
                  className="form-control hm-input-height"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group pt-3">
                <input
                  type="text"
                  className="form-control hm-input-height"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group text-right pt-3">
                <button
                  className="button-main-background btn button-main-size px-4 text-white mr-3"
                  onClick={this.handleAddingCompanyAdmin}
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
      </div>
    );
  }
}
