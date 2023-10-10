import { WATCH_LIST } from "../interface/watchListInterface";
import { MdDone, MdOutlineRemoveCircleOutline } from "react-icons/md";

const WantToWatchCard = ({ movie }: { movie: WATCH_LIST }) => {
  return (
    <>
      <div className="mb-5 px-5 flex items-center justify-between w-full">
        <div className="flex gap-3">
          <img className="h-20" src={movie.image} alt={movie.name} />
          <div className="">
            <h5 className="font-semibold">{movie.name}</h5>
            <p className="text-sm ">
              Release: <span className="text-black/70"> {movie.air_date}</span>
            </p>
            <p className="text-sm ">
              Episode: <span className="text-black/70"> {movie.episode}</span>
            </p>
            <p className="text-sm ">
              Added on:
              <span className="text-black/70 ml-1">
                {new Date(movie.added_date).toLocaleString("en-US", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="btn btn-ghost btn-circle btn-sm" title="Watched">
            <MdDone size="20" />
          </button>
          <button className="btn btn-ghost btn-circle btn-sm" title="Remove">
            <MdOutlineRemoveCircleOutline size="20" className="text-red-400" />
          </button>
        </div>
      </div>
      <div className="border-t-[1px]  border-gray-300  mb-2 mx-5"></div>
    </>
  );
};

export default WantToWatchCard;
