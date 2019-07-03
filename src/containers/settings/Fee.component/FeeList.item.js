import React from "react";
import { convertUTCtoLocal, parseRate } from "../../../actions/utilities.action";

/**
 * @onClick
 * @onCorrect
 */
export default function FeeListItem(props) {
  const { cdate, tribute_rate_token, rate } = props.parentProps;
  const handleDeleteFee = tribute_rate_token => {
    props.handleDeleteAFee(tribute_rate_token);
  };
  return (
    <tr className="border-bottom">
      <td data-label="Created On" style={{ height: "80px" }} className="align-middle">
        <section className="text-center  text-main-color hm-text-14">
          {convertUTCtoLocal(cdate, "YYYY-MM-DD HH:mm")}
        </section>
      </td>
      <td data-label="Fee Rate" style={{ height: "80px" }} className="align-middle">
        <section className="text-center  text-main-color hm-text-14">{parseRate(rate)}</section>
      </td>
      <td data-label="Delete" style={{ height: "80px" }} className="align-middle">
        <section className="d-flex justify-content-center text-main-color hm-text-14">
          <div
            className="d-flex justify-content-center align-items-center card-icon-background-red rounded-circle  hm-pointer-cursor shadow-sm border-white"
            style={{ height: "36px", width: "36px" }}
            onClick={() => handleDeleteFee(tribute_rate_token)}
          >
            <i className="fas fa-trash-alt text-white" />
          </div>
        </section>
      </td>
    </tr>
  );
}
