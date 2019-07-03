import React from "react";

export default function ListHeader(props) {
  return (
    <div className="rounded-top shadow-sm bg-white">
      <section className="d-flex justify-content-between p-3 shadow-sm" style={{ height: "65px" }}>
        <h6 className="d-block d-flex align-items-center hm-title-sub-size text-main-color font-weight-bold ml-3">
          {props.parentProps.title}
        </h6>
        <button
          className="text-white button-main-background btn shadow p-0 hm-text-12 mr-3"
          onClick={props.parentProps.clickFunction}
          style={{
            height: "28px",
            width: "98px"
          }}
        >
          <div className="d-flex align-items-center justify-content-center">
            <i className="fas fa-plus mr-2" />
            <div> {props.parentProps.clickTitle}</div>
          </div>
        </button>
      </section>
    </div>
  );
}
