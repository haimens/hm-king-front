import React, { Component } from "react";
import { parseRate } from "../../../../../actions/utilities.action";
class CompanyMessageDetail extends Component {
  render() {
    const { twilio_account_id, twilio_auth_token, twilio_from_num } = this.props.message_list.record_list[0];
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
          <div className="col-11 pl-3">
            <div className="row text-modal-color">
              <div className="col-6">
                <div className="d-flex justify-content-between align-items-center mb-4 ">
                  <div className="hm-text-16 font-weight-bold">Primary Message Information</div>
                </div>
                <div className="mb-4">
                  <div className="text-secondary-color hm-text-14">Twilio Account Id</div>
                  <div className="hm-text-14 font-weight-bold">{twilio_account_id}</div>
                </div>
                <div className="mb-4">
                  <div className="text-secondary-color hm-text-14">Twilio Auth Id</div>
                  <div className="hm-text-14 font-weight-bold">{twilio_auth_token}</div>
                </div>
                <div className="mb-4">
                  <div className="text-secondary-color hm-text-14">Twilio From Num</div>
                  <div className="hm-text-14 font-weight-bold">{twilio_from_num}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyMessageDetail;
