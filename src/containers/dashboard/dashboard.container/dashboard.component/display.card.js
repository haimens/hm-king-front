import React from "react";
import { parseAmount } from "../../../../actions/utilities.action";
import "./display.card.css";

/**
 * DisplayCardItem
 * @data (amount, title, icon)
 */
export function DisplayCardItem(props) {
  const { amount, title, icon } = props.data;
  return (
    <main className="bg-white rounded border shadow-sm display-card-container p-3">
      <section className="row">
        <div className="col">
          <div className="text-secondDary-text-color font-weight-bold">TOTAL COMPANY</div>
        </div>
        <div className="col-auto col">
          <div className="card-icon-background  d-flex justify-content-center  align-items-center rounded-circle shadow">
            <img
              src={icon || `${process.env.PUBLIC_URL}/img/icon_24hr.svg`}
              alt={icon || `${process.env.PUBLIC_URL}/img/available.svg`}
              className="card-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default DisplayCardItem;