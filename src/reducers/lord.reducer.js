import constant from "../constants/constant";

const initialState = {
  lord_list: {
    record_list: [],
    count: 0,
    end: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constant.LORD_LIST:
      return { ...state, lord_list: action.payload };
    default:
      return state;
  }
};
