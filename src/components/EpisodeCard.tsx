import { Episode } from "../graphql/__generated__/graphql";

const EpisodeCard = ({ episode }: { episode: Episode }) => {
  return (
    <div className="border rounded border-gray-200 p-4">
      <p>{episode.name}</p>
      <p>{episode.air_date}</p>
      <p>{episode.episode}</p>
    </div>
  );
};

export default EpisodeCard;
