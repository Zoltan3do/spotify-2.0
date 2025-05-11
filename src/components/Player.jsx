import next from "../assets/playerbuttons/next.png"
import play from "../assets/playerbuttons/play.png"
import prev from "../assets/playerbuttons/prev.png"
import repeat from "../assets/playerbuttons/repeat.png"
import shuffle from "../assets/playerbuttons/shuffle.png"
import { useSelector } from "react-redux";

const Player = () => {
  const selectedSong = useSelector((state) => state.selectedSong);

  return (
    <div className="container-fluid fixed-bottom bg-dark pt-3 fixed-bottom pb-3 ">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 playerControls">
              {selectedSong ? (
                <div className="d-flex align-items-center">
                  <img
                    src={selectedSong.album.cover_small}
                    alt="track"
                    className="img-fluid mb-2 "
                  />
                  <p className="text-light ">
                    Album: &quot;{selectedSong.album.title}&quot;<br />
                    Artist: {selectedSong.artist.name}
                  </p>
                </div>
              ) : (
                <p>Seleziona una canzone per ascoltarla</p>
              )}

              <div className="d-flex ">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
