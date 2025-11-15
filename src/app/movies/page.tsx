import Header from '@/components/Header';
import MovieRow from '@/components/MovieRow';
import { fetchPopularMovies, fetchNowPlayingMovies, fetchTopRatedMovies } from '@/lib/tmdb';

export default async function MoviesPage() {
  try {
    // Fetch data from TMDB API
    const [popularMovies, nowPlayingMovies, topRatedMovies] = await Promise.all([
      fetchPopularMovies(),
      fetchNowPlayingMovies(),
      fetchTopRatedMovies()
    ]);

    return (
      <div className="min-h-screen bg-black">
        <Header />
        
        <main className="pt-24 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
              All Movies
            </h1>
            
            {/* All Movie Categories */}
            <MovieRow
              movies={nowPlayingMovies.results}
              categoryTitle="Now Playing"
            />
            
            <MovieRow
              movies={popularMovies.results}
              categoryTitle="Popular"
            />
            
            <MovieRow
              movies={topRatedMovies.results}
              categoryTitle="Top Rated"
            />
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching movies:', error);
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Unable to load movies</h1>
          <p className="text-gray-400">Please check your internet connection and try again.</p>
        </div>
      </div>
    );
  }
}