import React from "react";
import { convertUTCtoLocal, parseAmount } from "../../../../actions/utilities.action";
/**
 * @onClick
 * @onCorrect
 */
export default function CompanyFeeListItem(props) {
  console.log(props);
  const { cdate, amount, note } = props.parentProps;
  return (
    <tr className="border-bottom">
      <td className="items-height align-middle" data-label="Created On">
        <section className="text-center align-middle hm-text-14 text-modal-color">
          {convertUTCtoLocal(cdate, "YYYY-MM-DD HH:mm")}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Fee Amount">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">
          {parseAmount(amount, 2)}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Note">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">{note}</section>
      </td>
    </tr>
  );
}
