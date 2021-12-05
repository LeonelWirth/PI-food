import axios from "axios";

export const GET_FOODCARDS = "GET_FOODCARDS";
export const GET_DIETTYPES = "GET_DIETTYPES";
export const GET_FOODCARDS_AZ = "GET_FOODCARDS_AZ";
export const GET_FOODCARDS_ZA = "GET_FOODCARDS_ZA";
export const GET_FOODCARDS_SCORE_HL = "GET_FOODCARDS_SCORE_HL";
export const GET_FOODCARDS_SCORE_LH = "GET_FOODCARDS_SCORE_LH";
export const GET_FOODCARDS_DIET = "GET_FOODCARDS_DIET";
export const SEARCH_TITLE = "SEARCH_TITLE";
export const GET_FOODCARDS_ID = "GET_FOODCARDS_ID";

export function getFoodCards() {
  return async function (dispatch) {
    return await axios.get("http://localhost:3001/").then((response) => {
      console.log(response.data);
      dispatch({
        type: GET_FOODCARDS,
        // payload: response.data.results,
        payload: response.data,
      });
    });
  };
}

export function getDietTypes() {
  return async function (dispatch) {
    return await axios.get("http://localhost:3001/types").then((response) => {
      dispatch({
        type: GET_DIETTYPES,
        payload: response.data,
      });
    });
  };
}

export function getFoodCardsAZ(data) {
  console.log("AZ Action");
  return async function (dispatch) {
    let arr = [];
    let result = [];
    let dataCopy = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i].title);
      dataCopy.push(data[i]);
    }
    arr.sort();
    // ahora ordeno la data
    let i = 0;
    let j = 0;
    while (j < dataCopy.length) {
      if (dataCopy[i].title === arr[j]) {
        result.push(dataCopy[i]);
        j += 1;
      }
      i += 1;
      if (i === dataCopy.length) i = 0;
    }
    await dispatch({
      type: GET_FOODCARDS_AZ,
      payload: result,
    });
  };
}

export function getFoodCardsZA(data) {
  console.log("AZ Action");
  return async function (dispatch) {
    let arr = [];
    let result = [];
    let dataCopy = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i].title);
      dataCopy.push(data[i]);
    }
    arr.sort();
    // ahora ordeno la data
    let i = 0;
    let j = 0;
    while (j < dataCopy.length) {
      if (dataCopy[i].title === arr[j]) {
        result.push(dataCopy[i]);
        j += 1;
      }
      i += 1;
      if (i === dataCopy.length) i = 0;
    }
    result = result.reverse();
    await dispatch({
      type: GET_FOODCARDS_AZ,
      payload: result,
    });
  };
}

export function getFoodCardsByScoreHL(data) {
  return async function (dispatch) {
    let arr = [];
    let result = [];
    let dataCopy = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i].spoonacularScore);
      dataCopy.push(data[i]);
    }
    // ahora ordeno la data
    console.log("Arr: ", arr);
    arr.sort();
    let i = 0;
    let j = 0;
    while (j < dataCopy.length) {
      if (dataCopy[i].spoonacularScore === arr[j]) {
        result.push(dataCopy[i]);
        j += 1;
      }
      i += 1;
      if (i === dataCopy.length) i = 0;
    }

    await dispatch({
      type: GET_FOODCARDS_SCORE_HL,
      payload: result,
    });
  };
}

export function getFoodCardsByScoreLH(data) {
  return async function (dispatch) {
    let arr = [];
    let result = [];
    let dataCopy = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i].spoonacularScore);
      dataCopy.push(data[i]);
    }
    // ahora ordeno la data
    console.log("Arr: ", arr);
    arr.sort();
    let i = 0;
    let j = 0;
    while (j < dataCopy.length) {
      if (dataCopy[i].spoonacularScore === arr[j]) {
        result.push(dataCopy[i]);
        j += 1;
      }
      i += 1;
      if (i === dataCopy.length) i = 0;
    }
    result = result.reverse();
    await dispatch({
      type: GET_FOODCARDS_SCORE_LH,
      payload: result,
    });
  };
}

export function getFoodCardsByDiet(data, diet) {
  return async function (dispatch) {
    let result = data;
    for (let i = 0; i < diet.length; i++) {
      result = result.filter((e) => {
        let result = e.diets.includes(diet[i].toLowerCase());
        return result;
      });
    }
    dispatch({
      type: GET_FOODCARDS_DIET,
      payload: result,
    });
  };
}

export function removeFilters() {
  return async function (dispatch) {
    return await axios.get("http://localhost:3001/").then((response) => {
      dispatch({
        type: GET_FOODCARDS,
        payload: response.data,
      });
    });
  };
}

export function search(data, title) {
  return async function (dispatch) {
    // let result = [];
    console.log("El titulo es: ", title);
    return await axios
      .get(`http://localhost:3001/recipes?name=${title}`)
      .then((response) => {
        console.log("Del back llega: ", response.data);
        dispatch({
          type: SEARCH_TITLE,
          payload: response.data,
        });
      });
  };
}

export function getFoodCardsByID(id) {
  return async function (dispatch) {
    return await axios
      .get(`http://localhost:3001/recipes/${id}`)
      .then((response) => {
        console.log("Data ID: ", response.data);
        dispatch({
          type: GET_FOODCARDS_ID,
          payload: response.data,
        });
      });
  };
}
