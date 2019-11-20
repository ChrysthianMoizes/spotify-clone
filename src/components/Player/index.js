import React from 'react';
import Slider from 'rc-slider';

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider,
} from './styles';

import volumeIcon from '../../assets/images/volume.svg';
import shuffleIcon from '../../assets/images/shuffle.svg';
import backwardIcon from '../../assets/images/backward.svg';
import playIcon from '../../assets/images/play.svg';
// import pauseIcon from '../../assets/images/pause.svg';
import forwardIcon from '../../assets/images/forward.svg';
import repeatIcon from '../../assets/images/repeat.svg';

export default function Player() {
  return (
    <Container>
      <Current>
        <img
          src="https://sistemasertanejo.com/wp-content/uploads/2019/09/quem-traiu-500x500.jpg"
          alt="Música atual"
        />

        <div>
          <span>Quem Traiu Levou</span>
          <small>Gusttavo Lima</small>
        </div>
      </Current>

      <Progress>
        <Controls>
          <button>
            <img src={shuffleIcon} alt="Shuffle" />
          </button>
          <button>
            <img src={backwardIcon} alt="Backward" />
          </button>
          <button>
            <img src={playIcon} alt="Play" />
          </button>
          <button>
            <img src={forwardIcon} alt="Forward" />
          </button>
          <button>
            <img src={repeatIcon} alt="Repeat" />
          </button>
        </Controls>

        <Time>
          <span>1:34</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1ED760' }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>
          <span>4:23</span>
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
