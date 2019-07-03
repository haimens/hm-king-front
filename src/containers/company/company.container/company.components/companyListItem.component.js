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
  const { cdate, udate, company_name, tribute_rate_token, status_str, realm_token } = props.parentProps;
  return (
    <tr>
      <td data-label="Created On" style={{ height: "80px" }} className="align-middle">
        <section className="text-position align-middle text-muted text-sm">
          <small>{convertUTCtoLocal(cdate)}</small>
        </section>
      </td>
      <td data-label="Last Updated" style={{ height: "80px" }} className="align-middle">
        <section className="text-position align-middle text-muted text-sm">
          <small>{convertUTCtoLocal(udate)}</small>
        </section>
      </td>
      <td data-label="Company ID" style={{ height: "80px" }} className="align-middle">
        <section className="text-position align-middle text-muted text-sm hm-pointer-cursor">
          <div className="mr-1" data-for={tribute_rate_token} data-tip={tribute_rate_token}>
            <CopyToClipboard text={tribute_rate_token} onCopy={() => alertify.success("Copy Success")}>
              <small>{tribute_rate_token}</small>
            </CopyToClipboard>
            <ReactToolTip id={tribute_rate_token} />
          </div>
        </section>
      </td>
      <td data-label="Company Name" style={{ height: "80px" }} className="align-middle">
        <section className="text-position align-middle text-muted text-sm">
          <small>{company_name}</small>
        </section>
      </td>
      <td data-label="Status" style={{ height: "80px" }} className="align-middle">
        {status_str === "ACTIVE" ? (
          <section className="text-position align-middle text-muted text-sm">
            <small className="hm-text-green">Active</small>
          </section>
        ) : (
          <section className="text-position align-middle text-muted text-sm">
            <small className="text-danger">InActive</small>
          </section>
        )}
      </td>
      <td data-label="Detail" style={{ height: "80px" }} className="align-middle">
        <section className="text-position align-middle text-muted text-sm">
          <button className="btn btn-sm text-primary" onClick={() => handleCompanyBeenClicked(realm_token)}>
            View
          </button>
        </section>
      </td>
    </tr>
  );
}
