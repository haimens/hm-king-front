import React from "react";
import { convertUTCtoLocal } from "../../../../actions/utilities.action";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactToolTip from "react-tooltip";
import alertify from "alertifyjs";
/**
 * @onClick
 * @onCorrect
 */
export default function PunchItem(props) {
  const handleCompanyBeenClicked = realm_token => {
    props.onClick(realm_token);
  };
  const { cdate, logo_path, company_name, tribute_rate_token, status_str, realm_token } = props.parentProps;
  return (
    <tr>
      <td data-label="Last Updated" style={{ height: "80px" }} className="align-middle">
        <section className="text-center align-middle text-muted text-sm">
          <img src={logo_path} alt="Company Logo" className="rounded-circle" height={"30px"} width={"30px"} />
        </section>
      </td>
      <td data-label="Created On" style={{ height: "80px" }} className="align-middle">
        <section className="text-center align-middle text-muted text-sm">
          <small>{convertUTCtoLocal(cdate)}</small>
        </section>
      </td>
      <td data-label="Company Name" style={{ height: "80px" }} className="align-middle">
        <section className="text-center align-middle text-muted text-sm">
          <small>{company_name}</small>
        </section>
      </td>
      <td data-label="Status" style={{ height: "80px" }} className="align-middle">
        {status_str === "ACTIVE" ? (
          <section className="text-center align-middle text-muted text-sm">
            <small className="hm-text-green">Active</small>
          </section>
        ) : (
          <section className="text-center align-middle text-muted text-sm">
            <small className="text-danger">InActive</small>
          </section>
        )}
      </td>
      <td data-label="Detail" style={{ height: "80px" }} className="align-middle">
        <section className="text-center align-middle text-muted text-sm">
          <button className="btn btn-sm text-primary" onClick={() => handleCompanyBeenClicked(realm_token)}>
            View
          </button>
        </section>
      </td>
    </tr>
  );
}
