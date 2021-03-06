import { useState } from "react";
import s from "../SearchBar/SearchBar.module.css";

function SearchBar({ onSubmit }) {
  const [MovieName, setMovieName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (MovieName.trim() === "") {
      alert("Enter Movie Name");
      return;
    }

    onSubmit(MovieName);
    setMovieName("");
  };

  const handleFormChange = (event) => {
    setMovieName(event.currentTarget.value.toLowerCase());
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="MovieName"
          value={MovieName}
          onChange={handleFormChange}
          placeholder="Search Movies"
          // autocomplete="off"
        />

        <button type={"submit"}>
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
