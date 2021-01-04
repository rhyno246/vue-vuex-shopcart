<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-container>
        <the-header></the-header>
      </v-container>
    </v-app-bar>

    <v-main class="mt-5">
        <v-container>
          <router-view></router-view>
        </v-container>
    </v-main>
    <base-footer></base-footer>
  </v-app>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BaseFooter from './components/BaseFooter.vue';
export default {
  name: 'App',

  components: {
    TheHeader,
    BaseFooter,
  },

  data: () => ({
    
  }),
};
</script>

<style scoped>
.container {
    max-width: 1280px;
}
</style>
