import {
  GET_FOODCARDS,
  GET_DIETTYPES,
  GET_FOODCARDS_AZ,
  GET_FOODCARDS_ZA,
  GET_FOODCARDS_SCORE_HL,
  GET_FOODCARDS_SCORE_LH,
  GET_FOODCARDS_DIET,
  GET_FOODCARDS_ID,
  SEARCH_TITLE,
} from "../actions/index";

const initialState = {
  food: [],
  diet: [],
};

function reducers(state = initialState, action) {
  switch (action.type) {
    case GET_FOODCARDS:
      return {
        ...state,
        food: action.payload,
      };
    case GET_DIETTYPES:
      return {
        ...state,
        diet: action.payload,
      };
    case GET_FOODCARDS_AZ:
      return {
        ...state,
        food: action.payload,
      };
    case GET_FOODCARDS_ZA:
      return {
        ...state,
        food: action.payload,
      };
    case GET_FOODCARDS_SCORE_HL:
      return {
        ...state,
        food: action.payload,
      };
    case GET_FOODCARDS_SCORE_LH:
      return {
        ...state,
        food: action.payload,
      };
    case GET_FOODCARDS_DIET:
      return {
        ...state,
        food: action.payload,
      };
    case GET_FOODCARDS_ID:
      return {
        ...state,
        food: [action.payload],
      };
    case SEARCH_TITLE:
      console.log("Payload: ", action.payload);
      return {
        ...state,
        food: [...action.payload], //, ...state.food],
      };
    default:
      return state;
  }
}

export default reducers;
