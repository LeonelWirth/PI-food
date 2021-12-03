import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../store/actions/index";

function SearchBar() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.food); // Traigo parte del estado de redux y lo asigno a data
  const [filter, setFilter] = useState([]);
  const [searchTitle, setSearchTitle] = useState();
  useEffect(() => {
    switch (filter[0]) {
      case "Search":
        dispatch(search(data, searchTitle));
        setFilter([]);
        break;
      default:
        break;
    }
  }, [filter]);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearchTitle(e.target.value);
        }}
      ></input>
      <button onClick={() => setFilter(["Search"])}>Search</button>
    </div>
  );
}

export default SearchBar;
