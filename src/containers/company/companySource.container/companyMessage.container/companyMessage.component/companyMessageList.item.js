import React from "react";

/**
 * @onClick
 * @onCorrect
 */
export default function CompanyMessageListItem(props) {
  const handleEditPaymentResource = message_resource_token => {
    props.handleUpdateMessageResource(message_resource_token, props.parentProps);
  };
  const { twilio_account_id, twilio_auth_token, twilio_from_num, message_resource_token } = props.parentProps;
  return (
    <tr className="border-bottom">
      <td className="items-height align-middle" data-label="Square Application Id">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">
          {twilio_account_id}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Square Location Id">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">
          {twilio_auth_token}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Square Access Token">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">
          {twilio_from_num}
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
          onClick={() => handleEditPaymentResource(message_resource_token)}
        >
          <i className="fas fa-pencil-alt" style={{ color: "#fb6240" }} />
        </button>
      </td>
    </tr>
  );
}
