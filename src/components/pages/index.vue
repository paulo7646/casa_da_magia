<template>
  <v-app theme="dark" id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-avatar size="70px" image="/src/assets/images/logo.png"></v-avatar>
      <span style="text-align: justify; margin-right: 1px;">Casa da Magia</span>

      <RouterLink class="router-link" to="/">
        <v-btn block class="btn-menu-fist" prepend-icon="mdi-home">Home</v-btn>
      </RouterLink>

      <RouterLink class="router-link" to="/vendas">
        <v-btn block class="btn-menu-fist" prepend-icon="mdi-currency-usd">Vendas</v-btn>
      </RouterLink>

      <RouterLink class="router-link" to="/produtos">
        <v-btn block class="btn-menu" prepend-icon="mdi-package-variant-closed">Produtos</v-btn>
      </RouterLink>

      <RouterLink class="router-link" to="/notas-fiscais">
        <v-btn block class="btn-menu" prepend-icon="mdi-file">notas fiscas</v-btn>
      </RouterLink>

    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue'
  const drawer = ref(null)
</script>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>

<style>
.btn-menu-fist{
  margin-top: 2%
}

.btn-menu{
  margin-top: 2%;
}

.custom-icon {
  background-image: url(/src/assets/images/logo.png);
  background-size: cover;
  width: 48px; 
  height: 48px;
  border-radius: 50%;
}


.router-link {
  text-decoration: none;
}



</style>