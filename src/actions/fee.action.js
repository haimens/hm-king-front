import constant from "../constants/constant";
import { callApi, startLoader, stopLoader, launchSuccess } from "./utilities.action";
import { processLogout } from "./auth.action";

export const findFeeList = (query = {}) => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload } = await callApi(`tribute/all/rate`, "GET", null, {
      order_key: "udate",
      order_direction: "DESC",
      ...query
    });
    await dispatch({
      type: constant.FEE_LIST,
      payload
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const createAFeeRate = rate => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`tribute/rate`, "POST", {
      rate
    });
    await dispatch(findFeeList());
    await launchSuccess(dispatch);
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const deleteAFeeRate = tribute_rate_token => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`tribute/rate/${tribute_rate_token}`, "PATCH", {
      status: 0
    });
    await dispatch(findFeeList());
    await launchSuccess(dispatch);
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const findFeeListInCompany = (realm_token, query = {}) => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload } = await callApi(`tribute/all/detail/realm/${realm_token}`, "GET", null, {
      order_key: "udate",
      order_direction: "DESC",
      ...query
    });
    await dispatch({
      type: constant.FEE_LIST_IN_COMPANY,
      payload
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const createAFeeInCompany = (realm_token, body = {}) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`tribute/detail/${realm_token}`, "POST", body);
    await launchSuccess(dispatch);
    await dispatch(findFeeListInCompany(realm_token));
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const findFeeSumInACompany = realm_token => async dispatch => {
  console.log(realm_token);
  try {
    await startLoader(dispatch);
    const { payload } = await callApi(`tribute/sum/realm/${realm_token}`, "Get");
    await dispatch({
      type: constant.FEE_SUM_IN_COMPANY,
      payload
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};
