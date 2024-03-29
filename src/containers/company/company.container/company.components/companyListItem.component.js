import React from "react";
import { convertUTCtoLocal } from "../../../../actions/utilities.action";

export default function PunchItem(props) {
  const handleCompanyBeenClicked = realm_token => {
    props.onClick(realm_token);
  };
  const { cdate, logo_path, company_name, status_str, realm_token } = props.parentProps;
  return (
    <tr className="border-bottom">
      <td data-label="Last Updated" className="align-middle items-height">
        <section className="text-lg-center text-right text-main-color hm-text-14">
          <img src={logo_path} alt="Company Logo" className="rounded-circle" height={"32px"} width={"32px"} />
        </section>
      </td>
      <td data-label="Created On" className="align-middle items-height">
        <section className="text-lg-center text-right font-weight-500 text-main-color hm-text-14">
          {convertUTCtoLocal(cdate, "YYYY-MM-DD HH:mm")}
        </section>
      </td>
      <td data-label="Company Name" className="align-middle items-height">
        <section className="text-lg-center text-right text-main-color font-weight-bold hm-text-14">
          {company_name}
        </section>
      </td>
      <td data-label="Status" className="align-middle items-height">
        {status_str === "ACTIVE" ? (
          <section className="text-center hm-text-14 ">
            <div className=" d-flex align-items-center float-right float-lg-none">
              <i className="fas fa-circle success-text-color col-3 offset-md-3" style={{ fontSize: "6px" }} />
              <div className="font-weight-500">Active</div>
            </div>
          </section>
        ) : (
          <section className="text-center hm-text-14">
            <div className=" d-flex align-items-center float-right float-lg-none">
              <i className="fas fa-circle text-danger col-3 offset-md-3" style={{ fontSize: "6px" }} />
              <div className="font-weight-500">Inactive</div>
            </div>
          </section>
        )}
      </td>
      <td data-label="Detail" className="align-middle items-height">
        <section className="text-lg-center text-right text-main-color hm-text-14">
          <img
            src={`${process.env.PUBLIC_URL}/img/icon_detail.svg`}
            className="hm-pointer-cursor"
            alt="icon"
            onClick={() => handleCompanyBeenClicked(realm_token)}
          />
        </section>
      </td>
    </tr>
  );
}
