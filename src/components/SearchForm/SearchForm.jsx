import React from "react";
import useForm from "../../hooks/useForm";
import "./SearchForm.css";

const SearchForm = ({ handleSearch }) => {
  const { values, handleChange } = useForm({});

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    let keyword = values.search;

    if (!keyword) {
      return;
    }

    handleSearch(keyword);
    keyword = "";
  };

  return (
    <>
      <form className="search-form">
        <input
          className="search-form__input"
          type="text"
          placeholder="Enter topic"
          name="search"
          id="search"
          value={values.search || ""}
          onChange={handleChange}
          aria-label="Search topic"
          minLength="2"
          maxLength="30"
          required
        />
        <button
          onClick={handleSearchSubmit}
          className="search-form__btn"
          type="submit"
        >
          Search
        </button>
      </form>
      <button
        onClick={handleSearchSubmit}
        className="search-form__btn_mobile"
        type="submit"
      >
        Search
      </button>
    </>
  );
};

export default SearchForm;
