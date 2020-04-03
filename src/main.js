import Vue from "vue";
import App from "./App.vue";
import store from "./store";

//importing materialize styles and javascript
import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize";

//importing fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTelegramPlane,
  faGithub,
  faLinkedinIn,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faFileDownload,
  faTelegramPlane,
  faGithub,
  faLinkedinIn,
  faWhatsapp
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
