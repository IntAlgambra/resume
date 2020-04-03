<template>
  <div id="app">
    <Navigation :lang="lang" @changeLang="onChangeLang" :navs="navigations" />
    <AboutMe :content="aboutMe" id="about-me" />
    <PartHeader :header="headers.skills" id="skills" />
    <SkillsContainer :skills="skills" />
    <PartHeader :header="headers.education" id="education" />
    <EducationContainer :education="education" />
    <PartHeader :header="headers.experience" id="experience" />
    <ExperienceContainer :experience="experience" />
  </div>
</template>

<script>
document.title = "Ivan Feoktistov";

import AboutMe from "./components/AboutMe";
import Navigation from "./components/Navigation";
import PartHeader from "./components/PartHeader";
import SkillsContainer from "./components/SkillsContainer";
import EducationContainer from "./components/EducationContainer";
import ExperienceContainer from "./components/ExperienceContainer";

import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    AboutMe,
    Navigation,
    PartHeader,
    SkillsContainer,
    EducationContainer,
    ExperienceContainer
  },
  computed: {
    ...mapGetters([
      "aboutMe",
      "lang",
      "headers",
      "skills",
      "education",
      "experience",
      "navigations"
    ])
  },
  methods: {
    ...mapMutations(["changeLang"]),
    onChangeLang() {
      this.changeLang();
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 20px;
}
</style>
