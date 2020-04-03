<template>
  <div class="col s12 m6">
    <div class="card z-depth-3">
      <div class="card-header">
        <div class="row valign-wrapper">
          <img class="responsive-img col s2" :src="content.logo" alt="logo" />
          <span class="card-title col s9">{{ content.header }}</span>
        </div>
      </div>
      <div class="card-content">
        <ul class="collection">
          <li
            class="collection-item"
            v-for="(item, index) in content.content"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    content: Object
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
