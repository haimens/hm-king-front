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
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constant.COMPANY_LIST:
      return { ...state, company_list: action.payload };
    case constant.COMPANY_DETAIL:
      return { ...state, company_detail: action.payload };
    default:
      return state;
  }
};
