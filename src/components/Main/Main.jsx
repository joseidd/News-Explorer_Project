import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import { useContext } from "react";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import "./Main.css";
import { useOutletContext } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Main = () => {
  const {
    newsArticles,
    visibleArticles,
    isLoading,
    hasSearched,
    handleCardRender,
  } = useOutletContext();
  const { isLoggedIn } = useContext(UserContext);

  return (
    <main className="main">
      {isLoading ? (
        <Preloader />
      ) : newsArticles.length > 0 ? (
        <>
          <h3
            className={
              visibleArticles > 0 ? "main__header" : "main__header_hidden"
            }
          >
            Search results
          </h3>
          <ul
            className={
              visibleArticles > 0 ? "main__card-wrap" : "main__card-wrap_hidden"
            }
          >
            {newsArticles.slice(0, visibleArticles).map((article, index) => (
              <NewsCard key={index} isLoggedIn={isLoggedIn} {...article} />
            ))}
          </ul>
          {visibleArticles < 100 && (
            <button
              type="button"
              onClick={handleCardRender}
              className="main__button"
            >
              Show more
            </button>
          )}
        </>
      ) : hasSearched ? (
        <Preloader />
      ) : null}
      <About />
    </main>
  );
};

export default Main;
