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
            <hr>
            <div class="text">
                Jr. Full Stack Web Developer
            </div>

            <button>
                Contact me
                <fa icon="fa-solid fa-paper-plane" />
            </button>
        </div>

        <div class="right">
            <img src="/src/assets/me.png" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '/src/styles/partials/mixins' as *;
@use '/src/styles/partials/variables' as *;

.container {
    @include d-flex(center, center);
    gap: 50px;
    color: $text-color;

    h2 {
        font-size: 74px;

    }

    hr {
        border: 1px solid gray;
    }

    .text {
        margin: 25px 0;
        font-size: 38px;
    }

    img {
        width: 400px;
    }

    button {
        background-color: $secondary-color;
        color: $text-color;
        border-radius: 25px;
        border: 2px solid $secondary-dark-color;
        padding: 10px 18px;
        font-size: 26px;
        cursor: pointer;

        &:hover {
            box-shadow: 0px 10px 15px rgba($color: #000000, $alpha: 0.5);
        }
    }

}
</style>