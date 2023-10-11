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
import { useState } from "react";
import EpisodeDetailsModal from "./EpisodeDetailsModal";
import { WATCH_LIST } from "../interface/Interfaces";

type PropsType = {
  episode: Episode;
  posterImage: string | undefined;
};

const EpisodeCard = ({ episode, posterImage }: PropsType) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    <>
      <div className="border rounded border-gray-300/80 p-2 hover:shadow-xl shadow-md duration-300 relative h-[29rem] md:h-[28.5rem] dark:text-white">
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <img
            src={posterImage}
            alt="poster image"
            className="rounded h-72 w-full object-cover"
          />
          <h3 className="text-xl font-semibold mt-2">{episode?.name}</h3>
          <p className="my-1 ">
            Released:{" "}
            <span className=" text-black/70 dark:text-white">
              {episode?.air_date}
            </span>
          </p>
          <p>
            Episode:{" "}
            <span className=" text-black/70 dark:text-white">
              {episode?.episode}
            </span>
          </p>
        </div>
        <div className="absolute md:flex justify-between mt-4  bottom-2 right-2 left-2">
          <button
            data-tip={`${
              isInWantToWatchList ? "Remove" : "Add"
            }  Want To Watch`}
            onClick={handleAddToWantToWatch}
            className={`btn btn-xs ${
              isInWantToWatchList ? "dark:bg-gray-500" : "!btn-outline"
            } !font-semibold rounded-sm btn-neutral capitalize md:w-[7.5rem] w-full dark:text-white tooltip tooltip-top mb-2 md:mb-0`}
          >
            <p className="flex items-center gap-1 justify-center dark:text-white">
              <span>Want To Watch</span>
              {isInWantToWatchList ? <FaBookmark /> : <FaRegBookmark />}
            </p>
          </button>
          <button
            data-tip={`${isMovieInWatchList ? "Remove" : "Add"}  Watch List`}
            onClick={handleAddToWatchList}
            className={`btn btn-xs  ${
              isMovieInWatchList ? "dark:bg-gray-500" : "btn-outline"
            } !font-semibold rounded-sm btn-neutral  capitalize dark:text-white md:w-[7.5rem] w-full tooltip tooltip-top`}
          >
            Watched List +
          </button>
        </div>
      </div>
      <EpisodeDetailsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        episode={episode as WATCH_LIST}
        image={posterImage}
      />
    </>
  );
};

export default EpisodeCard;
