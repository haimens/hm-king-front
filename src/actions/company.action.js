import constant from "../constants/constant";
import { callApi, startLoader, stopLoader, launchSuccess } from "./utilities.action";
import { processLogout } from "./auth.action";

export const findCompanyList = (query = {}) => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload } = await callApi(`realm/all/detail/system`, "GET", null, {
      order_key: "udate",
      order_direction: "DESC",
      ...query
    });
    await dispatch({
      type: constant.FIND_COMPANY_LIST,
      payload
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};
