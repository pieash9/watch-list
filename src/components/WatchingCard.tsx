import { useDispatch, useSelector } from "react-redux";
import { WATCH_LIST } from "../interface/Interfaces";
import { MdDone, MdOutlineRemoveCircleOutline } from "react-icons/md";
import {
  addToWatchList,
  removeFromWatching,
} from "../store/slice/watchlistSlice";
import { RootState } from "../store/store";

const WatchingCard = ({ movie }: { movie: WATCH_LIST }) => {
  const dispatch = useDispatch();

  const watchedList = useSelector(
    (state: RootState) => state.movieWatchList.watchList
  );

  // checked whether movie is in watching list
  const isInWatchedList = watchedList.some((m) => m.id === movie.id);

  const handleWatched = () => {
    dispatch(removeFromWatching(movie.id));
    if (isInWatchedList === false) {
      dispatch(
        addToWatchList({
          added_date: new Date().toISOString(),
          air_date: movie?.air_date || "",
          image: movie.image,
          episode: movie?.episode || "",
          name: movie.name || "",
          id: movie.id || "",
        })
      );
    }
  };
  return (
    <>
      <div className="mb-5 px-5 flex items-center justify-between w-full">
        <div className="flex gap-3">
          <img className="h-20" src={movie.image} alt={movie.name} />
          <div className="">
            <h5 className="font-semibold">{movie.name}</h5>
            <p className="text-sm ">
              Release:{" "}
              <span className=" text-black/70 dark:text-white">
                {" "}
                {movie.air_date}
              </span>
            </p>
            <p className="text-sm ">
              Episode:{" "}
              <span className=" text-black/70 dark:text-white">
                {" "}
                {movie.episode}
              </span>
            </p>
            <p className="text-sm ">
              Added on:
              <span className=" text-black/70 dark:text-white ml-1">
                {movie?.added_date &&
                  new Date(movie.added_date).toLocaleString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleWatched}
            className="btn btn-ghost btn-circle btn-sm"
            title="Watched"
          >
            <MdDone size="20" />
          </button>
          <button
            onClick={() => dispatch(removeFromWatching(movie.id))}
            className="btn btn-ghost btn-circle btn-sm"
            title="Remove"
          >
            <MdOutlineRemoveCircleOutline size="20" className="text-red-400" />
          </button>
        </div>
      </div>
      <div className="border-t-[1px]  border-gray-300  mb-2 mx-5"></div>
    </>
  );
};

export default WatchingCard;
