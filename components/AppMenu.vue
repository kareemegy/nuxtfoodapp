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
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import AppLogo from "@/components/AppLogo.vue";

export default {
  components: {
    AppLogo
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
