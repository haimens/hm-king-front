import React, { Component } from "react";
import { Modal, ImageButton, ImageLoaderModal, PreviewImageModal } from "../../../components/shared";

import alertify from "alertifyjs";

export default class PriceModifyModal extends React.Component {
  state = {
    pay_url: "",
    showImage: false,
    showPreview: false
  };

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
            pay_url: this.state.pay_url
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
    this.setState({ showImage: !this.state.showImage });
  };

  handleImageUpload = img_path => {
    this.setState({ pay_url: img_path });
  };

  componentDidMount() {}

  render() {
    return (
      <main>
        {this.state.showImage && (
          <ImageLoaderModal
            onClose={() => this.setState({ showImage: false })}
            onImageUpload={this.handleImageUpload}
            title="修改二维码"
          />
        )}
        {this.state.showPreview && (
          <PreviewImageModal image={this.state.pay_url} onClose={() => this.setState({ showPreview: false })} />
        )}
        <Modal title="修改定额二维码" zIndex="1080" position={"center"} getWidth={"480px"} onClose={this.handleClose}>
          <form className="bg-white p-4" onSubmit={this.handleSubmit}>
            <div className="font-weight-bold st-text-ellipsis mb-2">上传二维码</div>
            <div className="d-flex justify-content-between py-4">
              <span className="st-text-ellipsis d-block mb-2">
                {this.state.pay_url ? (
                  <img
                    className="st-pointer-cursor"
                    onClick={() => this.setState({ showPreview: true })}
                    src={this.state.pay_url}
                    alt="二维码"
                    width={"20px"}
                    height={"20px"}
                  />
                ) : (
                  <div>没有截图</div>
                )}
              </span>
              <span>
                <ImageButton icon={<i className="fas fa-upload fa-lg" />} onClick={e => this.handleModal(e)} />
              </span>
            </div>
            <div className="row">
              <div className="col-12 text-right py-4">
                <button className="btn st-bg-green px-4 mr-3 text-white btn-sm">确认</button>
                <button onClick={this.handleClose} className="btn btn-outline-secondary px-4 btn-sm">
                  取消
                </button>
              </div>
            </div>
          </form>
        </Modal>
      </main>
    );
  }
}
