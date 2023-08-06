import { useState } from "react";
import SearchOutput from "../SearchOutput/SearchOutput";
import Loader from "../Loader/Loader";
import './ItemsInput.css'
import removeIcon from "./icons8-x-coordinate-24.png";

const ItemsInput = ({ theme }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]); 

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${tags}&app_id=36c372c3&app_key=161c2c3e1e354f508fc42d20718d8ed3`;

  const handleSearch = async () => {
    setLoading(true);
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.hits);
        console.log("data", data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleAddTag = () => {
    if (search.trim() && tags.length < 6) {
      setTags([...tags, search]);
      setSearch("");
    }
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags.length >= 3) {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <form
        className={`search-bar ${theme === "dark" ? "dark" : ""}`}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Enter your fridge ingredients... (min 3)"
          type="text"
          value={search}
          onChange={handleInput}
          className={`search-bar__input ${theme === "dark" ? "dark" : ""}`}
        />
        <button type="button" onClick={handleAddTag} className="add-tag-button">
          Add Tag
        </button>
        <div className="tags-container">
          {tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
              <button type="button" onClick={() => handleRemoveTag(tag)} className="remove-button">
                <img src={removeIcon} alt="Remove" className="remove-icon"/>
              </button>
            </div>
          ))}
        </div>
        {tags.length >= 3 && (
          <button type="submit" className="search-bar__button">
            Search recipes
          </button>
        )}
      </form>
      {loading ? <Loader /> : <SearchOutput searchResults={searchResults} theme={theme} />}
    </div>
  );
};

export default ItemsInput;
