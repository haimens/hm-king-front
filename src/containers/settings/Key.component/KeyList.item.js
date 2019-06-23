import React from "react";
import { convertUTCtoLocal } from "../../../actions/utilities.action";

/**
 * @onClick
 * @onCorrect
 */
export default function KeyListItem(props) {
  const { cdate, udate, order_num } = props.parentProps;

  return (
    <tr>
      <td data-label="Created On" className="st-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{convertUTCtoLocal(cdate)}</small>
        </section>
      </td>
      <td data-label="Last Updated" className="st-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{convertUTCtoLocal(udate)}</small>
        </section>
      </td>
      <td data-label="ID Token" className="st-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{order_num || "N/A"}</small>
        </section>
      </td>
      <td data-label="Key" className="st-text-ellipsis text-position">
        <section className="text-position align-middle text-muted text-sm">
          <small>{order_num || "N/A"}</small>
        </section>
      </td>
      <td data-label="Value" className="st-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{order_num || "N/A"}</small>
        </section>
      </td>
      <td data-label="Delete" className="st-text-ellipsis text-position">
        <section className="text-position align-middle text-muted text-sm">
          <small>{order_num || "N/A"}</small>
        </section>
      </td>
    </tr>
  );
}
