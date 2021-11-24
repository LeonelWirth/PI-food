import axios from "axios";

export const GET_FOODCARDS = "GET_FOODCARDS";
export function getFoodCards() {
  return async function () {
    return await axios.get("http://localhost:3001/").then((response) => {
      console.log(response.data);
      return {
        type: GET_FOODCARDS,
        payload: response.data.results,
        // payload: { title: "lalalala", image: "url" },
      };
    });
  };
}
