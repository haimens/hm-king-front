import React, { Component } from "react";
import { parseRate, parseAmount } from "../../../../actions/utilities.action";
import "./companyDetailInfo.component.css";
class CompanyDetailInfo extends Component {
  handleDetailButtonClicked = type => {
    this.props.handleDetailButtonClicked(type);
  };
  render() {
    const { sum, company_detail } = this.props;
    const {
      basic_info,
      address_info,
      tribute_rate_info,
      message_resource_info,
      email_resource_info,
      payment_resource_info
    } = company_detail;
    return (
      <div className="bg-white rounded-custom shadow-sm border">
        <div className="row" style={{ padding: "40px" }}>
          <div className="col-lg-2 col-12 mb-4 d-flex justify-content-center">
            <img
              className="rounded-circle"
              style={{ height: "90px", width: "90px" }}
              src={basic_info.logo_path}
              alt="avatar"
            />
          </div>
          <div className="col-lg-10 col-12">
            <div className="row text-modal-color">
              <div className="col-lg-6 col-12 mb-4">
                <div className="company-intro-border p-3">
                  <div className="d-flex justify-content-between align-items-center  ">
                    <div className="hm-text-16 font-weight-bold">Basic Information</div>

                    <img
                      src={`${process.env.PUBLIC_URL}/img/icon_edit.svg`}
                      className="hm-pointer-cursor"
                      alt="icon"
                      onClick={() => this.handleDetailButtonClicked("basic")}
                    />
                  </div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Company Name</div>
                  <div className="hm-text-14 font-weight-bold">{basic_info.company_name}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Company Address</div>
                  <div className="hm-text-14 font-weight-bold">{address_info.addr_str}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Company Title</div>
                  <div className="hm-text-14 font-weight-bold">{basic_info.company_title}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Available Balance</div>
                  <div className="hm-text-14 font-weight-bold">{parseAmount(sum)}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Fee Rate</div>
                  <div className="hm-text-14 font-weight-bold">{parseRate(tribute_rate_info.rate)}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Status</div>
                  <div className="hm-text-14 font-weight-bold">
                    {basic_info.status === 2 ? (
                      <div className="d-flex align-items-center ">
                        <i className="fas fa-circle success-text-color mr-3 pl-0" style={{ fontSize: "6px" }} />
                        <div>Active</div>
                      </div>
                    ) : (
                      <div className="d-flex align-items-center">
                        <i className="fas fa-circle text-danger mr-3" style={{ fontSize: "6px" }} />
                        <div>Inactive</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className="company-intro-border p-3">
                  <div className="d-flex justify-content-between align-items-center  ">
                    <div className="hm-text-16 font-weight-bold">Primary Payment Information</div>
                    <button
                      className="rounded-circle bg-white company-detail-button-sub d-flex justify-content-center align-items-center"
                      onClick={() => this.handleDetailButtonClicked("payment")}
                    >
                      <i className="fas fa-ellipsis-h" style={{ color: "#5e72e4" }} />
                    </button>
                  </div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Square Application Id</div>
                  <div className="hm-text-14 font-weight-bold">
                    {payment_resource_info.square_application_id || "N/A"}
                  </div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Square Location Id</div>
                  <div className="hm-text-14 font-weight-bold">{payment_resource_info.square_location_id || "N/A"}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Square Access Token</div>
                  <div className="hm-text-14 font-weight-bold" style={{ wordWrap: "break-word" }}>
                    {payment_resource_info.square_access_token || "N/A"}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="company-intro-border p-3">
                  <div className="d-flex justify-content-between align-items-center  ">
                    <div className="hm-text-16 font-weight-bold">Primary Message Information</div>
                    <button
                      className="rounded-circle bg-white company-detail-button-sub d-flex justify-content-center align-items-center"
                      onClick={() => this.handleDetailButtonClicked("message")}
                    >
                      <i className="fas fa-ellipsis-h" style={{ color: "#5e72e4" }} />
                    </button>
                  </div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Twilio Account Id</div>
                  <div className="hm-text-14 font-weight-bold">{message_resource_info.twilio_account_id || "N/A"}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Twilio Auth Token</div>
                  <div className="hm-text-14 font-weight-bold">{message_resource_info.twilio_auth_token || "N/A"}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Twilio From Num</div>
                  <div className="hm-text-14 font-weight-bold">{message_resource_info.twilio_from_num || "N/A"}</div>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="company-intro-border p-3">
                  <div className="d-flex justify-content-between align-items-center  ">
                    <div className="hm-text-16 font-weight-bold">Primary Email Information</div>
                    <button
                      className="rounded-circle bg-white company-detail-button-sub d-flex justify-content-center align-items-center"
                      onClick={() => this.handleDetailButtonClicked("email")}
                    >
                      <i className="fas fa-ellipsis-h" style={{ color: "#5e72e4" }} />
                    </button>
                  </div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Sendgrid Api Key</div>
                  <div className="hm-text-14 font-weight-bold">{email_resource_info.sendgrid_api_key || "N/A"}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color font-weight-500 hm-text-14">Sendgrid From Email</div>
                  <div className="hm-text-14 font-weight-bold">{email_resource_info.sendgrid_from_email || "N/A"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyDetailInfo;
