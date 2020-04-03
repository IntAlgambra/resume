<template>
  <div class="container">
    <nav class="white blue-text text-darken-2 z-depth-3">
      <div class="nav-wrapper blue-text text-darken-2">
        <a
          href="#"
          class="brand-logo right teal-text change-lang"
          @click="changeLang"
          >{{ langLabel }}</a
        >
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><font-awesome-icon icon="bars" size="2x" color="#009688" />></a
        >
        <ul
          id="nav-mobile"
          class="left hide-on-med-and-down blue-text text-darken-2"
        >
          <li>
            <a href="#about-me" class="black-text">{{ navs.aboutMe }}</a>
          </li>
          <li>
            <a href="#skills" class="black-text">{{ navs.skills }}</a>
          </li>
          <li>
            <a href="#education" class="black-text">{{ navs.education }}</a>
          </li>
          <li>
            <a href="#experience" class="black-text">{{ navs.experience }}</a>
          </li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
      <li>
        <a href="#about-me" class="black-text">{{ navs.aboutMe }}</a>
      </li>
      <li>
        <a href="#skills" class="black-text">{{ navs.skills }}</a>
      </li>
      <li>
        <a href="#education" class="black-text">{{ navs.education }}</a>
      </li>
      <li>
        <a href="#experience" class="black-text">{{ navs.experience }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    lang: String,
    navs: Object
  },
  computed: {
    langLabel() {
      return this.lang === "ru" ? "en" : "ru";
    }
  },
  methods: {
    changeLang() {
      this.$emit("changeLang");
    }
  }
};
</script>

<style scoped>
.change-lang {
  margin-right: 30px;
}

.container {
  margin-bottom: 20px;
}
.change-lang-img {
  height: 64px;
}
.sidenav-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
