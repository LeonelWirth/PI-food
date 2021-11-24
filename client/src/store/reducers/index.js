import { GET_FOODCARDS } from "../actions/index";

const initialState = {
  food: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOODCARDS:
      // console.log(action.payload);
      return {
        ...state,
        food: [...state.food, action.payload],
      };
    default:
      return state;
  }
}

export default reducer;
