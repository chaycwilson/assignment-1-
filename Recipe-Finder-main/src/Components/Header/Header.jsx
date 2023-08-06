import "./Header.css";

export const Header = ({toggleTheme, theme}) => {

  return (
    <header className={`header ${theme}`}>
      {/* <div className="left-container"> */}
        <h1 className="header__title">Recipe Finder</h1>
        {/* <img src="/src/assets/carrot-17687.png" className="carrot-img"/> */}
        {/* </div> */}
        <img src="https://www.svgrepo.com/show/309493/dark-theme.svg" 
        onClick={toggleTheme}
        className={`dark-mode-toggle ${theme}`} />
        
    </header>
  );
};

export default Header;
