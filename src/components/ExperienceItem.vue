<template>
  <div class="card z-depth-3">
    <div class="card-header">
      <div class="row valign-wrapper">
        <img class="responsive-img col s2" :src="experience.logo" alt="logo" />
        <div class="col s10">
          <h5>{{ experience.name }}</h5>
          <span>{{ experience.post }}</span>
          <br />
          <span>{{ experience.date }}</span>
        </div>
      </div>
    </div>
    <div class="card-content">
      <ul class="collection">
        <li
          class="collection-item"
          v-for="(item, index) in experience.functions"
          :key="index"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExperienceItem",
  props: {
    experience: Object
  }
};
</script>

<style scoped>
.card-header {
  border-bottom: 1px solid darkgray;
  padding: 24px;
}

.card-header > .row {
  margin: 0;
}

.card-title {
  margin: auto;
}

.card-content > ul {
  margin: 0;
  border: 0;
}
</style>
