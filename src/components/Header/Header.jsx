
import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import { useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext.jsx";

const Header = ({
  handleOpenLoginModal,
  handleOpenRegisterModal,
  handleSearch,
  handleRollerOpen,
  handleOnLoggout,
  savedArticles,
}) => {
  const { currentUser } = useContext(UserContext);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const articles = Object.values(savedArticles);

  const uniqueKeywords = [
    ...new Set(articles.map((article) => article.keyword)),
  ];
  const displayKeywords = uniqueKeywords.slice(0, 3);
  const remainingCount = uniqueKeywords.length - displayKeywords.length;

  return (
    <header
      className={
        isHome ? "header header_type_home" : "header header_type_saved-news"
      }
    >
      <Navigation
        handleOpenLoginModal={handleOpenLoginModal}
        handleOpenRegisterModal={handleOpenRegisterModal}
        handleRollerOpen={handleRollerOpen}
        handleOnLoggout={handleOnLoggout}
      />

      <div className={isHome ? "header__hero" : "header__hero_type_saved-news"}>
        <h1
          className={
            isHome
              ? "header__title header__title_type_home"
              : "header__title header__title_type_saved-news"
          }
        >
          {isHome
            ? "What's going on in "
            : `${currentUser.name}, you have ${articles.length} saved articles`}
          <span className="header__title-second-line">
            {isHome ? "the world?" : ""}
          </span>
        </h1>
        <div
          className={
            isHome
              ? "header__sub-title header__sub-title_type_home"
              : "header__sub-title header__sub-title_type_saved-news"
          }
        >
          {isHome ? (
            <>
              Find the latest news on any topic and save them in your{" "}
              <span className="header__sub-title header__sub-title_device_tablet">
                personal
                <span className="header__sub-title header__sub-title_device_mobile">
                  {" "}
                  account.
                </span>
              </span>
            </>
          ) : (
            <div className="header__keywords">
              `By keywords:{" "}
              <span className="header__keywords-bold">
                {" "}
                {displayKeywords.join(", ")}{" "}
              </span>
              {remainingCount > 0
                ? ` and ${remainingCount} other${remainingCount > 1 ? "s" : ""}`
                : ""}
              `
            </div>
          )}
        </div>
      </div>
      {isHome && <SearchForm handleSearch={handleSearch} />}
    </header>
  );
};

export default Header;
