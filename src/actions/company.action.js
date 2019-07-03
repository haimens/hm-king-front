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
      type: constant.COMPANY_LIST,
      payload
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const createACompany = (body = {}) => async dispatch => {
  console.log(body);
  try {
    await startLoader(dispatch);
    await callApi(`realm/detail`, "POST", { ...body });
    await launchSuccess(dispatch);
    await dispatch(findCompanyList());
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

//'company_name', 'company_title', 'status', 'logo_path', 'icon_path', 'status'
export const updateACompanyInfo = (realm_token, body = {}) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`realm/detail/${realm_token}`, "POST", { ...body });
    await launchSuccess(dispatch);
    await dispatch(findCompanyList());
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

//message_resource_token, email_resource_token, payment_resource_token
export const updateACompanyPrimaryResource = (realm_token, body = {}) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`realm/detail/${realm_token}`, "POST", { ...body });
    await launchSuccess(dispatch);
    await dispatch(findCompanyList());
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const findCompanyDetail = realm_token => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload } = await callApi(`realm/detail/${realm_token}`, "GET");
    await dispatch({
      type: constant.COMPANY_DETAIL,
      payload
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

//email_resource_token, email_resource_id
export const createAPaymentMethod = (realm_token, body) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`realm/email/${realm_token}`, "POST", { ...body });
    await launchSuccess(dispatch);
    await dispatch(findAllPaymentMethodList());
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const findAllPaymentMethodList = realm_token => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload } = await callApi(`realm/all/payment/${realm_token}`, "GET");
    await dispatch({
      type: constant.PAYMENT_LIST,
      payload
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

//'square_application_id', 'square_location_id', 'square_access_token', 'status'
export const updateAPaymentMethod = (realm_token, payment_resource_token, body) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`realm/all/payment/${realm_token}/${payment_resource_token}`, "PATCH", {
      ...body
    });
    await launchSuccess(dispatch);
    await dispatch(findAllPaymentMethodList());
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

//twilio_account_id, twilio_auth_token, twilio_from_num
export const createAMessageMethod = (realm_token, body) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`realm/message/${realm_token}`, "POST", { ...body });
    await launchSuccess(dispatch);
    await dispatch(findAllMessageMethodList());
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const findAllMessageMethodList = realm_token => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload } = await callApi(`realm/all/message/${realm_token}`, "GET");
    await dispatch({
      type: constant.MESSAGE_LIST,
      payload
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

//'twilio_account_id', 'twilio_auth_token', 'twilio_from_num', 'status'
export const updateAMessageMethod = (realm_token, message_resource_token, body) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`realm/all/payment/${realm_token}/${message_resource_token}`, "PATCH", {
      ...body
    });
    await launchSuccess(dispatch);
    await dispatch(findAllMessageMethodList());
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

//sendgrid_api_key, sendgrid_from_email
export const createAEmailMethod = (realm_token, body) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`realm/email/${realm_token}`, "POST", { ...body });
    await launchSuccess(dispatch);
    await dispatch(findAllEmailMethodList());
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

export const findAllEmailMethodList = realm_token => async dispatch => {
  try {
    await startLoader(dispatch);
    const { payload } = await callApi(`realm/all/email/${realm_token}`, "GET");
    await dispatch({
      type: constant.EMAIL_LIST,
      payload
    });
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};

//''sendgrid_api_key', 'sendgrid_from_email', 'status'
export const updateAEmailMethod = (realm_token, email_resource_token, body) => async dispatch => {
  try {
    await startLoader(dispatch);
    await callApi(`realm/all/payment/${realm_token}/${email_resource_token}`, "PATCH", {
      ...body
    });
    await dispatch(findAllEmailMethodList());
    await launchSuccess(dispatch);
    await stopLoader(dispatch);
  } catch (err) {
    await stopLoader(dispatch);
    dispatch(processLogout(err));
  }
};
