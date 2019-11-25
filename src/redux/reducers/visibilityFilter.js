const initialState = {
  activeFilter: "daily"
};

const visibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return {
        activeFilter: action.filter
      };
    default:
      return state;
  }
};

export default visibilityFilterReducer;
