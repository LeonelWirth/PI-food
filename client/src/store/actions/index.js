import axios from "axios";

export const GET_FOODCARDS = "GET_FOODCARDS";
export const GET_DIETTYPES = "GET_DIETTYPES";
export const GET_FOODCARDS_AZ = "GET_FOODCARDS_AZ";

export function getFoodCards() {
  return async function () {
    return await axios.get("http://localhost:3001/").then((response) => {
      // console.log(response.data);
      return {
        type: GET_FOODCARDS,
        payload: response.data.results,
      };
    });
  };
}

export function getDietTypes() {
  return async function () {
    return await axios.get("http://localhost:3001/types").then((response) => {
      // console.log(response.data);
      return {
        type: GET_DIETTYPES,
        payload: response.data.results,
      };
    });
  };
}
