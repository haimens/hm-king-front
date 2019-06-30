import React from "react";
import { convertUTCtoLocal } from "../../../actions/utilities.action";
import { CopyToClipboard } from "react-copy-to-clipboard";
import alertify from "alertifyjs";

/**
 * @onClick
 * @onCorrect
 */
export default function CompanyAdminList(props) {
  const handleDetailLink = trans_token => {
    if (props.onClick) props.onClick(trans_token);
  };
  console.log(props);
  const { cell, company_name, email, name, status_str, username } = props.parentProps;
  return (
    <tr>
      <td data-label="Created On" className="hm-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{convertUTCtoLocal()}</small>
        </section>
      </td>
      <td data-label="Admin Name" className="hm-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{name}</small>
        </section>
      </td>
      <td data-label="Cell" className="hm-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{cell}</small>
        </section>
      </td>
      <td data-label="Email" className="hm-text-ellipsis text-position">
        <section className="text-position align-middle text-muted text-sm">
          <small>{email}</small>
        </section>
      </td>
      <td data-label="Username" className="hm-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{username}</small>
        </section>
      </td>
      <td data-label="Profile" className="hm-text-ellipsis text-position">
        <section className="text-position align-middle text-muted text-sm">
          <small>{company_name}</small>
        </section>
      </td>
      <td data-label="Status" className="hm-text-ellipsis text-position">
        <section className="text-position align-middle text-muted text-sm">
          <small>{"N/A"}</small>
        </section>
      </td>
    </tr>
  );
}
