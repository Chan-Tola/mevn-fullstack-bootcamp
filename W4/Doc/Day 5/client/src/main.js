import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./routes/index";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
