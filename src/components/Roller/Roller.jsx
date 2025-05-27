import React from "react";
import { Link } from "react-router";
import "./Roller.css";

const Roller = ({ handleOpenLoginModal, handleCloseModal, isLoggedIn }) => {
  return (
    <div className="roller">
      <div className="roller__container">
        <div className="roller__header">
          <div className="roller__logo">NewsExplorer</div>
          <button
            type="button"
            onClick={handleCloseModal}
            className="roller__close-btn"
          ></button>
        </div>
        <div className="roller__links">
          <Link to="/" className="roller__link">
            Home
          </Link>
          {isLoggedIn && (
            <Link to="/saved-news" className="roller__link">
              Saved articles
            </Link>
          )}
          {isLoggedIn ? (
            <button className="roller__link-pill-btn">Elise</button>
          ) : (
            <button
              type="button"
              onClick={handleOpenLoginModal}
              className="roller__link-pill-btn"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Roller;
