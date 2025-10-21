// import './assets/main.css'
import "./styles.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(router).mount("#app");
