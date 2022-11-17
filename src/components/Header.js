import { Link } from "react-router-dom";

import marvel from "../img/Logo-Marvel.png";

const Header = () => {
  return (
    <header className="header-container">
      <div>
        <img className="header-logo" src={marvel} alt="marvel" />

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
