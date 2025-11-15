import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Movie } from '@/types/movie';
import { getImageUrl } from '@/lib/tmdb';

interface HeroBannerProps {
  movie: Movie;
}

export default function HeroBanner({ movie }: HeroBannerProps) {
  return (
    <section className="relative h-[70vh] min-h-[400px] md:h-[80vh]">
      <Image
        src={getImageUrl(movie.backdrop_path, 'original')}
        alt={movie.title || 'Movie backdrop'}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-2xl">
            {movie.title}
          </h1>
          
          {movie.overview && (
            <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-6 max-w-xl line-clamp-3">
              {movie.overview}
            </p>
          )}
          
          <div className="flex items-center space-x-4">
            <Link href={`/movie/${movie.id}`}>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Play
              </Button>
            </Link>
            
            <Link href={`/movie/${movie.id}`}>
              <Button size="lg" variant="secondary" className="bg-gray-600/70 text-white hover:bg-gray-600/80">
                More Info
              </Button>
            </Link>
          </div>
          
          {movie.vote_average && (
            <div className="mt-4 flex items-center space-x-2">
              <span className="text-yellow-400">★</span>
              <span className="text-white font-semibold">
                {movie.vote_average.toFixed(1)}
              </span>
              <span className="text-gray-300">/10</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}