import { Transition, Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { MdOutlineClose } from "react-icons/md";
import { MovieModalType } from "../interface/Interfaces";
import { useDispatch, useSelector } from "react-redux";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import {
  addToWatchList,
  removeFromWatchList,
  addToWantToWatch,
  removeFromWantToWatch,
} from "../store/slice/watchlistSlice";
import { RootState } from "../store/store";

const EpisodeDetailsModal = ({
  isOpen,
  setIsOpen,
  episode,
  image,
}: MovieModalType) => {
  // close modal
  const closeModal = () => {
    setIsOpen(false);
  };

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
          image: image,
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
          image: image,
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
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                <div
                  onClick={closeModal}
                  className="btn btn-ghost btn-circle btn-sm absolute top-2 right-2 text-gray-700 "
                >
                  <MdOutlineClose size={24} className="font-semibold" />
                </div>

                <div className="mt-5 dark:text-gray-700 md:flex gap-8 items-center w-full">
                  <div className="md:w-1/2">
                    <img
                      src={image}
                      className="h-96 rounded w-full"
                      alt={episode.name}
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mt-2">
                      {episode?.name}
                    </h3>
                    <p className="my-1 ">
                      Released:
                      <span className=" text-black/70 ml-1">
                        {episode?.air_date}
                      </span>
                    </p>
                    <p>
                      Episode:
                      <span className=" text-black/70 ml-1">
                        {episode?.episode}
                      </span>
                    </p>
                    <p>
                      Characters:
                      <span className=" text-black/70 ml-1">
                        {episode?.characters?.slice(0, 12).map((character) => (
                          <span key={character.name}>{character.name}, </span>
                        ))}
                      </span>
                    </p>

                    <div className=" md:flex gap-4 mt-4 ">
                      <button
                        data-tip={`${
                          isInWantToWatchList ? "Remove" : "Add"
                        }  Want To Watch`}
                        onClick={handleAddToWantToWatch}
                        className={`btn btn-sm ${
                          isInWantToWatchList
                            ? "dark:text-white"
                            : "!btn-outline"
                        }  rounded-sm btn-neutral dark:text-black capitalize md:w-36 w-full tooltip tooltip-top mb-3 md:mb-0`}
                      >
                        <p
                          className={`${
                            isInWantToWatchList
                              ? "dark:text-white"
                              : "text-black "
                          } flex items-center gap-1 justify-center `}
                        >
                          <span>Want To Watch</span>
                          {isInWantToWatchList ? (
                            <FaBookmark />
                          ) : (
                            <FaRegBookmark />
                          )}
                        </p>
                      </button>
                      <button
                        data-tip={`${
                          isMovieInWatchList ? "Remove" : "Add"
                        }  Watch List`}
                        onClick={handleAddToWatchList}
                        className={`btn btn-sm  ${
                          isMovieInWatchList ? "dark:text-white" : "btn-outline"
                        }  rounded-sm btn-neutral dark:text-black capitalize md:w-36 w-full tooltip tooltip-top`}
                      >
                        Watched List +
                      </button>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EpisodeDetailsModal;
