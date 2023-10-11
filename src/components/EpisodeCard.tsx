import { Episode } from "../graphql/__generated__/graphql";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  addToWantToWatch,
  addToWatchList,
  removeFromWantToWatch,
  removeFromWatchList,
} from "../store/slice/watchlistSlice";

type PropsType = {
  episode: Episode;
  posterImage: string | undefined;
};

const EpisodeCard = ({ episode, posterImage }: PropsType) => {
  const dispatch = useDispatch();

  const watchList = useSelector(
    (state: RootState) => state.movieWatchList.watchList
  );
  const wantToWatchList = useSelector(
    (state: RootState) => state.movieWatchList.wantToWatch
  );

  // checked whether movie is in wantToWatchList or not
  const isInWantToWatchList = wantToWatchList.some(
    (movie) => movie.id === episode.id
  );

  // checked whether movie is in watchList or not
  const isMovieInWatchList = watchList.some((movie) => movie.id === episode.id);

  const handleAddToWatchList = () => {
    if (isMovieInWatchList === false) {
      dispatch(
        addToWatchList({
          added_date: new Date().toISOString(),
          air_date: episode?.air_date || "",
          image: posterImage,
          episode: episode?.episode || "",
          name: episode.name || "",
          id: episode.id || "",
        })
      );
    } else {
      dispatch(removeFromWatchList(episode.id || ""));
    }
  };

  const handleAddToWantToWatch = () => {
    if (isInWantToWatchList === false) {
      dispatch(
        addToWantToWatch({
          added_date: new Date().toISOString(),
          air_date: episode?.air_date || "",
          image: posterImage,
          episode: episode?.episode || "",
          name: episode.name || "",
          id: episode.id || "",
        })
      );
    } else {
      dispatch(removeFromWantToWatch(episode.id || ""));
    }
  };

  return (
    <div className="border rounded border-gray-300/80 p-2 hover:shadow-xl shadow-md duration-300 relative h-[28.5rem]">
      <img
        src={posterImage}
        alt="poster image"
        className="rounded h-72 w-full object-cover"
      />
      <h3 className="text-xl font-semibold mt-2">{episode?.name}</h3>
      <p className="my-1 ">
        Released: <span className=" font-light">{episode?.air_date}</span>
      </p>
      <p>
        Episode: <span className=" font-light">{episode?.episode}</span>
      </p>
      <div className="absolute flex justify-between  bottom-2 left-2 right-2 ">
        <button
          data-tip={`${isInWantToWatchList ? "Remove" : "Add"}  Want To Watch`}
          onClick={handleAddToWantToWatch}
          className={`btn btn-xs ${
            isInWantToWatchList ? "dark:bg-gray-500" : "!btn-outline"
          } !font-semibold rounded-sm btn-neutral capitalize w-[7.5rem] dark:text-white tooltip tooltip-top`}
        >
          <p className="flex items-center gap-1 dark:text-white">
            <span>Want To Watch</span>
            {isInWantToWatchList ? <FaBookmark /> : <FaRegBookmark />}
          </p>
        </button>
        <button
          data-tip={`${isMovieInWatchList ? "Remove" : "Add"}  Watch List`}
          onClick={handleAddToWatchList}
          className={`btn btn-xs  ${
            isMovieInWatchList ? "dark:bg-gray-500" : "btn-outline"
          } !font-semibold rounded-sm btn-neutral btn-dark-mode capitalize dark:text-white w-[7.5rem] tooltip tooltip-top`}
        >
          Watchlist +
        </button>
      </div>
    </div>
  );
};

export default EpisodeCard;
