import React, { Component } from "react";
import { parseRate } from "../../../../actions/utilities.action";
import "./companyDetailInfo.component.css";
class CompanyDetailInfo extends Component {
  handleDetailButtonClicked = type => {
    console.log(type);
    this.props.handleDetailButtonClicked(type);
  };
  render() {
    const {
      basic_info,
      address_info,
      tribute_rate_info,
      message_resource_info,
      email_resource_info,
      payment_resource_info
    } = this.props.company_detail;
    return (
      <div className="bg-white rounded-custom shadow-sm border">
        <div className="row" style={{ padding: "40px" }}>
          <div className="col-1 d-flex justify-content-center">
            <img
              className="rounded-circle"
              style={{ height: "90px", width: "90px" }}
              src={`${process.env.PUBLIC_URL}/img/king_bg.jpg`}
              alt="avatar"
            />
          </div>
          <div className="col-11">
            <div className="row text-modal-color">
              <div className="col-6 mb-4">
                <div className="company-intro-border p-3">
                  <div className="d-flex justify-content-between align-items-center  ">
                    <div className="hm-text-16 font-weight-bold">Basic Information</div>
                    <button className="rounded-circle bg-white company-detail-button d-flex justify-content-center align-items-center">
                      <i className="fas fa-pencil-alt" style={{ color: "#fb6240" }} />
                    </button>
                  </div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color hm-text-14">Company Name</div>
                  <div className="hm-text-14 font-weight-bold">{basic_info.company_name}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color hm-text-14">Company Address</div>
                  <div className="hm-text-14 font-weight-bold">{address_info.addr_str}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color hm-text-14">Company Title</div>
                  <div className="hm-text-14 font-weight-bold">{basic_info.company_title}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color hm-text-14">Available Balance</div>
                  <div className="hm-text-14 font-weight-bold">{"N/A"}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color hm-text-14">Fee Rate</div>
                  <div className="hm-text-14 font-weight-bold">{parseRate(tribute_rate_info.rate)}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color hm-text-14">Status</div>
                  <div className="hm-text-14 font-weight-bold">
                    {basic_info.status === 2 ? (
                      <div className="d-flex align-items-center">
                        <i className="fas fa-circle success-text-color mr-3" style={{ fontSize: "6px" }} />
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

              <div className="col-6">
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
                  <div className="text-secondary-color hm-text-14">Square Application Id</div>
                  <div className="hm-text-14 font-weight-bold">{1}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color hm-text-14">Square Location Id</div>
                  <div className="hm-text-14 font-weight-bold">{2}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color hm-text-14">Square Access Token</div>
                  <div className="hm-text-14 font-weight-bold">{3}</div>
                </div>
              </div>
              <div className="col-6">
                <div className="company-intro-border p-3">
                  <div className="d-flex justify-content-between align-items-center  ">
                    <div className="hm-text-16 font-weight-bold">Primary Message Information</div>
                    <button className="rounded-circle bg-white company-detail-button-sub d-flex justify-content-center align-items-center">
                      <i className="fas fa-ellipsis-h" style={{ color: "#5e72e4" }} />
                    </button>
                  </div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color hm-text-14">Twilio Account Id</div>
                  <div className="hm-text-14 font-weight-bold">{message_resource_info.twilio_account_id}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color hm-text-14">Twilio Auth Token</div>
                  <div className="hm-text-14 font-weight-bold">{message_resource_info.twilio_auth_token}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color hm-text-14">Twilio From Num</div>
                  <div className="hm-text-14 font-weight-bold">{message_resource_info.twilio_from_num}</div>
                </div>
              </div>
              <div className="col-6">
                <div className="company-intro-border p-3">
                  <div className="d-flex justify-content-between align-items-center  ">
                    <div className="hm-text-16 font-weight-bold">Primary Email Information</div>
                    <button className="rounded-circle bg-white company-detail-button-sub d-flex justify-content-center align-items-center">
                      <i className="fas fa-ellipsis-h" style={{ color: "#5e72e4" }} />
                    </button>
                  </div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color hm-text-14">Sendgrid Api Key</div>
                  <div className="hm-text-14 font-weight-bold">{1}</div>
                </div>
                <div className="mb-4 px-3">
                  <div className="text-secondary-color hm-text-14">Sendgrid From Email</div>
                  <div className="hm-text-14 font-weight-bold">{1}</div>
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
