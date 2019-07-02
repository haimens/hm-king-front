import constant from "../constants/constant";

const initialState = {
  company_list: {
    record_list: [],
    count: 0,
    end: 0
  },
  company_detail: {
    basic_info: {
      company_name: ""
    }
  },
  payment_list: {
    record_list: [],
    count: 0,
    end: 0
  },
  email_list: {
    record_list: [],
    count: 0,
    end: 0
  },
  message_list: {
    record_list: [],
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
