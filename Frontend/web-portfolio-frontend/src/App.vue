<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Contacts from './components/Contacts.vue';
import { store } from '/src/store.js';

export default {
  name: "App",
  components: {
    Header,
    Home,
    Contacts
  },
  data() {
    return {
      store
    }
  }

}
</script>

<template>
  <Header />
  <Home v-if="!store.contactOpen" />
  <Contacts v-else />
</template>

<style lang="scss">
@use '/src/styles/general' as *;
</style>
