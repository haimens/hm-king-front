import React, { Component } from "react";
import { Modal } from "../../../components/shared";
import { ImageButton, ImageLoaderModal, PreviewImageModal } from "../../../components/shared";

import CompanyImage from "./CompanyImage.component";
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
    logo_url: "",
    favicon_url: ""
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
    this.setState({ logo_url: img_path });
  };
  handleFaviconUpload = img_path => {
    this.setState({ favicon_url: img_path });
  };
  handleSubmit = () => {};

  render() {
    const {
      logo_url,
      favicon_url,
      showImage,
      showFavicon,
      showPreview,
      showPreviewFavicon,
      company_name,
      company_address,
      company_title,
      fee_rate
    } = this.state;
    return (
      <Modal
        title="创建盘口"
        onClose={this.handleClose}
        position="center"
        getWidth={"580px"}
        getHeight={"576px"}
        zIndex="1080"
      >
        {showImage && (
          <ImageLoaderModal
            onClose={() => this.setState({ showImage: false })}
            onImageUpload={this.handleImageUpload}
            title="上传照片"
          />
        )}
        {showFavicon && (
          <ImageLoaderModal
            onClose={() => this.setState({ showFavicon: false })}
            onImageUpload={this.handleFaviconUpload}
            title="上传照片"
          />
        )}
        {showPreview && <PreviewImageModal image={logo_url} onClose={() => this.setState({ showPreview: false })} />}
        {showPreviewFavicon && (
          <PreviewImageModal image={favicon_url} onClose={() => this.setState({ showPreviewFavicon: false })} />
        )}

        <div className="container">
          <form className="p-3" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="company_name">Company Name</label>
              <input
                className="form-control"
                name="company_name"
                id="company_name"
                value={company_name}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company_address">Company Address</label>
              <input
                type="email"
                className="form-control"
                name="company_address"
                id="company_address"
                value={company_address}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company_title">Company Title</label>
              <input
                type="cell"
                className="form-control"
                name="company_title"
                id="company_title"
                value={company_title}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="fee_rate">Fee Rates</label>
              <input
                type="cell"
                className="form-control"
                name="fee_rate"
                id="fee_rate"
                value={fee_rate}
                onChange={this.handleInputChange}
              />
            </div>

            <CompanyImage
              title={"Logo"}
              parentProps={{ img_url: logo_url, handleShowPreview: this.handleShowPreview }}
              handleShowImage={this.handleShowImage}
            />

            <CompanyImage
              title={"Favicon"}
              parentProps={{ img_url: favicon_url, handleShowPreview: this.handleShowPreviewFavicon }}
              handleShowImage={this.handleShowFavicon}
            />

            <div className="row my-4">
              <div className="col-2">Status:</div>
              <div className="col-9">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Active
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Inactive
                  </label>
                </div>
              </div>
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
