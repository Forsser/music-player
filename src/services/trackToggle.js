import { playTrack } from "../redux/actions/allMusicActions.js";
import { togglePlay } from "../redux/actions/togglePlay.js";

const trackToggle = (
  trackUrl,
  trackId,
  currentPlayingTrack,
  isPlaying,
  dispatch
) => {
  // Додаємо трек у відтворення
  dispatch(playTrack({ trackUrl, trackId }));

  // Якщо це той самий трек, змінюємо стан відтворення
  if (currentPlayingTrack === trackUrl) {
    dispatch(togglePlay(!isPlaying));
  } else {
    dispatch(togglePlay(true));
  }
};

export { trackToggle };
