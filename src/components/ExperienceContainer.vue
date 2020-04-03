<template>
  <div class="container">
    <ExperienceItem
      v-for="(content, key) in experience"
      :key="key"
      :experience="content"
    />
  </div>
</template>

<script>
import ExperienceItem from "./ExperienceItem";
export default {
  name: "ExperienceContainer",
  components: {
    ExperienceItem
  },
  props: {
    experience: Object
  }
};
</script>

<style scoped></style>
