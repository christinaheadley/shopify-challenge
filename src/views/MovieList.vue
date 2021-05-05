<template>
  <div class="movies">
    <!-- <img alt="Shopify logo" src="../assets/ctypng_shopify_official_logo.png" /> -->
    <h1>The Shoppies: Movie awards for entrepreneurs</h1>
    <!-- <p>{{ addNomination() }}</p> -->
  </div>
</template>

<style></style>

<script>
import MovieService from "@/services/MovieService.js";

export default {
  //   mixins: [Vue2Filters.mixin],
  name: "MovieList",
  data() {
    return {
      // movie: {},
      movies: null,
      // nominations: [],
    };
  },
  created() {
    MovieService.getMovies()
      .then((response) => {
        console.log("movies:", response.data);
        this.movies = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  // methods: {
  //   const fetchMovies = function() {

  //   }
  //   addNomination: function () {
  //     axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=").then((response) => {
  //       console.log(response.data);
  //       this.nominations = response.data;
  //     });
  //   },
  // },
};
</script>
