const initialState = {
  items: [],
};

function favoriteReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (state.items.some((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_FAVORITES":
      return { ...state, items: [] };

    default:
      return state;
  }
}

export default favoriteReducer;
