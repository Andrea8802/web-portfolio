<script>
export default {
    name: 'Jumbotron'
}
</script>

<template>
    <div class="container">

        <div class="left">
            <h2>
                Hi, I'm Andrea
            </h2>
            <div class="text">
                Jr. Full Stack Web Developer
            </div>
        </div>

        <div class="right">
            <img src="/src/assets/me.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '/src/styles/partials/mixins' as *;

.container {
    @include d-flex(center, center);
    gap: 50px;
    color: #222220;

    h2 {
        font-size: 42px;
    }

    .text {
        margin-top: 10px;
        font-size: 24px;
    }

    img {
        width: 250px;
    }

}
</style>