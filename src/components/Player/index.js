import React from 'react';
import Slider from 'rc-slider';
import Sound from 'react-sound';

import { useSelector, useDispatch } from 'react-redux';
import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider,
} from './styles';

import { Creators as PlayerActions } from '../../store/ducks/player';

import volumeIcon from '../../assets/images/volume.svg';
import shuffleIcon from '../../assets/images/shuffle.svg';
import backwardIcon from '../../assets/images/backward.svg';
import playIcon from '../../assets/images/play.svg';
import pauseIcon from '../../assets/images/pause.svg';
import forwardIcon from '../../assets/images/forward.svg';
import repeatIcon from '../../assets/images/repeat.svg';

function msToTime(duration) {
  let seconds = parseInt((duration / 1000) % 60, 10);
  const minutes = parseInt((duration / (1000 * 60)) % 60, 10);

  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}`;
}

export default function Player() {
  const player = useSelector((state) => state.player);
  const currentTime = useSelector((state) => msToTime(state.player.position));
  const fullTime = useSelector((state) => msToTime(state.player.duration));
  const dispatch = useDispatch();

  return (
    <Container>
      {!!player.current && (
        <Sound
          url={player.current.file}
          playStatus={player.status}
          onFinishedPlaying={() => dispatch(PlayerActions.next())}
          onPlaying={({ position, duration }) => {
            dispatch(PlayerActions.playing(position, duration));
          }}
        />
      )}

      <Current>
        {!!player.current && (
          <>
            <img src={player.current.thumbnail} alt={player.current.title} />

            <div>
              <span>{player.current.title}</span>
              <small>{player.current.author}</small>
            </div>
          </>
        )}
      </Current>

      <Progress>
        <Controls>
          <button>
            <img src={shuffleIcon} alt="Shuffle" />
          </button>
          <button onClick={() => dispatch(PlayerActions.prev())}>
            <img src={backwardIcon} alt="Backward" />
          </button>
          {!!player.current && player.status === Sound.status.PLAYING ? (
            <button onClick={() => dispatch(PlayerActions.pause())}>
              <img src={pauseIcon} alt="Pause" />
            </button>
          ) : (
            <button onClick={() => dispatch(PlayerActions.play())}>
              <img src={playIcon} alt="Play" />
            </button>
          )}
          <button onClick={() => dispatch(PlayerActions.next())}>
            <img src={forwardIcon} alt="Forward" />
          </button>
          <button>
            <img src={repeatIcon} alt="Repeat" />
          </button>
        </Controls>

        <Time>
          <span>{currentTime}</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1ED760' }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>
          <span>{fullTime}</span>
        </Time>
      </Progress>

      <Volume>
        <img src={volumeIcon} alt="Volume" />
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#1ED760' }}
          handleStyle={{ display: 'none' }}
          value={100}
        />
      </Volume>
    </Container>
  );
}
