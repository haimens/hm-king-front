import React, { Component } from "react";
import { parseRate } from "../../../../../actions/utilities.action";
class CompanyEmailDetail extends Component {
  render() {
    const { basic_info, email_resource_info } = this.props.company_detail;
    const { sendgrid_api_key, sendgrid_from_email } = email_resource_info;
    return (
      <div className="bg-white rounded-custom shadow-sm border">
        <div className="row" style={{ padding: "40px" }}>
          <div className="col-1 d-flex justify-content-center">
            <img
              className="rounded-circle"
              style={{ height: "90px", width: "90px" }}
              src={basic_info.logo_path}
              alt="avatar"
            />
          </div>
          <div className="col-11 pl-3">
            <div className="row text-modal-color">
              <div className="col-6">
                <div className="d-flex justify-content-between align-items-center mb-4 ">
                  <div className="hm-text-16 font-weight-bold">Primary Email Information</div>
                </div>
                <div className="mb-4">
                  <div className="text-secondary-color hm-text-14">SendGrid API Key</div>
                  <div className="hm-text-14 font-weight-bold">{sendgrid_api_key || "N/A"}</div>
                </div>
                <div className="mb-4">
                  <div className="text-secondary-color hm-text-14">SendGrid From Email</div>
                  <div className="hm-text-14 font-weight-bold">{sendgrid_from_email || "N/A"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyEmailDetail;
