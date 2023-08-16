import { useEffect, useRef, useState } from "react";
import * as S from "./audioPlayer.style";
import { PlayerProgress } from "./playerProgress";
import { Volume } from "./playerVolume";

export function AudioPlayer({ currentTrack, setTrackTime, trackTime }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [isRepeat, setIsRepeat] = useState(false);

  const handleClick = () => {
    const trackIsPlaying = !isPlaying;
    setIsPlaying(trackIsPlaying);
    if (trackIsPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    if (isPlaying) handleClick();
  }, [currentTrack]);

  function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);

    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
  }

  const handlePrev = () => {
    alert("Функция пока не готова");
  };

  const handleNext = () => {
    alert("Функция пока не готова");
  };
  const handleShuffle = () => {
    alert("Функция пока не готова");
  };
  const handleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const handleProgress = () => {
    const duration = audioRef.current.duration;
    const currentTimes = audioRef.current.currentTime;
    setTrackTime({
      progress: (currentTimes / duration) * 100,
      length: duration,
    });
  };

  return (
    <>
      {currentTrack ? (
        <>
          <S.Bar>
            <S.BarContent>
              <S.AudioFile
                style={{ visibility: "hidden" }}
                controls
                loop={isRepeat}
                ref={audioRef}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={handleProgress}
              >
                <source
                  src={currentTrack.track_file}
                  type="audio/mpeg"
                ></source>
              </S.AudioFile>
              <S.BarPlayerProgressTime>
                {formatTime(audioRef.current?.currentTime || 0)}/
                {formatTime(audioRef.current?.duration || 0)}
              </S.BarPlayerProgressTime>
              <PlayerProgress audioRef={audioRef} trackTime={trackTime} />
              <S.BarPlayerBlock>
                <S.BarPlayer>
                  <S.PlayerControls>
                    <S.PlayerBtn onClick={handlePrev}>
                      <S.PlayerBtnPrevSvg alt="prev">
                        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                      </S.PlayerBtnPrevSvg>
                    </S.PlayerBtn>
                    <S.PlayerBtn onClick={handleClick}>
                      <S.PlayerBtnPlaySvg alt="play">
                        <use
                          xlinkHref={`img/icon/sprite.svg#icon-${
                            isPlaying ? "pause" : "play"
                          }`}
                        ></use>
                      </S.PlayerBtnPlaySvg>
                    </S.PlayerBtn>
                    <S.PlayerBtnNext onClick={handleNext}>
                      <S.PlayerBtnNextSvg alt="next">
                        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                      </S.PlayerBtnNextSvg>
                    </S.PlayerBtnNext>
                    <S.PlayerBtnRepeat onClick={handleRepeat}>
                      <S.PlayerBtnRepeatSvg alt="repeat">
                        <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                      </S.PlayerBtnRepeatSvg>
                    </S.PlayerBtnRepeat>
                    <S.PlayerBtnShuffle onClick={handleShuffle}>
                      <S.PlayerBtnShuffleSvg alt="shuffle">
                        <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                      </S.PlayerBtnShuffleSvg>
                    </S.PlayerBtnShuffle>
                  </S.PlayerControls>

                  <S.PlayerTrackPlay>
                    <S.TrackPlayContain>
                      <S.TrackPlayImage>
                        <S.TrackPlaySvg alt="music">
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.TrackPlaySvg>
                      </S.TrackPlayImage>
                      <S.TrackPlayAuthor>
                        <S.TrackPlayAuthorLink>
                          {currentTrack.name}
                        </S.TrackPlayAuthorLink>
                      </S.TrackPlayAuthor>
                      <S.TrackPlayAlbum>
                        <S.TrackPlayAlbumLink>
                          {currentTrack.author}
                        </S.TrackPlayAlbumLink>
                      </S.TrackPlayAlbum>
                    </S.TrackPlayContain>

                    <S.TrackPlayLike>
                      <S.TrackPlayLikeBtn>
                        <S.TrackPlayLikeSvg alt="like">
                          <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                        </S.TrackPlayLikeSvg>
                      </S.TrackPlayLikeBtn>
                      <S.TrackPlayDislike>
                        <S.TrackPlayDislikeSvg alt="dislike">
                          <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                        </S.TrackPlayDislikeSvg>
                      </S.TrackPlayDislike>
                    </S.TrackPlayLike>
                  </S.PlayerTrackPlay>
                </S.BarPlayer>
                <Volume />
              </S.BarPlayerBlock>
            </S.BarContent>
          </S.Bar>
        </>
      ) : null}
    </>
  );
}
