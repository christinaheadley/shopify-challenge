import { createRouter, createWebHistory } from "vue-router";
import MovieList from "../views/MovieList.vue";
import MovieDetails from "../views/MovieDetails.vue";

const routes = [
  {
    path: "/",
    name: "MovieList",
    component: MovieList,
  },
  {
    path: "/movie/:title",
    name: "MovieDetails",
    component: MovieDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
