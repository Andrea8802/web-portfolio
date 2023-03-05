<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';

export default {
  name: "App",
  components: {
    Header,
    Home
  }

}
</script>

<template>
  <Header />
  <Home />
</template>

<style lang="scss">
@use '/src/styles/general' as *;
</style>
