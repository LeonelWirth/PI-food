import React from "react";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import FoodCard from "../components/FoodCard";
import Diets from "../components/Diets";
import SearchBar from "../components/SearchBar";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getFoodCards,
  getDietTypes,
  getFoodCardsAZ,
  getFoodCardsZA,
  getFoodCardsByScoreHL,
  getFoodCardsByScoreLH,
  getFoodCardsByDiet,
} from "../store/actions/index";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.food); // Traigo parte del estado de redux y lo asigno a data
  const diet = useSelector((state) => state.diet); // Traigo parte del estado de redux y lo asigno a diea
  const [filter, setFilter] = useState([]);
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

  useEffect(() => {
    dispatch(getFoodCards());
    dispatch(getDietTypes());
  }, []);

  useEffect(() => {
    switch (filter[0]) {
      case "AZ":
        dispatch(getFoodCardsAZ(data));
        setFilter([]);
        break;
      case "ZA":
        dispatch(getFoodCardsZA(data));
        setFilter([]);
        break;
      case "ScoreHL":
        dispatch(getFoodCardsByScoreHL(data));
        setFilter([]);
        break;
      case "ScoreLH":
        dispatch(getFoodCardsByScoreLH(data));
        setFilter([]);
        break;
      case "Reset":
        dispatch(getFoodCards());
        setFilter([]);
        break;
      case "Diets":
        let dietsToFilter = filter;
        dietsToFilter.shift();
        console.log("Dispatched: ", data);
        dispatch(getFoodCardsByDiet(data, dietsToFilter));
        setFilter([]);
        break;
      default:
        break;
    }
    // setFilter("");
    renderData(data);
  }, [filter]);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / cardsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);
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
  };
  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
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
    return (
      <>
        {data.map((elem, index) => {
          return (
            <li
              className="diet"
              key={index}
              onClick={(elem) => {
                console.log("Filtro antes de agregar dieta: ", filter);
                setFilter([...filter, elem.target.textContent]);
              }}
            >
              <Diets diet={elem} />
            </li>
          );
        })}
      </>
    );
  };
  console.log(filter);
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
      <div>
        <ul className="page-numbers">
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
      </div>
      <SearchBar className="filters-searchbar" />
      <div className="content">
        <div>
          <div className="filters">
            <button onClick={() => setFilter(["Reset"])}>
              {" "}
              Remove Filters
            </button>
            <div className="filter-points-order">
              <button>Puntos (apply)</button>
              <li onClick={() => setFilter(["ScoreHL"])}>Higher first</li>
              <li onClick={() => setFilter(["ScoreLH"])}>Lower first</li>
              {/* </ul> */}
            </div>
            <div className="filter-alphabetic-order">
              <button>Alfabeticamente (apply)</button>
              <li onClick={() => setFilter(["AZ"])}>A-{">"}Z</li>
              <li onClick={() => setFilter(["ZA"])}>Z-{">"}A</li>
            </div>
            <div className="filter-diet-type">
              <button onClick={() => setFilter(["Diets", ...filter])}>
                Tipo de dieta (apply)
              </button>

              {renderDiets(diet)}
            </div>
          </div>
        </div>
        <div>{renderData(currentCards)}</div>
      </div>
    </div>
  );
};

export default Home;
