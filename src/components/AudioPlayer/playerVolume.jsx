import { useState } from "react";
import * as S from "./audioPlayer.style";
export const Volume = () => {
  const [volume, setVolume] = useState(0.1);
  const duration = 1;
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
            min="0"
            max={duration}
            value={volume}
            volume={volume}
            step="0.1"
            onChange={(e) => setVolume(e.target.value)}
            $color="#b672ff"
          />
        </S.VolumeProgress>
      </S.VolumeContent>
    </S.BarVolumeBlock>
  );
};
