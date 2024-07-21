import { Suspense } from "react";
import MovieVideos from "../../../../components/movie-videos";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieCredits from "../../../../components/movie-credits";
import MovieNavigation from "../../../../components/movie-navigation";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetails({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <div>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
          <MovieNavigation id={id} />
        </Suspense>
      </div>
    </div>
  );
}
