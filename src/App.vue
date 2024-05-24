<template>
  <main class="container">
    <article>
      <header>
        Your description: <code>{{ state.description }}</code>
      </header>
      <survey-form />
      <footer>
        <results />
      </footer>
    </article>
  </main>
</template>

<script>
import Results from "./Results.vue";
import SurveyForm from "./SurveyForm.vue";
import state from "./state.js";

export default {
  components: { SurveyForm, Results },
  data() {
    return { state };
  },
};
</script>

<style scoped>
.container {
  margin-top: 2rem;
}
</style>
