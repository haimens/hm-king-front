import constant from "../constants/constant";

const initialState = {
  invoice_list: {
    record_list: [],
    count: 0,
    end: 0
  },
  invoice_list_in_company: {
    record_list: [],
    count: 0,
    end: 0
  },
  invoice_sum_in_company: {
    sum: ""
  },
  invoice_sum: {
    sum: ""
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constant.INVOICE_LIST:
      return { ...state, invoice_list: action.payload };
    case constant.INVOICE_SUM_IN_COMPANY:
      return { ...state, invoice_sum_in_company: action.payload };
    case constant.INVOICE_LIST_IN_COMPANY:
      return { ...state, invoice_list_in_company: action.payload };
    case constant.INVOICE_SUM:
      return { ...state, invoice_sum: action.payload };
    default:
      return state;
  }
};
