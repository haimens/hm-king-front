import React from "react";
import { convertUTCtoLocal } from "../../../../actions/utilities.action";

/**
 * @onClick
 * @onCorrect
 */
export default function InvoiceListItem(props) {
  const { cdate, udate, order_num } = props.parentProps;

  return (
    <tr className="border-bottom">
      {/* <td data-label="Last Updated" style={{ height: "80px" }} className="align-middle">
        <section className="text-center text-main-color hm-text-14">
          <img src={logo_path} alt="Company Logo" className="rounded-circle" height={"32px"} width={"32px"} />
        </section>
      </td> */}
      <td data-label="Created On" style={{ height: "80px" }} className="align-middle">
        <section className="text-center  text-main-color hm-text-14">
          {convertUTCtoLocal(cdate, "YYYY-MM-DD HH:mm")}
        </section>
      </td>
      {/* <td data-label="Company Name" style={{ height: "80px" }} className="align-middle">
        <section className="text-center text-main-color font-weight-bold hm-text-14">{company_name}</section>
      </td>
      <td data-label="Status" style={{ height: "80px" }} className="align-middle">
        {status_str === "ACTIVE" ? (
          <section className="text-main-color hm-text-14">
            <div className=" d-flex align-items-center ">
              <i className="fas fa-circle success-text-color col-6 text-right pl-0" style={{ fontSize: "6px" }} />
              <div>Active</div>
            </div>
          </section>
        ) : (
          <section className="text-center text-main-color hm-text-14">
            <div className=" d-flex align-items-center ">
              <i className="fas fa-circle text-danger col-6 text-right" style={{ fontSize: "6px" }} />
              <div>Inactive</div>
            </div>
          </section>
        )}
      </td>
      <td data-label="Detail" style={{ height: "80px" }} className="align-middle">
        <section className="text-center  text-main-color hm-text-14">
          <button className="btn btn-md text-primary" onClick={() => handleCompanyBeenClicked(realm_token)}>
            View
          </button>
        </section>
      </td> */}
    </tr>
  );
}
