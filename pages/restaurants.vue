<template>
  <div class="container restaurants">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <AppSelelct @change="selectedRestaurant = $event" />
    </div>
    <AppRestaurants :datasource="filterResturants" />
  </div>
</template>

<script>
import AppRestaurants from "@/components/AppRestaurants.vue";
import AppSelelct from "@/components/AppSelelct.vue";
import { mapState } from "vuex";

export default {
  components: {
    AppSelelct,
    AppRestaurants
  },
  data() {
    return {
      selectedRestaurant: ""
    };
  },
  computed: {
    ...mapState(["fooddata"]),
    filterResturants() {
      if (this.selectedRestaurant) {
        return this.fooddata.filter(el => {
          let name = el.name.toLowerCase();
          return name.includes(this.selectedRestaurant);
        });
      }
      return this.fooddata;
    }
  }
};
</script>

<style lang="scss" scoped>

.restaurantheading{
  text-align: center;
    margin-top: 10px;
}

</style>
