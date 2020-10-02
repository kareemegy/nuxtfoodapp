<template>
  <main class="container">
    <AppHeader />
    <AppRestaurants :datasource="fooddata" />
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppRestaurants from "@/components/AppRestaurants.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppHeader,
    AppRestaurants
  },
  computed: {
    ...mapState(["fooddata"])
  }
};
</script>

<style></style>
