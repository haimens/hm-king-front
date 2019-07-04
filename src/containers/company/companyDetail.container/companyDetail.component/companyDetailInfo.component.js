import React, { Component } from "react";
import { ImageButton, ImageLoaderModal, PreviewImageModal } from "../../../../components/shared";
import { parseRate, convertUTCtoLocal } from "../../../../actions/utilities.action";
import CompanyImage from "./companyImage.component";
import "./companyDetailInfo.component.css";
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

  render() {
    return (
      <section className="bg-white rounded-custom mb-4 ">
        <div className="row" style={{ padding: "40px" }}>
          <div className="col-2">
            <img
              className="rounded-circle"
              style={{ height: "90px", width: "90px" }}
              src={`${process.env.PUBLIC_URL}/img/king_bg.jpg`}
              alt="avatar"
            />
          </div>
          <div className="col-10   ">
            <div className="row text-modal-color">
              <div className="col-6">
                <div className="company-intro-border p-3">
                  <div className="d-flex justify-content-between align-items-center  ">
                    <div className="hm-text-16 font-weight-bold">Basic Information</div>
                    <button className="rounded-circle bg-white company-detail-button d-flex justify-content-center align-items-center">
                      <i className="fas fa-pencil-alt" style={{ color: "#fb6240" }} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="company-intro-border p-3">
                  <div className="d-flex justify-content-between align-items-center  ">
                    <div className="hm-text-16 font-weight-bold">Basic Information</div>
                    <button className="rounded-circle bg-white company-detail-button-sub d-flex justify-content-center align-items-center">
                      <i className="fas fa-ellipsis-h" style={{ color: "#5e72e4" }} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="company-intro-border p-3">
                  <div className="d-flex justify-content-between align-items-center  ">
                    <div className="hm-text-16 font-weight-bold">Basic Information</div>
                    <button className="rounded-circle bg-white company-detail-button-sub d-flex justify-content-center align-items-center">
                      <i className="fas fa-ellipsis-h" style={{ color: "#5e72e4" }} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="company-intro-border p-3">
                  <div className="d-flex justify-content-between align-items-center  ">
                    <div className="hm-text-16 font-weight-bold">Basic Information</div>
                    <button className="rounded-circle bg-white company-detail-button-sub d-flex justify-content-center align-items-center">
                      <i className="fas fa-ellipsis-h" style={{ color: "#5e72e4" }} />
                    </button>
                  </div>
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
