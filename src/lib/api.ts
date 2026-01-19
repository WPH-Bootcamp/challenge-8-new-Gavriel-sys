import axios from "axios";

// 1. Interface Movie
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_READ_ACCESS_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 2. Fungsi Popular Movies
export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await api.get("/movie/popular");
  return response.data.results;
};

// 3. Fungsi New Releases
export const getNewReleases = async ({ pageParam = 1 }) => {
  const response = await api.get(`/movie/now_playing?page=${pageParam}`);
  return response.data;
};
