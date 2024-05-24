<template>
  <table>
    <thead>
      <tr>
        <th>Favorite Hobby</th>
        <th>Favorite Fruit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ state.hobby }}</td>
        <td>{{ state.fruit }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import state from "./state.js";

export default {
  name: "Results",
  data() {
    return { state };
  },
};
</script>
