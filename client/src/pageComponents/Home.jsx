import React from "react";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import FoodCard from "../components/FoodCard";
import Diets from "../components/Diets";
import axios from "axios";
import { hardcodedDiet, hardcodedData } from "../store/HardcodeData";
import "./Home.css";
import { getFoodCards } from "../store/actions/index";

const Home = () => {
  const [data, setData] = useState([]); // Data obtenida de la DB
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const [diet, setDiet] = useState({ data: [] });

  useEffect(() => {
    //   //Aca voy a buscar la data
    setData(hardcodedData());
    // axios.get("http://localhost:3001/").then((response) => {
    //   setData(response.data.results);
    // });
    // axios.get("http://localhost:3001/types").then((result) => setDiet(result));

    setDiet(hardcodedDiet());
  }, []);

  // const dispatch = useDispatch();
  // dispatch(getFoodCards());

  // const dataRedux = useSelector((state) => state.food); // Traigo el estado de redux y lo asigno a data
  // const diet = useSelector((state) => state.diet);
  // console.log(dataRedux);

  const pages = [];
  for (let i = 1; i < Math.ceil(data.length / cardsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);
  const renderData = (cardsToRender) => {
    return (
      <ul className="food-cards">
        {cardsToRender.map((elem, index) => {
          return (
            <li className="food-item" key={index}>
              <FoodCard foodCard={elem} />
            </li>
          );
        })}
      </ul>
    );
  };
  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };
  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      // Veo si es un multiplo el numero antes reducir limites
      // Entonces reajusto los limites
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    // console.log(currentPage);
  };
  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      // Entonces reajusto los limites
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    // console.log(currentPage);
  };
  const renderPageNumbers = () => {
    return pages.map((elem) => {
      if (elem < maxPageNumberLimit + 1 && elem > minPageNumberLimit) {
        return (
          <li
            key={elem}
            id={elem}
            className={currentPage === elem ? "active" : null} // Para el Css
            onClick={handleClick}
          >
            {elem}
          </li>
        );
      } else {
        return null;
      }
    });
  };
  const renderDiets = (data) => {
    // console.log(data);
    return (
      <>
        {data.data.map((elem, index) => {
          return (
            <li className="diet" key={index}>
              <Diets diet={elem} />
            </li>
          );
        })}
      </>
    );
  };

  // console.log(diet);

  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      <ul className="filters">
        <li className="filter-points-order">
          <button>Puntos (apply)</button>
          <ul>
            <li>Higher first</li>
            <li>Lower first</li>
          </ul>
        </li>
        <li className="filter-alphabetic-order">
          <button>Alfabeticamente (apply)</button>
          <ul>
            <li>A-{">"}Z</li>
            <li>Z-{">"}A</li>
          </ul>
        </li>
        <li className="filter-diet-type">
          <button>Tipo de dieta (apply)</button>
          {renderDiets(diet)}
        </li>
      </ul>
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevButton}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            onClick={handleNextButton}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>

      {renderData(currentCards)}
    </div>
  );
};

export default Home;

// useDispatch
// useSelector
