import React, { Component } from "react";
import { Modal, ImageLoaderModal, PreviewImageModal, CompanyImage } from "../../../../components/shared";
import alertify from "alertifyjs";
export default class CompanyBasicInfo extends Component {
  state = {
    img_path: "",
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
  handleShowPreview = () => {
    this.setState(states => ({ showPreview: !states.showPreview }));
  };
  handleImageUpload = img_path => {
    this.setState({ img_path });
  };

  handleClose = () => {
    this.props.onClose();
  };

  handleAddingCompanyAdmin = () => {
    const { username, name, cell, email, area, img_path } = this.state;
    const { realm_token, createALordInCompany } = this.props;
    if (username !== "" && name !== "" && cell !== "" && email !== "" && area !== "") {
      createALordInCompany(realm_token, {
        username,
        name,
        cell: `${area} ${cell}`,
        email,
        img_path
      });
      this.handleClose();
    } else {
      alertify.alert("Error!", "Please Finish The Form!");
    }
  };

  render() {
    const { img_path, name, cell, email, area, showImage, showPreview, username } = this.state;
    return (
      <div>
        {showImage && (
          <ImageLoaderModal
            onClose={() => this.setState({ showImage: false })}
            onImageUpload={this.handleImageUpload}
            title="Upload Image"
          />
        )}
        {showPreview && <PreviewImageModal image={img_path} onClose={() => this.setState({ showPreview: false })} />}
        <Modal
          title="Add Company Admin"
          onClose={this.handleClose}
          position="center"
          getWidth={"467px"}
          getHeight={"530px"}
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

              <CompanyImage
                title={"Favicon:"}
                parentProps={{ img_url: img_path, handleShowPreview: this.handleShowPreview }}
                handleShowImage={this.handleShowImage}
              />

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
