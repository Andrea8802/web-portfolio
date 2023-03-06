<script>
import Jumbotron from './Home/Jumbotron.vue';
import Bio from './Home/Bio.vue';

export default {
    name: "Home",
    components: {
        Jumbotron,
        Bio
    }

}
</script>

<template>
    <div class="container">
        <Jumbotron />
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: calc(100vh - 110px);
    width: 100%;
}
</style>
