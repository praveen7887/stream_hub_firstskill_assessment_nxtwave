'use client';

import { Movie } from '@/types/movie';
import MovieCard from './MovieCard';

interface MovieRowProps {
  movies: Movie[];
  categoryTitle: string;
}

export default function MovieRow({ movies, categoryTitle }: MovieRowProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 px-4">
        {categoryTitle}
      </h2>
      
      <div className="group relative">
        {/* Scroll buttons for desktop */}
        <div className="hidden md:block">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4"
            onClick={() => {
              const container = document.getElementById(`scroll-container-${categoryTitle.replace(/\s+/g, '-').toLowerCase()}`);
              if (container) {
                container.scrollBy({ left: -300, behavior: 'smooth' });
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4"
            onClick={() => {
              const container = document.getElementById(`scroll-container-${categoryTitle.replace(/\s+/g, '-').toLowerCase()}`);
              if (container) {
                container.scrollBy({ left: 300, behavior: 'smooth' });
              }
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Movie cards container */}
        <div
          id={`scroll-container-${categoryTitle.replace(/\s+/g, '-').toLowerCase()}`}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-4 pb-4 scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: {
              display: 'none'
            }
          }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-none w-36 sm:w-40 md:w-44 lg:w-48">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}