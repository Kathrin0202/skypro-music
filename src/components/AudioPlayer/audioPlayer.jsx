import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setShuffleTracks,
  setPlayTracks,
  setCurrentTracks,
  setNewTracks,
} from "../../store/slices/playlist";
import * as S from "./audioPlayer.style";
import { PlayerProgress } from "./playerProgress";
import { Volume } from "./playerVolume";

export function AudioPlayer({ setTrackTime, trackTime, setCurrentTrack }) {
  const audioRef = useRef(null);
  const [isRepeat, setIsRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.track.newPlaylist);
  const currentTrack = useSelector((state) => state.track.trackId);
  const isShuffle = useSelector((state) => state.track.shufflePlaylist);
  const isPlayingTracks = useSelector((state) => state.track.playTrack);

  const handleClick = () => {
    if (!isPlayingTracks) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    dispatch(setPlayTracks(!isPlayingTracks));
  };

  useEffect(() => {
    if (isPlayingTracks) handleClick();
  }, [currentTrack?.track_file]);

  function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);

    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    return `${minutes}:${seconds}`;
  }

  const handlePrev = () => {
    if (audioRef.current?.currentTime > 5) {
      audioRef.current.currentTime = 0;
      return;
    }
    const trackList = shuffle ? { ...isShuffle } : { ...playlist };
    let index = Object.keys(trackList).find(
      (key) => trackList[key].id === currentTrack.id
    );
    if (+index === 0) return;
    index = +index - 1;
    setCurrentTracks({
      id: trackList[index].id,
      author: trackList[index].author,
      title: trackList[index].name,
      track_file: trackList[index].track_file,
      progress: 0,
      time: trackList[index].duration_in_seconds,
    });
    dispatch(setCurrentTracks(trackList[index].id));
    console.log(trackList[index]);
  };

  const handleNext = () => {
    const trackList = shuffle ? { ...isShuffle } : { ...playlist };
    let index = Object.keys(trackList).find(
      (key) => trackList[key].id === currentTrack.id
    );
    if (+index === Object.keys(trackList).length - 1) return;
    index = +index + 1;
    setCurrentTracks({
      id: trackList[index].id,
      author: trackList[index].author,
      title: trackList[index].name,
      track_file: trackList[index].track_file,
      progress: 0,
      time: trackList[index].duration_in_seconds,
    });
    dispatch(setCurrentTracks(trackList[index].id));
    console.log(trackList[index]);
  };

  const handleShuffle = () => {
    if (shuffle) {
      setShuffle(false);
      dispatch(setShuffleTracks({}));
    } else {
      const shuffleTracks = Object.values(playlist).sort(function () {
        return Math.round(Math.random()) - 0.5;
      });
      setShuffle(true);
      dispatch(setShuffleTracks({ ...shuffleTracks }));
    }
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
    if (duration === currentTimes) {
      handleNext();
      dispatch(setPlayTracks(isPlayingTracks));
    }
  };

  return (
    <>
      {currentTrack ? (
        <>
          <S.Bar>
            <S.BarContent>
              <audio
                src={currentTrack.track_file}
                controls
                style={{ visibility: "hidden" }}
                loop={isRepeat}
                ref={audioRef}
                onPlay={() => setPlayTracks(true)}
                onPause={() => setPlayTracks(false)}
                onTimeUpdate={handleProgress}
                volume="true"
              ></audio>
              <S.BarPlayerProgressTime>
                {formatTime(audioRef.current?.currentTime || 0)}/
                {formatTime(audioRef.current?.duration || 0)}
              </S.BarPlayerProgressTime>
              <PlayerProgress audioRef={audioRef} trackTime={trackTime} />
              <S.BarPlayerBlock>
                <S.BarPlayer>
                  <S.PlayerControls>
                    <S.PlayerBtn>
                      <S.PlayerBtnPrevSvg alt="prev" onClick={handlePrev}>
                        <use xlinkHref="img/icon/sprite.svg#icon-prev"></use>
                      </S.PlayerBtnPrevSvg>
                    </S.PlayerBtn>
                    <S.PlayerBtn>
                      {isPlayingTracks ? (
                        <S.PlayerBtnPlaySvg alt="pause" onClick={handleClick}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="19"
                            viewBox="0 0 15 19"
                            fill="none"
                          >
                            <rect width="5" height="19" fill="#D9D9D9" />
                            <rect x="10" width="5" height="19" fill="#D9D9D9" />
                          </svg>
                        </S.PlayerBtnPlaySvg>
                      ) : (
                        <S.PlayerBtnPlaySvg alt="play" onClick={handleClick}>
                          <use xlinkHref="./img/icon/sprite.svg#icon-play"></use>
                        </S.PlayerBtnPlaySvg>
                      )}
                    </S.PlayerBtn>
                    <S.PlayerBtnNext>
                      <S.PlayerBtnNextSvg alt="next" onClick={handleNext}>
                        <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                      </S.PlayerBtnNextSvg>
                    </S.PlayerBtnNext>
                    <S.PlayerBtnRepeat>
                      <S.PlayerBtnRepeatSvg
                        alt="repeat"
                        className={isRepeat ? "_btn-icon-active" : "_btn-icon"}
                        onClick={handleRepeat}
                      >
                        <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                      </S.PlayerBtnRepeatSvg>
                    </S.PlayerBtnRepeat>
                    <S.PlayerBtnShuffle>
                      <S.PlayerBtnShuffleSvg
                        alt="shuffle"
                        onClick={handleShuffle}
                        className={isShuffle ? "_btn-icon-active" : "_btn-icon"}
                      >
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
                <Volume audioRef={audioRef} />
              </S.BarPlayerBlock>
            </S.BarContent>
          </S.Bar>
        </>
      ) : null}
    </>
  );
}
