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

export const createAInvoiceInCompany = (realm_token, body = {}) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`invoice/detail/${realm_token}`, "POST", body);
    await dispatch(findInvoiceListInCompany(realm_token));
    await launchSuccess(dispatch);
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const findInvoiceSum = () => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload: waiting } = await callApi(`invoice/sum/system`, "GET", null, { status: 2 });
    const { payload: paid } = await callApi(`invoice/sum/system`, "GET", null, { status: 3 });
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
