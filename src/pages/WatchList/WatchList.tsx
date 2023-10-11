import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import WantToWatchCard from "../../components/WantToWatchCard";
import WatchingCard from "../../components/WatchingCard";
import WatchedCard from "../../components/WatchedCard";

const WatchList = () => {
  const watchList = useSelector(
    (state: RootState) => state.movieWatchList.watchList
  );
  const wantToWatchList = useSelector(
    (state: RootState) => state.movieWatchList.wantToWatch
  );
  const watching = useSelector(
    (state: RootState) => state.movieWatchList.watching
  );
  return (
    <div className="my-5">
      <div className="mb-5 flex justify-center items-baseline">
        <h3 className="text-2xl font-bold mr-2  border-l-4 border-yellow-400 pl-1">
          WatchList
        </h3>
        <div className="border-b-[1px]  border-gray-300 w-full"></div>
      </div>

      <div className="grid grid-cols-1 gap-4  md:grid-cols-3 min-h-[calc(100vh-190px)]">
        <div className="md:border-r-[1px]  border border-gray-300 rounded">
          <div className="">
            <h3 className="text-xl font-semibold p-5 pb-2">
              Want To Watch ({wantToWatchList.length})
            </h3>
            <div className="border-t-[1px]  border-gray-300 mb-2"></div>
          </div>
          <div className="">
            {wantToWatchList.length === 0 && (
              <p className="text-center my-3">Want to Watch List is empty!</p>
            )}
            {wantToWatchList.length > 0 &&
              wantToWatchList.map((movie) => (
                <WantToWatchCard key={movie.id} movie={movie} />
              ))}
          </div>
        </div>
        <div className="md:border-r-[1px] border border-gray-300 rounded">
          <div className="">
            <h3 className="text-xl font-semibold p-5 pb-2">
              Watching Now ({watching.length})
            </h3>
            <div className="border-t-[1px]  border-gray-300 mb-2"></div>
          </div>
          <div className="">
            {watching.length === 0 && (
              <p className="text-center my-3">Watching List is empty!</p>
            )}
            {watching.length > 0 &&
              watching.map((movie) => (
                <WatchingCard key={movie.id} movie={movie} />
              ))}
          </div>
        </div>
        <div className="md:border-r-[1px] border border-gray-300 rounded">
          <div className="">
            <h3 className="text-xl font-semibold p-5 pb-2">
              Watched ({watchList.length})
            </h3>
            <div className="border-t-[1px]  border-gray-300 mb-2"></div>
          </div>
          <div className="">
            {watchList.length === 0 && (
              <p className="text-center my-3">Watched List is empty!</p>
            )}
            {watchList.length > 0 &&
              watchList.map((movie) => (
                <WatchedCard key={movie.id} movie={movie} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
