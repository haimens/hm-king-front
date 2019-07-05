import React, { Component } from "react";
import { Modal, GAutoComplete, CompanyImage, ImageLoaderModal, PreviewImageModal } from "../../../../components/shared";
import { parseRate } from "../../../../actions/utilities.action";
import alertify from "alertifyjs";
export default class CompanyAdmin extends Component {
  state = {
    company_name: "",
    company_title: "",
    logo_path: "",
    icon_path: "",
    addr_str: "",
    status: ""
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
  handleStatusChange = () => {
    const { status } = this.state;
    if (status === 2) {
      this.setState({ status: 1 });
    } else if (status === 1) {
      this.setState({ status: 2 });
    }
  };
  handleShowImage = () => {
    this.setState(states => ({ showImage: !states.showImage }));
  };
  handleShowFavicon = () => {
    this.setState(states => ({ showFavicon: !states.showFavicon }));
  };
  handleShowPreview = () => {
    this.setState(states => ({ showPreview: !states.showPreview }));
  };
  handleShowPreviewFavicon = () => {
    this.setState(states => ({ showPreviewFavicon: !states.showPreviewFavicon }));
  };
  handleClose = () => {
    this.props.onClose();
  };
  handleImageUpload = img_path => {
    this.setState({ logo_path: img_path });
  };
  handleFaviconUpload = img_path => {
    this.setState({ icon_path: img_path });
  };
  handleClose = () => {
    this.props.onClose();
  };

  saveToAddress = address => {
    console.log(address);
  };
  handleAddingCompanyAdmin = () => {
    const { username, name, cell, email, area } = this.state;
    const { realm_token, createALord } = this.props;
    if (username !== "" && name !== "" && cell !== "" && email !== "" && area !== "") {
      createALord(realm_token, {
        username,
        name,
        cell: `${area} ${cell}`,
        email
      });
      this.handleClose();
    } else {
      alertify.alert("Error!", "Please Finished The Form!");
    }
  };

  componentDidMount() {
    const { basic_info, address_info } = this.props.company_detail;
    console.log(this.props);
    this.setState({
      company_name: basic_info.company_name,
      company_title: basic_info.company_title,
      addr_str: address_info.addr_str,
      logo_path: basic_info.logo_path,
      icon_path: basic_info.icon_path,
      status: basic_info.status
    });
  }

  render() {
    const {
      company_name,
      company_title,
      addr_str,
      logo_path,
      icon_path,
      fee_rate,
      showImage,
      showFavicon,
      showPreview,
      showPreviewFavicon,
      status
    } = this.state;
    const { fee_list } = this.props;
    return (
      <div>
        {showImage && (
          <ImageLoaderModal
            onClose={() => this.setState({ showImage: false })}
            onImageUpload={this.handleImageUpload}
            title="Upload Image"
          />
        )}
        {showFavicon && (
          <ImageLoaderModal
            onClose={() => this.setState({ showFavicon: false })}
            onImageUpload={this.handleFaviconUpload}
            title="Upload Image"
          />
        )}
        {showPreview && <PreviewImageModal image={logo_path} onClose={() => this.setState({ showPreview: false })} />}
        {showPreviewFavicon && (
          <PreviewImageModal image={icon_path} onClose={() => this.setState({ showPreviewFavicon: false })} />
        )}
        <Modal
          title="Update Basic Information"
          onClose={this.handleClose}
          position="center"
          getWidth={"467px"}
          getHeight={"625px"}
        >
          <div className="container">
            <div className="p-3">
              <div className="form-group pt-3">
                <input
                  type="text"
                  className="form-control hm-input-height"
                  name="company_name"
                  placeholder="Company Name"
                  id="company_name"
                  value={company_name}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group">
                <GAutoComplete defaultValue={addr_str} getGoogleAddress={this.saveToAddress} />
              </div>

              <div className="form-group input-group">
                <input
                  type="text"
                  className="form-control hm-input-height "
                  id="company_title"
                  placeholder="Company Title"
                  value={company_title}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group ">
                <select
                  className="custom-select form-control hm-input-height  mt-3"
                  id="fee_rate"
                  value={fee_rate}
                  onChange={this.handleInputChange}
                >
                  {fee_list.record_list.map((fee, index) => {
                    return (
                      <option key={index} value={fee.tribute_rate_token}>
                        {parseRate(fee.rate)}
                      </option>
                    );
                  })}
                </select>
              </div>

              <CompanyImage
                title={"Logo:"}
                parentProps={{ img_url: logo_path, handleShowPreview: this.handleShowPreview }}
                handleShowImage={this.handleShowImage}
              />

              <CompanyImage
                title={"Favicon:"}
                parentProps={{ img_url: icon_path, handleShowPreview: this.handleShowPreviewFavicon }}
                handleShowImage={this.handleShowFavicon}
              />

              <div className="bg-white align-items-center pt-3" style={{ height: "48px" }}>
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="logo">Status</label>
                  </div>

                  <div className="col-2">
                    <button
                      type="button"
                      className={`btn btn-sm p-0 btn-outline-secondary d-flex align-items-center align-middle ${status ===
                        2 && "hm-bg-green-border"}`}
                      onClick={this.handleStatusChange}
                      style={{ borderRadius: "20px", width: "88px", height: "24px" }}
                    >
                      <i className={`fa${status === 2 ? "s hm-text-green" : "r"} fa-circle ml-1 `} />

                      {status === 2 ? (
                        <div className="d-flex ml-2 align-items-center align-middle h-100 hm-text-green">Active</div>
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
