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
          <input v-model="price" type="number" min="1" />
          <button>Add to Cart -${{ addPrice(currentItem.price) }}</button>
        </div>
        <fieldset v-if="currentItem.options">
          <legend><h3>Options</h3></legend>
          <div v-for="option in currentItem.options" :key="option.id">
            <input type="checkbox" name="addOne" :id="option" :value="option" />
            <label for="addOne">{{ option }}</label>
          </div>
        </fieldset>
        <fieldset>
          <legend><h3>Add Ons</h3></legend>
          <div v-for="addOne in currentItem.addOns" :key="addOne.id">
            <input type="checkbox" name="addOne" :id="addOne" :value="addOne" />
            <label for="addOne">{{ addOne }}</label>
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id,
      price: 1
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
      return Number(this.price) == 0
        ? currentPrice
        : (Number(this.price) * currentPrice).toFixed(2);
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
</style>
