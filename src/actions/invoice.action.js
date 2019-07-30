import constant from "../constants/constant";
import { callApi, startLoader, stopLoader, launchSuccess } from "./utilities.action";
import { processLogout } from "./auth.action";

export const findInvoiceList = (query = {}) => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload } = await callApi(`invoice/all/detail/system`, "GET", null, {
      order_key: "udate",
      order_direction: "DESC",
      ...query
    });
    await dispatch({
      type: constant.INVOICE_LIST,
      payload
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const findInvoiceSumInCompany = realm_token => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload: waiting } = await callApi(`invoice/sum/realm/${realm_token}`, "GET", null, { status: 2 });
    const { payload: paid } = await callApi(`invoice/sum/realm/${realm_token}`, "GET", null, { status: 3 });

    await dispatch({
      type: constant.INVOICE_SUM_IN_COMPANY,
      payload: { sum: waiting.sum + paid.sum }
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const findInvoiceListInCompany = (realm_token, query = {}) => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload } = await callApi(`invoice/all/detail/realm/${realm_token}`, "GET", null, {
      order_key: "udate",
      order_direction: "DESC",
      ...query
    });
    await dispatch({
      type: constant.INVOICE_LIST_IN_COMPANY,
      payload
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const createAInvoiceInCompany = (realm_token, body = {}, msg) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`invoice/detail/${realm_token}`, "POST", body);
    await dispatch(findInvoiceListInCompany(realm_token));
    await dispatch(sendInvoiceToLord(realm_token, msg));
    await launchSuccess(dispatch);
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const findInvoiceSum = (query = {}) => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload: waiting } = await callApi(`invoice/sum/system`, "GET", null, {
      status: 2,
      from_key: "cdate",
      to_key: "cdate",
      ...query
    });
    const { payload: paid } = await callApi(`invoice/sum/system`, "GET", null, {
      status: 3,
      from_key: "cdate",
      to_key: "cdate",
      ...query
    });
    await dispatch({
      type: constant.INVOICE_SUM,
      payload: { sum: waiting.sum + paid.sum }
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const findInvoiceSumAndReturn = (query = {}) => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload: waiting } = await callApi(`invoice/sum/system`, "GET", null, {
      status: 2,
      from_key: "cdate",
      to_key: "cdate",
      ...query
    });
    const { payload: paid } = await callApi(`invoice/sum/system`, "GET", null, {
      status: 3,
      from_key: "cdate",
      to_key: "cdate",
      ...query
    });
    await stopLoader(dispatch);
    return waiting.sum + paid.sum;
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const updateAInvoiceInCompany = (realm_token, invoice_token, body) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`invoice/detail/${realm_token}/${invoice_token}`, "PATCH", body);
    await dispatch(findInvoiceListInCompany(realm_token));
    await launchSuccess(dispatch);
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const sendInvoiceToLord = (realm_token, msg) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`email/send/realm/${realm_token}`, "POST", {
      title: `Invoice`,
      msg
    });
    await launchSuccess(dispatch);
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};
