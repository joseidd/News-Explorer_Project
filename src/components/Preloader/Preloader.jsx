import React, { useContext } from "react";
import "./Preloader.css";
import UserContext from "../../context/UserContext";

const Preloader = () => {
  const { isLoading } = useContext(UserContext);

  return (
    <div className="preloader">
      <div
        className={
          isLoading
            ? "circle-preloader"
            : "circle-preloader circle-preloader_stop-animation"
        }
      ></div>
      {!isLoading && (
        <div className="preloader__alert-message">Nothing Found</div>
      )}
      <h2
        className={
          isLoading
            ? "preloader__text"
            : "preloader__text preloader__text-alert-popup"
        }
      >
        {isLoading ? (
          "Searching for news..."
        ) : (
          <>
            Sorry but nothing matched
            <span className="preloader__text-second-line">
              your search terms
            </span>
          </>
        )}
      </h2>
    </div>
  );
};

export default Preloader;
