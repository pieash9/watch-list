import { useDispatch } from "react-redux";
import { WATCH_LIST } from "../interface/Interfaces";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { removeFromWatchList } from "../store/slice/watchlistSlice";

const WatchedCard = ({ movie }: { movie: WATCH_LIST }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="mb-5 px-5 flex items-center justify-between w-full">
        <div className="flex gap-3">
          <img className="h-20" src={movie.image} alt={movie.name} />
          <div className="">
            <h5 className="font-semibold">{movie.name}</h5>
            <p className="text-sm ">
              Release: <span className=" font-light"> {movie.air_date}</span>
            </p>
            <p className="text-sm ">
              Episode: <span className=" font-light"> {movie.episode}</span>
            </p>
            <p className="text-sm ">
              Added on:
              <span className=" font-light ml-1">
                {new Date(movie.added_date).toLocaleString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </p>
          </div>
        </div>
        <button
          onClick={() => dispatch(removeFromWatchList(movie.id))}
          className="btn btn-ghost btn-circle btn-sm"
          title="Remove"
        >
          <MdOutlineRemoveCircleOutline size="20" className="text-red-400" />
        </button>
      </div>
      <div className="border-t-[1px]  border-gray-300  mb-2 mx-5"></div>
    </>
  );
};

export default WatchedCard;
