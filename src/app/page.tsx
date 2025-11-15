import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import MovieRow from '@/components/MovieRow';
import { fetchPopularMovies, fetchNowPlayingMovies, fetchTopRatedMovies } from '@/lib/tmdb';

export default async function Home() {
  try {
    console.log('Starting to fetch movies...');
    
    // Fetch data from TMDB API
    const [popularMovies, nowPlayingMovies, topRatedMovies] = await Promise.all([
      fetchPopularMovies(),
      fetchNowPlayingMovies(),
      fetchTopRatedMovies()
    ]);

    console.log('Movies fetched successfully:', {
      popular: popularMovies.results.length,
      nowPlaying: nowPlayingMovies.results.length,
      topRated: topRatedMovies.results.length
    });

    // Get the first popular movie for hero banner
    const heroMovie = popularMovies.results[0];
    console.log('Hero movie:', heroMovie?.title);
    console.log('Hero poster path:', heroMovie?.poster_path);

    return (
      <div className="min-h-screen bg-black">
        <Header />
        
        <main className="pt-16">
          {/* Hero Banner */}
          {heroMovie && <HeroBanner movie={heroMovie} />}
          
          {/* Movie Rows */}
          <div className="px-4 md:px-8 py-8">
            {/* Now Playing - excluding hero movie if it's in this list */}
            <MovieRow
              movies={nowPlayingMovies.results.filter(movie => movie.id !== heroMovie?.id)}
              categoryTitle="Now Playing"
            />
            
            {/* Popular Movies - excluding hero movie */}
            <MovieRow
              movies={popularMovies.results.filter(movie => movie.id !== heroMovie?.id)}
              categoryTitle="Popular"
            />
            
            {/* Top Rated */}
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
          <p className="text-gray-500 text-sm mt-2">Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
        </div>
      </div>
    );
  }
}