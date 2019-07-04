import React from "react";

/**
 * @onClick
 * @onCorrect
 */
export default function CompanyAdminList(props) {
  const { cell, email, name, username } = props.parentProps;
  return (
    <tr className="border-bottom">
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
    </tr>
  );
}
