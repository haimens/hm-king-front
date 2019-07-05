import React, { Component } from "react";
import { parseRate } from "../../../../../actions/utilities.action";
class CompanyPaymentDetail extends Component {
  render() {
    const { square_application_id, square_location_id, square_access_token } = this.props.payment_resource_info;
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
                  <div className="hm-text-16 font-weight-bold">Primary Payment Information</div>
                </div>
                <div className="mb-4">
                  <div className="text-secondary-color hm-text-14">Square Application Id</div>
                  <div className="hm-text-14 font-weight-bold">{square_application_id || "N/A"}</div>
                </div>
                <div className="mb-4">
                  <div className="text-secondary-color hm-text-14">Square Location Id</div>
                  <div className="hm-text-14 font-weight-bold">{square_location_id || "N/A"}</div>
                </div>
                <div className="mb-4">
                  <div className="text-secondary-color hm-text-14">Square Access Token</div>
                  <div className="hm-text-14 font-weight-bold">{square_access_token || "N/A"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyPaymentDetail;
