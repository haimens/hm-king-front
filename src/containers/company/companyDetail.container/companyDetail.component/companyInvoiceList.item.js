import React from "react";
import { convertUTCtoLocal, parseAmount } from "../../../../actions/utilities.action";
import { EditButton } from "../../../../components/shared";

/**
 * @onClick
 * @onCorrect
 */
export default function CompanyInvoiceList(props) {
  const { cdate, amount, receipt, status } = props.parentProps;
  const handleEditInvoiceModal = () => {
    props.handleEditInvoiceModal(props.parentProps);
  };
  return (
    <tr className="border-bottom">
      <td className="items-height align-middle" data-label="Created On">
        <section className="text-lg-center text-right  align-middle hm-text-14 text-modal-color">
          {convertUTCtoLocal(cdate, "YYYY-MM-DD HH:mm")}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Invoice Amount">
        <section className="text-lg-center text-right  align-middle font-weight-bold hm-text-14 text-modal-color">
          {parseAmount(amount, 2)}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Receipt Number">
        <section className="text-lg-center text-right  align-middle font-weight-bold hm-text-14 text-modal-color">
          {receipt ? receipt : "N/A"}
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
      <td className="items-height align-middle text-lg-center text-right " data-label="Edit">
        <EditButton clickFunction={handleEditInvoiceModal} />
      </td>
    </tr>
  );
}
