import React from "react";
import { convertUTCtoLocal, parseAmount } from "../../../actions/utilities.action";
import { CopyToClipboard } from "react-copy-to-clipboard";
import alertify from "alertifyjs";

/**
 * @onClick
 * @onCorrect
 */
export default function PunchItem(props) {
  const handleDetailLink = trans_token => {
    if (props.onClick) props.onClick(trans_token);
  };

  const {
    cdate,
    udate,
    order_num,
    payment_token,
    type,
    payment_method,
    trans_token,
    monster_identifier,
    amount,
    dust_amount,
    status
  } = props.parentProps;

  return (
    <tr>
      <td data-label="创建时间" className="st-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{convertUTCtoLocal(cdate)}</small>
        </section>
      </td>
      <td data-label="更新时间" className="st-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{convertUTCtoLocal(udate)}</small>
        </section>
      </td>
      <td data-label="自定义订单号" className="st-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{order_num || "N/A"}</small>
        </section>
      </td>
      <td data-label="订单号" className="st-text-ellipsis text-position">
        <section
          className="text-position align-middle btn btn-link  d-inline-block 
        rounded border-0 p-0 st-pointer-cursor align-items-center"
        >
          <CopyToClipboard text={payment_token} onCopy={() => alertify.notify("已复制")}>
            <small>{payment_token}</small>
          </CopyToClipboard>
        </section>
      </td>
      <td data-label="支付渠道" className="st-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{payment_method}</small>
        </section>
      </td>
      <td data-label="分账户名" className="st-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{monster_identifier}</small>
        </section>
      </td>
      <td data-label="金额" className="st-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          <small>{parseAmount(dust_amount || amount, 2)}</small>
        </section>
      </td>
      <td data-label="订单类型" className="st-text-ellipsis">
        <section className="text-position align-middle text-muted text-sm">
          {Number(type) === 1 ? (
            <small className="text-success">{"正常收款"}</small>
          ) : (
            <small className="text-warning">{"补单收款"}</small>
          )}
        </section>
      </td>
      <td data-label="状态">
        <section className="text-position align-middle text-muted text-sm">
          {Number(status) === 3 ? (
            <small>等待付款</small>
          ) : Number(status) === 4 ? (
            <small className="text-success">付款成功</small>
          ) : Number(status) === 5 ? (
            <small className="text-danger">付款失败</small>
          ) : (
            ""
          )}
        </section>
      </td>
      <td data-label="查看" className="text-lg-left">
        <button className="btn btn-link p-0 m-0" onClick={() => handleDetailLink(trans_token)}>
          <small>点击查看</small>
        </button>
      </td>
    </tr>
  );
}
