import braindumpReducer from "./braindumps";
import visibilityFilterReducer from "./visibilityFilter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  braindumpReducer,
  visibilityFilterReducer
});

export default rootReducer;
