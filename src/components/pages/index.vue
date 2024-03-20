<template>
  <v-app theme="dark" id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-btn block class="btn-menu-fist" prepend-icon="$vuetify">Vendas</v-btn>
      <v-btn block class="btn-menu" prepend-icon="$vuetify">Produtos</v-btn>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Casa da Magia</v-app-bar-title>
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
  margin-top: 25%
}

.btn-menu{
  margin-top: 2%;
}


</style>