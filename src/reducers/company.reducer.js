import constant from "../constants/constant";

const initialState = {
  company_list: {
    record_list: [],
    count: 0,
    end: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constant.FIND_COMPANY_LIST:
      return { ...state, company_list: action.payload };

    default:
      return state;
  }
};
