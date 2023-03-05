<script>
import Jumbotron from './Home/Jumbotron.vue';

export default {
    name: "Home",
    components: {
        Jumbotron
    }

}
</script>

<template>
    <div class="container">
        <Jumbotron />
        <Jumbotron />
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: calc(100vh - 90px);
    width: 100%;
}
</style>
