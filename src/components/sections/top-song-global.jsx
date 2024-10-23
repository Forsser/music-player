import { Link } from "react-router-dom";

export const TopSongGlobal = ({ topSongGlobal }) => {
  const maxLengthArtist = 20; // Вкажи максимальну довжину тексту для імені виконавця
  const maxLengthTrack = 20; // Вкажи максимальну довжину тексту для назви треку

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength - 3) + "...";
    }
    return text;
  }

  return (
    <section className="section">
      <div className="section-title">
        <h2>Top Song Global</h2>
        <a href="#">See all</a>
      </div>
      <div className="track-list">
        <ul className="track-list__items">
          {topSongGlobal.map(({ track }) => {
            const artistName = truncateText(
              track.artists[0].name,
              maxLengthArtist
            );
            const trackName = truncateText(track.name, maxLengthTrack);
            return (
              <li key={track.id} className="track-list__item">
                <img
                  src={track.album.images[1].url}
                  className="track__image"
                  alt="Album cover"
                />
                <div className="track__info">
                  <p className="track__name">{trackName}</p>
                  <Link
                    className="track__artist"
                    to={`/artist/${track.artists[0].id}`}
                  >
                    <p>{artistName}</p>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
