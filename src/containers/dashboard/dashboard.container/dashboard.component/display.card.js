import React from "react";
import "./display.card.css";

/**
 * DisplayCardItem
 * @data (amount, title, icon)
 */
export function DisplayCardItem(props) {
  const { amount, title, icon } = props.data;
  return (
    <main className="bg-white rounded-custom border shadow-sm display-card-container p-3 d-flex flex-column justify-content-between">
      <section className="row">
        <div className="col">
          <div className="text-secondary-color font-weight-bold mb-1">{title}</div>
          <div className="hm-title-sub-size text-main-color font-weight-bold">25</div>
        </div>
        <div className="col-auto col">
          <div
            className={`${
              props.red ? "card-icon-background-red" : "card-icon-background-green"
            } d-flex justify-content-center align-items-center rounded-circle shadow`}
          >
            <img
              src={icon || `${process.env.PUBLIC_URL}/img/icon_24hr.svg`}
              alt={icon || `${process.env.PUBLIC_URL}/img/available.svg`}
              className="card-img"
            />
          </div>
        </div>
      </section>
      <div className="text-secondary-color ">
        <span className="success-text-color mr-3">
          <i className="fas fa-arrow-up mr-2" />
          3.48%
        </span>
        Since last month
      </div>
    </main>
  );
}

export default DisplayCardItem;
