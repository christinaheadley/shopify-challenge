/* global axios */
const apiClient = axios.create({
  baseURL: "https://www.omdbapi.com/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getMovies() {
    return apiClient.get;
  },
  getMovie(title) {
    return apiClient.get("t=ram" + title);
  },
};
