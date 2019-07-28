import React, { Component } from "react";
export default class CompanyImage extends Component {
  handleClose = e => {
    if (e) e.preventDefault();
    if (this.props.onClose) this.props.onClose();
  };

  handleModal = e => {
    if (e) e.preventDefault();
    this.props.handleShowImage();
  };

  render() {
    return (
      <div className="bg-white align-items-center pt-3" style={{ height: "48px" }}>
        <div className="row">
          <div className="col-2">
            <label htmlFor="logo" className="font-weight-bold">
              {this.props.title}
            </label>
          </div>

          <div className="col-3 d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="d-flex justify-content-center p-0 align-items-center btn btn-outline-secondary"
              onClick={e => this.handleModal(e)}
              style={{ borderRadius: "20px", width: "88px", height: "24px" }}
            >
              Upload
            </button>
          </div>
          <div className="col-7 d-flex justify-content-end">
            {this.props.parentProps.img_url && (
              <img
                className="hm-pointer-cursor rounded-circle"
                onClick={() => this.props.parentProps.handleShowPreview()}
                src={this.props.parentProps.img_url}
                alt="icon"
                width={"24px"}
                height={"24px"}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
