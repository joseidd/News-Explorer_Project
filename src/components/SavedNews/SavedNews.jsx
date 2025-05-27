import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";
import { useOutletContext } from "react-router-dom";

const SavedNews = () => {
  const { savedArticles, handleSaveArticle } = useOutletContext();

  const handleRemoveArticle = (_id) => {
    const updatedArticles = savedArticles.filter(
      (article) => article._id !== _id
    );
    handleSaveArticle({ _id, isSaved: false, article: updatedArticles });
  };

  return (
    <ul className="saved-news">
      {savedArticles.map((article, index) => (
        <NewsCard
          key={index}
          {...article}
          handleRemoveArticle={handleRemoveArticle}
        />
      ))}
    </ul>
  );
};

export default SavedNews;
