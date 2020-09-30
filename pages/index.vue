<template>
  <main class="container">
    <AppHeader />
    <AppRestaurants />
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppRestaurants from "@/components/AppRestaurants.vue";

export default {
  components: {
    AppHeader,
    AppRestaurants
  }
};
</script>

<style></style>
