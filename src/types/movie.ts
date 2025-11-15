export interface Movie {
  id: number;
  title: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  overview?: string;
  release_date?: string;
  vote_average?: number;
  genre_ids?: number[];
}

export interface MovieDetail extends Movie {
  genres: Array<{
    id: number;
    name: string;
  }>;
  runtime?: number;
  tagline?: string;
  status?: string;
  budget?: number;
  revenue?: number;
  imdb_id?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ApiResponse<T> {
  results: T[];
  page: number;
  total_pages: number;
  total_results: number;
}