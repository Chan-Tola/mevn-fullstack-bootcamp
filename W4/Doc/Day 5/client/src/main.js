import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./routes/index";
import { useUserStore } from "./Store/User";

const app = createApp(App);
app.use(router);
app.use(createPinia());
const UserStore = useUserStore();
UserStore.refreshWeb();
app.mount("#app");
