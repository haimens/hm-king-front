import React from "react";
import { convertUTCtoLocal, parseAmount } from "../../../../actions/utilities.action";

/**
 * @onClick
 * @onCorrect
 */
export default function CompanyInvoiceList(props) {
  const handleDetailLink = trans_token => {
    if (props.onClick) props.onClick(trans_token);
  };
  console.log(props);
  const { cdate, amount, receipt, status } = props.parentProps;
  return (
    <tr className="border-bottom">
      <td className="items-height align-middle" data-label="Created On">
        <section className="text-center align-middle hm-text-14 text-modal-color">
          {convertUTCtoLocal(cdate, "YYYY-MM-DD HH:mm")}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Invoice Amount">
        <section className="text-center align-middle font-weight-bold hm-text-14 text-modal-color">
          {parseAmount(amount, 2)}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Receipt Number">
        <section className="text-center align-middle font-weight-bold hm-text-14 text-modal-color">
          {receipt ? receipt : "N/A"}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Status">
        <section className="text-center align-middle hm-text-14 text-modal-color">
          {status === 1 && (
            <section className="text-center hm-text-14 ">
              <div className=" d-flex align-items-center float-right float-lg-none">
                <i className="fas fa-circle pending-text-color col-3 offset-md-3" style={{ fontSize: "6px" }} />
                <div className="font-weight-500">Pending</div>
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
          {status === 4 && (
              <section className="text-center hm-text-14 ">
              <div className=" d-flex align-items-center float-right float-lg-none">
                <i className="fas fa-circle text-danger col-3 offset-md-3" style={{ fontSize: "6px" }} />
                <div className="font-weight-500">Error</div>
              </div>
            </section>
          )}
        </section>
      </td>
    </tr>
  );
}
