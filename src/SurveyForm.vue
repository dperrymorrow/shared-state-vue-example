<template>
  <form>
    <label>
      Favorite Hobby?
      <input placeholder="Favorite Hobby" v-model="state.hobby" />
    </label>

    <label>
      Favorite Fruit?
      <select v-model="state.fruit">
        <option v-for="fruit in fruits" :key="fruit">{{ fruit }}</option>
      </select>
    </label>
  </form>
</template>

<script>
import state from "./state.js";

export default {
  name: "SurveyForm",

  data() {
    return {
      state,
      fruits: ["Banana", "Apple", "Pear", "Watermelon"],
    };
  },
};
</script>
