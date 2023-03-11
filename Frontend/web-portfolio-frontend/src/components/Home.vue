<script>
import Jumbotron from './Home/Jumbotron.vue';
import Skills from './Home/Skills.vue';

export default {
    name: "Home",
    components: {
        Jumbotron,
        Skills
    }

}
</script>

<template>
    <div class="container">
        <Jumbotron />
        <Skills />
    </div>
</template>

<style lang="scss" scoped>
.container {
    min-height: calc(100vh + 110px);
    width: 100%;
}
</style>
