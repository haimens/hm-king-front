import React, { Component } from "react";
import { ImageButton, ImageLoaderModal, PreviewImageModal } from "../../../../components/shared";
import { parseRate, convertUTCtoLocal } from "../../../../actions/utilities.action";
import CompanyImage from "./companyImage.component";

class CompanyDetailInfo extends Component {
  state = {
    showAddCompanyModal: false,
    company_name: "",
    realm_token: "",
    company_address: "",
    company_title: "",
    fee_rate: "",
    status: "",
    showImage: "",
    showPreview: "",
    img_url: ""
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.parentProps.company_detail.basic_info.company_name !== prevState.company_name) {
      return {
        company_name: nextProps.parentProps.company_detail.basic_info.company_name,
        company_address: nextProps.parentProps.company_detail.address_info.addr_str,
        company_title: nextProps.parentProps.company_detail.basic_info.company_title,
        fee_rate: nextProps.parentProps.company_detail.tribute_rate_info.rate,
        realm_token: nextProps.parentProps.company_detail.basic_info.realm_token,
        status: nextProps.parentProps.company_detail.basic_info.status,
        showImage: "",
        showPreview: "",
        img_url: ""
      };
    } else return null;
  }

  render() {
    const {
      company_name,
      realm_token,
      company_address,
      company_title,
      fee_rate,
      status,
      showImage,
      showPreview,
      img_url
    } = this.state;
    const { fee_list, company_detail } = this.props.parentProps;
    const { cdate, udate } = company_detail;
    return (
      <section>
        {showImage && (
          <ImageLoaderModal
            onClose={() => this.setState({ showImage: false })}
            onImageUpload={this.handleImageUpload}
            title="Upload Image"
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
                      <div>{convertUTCtoLocal(udate)}</div>
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
                      <label htmlFor="udate">Created On</label>
                      <div>{convertUTCtoLocal(cdate)}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="row">
                  <div className="form-group col-6">
                    <label htmlFor="company_address">Available Balance</label>
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
              <div className="col-6">
                <div className="form-group ">
                  <label htmlFor="fee_rate">Fee Rate</label>
                  <select
                    className="custom-select form-control"
                    id="fee_rate"
                    value={fee_rate}
                    onChange={this.handleInputChange}
                  >
                    {fee_list.record_list.map((fee, index) => {
                      return (
                        <option key={index} value={fee.tribute_rate_token} defaultValue={fee_rate === fee.rate}>
                          {parseRate(fee.rate)}
                        </option>
                      );
                    })}
                  </select>
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
                        id="status"
                        value="2"
                        checked={status == "2"}
                        onChange={this.handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="status">
                        Active
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="status"
                        value="1"
                        checked={status == "1"}
                        onChange={this.handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="status">
                        Inactive
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12  p-2 pr-4 ">
                <div className="form-group text-right ">
                  <button className="hm-bg-green btn btn-sm px-4 text-white mr-3">SAVE</button>
                  <button onClick={this.handleCancel} className="btn btn-sm btn-outline-secondary px-4">
                    BACK
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

export default CompanyDetailInfo;
