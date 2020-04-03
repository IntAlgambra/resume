import Vue from "vue";
import App from "./App.vue";
import store from "./store";

//importing materialize styles and javascript
import "materialize-css/dist/css/materialize.css";
import { Sidenav } from "materialize-css";

//importing fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileDownload, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTelegramPlane,
  faGithub,
  faLinkedinIn,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faFileDownload,
  faBars,
  faTelegramPlane,
  faGithub,
  faLinkedinIn,
  faWhatsapp
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

//initializing materialize mobile navigation
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  Sidenav.init(elems);
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
