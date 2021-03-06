import Sound from 'react-sound';

export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  PREV: 'player/PREV',
  NEXT: 'player/NEXT',
  PLAYING: 'player/PLAYING',
  HANDLE_TIME: 'player/HANDLE_TIME',
  SET_TIME: 'player/SET_TIME',
  SET_VOLUME: 'player/SET_VOLUME',
};

const INITIAL_STATE = {
  current: null,
  list: [],
  status: Sound.status.PLAYING,
  position: null,
  duration: null,
  positionShow: null,
  volume: 100,
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        current: action.payload.song,
        list: action.payload.list,
        status: Sound.status.PLAYING,
        position: 0,
      };
    case Types.PLAY:
      return { ...state, status: Sound.status.PLAYING };
    case Types.PAUSE:
      return { ...state, status: Sound.status.PAUSED };
    case Types.PREV: {
      const currentIndex = state.list.findIndex(
        (song) => song.id === state.current.id,
      );
      const prev = state.list[currentIndex - 1];

      if (prev) {
        return {
          ...state,
          current: prev,
          status: Sound.status.PLAYING,
          position: 0,
        };
      }

      return state;
    }
    case Types.NEXT: {
      const currentIndex = state.list.findIndex(
        (song) => song.id === state.current.id,
      );
      const next = state.list[currentIndex + 1];

      if (next) {
        return {
          ...state,
          current: next,
          status: Sound.status.PLAYING,
          position: 0,
        };
      }

      return state;
    }
    case Types.PLAYING:
      return { ...state, ...action.payload };
    case Types.HANDLE_TIME:
      return {
        ...state,
        positionShow: state.duration * action.payload.percent,
      };
    case Types.SET_TIME:
      return {
        ...state,
        position: state.duration * action.payload.percent,
        positionShow: null,
      };
    case Types.SET_VOLUME:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export const Creators = {
  loadSong: (song, list) => ({ type: Types.LOAD, payload: { song, list } }),
  play: () => ({ type: Types.PLAY }),
  pause: () => ({ type: Types.PAUSE }),
  next: () => ({ type: Types.NEXT }),
  prev: () => ({ type: Types.PREV }),
  playing: (position, duration) => ({
    type: Types.PLAYING,
    payload: { position, duration },
  }),

  handleTime: (percent) => ({
    type: Types.HANDLE_TIME,
    payload: { percent },
  }),

  setTime: (percent) => ({
    type: Types.SET_TIME,
    payload: { percent },
  }),

  setVolume: (volume) => ({
    type: Types.SET_VOLUME,
    payload: { volume },
  }),
};
