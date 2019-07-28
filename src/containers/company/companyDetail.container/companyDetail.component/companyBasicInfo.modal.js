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
    status: "",
    fee_rate: "",
    default_address: "",
    fee_rate_changed: false
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
    if (id === "fee_rate") {
      this.setState({ fee_rate_changed: true });
    }
  };
  handleStatusChange = () => {
    const { status } = this.state;
    if (status === 2) {
      this.setState({ status: 3 });
    } else if (status === 3) {
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
  saveToAddress = address => {
    this.setState({ addr_str: address[0].formatted_address });
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

  handleUpdateBasicInfo = async () => {
    const {
      company_name,
      company_title,
      logo_path,
      icon_path,
      status,
      addr_str,
      default_address,
      fee_rate_changed,
      fee_rate
    } = this.state;
    const { realm_token, updateABasicInfo, createNewAddressInstance, setPrimaryForResources } = this.props;
    if (
      company_name !== "" &&
      company_title !== "" &&
      logo_path !== "" &&
      icon_path !== "" &&
      status !== "" &&
      addr_str !== ""
    ) {
      if (default_address !== addr_str) {
        const payload = await createNewAddressInstance({ address_str: addr_str });
        setPrimaryForResources(realm_token, { address_token: payload.address_token });
      }
      if (fee_rate_changed) {
        setPrimaryForResources(realm_token, { tribute_rate_token: fee_rate });
      }
      await updateABasicInfo(realm_token, {
        company_name,
        company_title,
        logo_path,
        icon_path,
        status
      });
      this.handleClose();
    } else {
      alertify.alert("Error!", "Please Finish The Form!");
    }
  };

  componentDidMount() {
    const { basic_info, address_info, tribute_rate_info } = this.props.company_detail;
    this.setState({
      company_name: basic_info.company_name,
      company_title: basic_info.company_title,
      addr_str: address_info.addr_str,
      default_address: address_info.addr_str,
      logo_path: basic_info.logo_path,
      icon_path: basic_info.icon_path,
      status: basic_info.status,
      fee_rate: tribute_rate_info.tribute_rate_token
    });
  }

  render() {
    const {
      company_name,
      company_title,
      logo_path,
      icon_path,
      fee_rate,
      showImage,
      showFavicon,
      default_address,
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
          getHeight={"720px"}
        >
          <div className="container">
            <div className="p-3">
              <div className="form-group pt-2">
                <label className="text-main-color font-weight-bold hm-text-14 w-100" htmlFor="Company Name">
                  Company Name
                </label>
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

              <div className="form-group input-group pt-2">
                <label className="text-main-color font-weight-bold hm-text-14 w-100" htmlFor="Company Title">
                  Company Title
                </label>
                <input
                  type="text"
                  className="form-control hm-input-height"
                  id="company_title"
                  placeholder="Company Title"
                  value={company_title}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="text-main-color font-weight-bold hm-text-14 w-100" htmlFor="Address">
                  Address
                </label>
                <GAutoComplete defaultValue={default_address} getGoogleAddress={this.saveToAddress} />
              </div>

              <div className="form-group ">
                <label className="text-main-color font-weight-bold hm-text-14 w-100" htmlFor="Fee Rate">
                  Fee Rate
                </label>
                <select
                  className="custom-select form-control hm-input-height "
                  id="fee_rate"
                  value={fee_rate}
                  onChange={this.handleInputChange}
                >
                  {fee_list.record_list.map((fee, index) => {
                    return (
                      <option
                        key={index}
                        value={fee.tribute_rate_token}
                        defaultValue={fee_rate === fee.tribute_rate_token}
                      >
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
                      className={`btn btn-sm p-0 d-flex align-items-center align-middle ${
                        status === 2 ? "hm-bg-green-border" : "btn-outline-secondary "
                      }`}
                      onClick={this.handleStatusChange}
                      style={{ borderRadius: "20px", width: "88px", height: "24px" }}
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
                  onClick={this.handleUpdateBasicInfo}
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
