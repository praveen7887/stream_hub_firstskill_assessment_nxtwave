import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/types/movie';
import { getImageUrl } from '@/lib/tmdb';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105 hover:z-10">
        <div className="aspect-[2/3] relative">
          <Image
            src={getImageUrl(movie.poster_path, 'w342')}
            alt={movie.title || 'Movie poster'}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
            sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, 300px"
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center p-4">
              <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                {movie.title}
              </h3>
              {movie.vote_average && (
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-white text-sm">
                    {movie.vote_average.toFixed(1)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Title below poster */}
      <h3 className="mt-2 text-sm text-gray-300 line-clamp-2 px-1">
        {movie.title}
      </h3>
    </Link>
  );
}