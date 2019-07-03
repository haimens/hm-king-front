import React from "react";

export default function Header(props) {
  return (
    <section className="mb-4">
      <div className="d-flex align-items-center mb-4 text-white">
        <img
          src={`${process.env.PUBLIC_URL}/img/icon_company.svg`}
          height={18}
          width={17}
          alt="company"
          className="hm-header-size mr-3"
        />
        <h4 className="hm-header-size">{props.title}</h4>
      </div>
    </section>
  );
}
