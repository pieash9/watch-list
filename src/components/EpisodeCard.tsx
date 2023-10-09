import { Episode } from "../graphql/__generated__/graphql";

type PropsType = {
  episode: Episode;
  posterImage: string | undefined;
};

const EpisodeCard = ({ episode, posterImage }: PropsType) => {
  return (
    <div className="border rounded border-gray-300/80 p-2 hover:shadow-xl duration-300 relative h-[28.5rem] overflow-hidden">
      <img
        src={posterImage}
        alt="poster image"
        className="rounded h-72 w-full object-cover"
      />
      <h3 className="text-xl font-semibold mt-2">{episode.name}</h3>
      <p className="my-1">
        Released: <span className="opacity-70">{episode.air_date}</span>
      </p>
      <p>
        Episode: <span className="opacity-70">{episode.episode}</span>
      </p>
      <div className="absolute flex justify-between  bottom-2 left-2 right-2">
        <button className="btn btn-xs rounded-sm btn-neutral capitalize w-">
          Want to watch
        </button>
        <button className="btn btn-xs rounded-sm btn-neutral capitalize w-28 ">
          Watchlist +
        </button>
      </div>
    </div>
  );
};

export default EpisodeCard;
