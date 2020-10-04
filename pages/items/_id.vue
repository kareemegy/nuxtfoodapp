<template>
  <div class="container">
    <div class="grid">
      <div class="col-1">
        <img :src="'../' + currentItem.img" alt="img" />
        <h4>Description</h4>
        <p>{{ currentItem.description }}</p>
      </div>
      <div class="col-2">
        <h2>{{ currentItem.item }}</h2>
        <p>
          <strong>Price: ${{ currentItem.price }}</strong>
        </p>
        <div>
          <input v-model="count" type="number" min="1" />
          <button @click="addToCart(currentItem.price)">
            Add to Cart -${{ addPrice(currentItem.price) }}
          </button>
        </div>

        <AppToast v-if="cartSubmtted">
          Order submitted <br />
          Check out more
          <nuxt-link to="/restaurants">restaurants</nuxt-link> restaurants!
        </AppToast>

        <fieldset v-if="currentItem.options">
          <legend><h3>Options</h3></legend>
          <div v-for="option in currentItem.options" :key="option.id">
            <input
              v-model="itemOptions"
              type="radio"
              name="addOne"
              :id="option"
              :value="option"
            />
            <label for="addOne">{{ option }}</label>
          </div>
        </fieldset>

        <fieldset v-if="currentItem.addOns">
          <legend><h3>Add Ons</h3></legend>
          <div v-for="addOne in currentItem.addOns" :key="addOne.id">
            <input
              v-model="itemAddOns"
              type="checkbox"
              name="addOne"
              :id="addOne"
              :value="addOne"
            />
            <label for="addOne">{{ addOne }}</label>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AppToast from "@/components/AppToast";

export default {
  components: {
    AppToast
  },
  data() {
    return {
      id: this.$route.params.id,
      count: 1,
      itemOptions: "",
      itemAddOns: [],
      cartSubmtted: false
    };
  },
  computed: {
    ...mapState(["fooddata"]),
    currentItem() {
      let result;
      for (let i = 0; i < this.fooddata.length; i++) {
        for (let j = 0; j < this.fooddata[i].menu.length; j++) {
          if (this.fooddata[i].menu[j].id === this.id) {
            result = this.fooddata[i].menu[j];
            break;
          }
        }
      }
      console.log(result);
      return result;
    }
  },
  methods: {
    addPrice(currentPrice) {
      return Number(this.count) == 0
        ? Number(currentPrice)
        : Number((Number(this.count) * Number(currentPrice)).toFixed(2));
    },
    addToCart(currentPrice) {
      let formOutPut = {
        item: this.currentItem.item,
        options: this.itemOptions,
        addOns: this.itemAddOns,
        price: this.addPrice(currentPrice)
      };
      this.cartSubmtted = true;
      this.$store.commit("addToCart", formOutPut);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 100px auto;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.col-1 h4 {
  margin: 50px 0px 10px 0px;
  font-size: 1.4rem;
}

.col-1 img {
  width: 400px;
  height: 400px;
}
.col-2 {
  position: relative;
}
.col-2 p {
  font-size: 1.2rem;
  margin: 10px 0px 10px 0px;
}

.col-2 button {
  padding: 7px 10px 7px 10px !important;
  font-size: 1rem !important;
}

fieldset {
  padding: 16px;
  font-size: 1.2rem;
}

fieldset div {
  margin-bottom: 15px;
}
.toast {
  padding: 12px 12px !important;
  left: 280px !important;
  right: 0 !important;
}
</style>
