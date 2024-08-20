import "../../styles/header.scss";
export const Header = () => {
  return (
    <header className="header">
      <div className="welcome">
        <p>Welcome back, Kenshi!</p>
        <p> 112 new playlists for you</p>
      </div>
      <form className="search-bar">
        <input
          type="search"
          placeholder="Search by title, artist, or album..."
        ></input>
      </form>
      <div className="user-profile">
        <img src="path_to_profile_image" alt="Profile"></img>
      </div>
    </header>
  );
};
