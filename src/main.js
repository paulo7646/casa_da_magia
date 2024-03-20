

// Plugins
import { registerPlugins } from '@/plugins'

// vue router import
import { createRouter, createWebHistory } from 'vue-router';

// Components
import App from './App.vue'

//pages
import index from './components/pages/index.vue';

//rotas
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/teste', component: index },
    ]
});


// Composables
import { createApp } from 'vue'

const app = createApp(App)

// implantando componetes
app.component('Index-vue', index);

registerPlugins(app)

app.mount('#app')
