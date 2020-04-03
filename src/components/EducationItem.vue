<template>
  <div class="card z-depth-3">
    <div class="card-header">
      <div class="row valign-wrapper">
        <img class="responsive-img col s2" :src="education.logo" alt="logo" />
        <div class="col s10">
          <h5>{{ education.spec }}</h5>
          <span>{{ education.organisation }}</span>
        </div>
      </div>
    </div>
    <div class="card-content">
      <p>{{ education.content }}</p>
      <ul class="collection" v-if="education.list">
        <li
          class="collection-item"
          v-for="(item, index) in education.list"
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
  name: "EducationItem",
  props: {
    education: Object
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
