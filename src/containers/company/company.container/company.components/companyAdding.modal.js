import React, { Component } from "react";
import { Modal, ImageLoaderModal, PreviewImageModal, CompanyImage } from "../../../../components/shared";
import { parseRate } from "../../../../actions/utilities.action";
import alertify from "alertifyjs";
import GAutoComplete from "../../../../components/shared/GAutoComplete";

export default class PriceModifyModal extends Component {
  state = {
    showImage: false,
    showFavicon: false,
    showPreview: false,
    showPreviewFavicon: false,
    company_name: "",
    company_address: "",
    company_title: "",
    fee_rate: "",
    logo_path: "",
    icon_path: ""
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
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
  handleStatusChange = async e => {
    await this.setState({ status: e.target.value });
  };
  handleCreatingCompany = () => {
    const { logo_path, icon_path, company_name, company_address, company_title, fee_rate } = this.state;
    if (
      logo_path !== "" &&
      icon_path !== "" &&
      company_name !== "" &&
      company_address !== "" &&
      company_title !== "" &&
      fee_rate !== ""
    ) {
      this.props.parentProps.createACompany({
        realm_info: {
          company_name,
          logo_path,
          icon_path,
          company_title
        },
        address_str: company_address[0].formatted_address,
        tribute_rate_token: fee_rate
      });
      this.handleClose();
    } else {
      alertify.alert("Error!", "Please Finish The Form!");
    }
  };

  saveToAddress = address => {
    this.setState({ company_address: address });
  };

  async componentDidMount() {
    await this.props.parentProps.findFeeList();
    const { fee_list } = this.props.parentProps;
    await this.setState({ fee_rate: fee_list.record_list[0].tribute_rate_token });
  }

  render() {
    const {
      logo_path,
      icon_path,
      showImage,
      showFavicon,
      showPreview,
      showPreviewFavicon,
      company_name,
      company_title,
      fee_rate
    } = this.state;
    const { fee_list } = this.props.parentProps;
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
        <Modal title="Add Company" onClose={this.handleClose} position="center" getWidth={"470px"} getHeight={"500px"}>
          <div className="container">
            <div className="p-3">
              <div className="form-group">
                <label className="text-main-color font-weight-bold hm-text-14 w-100" htmlFor="Company Name">
                  Company Name
                </label>
                <input
                  className="form-control hm-input-height"
                  name="company_name"
                  id="company_name"
                  placeholder={"Company Name"}
                  value={company_name}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="text-main-color font-weight-bold hm-text-14 w-100" htmlFor="Fee Rate">
                  Company Address
                </label>
                <GAutoComplete getGoogleAddress={this.saveToAddress} />
              </div>

              <div className="form-group">
                <label className="text-main-color font-weight-bold hm-text-14 w-100" htmlFor="Company Title">
                  Company Title
                </label>
                <input
                  type="text"
                  className="form-control hm-input-height "
                  name="company_title"
                  id="company_title"
                  placeholder={"Company Title"}
                  value={company_title}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group ">
                <label className="text-main-color font-weight-bold hm-text-14 w-100" htmlFor="Fee Rate">
                  Fee Rate
                </label>
                <select
                  className="custom-select form-control hm-input-height"
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

              <div className="form-group text-right pt-3">
                <button
                  className="button-main-background btn button-main-size px-4 text-white mr-3"
                  onClick={this.handleCreatingCompany}
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
