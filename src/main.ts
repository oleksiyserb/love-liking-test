import { createApp } from "vue";
import App from "./App.vue";

import "./assets/css/base.css";

import BaseButton from "./components/ui/BaseButton.vue";
import BaseContainer from "./components/ui/BaseContainer.vue";

const app = createApp(App);

app.component("base-container", BaseContainer);
app.component("base-button", BaseButton);

app.mount("#app");
