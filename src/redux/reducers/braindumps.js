import { ADD_BRAINDUMP_ITEM } from "../actions";

const braindumpReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BRAINDUMP_ITEM:
      return [...state, { id: action.id, text: action.text, processed: false }];
    default:
      return state;
  }
};

export default braindumpReducer;
