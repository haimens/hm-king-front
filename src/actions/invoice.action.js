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
  console.log(realm_token);
  try {
    await startLoader(dispatch);
    const { payload } = await callApi(`invoice/sum/realm/${realm_token}`, "GET");
    await dispatch({
      type: constant.INVOICE_SUM_IN_COMPANY,
      payload
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const findInvoiceListInCompany = realm_token => async dispatch => {
  console.log(realm_token);
  try {
    await startLoader(dispatch);
    const { payload } = await callApi(`invoice/all/detail/realm/${realm_token}`, "GET");
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
