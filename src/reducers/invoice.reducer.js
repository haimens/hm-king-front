import constant from "../constants/constant";

const initialState = {
  invoice_list: {
    record_list: [],
    count: 0,
    end: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constant.INVOICE_LIST:
      return { ...state, invoice_list: action.payload };
    default:
      return state;
  }
};
