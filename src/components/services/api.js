import axios from "axios";

const API_KEY = "9fae0fdf266213c68361ca578a95b948";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchApiMovies = (page) => {
  return axios("/trending/movie/day", {
    params: {
      api_key: API_KEY,
      page,
    },
  });
};
