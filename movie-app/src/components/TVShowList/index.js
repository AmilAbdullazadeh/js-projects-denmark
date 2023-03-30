import s from "./style.module.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config"
import {TVShowListItem} from "../TVShowListItem";

export function TVShowList(props) {
    const { TVShows, handleClick } = props

    return (
        <div>
            <div className={s.title}>You'll probably like :</div>
            <div className={s.list}>
                {
                   TVShows.map((tvShow) =>
                    <span key={tvShow.id} className={s.tv_show_item}>
                        <TVShowListItem _onClick={handleClick} tvShow={tvShow} />
                    </span>
                   )
                }
            </div>
        </div>
    );
}
