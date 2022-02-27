import { FC } from "react";

import { MdSearch, MdWbSunny } from "react-icons/md";
import "./css/layout.css";

import Profile from "./Components/Profile";

const App: FC = () => {
  return (
    <div className="App">
      <div className="Wrapper">
        <section className="Title">
          <p className="Title__Name">devfinder</p>
          <p className="Title__Toggle">
            Light
            <span>
              <MdWbSunny />
            </span>
          </p>
        </section>
        <section className="searchBar">
          <MdSearch className="searchBar__Icon" />
          <input
            type="text"
            className="searchBar__Field"
            placeholder="Search GitHub username..."
          />
          <button className="SearchBar__btn">Search</button>
        </section>
        <Profile />
      </div>
    </div>
  );
};

export default App;
