import Header from '@/components/Header';
import { fetchMovieById } from '@/lib/tmdb';
import { getImageUrl } from '@/lib/tmdb';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface MoviePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MoviePage({ params }: MoviePageProps) {
  try {
    const { id } = await params;
    const movie = await fetchMovieById(id);

    return (
      <div className="min-h-screen bg-black">
        <Header />
        
        <main className="pt-16">
          {/* Backdrop */}
          <div className="relative h-[50vh] min-h-[300px]">
            <Image
              src={getImageUrl(movie.backdrop_path, 'original')}
              alt={movie.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>
          
          {/* Movie Details */}
          <div className="container mx-auto px-4 md:px-8 -mt-32 relative z-10">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Poster */}
              <div className="flex-shrink-0">
                <div className="relative w-48 md:w-64 lg:w-80 aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={getImageUrl(movie.poster_path, 'w500')}
                    alt={movie.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                  />
                </div>
              </div>
              
              {/* Information */}
              <div className="flex-1 text-white">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  {movie.title}
                </h1>
                
                {movie.tagline && (
                  <p className="text-xl text-gray-300 italic mb-4">
                    {movie.tagline}
                  </p>
                )}
                
                {/* Metadata */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {movie.release_date && (
                    <span className="text-gray-300">
                      {new Date(movie.release_date).getFullYear()}
                    </span>
                  )}
                  
                  {movie.runtime && (
                    <span className="text-gray-300">
                      {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
                    </span>
                  )}
                  
                  {movie.vote_average && (
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-white font-semibold">
                        {movie.vote_average.toFixed(1)}
                      </span>
                      <span className="text-gray-400">/10</span>
                    </div>
                  )}
                  
                  {movie.status && (
                    <Badge variant="secondary">
                      {movie.status}
                    </Badge>
                  )}
                </div>
                
                {/* Genres */}
                {movie.genres && movie.genres.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {movie.genres.map((genre) => (
                      <Badge key={genre.id} variant="outline" className="text-gray-300 border-gray-600">
                        {genre.name}
                      </Badge>
                    ))}
                  </div>
                )}
                
                {/* Overview */}
                {movie.overview && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-3">Overview</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {movie.overview}
                    </p>
                  </div>
                )}
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                    ▶ Play
                  </Button>
                  
                  <Button size="lg" variant="secondary" className="bg-gray-600/70 text-white hover:bg-gray-600/80">
                    + Add to List
                  </Button>
                  
                  <Link href="/">
                    <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                      ← Back to Home
                    </Button>
                  </Link>
                </div>
                
                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    {movie.budget && movie.budget > 0 && (
                      <div>
                        <span className="text-gray-400">Budget:</span>
                        <span className="text-white ml-2">
                          ${movie.budget.toLocaleString()}
                        </span>
                      </div>
                    )}
                    
                    {movie.revenue && movie.revenue > 0 && (
                      <div>
                        <span className="text-gray-400">Revenue:</span>
                        <span className="text-white ml-2">
                          ${movie.revenue.toLocaleString()}
                        </span>
                      </div>
                    )}
                    
                    {movie.imdb_id && (
                      <div>
                        <span className="text-gray-400">IMDB ID:</span>
                        <a
                          href={`https://www.imdb.com/title/${movie.imdb_id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white ml-2 hover:underline"
                        >
                          {movie.imdb_id}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Movie not found</h1>
          <p className="text-gray-400 mb-6">Unable to load movie details.</p>
          <Link href="/">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}