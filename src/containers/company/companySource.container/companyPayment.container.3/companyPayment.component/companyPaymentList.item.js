import React from "react";

/**
 * @onClick
 * @onCorrect
 */
export default function CompanyAdminList(props) {
  const handleEditPaymentResource = payment_resource_token => {
    props.handleUpdatePaymentResource(payment_resource_token, props.parentProps);
  };
  const { square_application_id, square_location_id, square_access_token, payment_resource_token } = props.parentProps;
  return (
    <tr className="border-bottom">
      <td className="items-height align-middle" data-label="Square Application Id">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">
          {square_application_id}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Square Location Id">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">
          {square_location_id}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Square Access Token">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">
          {square_access_token}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Square Access Token">
        <section className="text-center align-middle hm-text-14 font-weight-bold" style={{ color: "#5e72e4" }}>
          Primary
        </section>
      </td>
      <td className="items-height align-items-center text-center d-flex justify-content-center" data-label="Edit">
        <button
          className="rounded-circle bg-white company-detail-button d-flex justify-content-center  align-items-center"
          onClick={() => handleEditPaymentResource(payment_resource_token)}
        >
          <i className="fas fa-pencil-alt" style={{ color: "#fb6240" }} />
        </button>
      </td>
    </tr>
  );
}
