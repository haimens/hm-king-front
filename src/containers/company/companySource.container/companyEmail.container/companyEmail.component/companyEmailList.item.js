import React from "react";

/**
 * @onClick
 * @onCorrect
 */
export default function CompanyEmailListItem(props) {
  const handleEditEmailResource = email_resource_token => {
    props.handleUpdateEmailResource(email_resource_token, props.parentProps);
  };
  const handleSetEmailPrimary = (realm_token, email_resource_token) => {
    props.setPrimaryForResources(realm_token, { email_resource_token });
  };
  const { isPrimary, realm_token, parentProps } = props;
  const { sendgrid_api_key, sendgrid_from_email, email_resource_token } = parentProps;
  return (
    <tr className="border-bottom">
      <td className="items-height align-middle" data-label="SendGrid Api Key">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">
          {sendgrid_api_key}
        </section>
      </td>
      <td className="items-height align-middle" data-label="SendGrid From Email">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">
          {sendgrid_from_email}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Square Access Token">
        {isPrimary ? (
          <section className="text-center align-middle hm-text-14 font-weight-bold" style={{ color: "#5e72e4" }}>
            Primary
          </section>
        ) : (
          <section className="text-center align-middle hm-text-14 font-weight-bold" style={{ color: "#5e72e4" }}>
            <button
              className="primary-set-button"
              onClick={() => handleSetEmailPrimary(realm_token, email_resource_token)}
            >
              Set Primary
            </button>
          </section>
        )}
      </td>
      <td className="items-height align-items-center text-center d-flex justify-content-center" data-label="Edit">
        <button
          className="rounded-circle bg-white company-detail-button d-flex justify-content-center text-center align-items-center"
          onClick={() => handleEditEmailResource(email_resource_token)}
        >
          <i className="fas fa-pencil-alt" style={{ color: "#fb6240" }} />
        </button>
      </td>
    </tr>
  );
}
