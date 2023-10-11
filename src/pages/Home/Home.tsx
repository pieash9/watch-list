import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "../../graphql/queries";
import Loading from "../../components/Loading";
import ErrorPage from "../Shared/ErrorPage";
import EpisodeCard from "../../components/EpisodeCard";
import { Episode } from "../../graphql/__generated__/graphql";
import { useState, useEffect } from "react";

const Home = () => {
  const [posterImages, setPosterImages] = useState<string[] | undefined>();
  const { data, loading, error } = useQuery(GET_EPISODES);

  useEffect(() => {
    const fetchPosterImage = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_MOVIE_API);
        if (res.ok) {
          const movieData = await res.json();
          const episodePosters = movieData.Search.map(
            (movie: { Poster: string }) => movie.Poster
          );
          setPosterImages(episodePosters);
        } else {
          throw new Error("Failed to fetch poster images");
        }
      } catch (error) {
        console.error("Error fetching poster images:", error);
      }
    };

    fetchPosterImage();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <div className="mt-5 mb-10">
      <div className="mb-5 flex justify-center items-baseline">
        <h3 className="text-2xl font-bold mr-2 border-l-4 border-yellow-400 pl-1">
          Movies
        </h3>
        <div className="border-b-[1px]  border-gray-300 w-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.episodes?.results &&
          data?.episodes?.results
            .slice(0, 10)
            .map((episode, index: number) => (
              <EpisodeCard
                key={episode?.name}
                episode={episode as Episode}
                posterImage={posterImages?.[index]}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
