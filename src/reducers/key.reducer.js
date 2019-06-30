import constant from "../constants/constant";

const initialState = {
  key_list: {
    record_list: [],
    count: 0,
    end: 0
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constant.KEY_LIST:
      return { ...state, key_list: action.payload };
    default:
      return state;
  }
};
