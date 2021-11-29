import {
  GET_FOODCARDS,
  GET_DIETTYPES,
  GET_FOODCARDS_AZ,
} from "../actions/index";

const initialState = {
  food: [],
  foodAZ: [],
  diet: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_FOODCARDS:
      return {
        ...state,
        food: [...state.food, action.payload],
      };
    case GET_FOODCARDS_AZ:
      return {
        ...state,
        foodAZ: [...state.foodAZ, action.payload],
      };
    case GET_DIETTYPES:
      return {
        ...state,
        diet: [...state.diet, action.payload],
      };
    default:
      return state;
  }
}

export default reducer;
