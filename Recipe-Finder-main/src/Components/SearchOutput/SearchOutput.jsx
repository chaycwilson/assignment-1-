import PropTypes from 'prop-types';
import './SearchOutput.css';

const SearchOutput = ({ searchResults, theme }) => {
  const handleRecipeClick = (url) => {
    window.open(url, '_blank'); 
  };
  return (
    <div className={`search-output ${theme}`}>
      {searchResults.map((result) => {
        return (
          <div key={result.recipe.uri} className={`search-result ${theme}`} onClick={() => handleRecipeClick(result.recipe.url)}>
            <img src={result.recipe.image}
            />
            <h3>{result.recipe.label}</h3>
            {/* <p>Calories: {result.recipe.calories}</p> */}
            <br />
            <p><b>Ingredients:</b></p>
            <br />
            <ul>
              {result.recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};




SearchOutput.propTypes = {
    searchResults: PropTypes.array.isRequired
};


export default SearchOutput;
