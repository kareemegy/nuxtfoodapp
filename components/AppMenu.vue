<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/"><AppLogo /></nuxt-link>
      </li>
      <li>
        <nuxt-link exact to="/restaurants">Restaurants</nuxt-link>
      </li>
    </ul>
    <nuxt-link to="/cart">Cart <span v-if="getCounts" class="smallnum">{{getCounts}}</span></nuxt-link>
  </nav>
</template>

<script>
import AppLogo from "@/components/AppLogo.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    AppLogo
  },
  computed: {
    ...mapGetters(["getCounts"])
  }
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 450px) {
  nav {
    justify-content: center;
    padding: 5px;
  }
}
</style>
