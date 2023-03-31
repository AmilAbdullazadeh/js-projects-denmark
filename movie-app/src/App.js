import { useEffect, useState } from "react";

//Components
import { Logo } from "./components/Logo"
import {TVShowDetail} from "./components/TVShowDetail";
import {TVShowList} from "./components/TVShowList";
import { SearchBar } from "./components/Search"

import { TVShowAPI } from "./api/tv-shows";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config"

//Img
import logImg from "./assets/img/Screen Shot 2023-03-29 at 17.54.26.png"
import {Search} from "react-bootstrap-icons";


export function App() {
  const [currentTVShow, setCurrentTVShow] = useState([]);
  const [recommandtionTvShows, setRecommandtionTvShows] = useState([]);

  async function fetchTVShows() {
    try {
      const res = await TVShowAPI.popularTVShows()
      setCurrentTVShow(res)
    } catch(err) {
      console.log(err.status_message)
    }
  }

  async function fetchRecommendedTVShows(tv_id) {
    try {
      const res = await TVShowAPI.recommendedTVShows(tv_id)
      setRecommandtionTvShows(res)
    } catch (err) {
      console.log(err.status_message)
    }
  }

  async function searchTVShows(title) {
    try {
      const res = await TVShowAPI.searchTVShows(title)
      setCurrentTVShow(res)
    } catch (err) {
      console.log(err.status_message)
    }
  }

  function updateRecommendedTVShows(tvShow) {
    setCurrentTVShow(tvShow)
  }

  useEffect(() => {
    fetchTVShows()
  }, [])

  useEffect(() => {
    currentTVShow && fetchRecommendedTVShows(currentTVShow.id)
  }, [currentTVShow])

  return (
      <div
          className={s.main_container}
          style={{
            background: currentTVShow
                ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow?.backdrop_path}") no-repeat center / cover`
                : "black",
          }}
      >
        <div className={s.header}>
          <div className="row">
            <div className="col-4">
              <Logo title='8K Movies' subtitle='8k Movies' img={logImg} />
            </div>
            <div className="col-md-12 col-lg-4">
            <SearchBar handleSearch={searchTVShows} />
            </div>
          </div>
        </div>
        <div className={s.tv_show_details}>
          {
            currentTVShow && <TVShowDetail
                title={currentTVShow.name}
                overview={currentTVShow.overview}
                vote_average={currentTVShow.vote_average}
            />
          }
        </div>
        <div className={s.recommended_shows}>
          { currentTVShow && <TVShowList handleClick={updateRecommendedTVShows} TVShows={recommandtionTvShows} /> }
        </div>
      </div>
  );
}
