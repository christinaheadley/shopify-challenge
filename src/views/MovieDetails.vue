<template>
  <div v-if="movie">
    <!-- v-if added so null isn't returned before api call finishes -->
    <!-- <h1>{{ movie.title }}</h1>
    <p>{{ movie.year }} on {{ movie.released }} @ {{ movie.language }}</p>
    <p>{{ movie.plot }}</p> -->
  </div>
</template>

<script>
import MovieService from "../services/MovieService.js";
export default {
  props: ["title"],
  data() {
    return {
      movie: null,
    };
  },
  created() {
    MovieService.getMovie(this.title)
      .then((response) => {
        // console.log("movies:", response.data);
        this.movie = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
