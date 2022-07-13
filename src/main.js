import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./styles/styles.css"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import VueGoogleMaps from "@fawmi/vue-google-maps"

const app = createApp(App)

app.use(ElementPlus)
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAjlgFK0ZA3bPcJwKGVSJMLO7JCNku_VRI",
  },
  autobindAllEvents: true,
})

app.use(router)
app.use(store)
app.mount("#app")
