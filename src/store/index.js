import Vue from "vue";
import Vuex from "vuex";
import aboutMe from "./aboutme";
import headers from "./headers";
import skills from "./skills";
import education from "./education";
import experience from "./experience";
import navigations from "./navigation";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "en"
  },
  getters: {
    lang(state) {
      return state.lang;
    },
    aboutMe(state) {
      return aboutMe[state.lang];
    },
    headers(state) {
      return headers[state.lang];
    },
    skills(state) {
      return skills[state.lang];
    },
    education(state) {
      return education[state.lang];
    },
    experience(state) {
      return experience[state.lang];
    },
    navigations(state) {
      return navigations[state.lang];
    }
  },
  mutations: {
    changeLang(state) {
      const newLang = state.lang === "ru" ? "en" : "ru";
      state.lang = newLang;
    }
  },
  actions: {},
  modules: {}
});
