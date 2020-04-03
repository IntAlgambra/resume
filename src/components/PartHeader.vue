<template>
  <div class="part-header center-align">
    <h5>{{ header }}:</h5>
  </div>
</template>

<script>
export default {
  name: "PartHeader",
  props: {
    header: String
  }
};
</script>

<style scoped>
.part-header {
  margin-top: 30px;
  margin-bottom: 30px;
}
.part-header > h5 {
  text-transform: uppercase;
}
</style>
