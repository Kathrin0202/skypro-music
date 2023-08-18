import { useEffect } from "react";
import { useState } from "react";
import * as S from "./audioPlayer.style";
export const Volume = ({ audioRef }) => {
  const [volume, setVolume] = useState(70);
  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  return (
    <S.BarVolumeBlock>
      <S.VolumeContent>
        <S.VolumeImage>
          <S.VolumeSvg alt="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </S.VolumeSvg>
        </S.VolumeImage>
        <S.VolumeProgress>
          <S.VolumeProgressLine
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  );
};
