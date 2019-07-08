import React from "react";
import { EditButton } from "../../../../components/shared";

/**
 * @onClick
 * @onCorrect
 */
export default function CompanyAdminList(props) {
  const handleEditLordInfo = () => {
    props.handleEditLordInfo(props.parentProps);
  };
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
        <section className="text-lg-center text-right align-middle hm-text-14 font-weight-bold text-modal-color">
          {name}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Cell">
        <section className="text-lg-center text-right align-middle hm-text-14 font-weight-bold text-modal-color">
          {cell}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Email">
        <section className="text-lg-center text-right align-middle hm-text-14 font-weight-bold text-modal-color">
          {email}
        </section>
      </td>
      <td className="items-height align-middle" data-label="Username">
        <section className="text-lg-center text-right align-middle hm-text-14 font-weight-bold text-modal-color">
          {username}
        </section>
      </td>
      <td data-label="Status" className="align-middle items-height">
        {status_str === "ACTIVE" ? (
          <section className="text-center hm-text-14 ">
            <div className=" d-flex align-items-center float-right float-lg-none">
              <i className="fas fa-circle success-text-color col-3 offset-md-3" style={{ fontSize: "6px" }} />
              <div className="font-weight-500">Active</div>
            </div>
          </section>
        ) : (
          <section className="text-center hm-text-14">
            <div className=" d-flex align-items-center float-right float-lg-none">
              <i className="fas fa-circle text-danger col-3 offset-md-3" style={{ fontSize: "6px" }} />
              <div className="font-weight-500">Inactive</div>
            </div>
          </section>
        )}
      </td>
      <td className="items-height align-middle text-lg-center text-right " data-label="Edit">
        <EditButton clickFunction={handleEditLordInfo} />
      </td>
    </tr>
  );
}
