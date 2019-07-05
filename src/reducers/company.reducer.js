import constant from "../constants/constant";

const initialState = {
  company_list: {
    record_list: [],
    count: 0,
    end: 0
  },
  company_detail: {
    basic_info: {
      vn_realm_id: "",
      cdate: "",
      udate: "",
      company_name: "",
      company_title: "",
      realm_token: "",
      status: 2
    },
    message_resource_info: {
      twilio_account_id: "",
      twilio_auth_token: "",
      twilio_from_num: ""
    },
    address_info: {
      address_token: "",
      cdate: "",
      udate: "",
      addr_str: "",
      lat: "",
      lng: "",
      street_line_1: "",
      street_line_2: "",
      city: "",
      state: "",
      zip: ""
    },
    tribute_rate_info: {
      tribute_rate_token: "",
      cdate: "",
      udate: "",
      rate: ""
    }
  },
  payment_list: {
    record_list: [
      {
        square_application_id: "",
        square_location_id: "",
        square_access_token: "",
        payment_resource_token: ""
      }
    ],
    count: 0,
    end: 0
  },
  email_list: {
    record_list: [
      {
        sendgrid_api_key: "",
        sendgrid_from_email: "",
        status: "",
        email_resource_token: ""
      }
    ],
    count: 0,
    end: 0
  },
  message_list: {
    record_list: [
      {
        twilio_account_id: "",
        twilio_auth_token: "",
        twilio_from_num: "",
        message_resource_token: ""
      }
    ],
    count: 0,
    end: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constant.COMPANY_LIST:
      return { ...state, company_list: action.payload };
    case constant.COMPANY_DETAIL:
      return { ...state, company_detail: action.payload };
    case constant.PAYMENT_LIST:
      return { ...state, payment_list: action.payload };
    case constant.EMAIL_LIST:
      return { ...state, email_list: action.payload };
    case constant.MESSAGE_LIST:
      return { ...state, message_list: action.payload };
    default:
      return state;
  }
};
