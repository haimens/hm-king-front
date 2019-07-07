import React from "react";

/**
 * @onClick
 * @onCorrect
 */
export default function CompanyAdminList(props) {
  const { cell, email, name, username, img_path, status_str } = props.parentProps;
  return (
    <tr className="border-bottom">
      <td className="items-height align-middle" data-label="Company Logo">
        <img
          src={img_path}
          alt="Company Logo"
          className="text-center align-middle hm-text-14 font-weight-bold text-modal-color avatar rounded-circle"
        />
      </td>
      <td className="items-height align-middle" data-label="Admin Name">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">{name}</section>
      </td>
      <td className="items-height align-middle" data-label="Cell">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">{cell}</section>
      </td>
      <td className="items-height align-middle" data-label="Email">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">{email}</section>
      </td>
      <td className="items-height align-middle" data-label="Username">
        <section className="text-center align-middle hm-text-14 font-weight-bold text-modal-color">{username}</section>
      </td>
      <td
        className="items-height align-middle text-center align-middle font-weight-bold text-modal-color "
        data-label="Status"
      >
        {status_str === "ACTIVE" ? (
          <section className="d-flex justify-content-center align-items-center">
            <i className="fas fa-circle success-text-color mr-3 pl-0" style={{ fontSize: "6px" }} />
            <div>Active</div>
          </section>
        ) : (
          <section className="d-flex justify-content-center align-items-center">
            <i className="fas fa-circle text-danger mr-3" style={{ fontSize: "6px" }} />
            <div>Inactive</div>
          </section>
        )}
      </td>
    </tr>
  );
}
