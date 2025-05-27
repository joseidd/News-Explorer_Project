import React, { useContext, useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import "./NewsCard.css";
import UserContext from "../../context/UserContext";

const NewsCard = ({
  _id,
  isSaved,
  title,
  urlToImage,
  keyword,
  content,
  publishedAt,
  author,
  handleRemoveArticle,
}) => {
  const { isLoggedIn } = useContext(UserContext);
  const { handleSaveArticle } = useOutletContext();
  const [marked, setIsMarked] = useState(false);
  const location = useLocation().pathname;

  const formattedPublishedAt = new Date(publishedAt).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleCardClassElem = `card__btn ${
    marked ? "card__save-btn_marked" : "card__save-btn"
  }`;

  const handleSaveArticles = () => {
    if (!isLoggedIn) return;

    const updateMarked = !marked;
    setIsMarked(updateMarked);

    const updatedArticle = {
      _id,
      isSaved: updateMarked,
      title,
      urlToImage,
      keyword,
      content,
      publishedAt,
      author,
    };

    handleSaveArticle({ _id, isSaved: updateMarked, article: updatedArticle });
  };

  const handleRemove = () => {
    handleRemoveArticle(_id);
  };

  return (
    <li className="card">
      <img src={urlToImage} alt="News Image" className="card__image" />
      {location === "/saved-news" && <div className="card__tag">{keyword}</div>}
      <button
        type="button"
        onClick={location === "/saved-news" ? handleRemove : handleSaveArticles}
        className={
          location === "/saved-news"
            ? "card__btn card__delete-btn"
            : handleCardClassElem
        }
      ></button>
      {!isLoggedIn && location === "/" ? (
        <div className="card__alert-popup">Signin to save article</div>
      ) : location === "/saved-news" ? (
        <div className="card__alert-popup">Remove from saved</div>
      ) : null}
      <div className="card__content">
        <p className="card__pub-date">{formattedPublishedAt}</p>
        <h3 className="card__header">{title}</h3>
        <p className="card__paragraph">{content}</p>
        <p className="card__author">{author}</p>
      </div>
    </li>
  );
};

export default NewsCard;
