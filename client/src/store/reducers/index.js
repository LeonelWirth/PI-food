import {
  GET_FOODCARDS,
  GET_DIETTYPES,
  GET_FOODCARDS_AZ,
} from "../actions/index";
import { getFoodCards, getDietTypes } from "../actions/index";

const initialState = {
  food: [],
  filteredFood: [],
  diet: [],
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case GET_FOODCARDS:
      // console.log("Llegue al reducer");
      return {
        ...state,
        food: action.payload,
      };
    case GET_FOODCARDS_AZ:
      return {
        ...state,
        foodAZ: [...state.foodAZ, action.payload],
      };
    case GET_DIETTYPES:
      // console.log("payload: ", action.payload);
      return {
        ...state,
        diet: action.payload,
      };
    default:
      return state;
  }
}

export default reducers;
