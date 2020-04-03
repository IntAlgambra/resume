<template>
  <div class="container row">
    <Skill
      v-for="(content, header) in skills"
      :key="header"
      :content="content"
    />
  </div>
</template>

<script>
import Skill from "./Skill";

export default {
  name: "SkillsContainer",
  components: {
    Skill
  },
  props: {
    skills: Object
  }
};
</script>

<style scoped></style>
