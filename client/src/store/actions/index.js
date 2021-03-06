import axios from "axios";
import { bubbleSort } from "../funciones/funciones";

export const GET_FOODCARDS = "GET_FOODCARDS";
export const GET_DIETTYPES = "GET_DIETTYPES";
export const GET_FOODCARDS_AZ = "GET_FOODCARDS_AZ";
export const GET_FOODCARDS_ZA = "GET_FOODCARDS_ZA";
export const GET_FOODCARDS_SCORE_HL = "GET_FOODCARDS_SCORE_HL";
export const GET_FOODCARDS_SCORE_LH = "GET_FOODCARDS_SCORE_LH";
export const GET_FOODCARDS_DIET = "GET_FOODCARDS_DIET";
export const SEARCH_TITLE = "SEARCH_TITLE";
export const GET_FOODCARDS_ID = "GET_FOODCARDS_ID";
export const POST_FOODCARDS = "POST_FOODCARDS";

export function getFoodCards() {
  return async function (dispatch) {
    return await axios.get("http://localhost:3001/").then((response) => {
      console.log("Recetas del back", response.data);
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
      arr.push(data[i].title.toLowerCase());
      dataCopy.push(data[i]);
    }
    arr.sort();
    // ahora ordeno la data
    let i = 0;
    let j = 0;
    while (j < dataCopy.length) {
      if (dataCopy[i].title.toLowerCase() === arr[j]) {
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
      arr.push(
        data[i].score ? parseInt(data[i].score) : data[i].spoonacularScore
      );
      dataCopy.push(data[i]);
    }
    // ahora ordeno la data
    arr = bubbleSort(arr);
    // console.log("Arr: ", bubbleSort(arr));
    let i = 0;
    let j = 0;
    while (j < dataCopy.length) {
      let comp = parseInt(dataCopy[i].score)
        ? parseInt(dataCopy[i].score)
        : dataCopy[i].spoonacularScore;
      if (comp === arr[j]) {
        result.push(dataCopy[i]);
        j += 1;
      }
      i += 1;
      if (i === dataCopy.length) i = 0;
    }
    result = result.reverse();
    await dispatch({
      type: GET_FOODCARDS_SCORE_HL,
      payload: result,
    });
  };
}

export function getFoodCardsByScoreLH(data) {
  return async function (dispatch) {
    let arr = [];
    let dataCopy = [];
    for (let i = 0; i < data.length; i++) {
      arr.push(
        data[i].score ? parseInt(data[i].score) : data[i].spoonacularScore
      );
      dataCopy.push(data[i]);
    }
    // ahora ordeno la data
    arr = bubbleSort(arr);

    let i = 0;
    let j = 0;
    let result = [];

    while (j < dataCopy.length) {
      let comp = parseInt(dataCopy[i].score)
        ? parseInt(dataCopy[i].score)
        : dataCopy[i].spoonacularScore;
      if (comp === arr[j]) {
        result.push(dataCopy[i]);
        j += 1;
      }
      i += 1;
      if (i === dataCopy.length) i = 0;
    }

    // console.log("Arr: ", result);
    await dispatch({
      type: GET_FOODCARDS_SCORE_LH,
      payload: result,
    });
  };
}

export function getFoodCardsByDiet(data, diet) {
  return async function (dispatch) {
    const checkForDiets = (diet, filter) => {
      for (let i = 0; i < diet.length; i++) {
        if (diet[i].name.toLowerCase() === filter) return true;
      }
      return false;
    };
    let result = data;
    console.log("En getFoodCardsByDiet, result: ", result);
    for (let i = 0; i < diet.length; i++) {
      result = result.filter((e) =>
        e.diets[0].name
          ? checkForDiets(e.diets, diet[i].toLowerCase())
          : e.diets.includes(diet[i].toLowerCase())
      ); //e.diets.includes(diet[i].toLowerCase()));
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
        // console.log("Del back llega: ", response.data);
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

export function postFoodCards(form) {
  return async function (dispatch) {
    axios.post("http://localhost:3001/recipe", form).then(() => {
      dispatch({
        type: POST_FOODCARDS,
      });
    });
  };
}
