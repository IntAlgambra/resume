<template>
  <div class="container">
    <EducationItem
      v-for="(item, key) in education"
      :key="key"
      :education="item"
    />
  </div>
</template>

<script>
import EducationItem from "./EducationItem";
export default {
  name: "EducationContainer",
  components: {
    EducationItem
  },
  props: {
    education: Object
  }
};
</script>

<style scoped></style>
