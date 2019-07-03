import React, { Component } from "react";
import { ImageButton, ImageLoaderModal, PreviewImageModal } from "../../../../components/shared";
import alertify from "alertifyjs";
export default class CompanyImage extends Component {
  handleClose = e => {
    if (e) e.preventDefault();
    if (this.props.onClose) this.props.onClose();
  };

  handleSubmit = e => {
    e.preventDefault();
    alertify
      .confirm(
        "确定信息",
        `确认上传二维码?`,
        async () => {
          await this.props.parentProps.registerHandPriceInHand(this.props.parentProps.match.params.city_token, {
            price_token: this.props.parentProps.price_token,
            hand_token: this.props.parentProps.handResourceDetail.hand_token,
            payment_method: this.props.parentProps.handResourceDetail.payment_method,
            img_url: this.state.img_url
          });
          this.handleClose();
        },
        () => {
          alertify.error("取消");
        }
      )
      .set("labels", { ok: "确定", cancel: "取消" });
  };

  handleModal = e => {
    if (e) e.preventDefault();
    this.props.handleShowImage();
  };

  render() {
    return (
      <div className="mb-3">
        <form className="bg-white" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-2">
              <label htmlFor="logo">{this.props.title}</label>
            </div>
            <div className="col-8">
              {this.props.parentProps.img_url && (
                <img
                  className="hm-pointer-cursor"
                  onClick={() => this.props.parentProps.handleShowPreview()}
                  src={this.props.parentProps.img_url}
                  alt="icon"
                  width={"20px"}
                  height={"20px"}
                />
              )}
            </div>
            <div className="col-2">
              <ImageButton
                outerClassName={"ml-auto"}
                icon={<i className="fas fa-upload fa-lg" />}
                onClick={e => this.handleModal(e)}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
