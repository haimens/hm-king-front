import React, { Component } from "react";
import { Modal } from "../../../../components/shared";
import { ImageButton, ImageLoaderModal, PreviewImageModal } from "../../../../components/shared";
import alertify from "alertifyjs";
import CompanyImage from "./companyImage.component";
export default class CompanyAdmin extends Component {
  state = {
    img_url: "",
    showImage: false,
    showPreview: false,
    username: "",
    name: "",
    cell: "",
    email: ""
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
    const { username, name, cell, email } = this.state;
    if ((username !== "", name !== "", cell !== "", email !== "")) {
      this.props.createALord(this.props.realm_token, {
        username,
        name,
        cell,
        email
      });
      this.handleClose();
    } else {
      alertify.alert("Error!", "Please Finished The Form!");
    }
  };

  render() {
    const { username, name, cell, email } = this.state;
    return (
      <div>
        {/* {showImage && (
          <ImageLoaderModal
            onClose={() => this.setState({ showImage: false })}
            onImageUpload={this.handleImageUpload}
            title="Image Upload"
          />
        )}
        {showPreview && <PreviewImageModal image={img_url} onClose={() => this.setState({ showPreview: false })} />} */}
        <Modal
          title="Add Company Admin"
          onClose={this.handleClose}
          position="center"
          getWidth={"580px"}
          getHeight={"450px"}
          zIndex="1080"
        >
          <div className="container">
            <div className="p-3">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  value={name}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cell">Cell</label>
                <input type="text" className="form-control" id="cell" value={cell} onChange={this.handleInputChange} />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={this.handleInputChange}
                />
              </div>
              {/* <CompanyImage
                parentProps={{ img_url, showPreview }}
                title={"Profile"}
                handleShowImage={this.handleShowImage}
              /> */}

              <div className="form-group text-center p-3">
                <button className="hm-bg-green btn btn-sm px-4 text-white mr-3" onClick={this.handleAddingCompanyAdmin}>
                  Add
                </button>
                <button onClick={this.handleClose} className="btn btn-sm btn-outline-secondary px-4">
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
