const initialState = {
  cars:[]
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "CARDS":
      return {
        ...state,
        cars: action.payload,
      }
    default:
      return state;
  }
};
