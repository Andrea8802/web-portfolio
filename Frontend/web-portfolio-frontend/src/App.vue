<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Provvisorio from './components/Provvisorio.vue';

export default {
  name: "App",
  components: {
    Header,
    Home,
    Provvisorio
  }

}
</script>

<template>
  <!-- <Header /> -->
  <!-- <Home /> -->
  <Provvisorio />
</template>

<style lang="scss">
@use './styles/general' as *;
</style>
