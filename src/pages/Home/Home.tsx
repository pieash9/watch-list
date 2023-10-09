import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../../graphql/queries";
import Loading from "../../components/Loading";
import ErrorPage from "../Shared/ErrorPage";
import EpisodeCard from "../../components/EpisodeCard";
import { Episode } from "../../graphql/__generated__/graphql";

const Home = () => {
  const { data, loading, error } = useQuery(GET_EPISODES);
  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <div className="my-10">
      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data?.episodes?.results &&
          data?.episodes?.results.map((episode) => (
            <EpisodeCard key={episode?.name} episode={episode as Episode} />
          ))}
      </div>
    </div>
  );
};

export default Home;
