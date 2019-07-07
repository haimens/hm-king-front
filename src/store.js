import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authReducer from "./reducers/auth.reducer";
import loadReducer from "./reducers/load.reducer";
import navReducer from "./reducers/nav.reducer";
import companyReducer from "./reducers/company.reducer";
import feeReducer from "./reducers/fee.reducer";
import lordReducer from "./reducers/lord.reducer";
import invoiceReducer from "./reducers/invoice.reducer";
const store = createStore(
  combineReducers({ authReducer, loadReducer, navReducer, companyReducer, feeReducer, lordReducer, invoiceReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
