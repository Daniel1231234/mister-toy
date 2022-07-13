import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

import "./styles/styles.css"
import "./scss/main.scss"

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import VueGoogleMaps from "@fawmi/vue-google-maps"

// const sass = require("sass")
// const result = sass.compile(scssFilename)

const app = createApp(App)

app.use(ElementPlus)
app.use(VueGoogleMaps, {
  // load: {
  //   key: "AIzaSyAjlgFK0ZA3bPcJwKGVSJMLO7JCNku_VRI",
  // },
  autobindAllEvents: true,
})

app.use(router)
app.use(store)
app.mount("#app")
