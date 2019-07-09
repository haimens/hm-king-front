import React, { Component } from "react";
import { Modal, ImageLoaderModal, PreviewImageModal, CompanyImage } from "../../../../components/shared";
import alertify from "alertifyjs";
export default class CompanyEditALord extends Component {
  state = {
    img_path: "",
    showImage: false,
    showPreview: false,
    username: "",
    name: "",
    cell: "",
    email: "",
    area: "+1",
    status: "",
    lord_token: ""
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

  handleStatusChange = () => {
    const { status } = this.state;
    if (status === 2) {
      this.setState({ status: 3 });
    } else if (status === 3) {
      this.setState({ status: 2 });
    }
  };

  handleClose = () => {
    this.props.onClose();
  };

  handleUpdateALordInCompany = () => {
    const { name, cell, email, area, img_path, status, lord_token } = this.state;
    const { realm_token, updateALordInCompany } = this.props;
    if (img_path !== "" && name !== "" && cell !== "" && email !== "" && area !== "") {
      updateALordInCompany(realm_token, lord_token, {
        name,
        cell: `${area} ${cell}`,
        email,
        img_path,
        status
      });
      this.handleClose();
    } else {
      alertify.alert("Error!", "Please Finish The Form!");
    }
  };

  componentDidMount() {
    const { cell, email, img_path, name, status_str, lord_token } = this.props.editInfo;
    const phoneNUmber = cell.split(" ");
    this.setState({
      name,
      cell: phoneNUmber[1],
      email,
      area: phoneNUmber[0],
      status: status_str === "ACTIVE" ? 2 : 3,
      img_path,
      lord_token
    });
  }

  render() {
    const { img_path, name, cell, email, area, showImage, showPreview, status } = this.state;
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
          title="Update Company Admin"
          onClose={this.handleClose}
          position="center"
          getWidth={"467px"}
          getHeight={"520px"}
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
              <CompanyImage
                title={"Favicon:"}
                parentProps={{ img_url: img_path, handleShowPreview: this.handleShowPreview }}
                handleShowImage={this.handleShowImage}
              />
              <div className="bg-white align-items-center pt-3" style={{ height: "48px" }}>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="logo">Status</label>
                  </div>

                  <div className="col-2">
                    <button
                      type="button"
                      className={`btn btn-sm p-0 d-flex align-items-center align-middle ${
                        status === 2 ? "hm-bg-green-border" : "btn-outline-secondary "
                      }`}
                      onClick={this.handleStatusChange}
                      style={{ borderRadius: "20px", width: "78px", height: "24px" }}
                    >
                      <i className={`fas ${status === 2 && "hm-text-green"} fa-circle ml-1 pl-0`} />

                      {status === 2 ? (
                        <div className="d-flex ml-2 align-items-center align-middle h-100 hm-text-green ">Active</div>
                      ) : (
                        <div className="d-flex ml-2 align-items-center align-middle h-100">Inactive</div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-group text-right pt-3">
                <button
                  className="button-main-background btn button-main-size px-4 text-white mr-3"
                  onClick={this.handleUpdateALordInCompany}
                >
                  Update
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
