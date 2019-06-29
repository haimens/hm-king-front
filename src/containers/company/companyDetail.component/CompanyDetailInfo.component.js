import React, { Component } from "react";
import { ImageButton, ImageLoaderModal, PreviewImageModal } from "../../../components/shared";
import CompanyImage from "./CompanyImage.component";

export default class CompanyDetailInfo extends Component {
  state = {
    showAddCompanyModal: false,
    company_name: "",
    realm_token: "",
    company_address: "",
    company_title: "",
    fee_rate: "",
    showImage: "",
    showPreview: "",
    img_url: ""
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const {
      company_name,
      realm_token,
      company_address,
      company_title,
      fee_rate,
      showImage,
      showPreview,
      img_url
    } = this.state;

    return (
      <section>
        {showImage && (
          <ImageLoaderModal
            onClose={() => this.setState({ showImage: false })}
            onImageUpload={this.handleImageUpload}
            title="上传照片"
          />
        )}
        {showPreview && <PreviewImageModal image={img_url} onClose={() => this.setState({ showPreview: false })} />}
        <div className="mb-3">
          <h4>Company Detail</h4>
          <div className="container-fluid bg-white shadow-sm my-3">
            <div className="row rounded p-3">
              <div className="col-12  ">
                <div className="row">
                  <div className="form-group col-6">
                    <label htmlFor="company_name">Company Name</label>
                    <input
                      className="form-control"
                      name="company_name"
                      id="company_name"
                      value={company_name}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-6 ">
                    <div className="form-group">
                      <label htmlFor="udate">Last Updated On</label>
                      <div>{"2018-12-17 15:58"}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="row">
                  <div className="form-group col-6">
                    <label htmlFor="realm_token">Realm Token</label>
                    <input
                      type="cell"
                      className="form-control"
                      name="realm_token"
                      id="realm_token"
                      value={realm_token}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="col-6  ">
                    <div className="form-group">
                      <label htmlFor="udate">Last Updated On</label>
                      <div>{"2018-12-17 15:58"}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="row">
                  <div className="form-group col-6">
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
                  <div className="col-6  ">
                    <div className="form-group">
                      <label htmlFor="udate">Last Updated On</label>
                      <div>{"2018-12-17 15:58"}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="row">
                  <div className="form-group col-6">
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
                  <div className="col-6  ">
                    <CompanyImage
                      parentProps={{ img_url, showPreview }}
                      title={"Logo"}
                      handleShowImage={this.handleShowImage}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="row">
                  <div className="form-group col-6">
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
                  <div className="col-6  ">
                    <CompanyImage
                      parentProps={{ img_url, showPreview }}
                      title={"Favicon"}
                      handleShowImage={this.handleShowImage}
                    />
                  </div>
                </div>
              </div>

              <div className="col-12 ">
                <div className="row">
                  <div className="form-group col-6 d-flex">
                    <div>Status:</div>
                    <div className="form-check form-check-inline ml-3">
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
              </div>
              <div className="col-12  p-2 pr-4 ">
                <div className="form-group text-right ">
                  <button className="hm-bg-green btn btn-sm px-4 text-white hm-3">Add</button>
                  <button onClick={this.handleCancel} className="btn btn-sm btn-outline-secondary px-4">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
