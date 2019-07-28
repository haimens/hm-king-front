import React from "react";

export default function EditButton(props) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/img/icon_edit.svg`}
      className="hm-pointer-cursor"
      alt="icon"
      onClick={() => props.clickFunction()}
    />
  );
}
