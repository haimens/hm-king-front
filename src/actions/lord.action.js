import constant from "../constants/constant";
import { callApi, startLoader, stopLoader, launchSuccess } from "./utilities.action";
import { processLogout } from "./auth.action";

export const findLordListInCompany = (realm_token, query = {}) => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload } = await callApi(`lord/all/detail/realm/${realm_token}`, "GET", null, {
      order_key: "udate",
      order_direction: "DESC"
    });
    await dispatch({
      type: constant.LORD_LIST,
      payload
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const createALordInCompany = (realm_token, body = {}) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`lord/detail/${realm_token}`, "POST", { ...body });
    await dispatch(findLordListInCompany(realm_token));
    await launchSuccess(dispatch);
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const updateALordInCompany = (realm_token, lord_token, body = {}) => async dispatch => {
  console.log("here");
  try {
    await startLoader(dispatch);
    await callApi(`lord/detail/${lord_token}`, "PATCH", { ...body });
    await dispatch(findLordListInCompany(realm_token));
    await launchSuccess(dispatch);
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};
