import React from "react";

export default function Header(props) {
  return (
    <div>
      <div className="d-flex align-items-center mb-4 text-white">
        {props.icon ? (
          <i className={`fas fa-${props.icon} hm-header-size mr-3`} />
        ) : (
          <img
            src={`${process.env.PUBLIC_URL}/img/${props.tabicon}`}
            style={{ width: "17px", height: "18px" }}
            alt="company"
            className="hm-header-size mr-3"
          />
        )}
        <h4 className="hm-header-size mr-3 hm-pointer-cursor" onClick={() => props.history.push(props.toLocation)}>
          {props.title}
        </h4>
        {props.subTitle && (
          <div className=" d-flex align-items-center ">
            <i className="fas fa-circle text-light-grey text-right mr-3" style={{ fontSize: "6px" }} />
            <h4 className="hm-header-size text-light-grey ">{props.subTitle}</h4>
          </div>
        )}
      </div>
    </div>
  );
}
