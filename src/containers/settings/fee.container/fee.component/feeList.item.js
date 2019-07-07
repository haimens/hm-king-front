import React from "react";
import { convertUTCtoLocal, parseRate } from "../../../../actions/utilities.action";

/**
 * @onClick
 * @onCorrect
 */
export default function FeeListItem(props) {
  const { cdate, tribute_rate_token, rate } = props.parentProps;
  const handleDeleteFee = tribute_rate_token => {
    props.handleDeleteAFee(tribute_rate_token, parseRate(rate));
  };
  return (
    <tr className="border-bottom">
      <td data-label="Created On" style={{ height: "80px" }} className="align-middle">
        <section className="text-center font-weight-500 text-main-color hm-text-14">
          {convertUTCtoLocal(cdate, "YYYY-MM-DD HH:mm")}
        </section>
      </td>
      <td data-label="Fee Rate" style={{ height: "80px" }} className="align-middle">
        <section className="text-center font-weight-500 text-main-color hm-text-14">{parseRate(rate)}</section>
      </td>
      <td data-label="Delete" style={{ height: "80px" }} className="align-middle">
        <section className="d-flex justify-content-center font-weight-500 text-main-color hm-text-14">
          <img
            src={`${process.env.PUBLIC_URL}/img/icon_delete.svg`}
            className="hm-pointer-cursor"
            alt="delete"
            onClick={() => handleDeleteFee(tribute_rate_token)}
          />
        </section>
      </td>
    </tr>
  );
}
