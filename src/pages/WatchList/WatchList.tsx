import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import WantToWatchCard from "../../components/WantToWatchCard";

const WatchList = () => {
  const watchList = useSelector(
    (state: RootState) => state.movieWatchList.watchList
  );
  const wantToWatchList = useSelector(
    (state: RootState) => state.movieWatchList.wantToWatch
  );
  return (
    <div className="my-5">
      <div className="mb-5 flex justify-center items-baseline">
        <h3 className="text-2xl font-bold mr-2  border-l-4 border-yellow-400 pl-1">
          WatchList
        </h3>
        <div className="border-b-[1px]  border-gray-300 w-full"></div>
      </div>

      <div className="grid md:grid-cols-3 border border-gray-300 rounded  min-h-[calc(100vh-190px)]">
        <div className="border-r-[1px] border-gray-300">
          <div className="">
            <h3 className="text-xl font-semibold p-5 pb-2">Want To Watch</h3>
            <div className="border-t-[1px]  border-gray-300 mb-2"></div>
          </div>
          <div className="">
            {wantToWatchList.length === 0 && (
              <p className="text-center mt-3">Want to Watch List is empty!</p>
            )}
            {wantToWatchList.length > 0 &&
              wantToWatchList.map((movie) => (
                <WantToWatchCard key={movie.id} movie={movie} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
