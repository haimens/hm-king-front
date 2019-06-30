import React from "react";
import { convertUTCtoLocal } from "../../../actions/utilities.action";
import { CopyToClipboard } from "react-copy-to-clipboard";
import alertify from "alertifyjs";

/**
 * @onClick
 * @onCorrect
 */
export default function PunchItem(props) {
  const handleDetailLink = trans_token => {
    if (props.onClick) props.onClick(trans_token);
  };
  const { cdate, udate, company_name, tribute_rate_token, status_str } = props.parentProps;
  return (
    <tr>
      <td data-label="Created On" className="hm-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{convertUTCtoLocal(cdate)}</small>
        </section>
      </td>
      <td data-label="Last Updated" className="hm-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{convertUTCtoLocal(udate)}</small>
        </section>
      </td>
      <td data-label="Company ID" className="hm-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{tribute_rate_token}</small>
        </section>
      </td>
      <td data-label="Company Name" className="hm-text-ellipsis text-position">
        <section className="text-position align-middle text-muted text-sm">
          <small>{company_name}</small>
        </section>
      </td>
      <td data-label="Status" className="hm-text-ellipsis">
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
      <td data-label="Detail" className="hm-text-ellipsis text-position">
        <section className="text-position align-middle text-muted text-sm">
          <button className="btn btn-sm text-primary" onClick={this.handleCompanyBeenClicked}>
            View
          </button>
        </section>
      </td>
    </tr>
  );
}
