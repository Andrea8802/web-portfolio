<script>
import Jumbotron from './Home/Jumbotron.vue';
import Skills from './Home/Skills.vue';
import Projects from './Home/Projects.vue';

export default {
    name: "Home",
    components: {
        Jumbotron,
        Skills,
        Projects
    }

}
</script>

<template>
    <div class="ms_container">
        <Jumbotron />
        <Skills />
        <Projects />

    </div>
</template>

<style lang="scss" scoped>
.ms_container {
    min-height: calc(100vh + 90px);
    width: 100%;
}
</style>
