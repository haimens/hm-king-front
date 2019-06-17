import React, { Component } from "react";
import { Modal } from "../../../components/shared";
import { ImageButton, ImageLoaderModal, PreviewImageModal } from "../../../components/shared";

import CompanyImage from "./CompanyImage.component";
export default class PriceModifyModal extends Component {
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
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
      <form>
        {showImage && (
          <ImageLoaderModal
            onClose={() => this.setState({ showImage: false })}
            onImageUpload={this.handleImageUpload}
            title="上传照片"
          />
        )}
        {showPreview && <PreviewImageModal image={img_url} onClose={() => this.setState({ showPreview: false })} />}
        <Modal
          title="创建盘口"
          onClose={this.handleClose}
          position="center"
          getWidth={"580px"}
          getHeight={"576px"}
          zIndex="1080"
        >
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
              parentProps={{ img_url, showPreview }}
              title={"Logo"}
              handleShowImage={this.handleShowImage}
            />
            <CompanyImage
              parentProps={{ img_url, showPreview }}
              title={"Favicon"}
              handleShowImage={this.handleShowImage}
            />
            <div className="row">
              <div className="col-2">Status:</div>
              <div className="col-9">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Active
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Inactive
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group text-center mt-2">
              <button className="hm-bg-green btn btn-sm px-4 text-white mr-3">Add</button>
              <button onClick={this.handleCancel} className="btn btn-sm btn-outline-secondary px-4">
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      </form>
    );
  }
}
