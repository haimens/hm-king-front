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
    const {
      realm_token,
      createALordInCompany,
      company_detail: { basic_info, email_resource_info }
    } = this.props;
    if (username !== "" && name !== "" && cell !== "" && email !== "" && area !== "") {
      if (email_resource_info && !email_resource_info.sendgrid_api_key) {
        alertify.confirm(
          "We will not send confirmation Email due to lack of email resource. Are you sure to continue?",
          () =>
            createALordInCompany(
              realm_token,
              {
                username,
                name,
                cell: `${area} ${cell}`,
                email,
                img_path
              },
              basic_info.logo_path,
              basic_info.company_name,
              true
            ),
          function() {
            alertify.error("Cancel");
          }
        );
      } else {
        createALordInCompany(
          realm_token,
          {
            username,
            name,
            cell: `${area} ${cell}`,
            email,
            img_path
          },
          basic_info.logo_path,
          basic_info.company_name
        );
      }

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
          getHeight={"500px"}
        >
          <div className="container">
            <div className="p-3">
              <div className="form-group mb-4">
                <label className="text-main-color font-weight-bold hm-text-14 w-100" htmlFor="Name">
                  Name
                </label>
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

              <div className="form-group input-group mb-4">
                <label className="text-main-color font-weight-bold hm-text-14 w-100" htmlFor="Cell">
                  Cell
                </label>
                <div className="container-fluid">
                  <div className="row">
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
                      className="form-control hm-input-height col-10"
                      id="cell"
                      placeholder="Cell"
                      value={cell}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group mb-4">
                <label className="text-main-color font-weight-bold hm-text-14 w-100" htmlFor="Email">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control hm-input-height"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group mb-4">
                <label className="text-main-color font-weight-bold hm-text-14 w-100" htmlFor="Username">
                  Username
                </label>
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
                title={"Img:"}
                parentProps={{ img_url: img_path, handleShowPreview: this.handleShowPreview }}
                handleShowImage={this.handleShowImage}
              />

              <div className="form-group text-right mb-4">
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
