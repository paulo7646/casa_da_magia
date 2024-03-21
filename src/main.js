

// Plugins
import { registerPlugins } from '@/plugins'

// vue router import
import { createRouter, createWebHistory } from 'vue-router';

// Components
import App from './App.vue'

import datagrid_custom from './components/custom_components/datagrid-custom.vue';


//pages
import index from './components/pages/index.vue';
import vendas from './components/pages/Vendas/Vendas.vue';
import produtos from './components/pages/Produtos/Produtos.vue';


//rotas
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/vendas', component: vendas },
      { path: '/produtos', component: produtos },
    ]
});


// Composables
import { createApp } from 'vue'

const app = createApp(App)

// implantando componetes
app.component('Index-vue', index);

app.component('datagrid-custom', datagrid_custom);


app.use(router)
registerPlugins(app)
app.mount('#app')
