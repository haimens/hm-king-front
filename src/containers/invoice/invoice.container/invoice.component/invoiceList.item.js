import React from "react";
import { convertUTCtoLocal, parseAmount } from "../../../../actions/utilities.action";

/**
 * @onClick
 * @onCorrect
 */
export default function InvoiceListItem(props) {
  const { cdate, company_name, receipt, amount, status } = props.parentProps;
  return (
    <tr className="border-bottom">
      <td data-label="Created On" className="align-middle items-height">
        <section className="text-lg-center text-right font-weight-500 text-main-color hm-text-14">
          {convertUTCtoLocal(cdate, "YYYY-MM-DD HH:mm")}
        </section>
      </td>
      <td data-label="Company Name" className="align-middle items-height">
        <section className="text-lg-center text-right text-main-color font-weight-bold hm-text-14">
          {company_name}
        </section>
      </td>
      <td data-label="Company Name" className="align-middle items-height">
        <section className="text-lg-center text-right font-weight-500 text-main-color hm-text-14">
          {receipt ? receipt : "N/A"}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Fee Amount">
        <section className="text-lg-center text-right font-weight-500 align-middle hm-text-14  text-modal-color">
          {parseAmount(amount, 2)}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Status">
        <section className="text-center align-middle hm-text-14 text-modal-color">
          {status === 1 && (
            <section className="text-center hm-text-14 ">
              <div className=" d-flex align-items-center float-right float-lg-none">
                <i className="fas fa-circle text-grey col-3 offset-md-3" style={{ fontSize: "6px" }} />
                <div className="font-weight-500">Pending</div>
              </div>
            </section>
          )}
          {status === 2 && (
            <section className="text-center hm-text-14 ">
              <div className=" d-flex align-items-center float-right float-lg-none">
                <i className="fas fa-circle pending-text-color col-3 offset-md-3" style={{ fontSize: "6px" }} />
                <div className="font-weight-500">Waiting</div>
              </div>
            </section>
          )}
          {status === 3 && (
            <section className="text-center hm-text-14 ">
              <div className=" d-flex align-items-center float-right float-lg-none">
                <i className="fas fa-circle success-text-color col-3 offset-md-3" style={{ fontSize: "6px" }} />
                <div className="font-weight-500">Finished</div>
              </div>
            </section>
          )}
        </section>
      </td>
    </tr>
  );
}
