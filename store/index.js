import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  fooddata: [],
  cart: []
});

export const getters = {
  totalPrice: state => {
    if (!state.cart.length) return 0;
    return state.cart.reduce((ac, next) => ac + Number(next.price), 0);
  },
  getCounts: state => {
    if (state.cart.count < 1) return;
    return state.cart.reduce((ac, next) => ac + Number(next.count), 0);
  }
};

export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
  },
  addToCart(state, formOutPut) {
    formOutPut.id = uuidv4();
    state.cart.push(formOutPut);
  }
};

export const actions = {
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) return;
    try {
      await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY
          }
        }
      )
        .then(res => res.json())
        .then(data => {
          commit("updateFoodData", data);
        });
    } catch (err) {
      console.error(err);
    }
  }
};
