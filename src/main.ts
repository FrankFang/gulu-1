import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Amber from './components/Amber.vue'
import Amber2 from './components/Amber2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Amber},
        { path: '/xxx', component: Amber2},
    ]
})

const app = createApp(App)
app.use(router)/*  */
app.mount('#app')
