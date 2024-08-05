import './assets/main.css'

import { createApp } from 'vue' //VUE的方法
import App from './App.vue' //Vue的根元件
import router from './router'
import AppTwo from './AppTwo.vue'
import AppHome1 from './AppHome1.vue'

const app = createApp(AppHome1)

app.use(router)

app.mount('#app') //建構Vue的環境
