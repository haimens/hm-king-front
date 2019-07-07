import constant from "../constants/constant";

const initialState = {
  fee_list: {
    record_list: [],
    count: 0,
    end: 0
  },
  fee_list_in_company: {
    record_list: [],
    count: 0,
    end: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constant.FEE_LIST:
      return { ...state, fee_list: action.payload };
    case constant.FEE_LIST_IN_COMPANY:
      return { ...state, fee_list_in_company: action.payload };
    default:
      return state;
  }
};
