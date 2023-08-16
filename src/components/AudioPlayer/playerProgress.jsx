import { useRef, useState } from "react";
import * as S from "./audioPlayer.style";
export const PlayerProgress = ({ audioRef, trackTime }) => {
  const progressRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(1);
  const duration = 230;

  const changeTime = (e) => {
    const width = progressRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;
    const progress = (offset / width) * 100;
    audioRef.current.currentTime = (progress / 100) * trackTime.length;
  };

  return (
    <S.BarPlayerProgress onClick={changeTime} ref={progressRef}>
      <S.BarPlayerPointer
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        step={0.01}
        onChange={(event) => setCurrentTime(event.target.value)}
        style={{ width: `${`${trackTime.progress}%`}` }}
        $color="#B672FF"
      ></S.BarPlayerPointer>
    </S.BarPlayerProgress>
  );
};
