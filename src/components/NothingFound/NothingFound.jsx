import "./NothingFound.css";
import NotFound from "../../assets/not-found.svg";

function NothingFound() {
  return (
    <div className="nothing-found">
      <img
        src={NotFound}
        alt="Nothing Found"
        className="nothing-found__image"
      />
      <h3 className="nothing-found__title">Nothing found</h3>
      <p className="nothing-found-text">
        Sorry, but nothing matched
        <br />
        your search terms.
      </p>
    </div>
  );
}

export default NothingFound;
