import { Link } from "react-router-dom";

import marvel from "../img/Logo-Marvel.png";

const Header = ({ search, setSearch }) => {
  return (
    <header className="header-container">
      <div>
        <Link to={`/`}>
          <img className="header-logo" src={marvel} alt="marvel" />
          <div className="search-container">
            <input
              value={search}
              type="text"
              className="search-input"
              placeholder="Search..."
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
        </Link>
        <Link to={`/comics`}>
          <h1>Comics</h1>
        </Link>
        <Link to={`/`}>
          <h1>Characters</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
