import React from "react";
import { convertUTCtoLocal, parseRate } from "../../../actions/utilities.action";

/**
 * @onClick
 * @onCorrect
 */
export default function FeeListItem(props) {
  const { cdate, udate, rate } = props.parentProps;

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
      <td data-label="Fee Rate" className="hm-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{parseRate(rate)}</small>
        </section>
      </td>
      <td data-label="Delete" className="hm-text-ellipsis text-position">
        <section className="text-position align-middle text-muted text-sm">
          <i className="fas fa-trash-alt text-danger" />
        </section>
      </td>
    </tr>
  );
}
