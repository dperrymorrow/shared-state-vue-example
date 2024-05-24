import { reactive, computed } from "vue";

const state = reactive({
  hobby: "Hike",
  fruit: "Apple",
  fruitOptions: ["Banana", "Apple", "Pear", "Watermelon"],

  description: computed(() => {
    return `I like eating ${state.fruit}s & ${state.hobby}`;
  }),
});

export default state;
