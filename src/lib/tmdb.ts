import { ApiResponse, Movie, MovieDetail } from '@/types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

// Mock data for fallback when API is not available
const mockMovies: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    poster_path: "/q6y0Go1tsGEsmtFrydoPa3Lk0QG.jpg",
    backdrop_path: "/xBKGJQsAIew3B6xEGlDj3n9WZA.jpg",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    release_date: "1994-09-23",
    vote_average: 8.7,
    genre_ids: [18, 80]
  },
  {
    id: 2,
    title: "The Godfather",
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop_path: "/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    release_date: "1972-03-24",
    vote_average: 8.5,
    genre_ids: [18, 80]
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster_path: "/1X7ADY1Q9436BjHYv4t3qQzAmE.jpg",
    backdrop_path: "/6fA9neX2cXw9s2v1VtL1C3xkXqY.jpg",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    release_date: "2008-07-18",
    vote_average: 8.4,
    genre_ids: [18, 28, 80]
  },
  {
    id: 4,
    title: "Pulp Fiction",
    poster_path: "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop_path: "/suaEOtk1N1sg3z4T8JHrpI8mlVO.jpg",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    release_date: "1994-10-14",
    vote_average: 8.3,
    genre_ids: [18, 80, 53]
  },
  {
    id: 5,
    title: "Forrest Gump",
    poster_path: "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    backdrop_path: "/z1j34v5kFV7CehlVWGUQ6sUYlMQ.jpg",
    overview: "The presidencies of Kennedy and Johnson, the Vietnam War, and the Watergate scandal unfold from the perspective of an Alabama man.",
    release_date: "1994-07-06",
    vote_average: 8.2,
    genre_ids: [18, 10749]
  },
  {
    id: 6,
    title: "Inception",
    poster_path: "/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31gESy.jpg",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
    release_date: "2010-07-16",
    vote_average: 8.1,
    genre_ids: [28, 878, 80]
  }
];

function createMockResponse<T>(data: T[]): ApiResponse<T> {
  return {
    results: data,
    page: 1,
    total_pages: 1,
    total_results: data.length
  };
}

async function fetchWithFallback<T>(url: string, fallbackData: T[]): Promise<ApiResponse<T>> {
  // If no API key, return mock data immediately
  if (!API_KEY) {
    console.warn('No TMDB API key found, using mock data');
    return createMockResponse(fallbackData);
  }

  try {
    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'accept': 'application/json'
      }
    });
    
    if (!res.ok) {
      console.warn(`API request failed: ${res.status}, using mock data`);
      return createMockResponse(fallbackData);
    }
    
    return res.json();
  } catch (error) {
    console.warn('API request error, using mock data:', error);
    return createMockResponse(fallbackData);
  }
}

export async function fetchPopularMovies(): Promise<ApiResponse<Movie>> {
  const url = `${BASE_URL}/movie/popular`;
  return fetchWithFallback(url, mockMovies);
}

export async function fetchNowPlayingMovies(): Promise<ApiResponse<Movie>> {
  const url = `${BASE_URL}/movie/now_playing`;
  return fetchWithFallback(url, mockMovies.slice(0, 4));
}

export async function fetchTopRatedMovies(): Promise<ApiResponse<Movie>> {
  const url = `${BASE_URL}/movie/top_rated`;
  return fetchWithFallback(url, mockMovies.slice(2, 6));
}

export async function fetchMovieById(id: string): Promise<MovieDetail> {
  // If no API key, return mock movie detail
  if (!API_KEY) {
    const movie = mockMovies.find(m => m.id === parseInt(id)) || mockMovies[0];
    return {
      ...movie,
      genres: [
        { id: 18, name: "Drama" },
        { id: 80, name: "Crime" }
      ],
      runtime: 142,
      tagline: "Fear can hold you prisoner. Hope can set you free.",
      status: "Released",
      budget: 25000000,
      revenue: 28341469,
      imdb_id: "tt0111161"
    };
  }

  try {
    const res = await fetch(`${BASE_URL}/movie/${id}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'accept': 'application/json'
      }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch movie with id: ${id}`);
    }
    
    return res.json();
  } catch (error) {
    console.warn('Failed to fetch movie details, using mock data:', error);
    const movie = mockMovies.find(m => m.id === parseInt(id)) || mockMovies[0];
    return {
      ...movie,
      genres: [
        { id: 18, name: "Drama" },
        { id: 80, name: "Crime" }
      ],
      runtime: 142,
      tagline: "Fear can hold you prisoner. Hope can set you free.",
      status: "Released",
      budget: 25000000,
      revenue: 28341469,
      imdb_id: "tt0111161"
    };
  }
}

export function getImageUrl(path: string | null, size: 'w342' | 'w500' | 'w780' | 'original' = 'w342'): string {
  if (!path) {
    // Return a placeholder image URL
    return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDMwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjMzMzIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5IiBmb250LXNpemU9IjE2Ij5ObyBJbWFnZTwvdGV4dD4KPHN2Zz4K';
  }
  return `https://image.tmdb.org/t/p/${size}${path}`;
}