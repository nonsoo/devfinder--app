import { FC, useState } from "react";

import { MdSearch, MdWbSunny } from "react-icons/md";
import "./css/layout.css";

import Profile from "./Components/Profile";

import axios from "axios";

const App: FC = () => {
  const [searchUser, setSearchUser] = useState<string>("");
  const [resProfile, setResProfile] = useState<any>();
  const getUser = async (e: any): Promise<void> => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${searchUser}`
    );
    setResProfile(response.data);
  };
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
        <form className="searchBar" onSubmit={getUser}>
          <MdSearch className="searchBar__Icon" />
          <input
            type="text"
            className="searchBar__Field"
            placeholder="Search GitHub username..."
            value={searchUser}
            onChange={(e) => setSearchUser(e.target.value)}
          />
          <button className="SearchBar__btn" type="submit">
            Search
          </button>
        </form>
        {resProfile && (
          <Profile
            userName={resProfile?.name}
            profImg={resProfile.avatar_url}
            acctName={resProfile.login}
            date="Jan 25 2011"
            descri={resProfile.bio}
            repoNumb={resProfile.public_repos}
            followerNumb={resProfile.followers}
            followingNumb={resProfile.following}
            location={resProfile.location}
            website={resProfile.blog}
            twitter={resProfile.twitter_username}
          />
        )}
      </div>
    </div>
  );
};

export default App;
