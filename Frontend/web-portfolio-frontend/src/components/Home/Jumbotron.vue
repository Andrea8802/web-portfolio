<script>
import { store } from '/src/store.js';

export default {
    name: 'Jumbotron',
    data() {
        return {
            store
        }
    },
    methods: {
        onClick() {
            store.contactOpen = true;
        }
    }
}
</script>

<template>
    <section class="ms_container">

        <div class="left">
            <h2>
                Hi, I'm Andrea
            </h2>
            <hr>
            <div class="text">
                Jr. Full Stack Web Developer
            </div>

            <a href="/src/assets/curriculum.pdf" class="ms_primary-button" download="Andrea-Bonaventura-CV">
                Download CV
                <fa icon="fa-solid fa-download" />
            </a>
        </div>

        <div class="right">
            <img src="/src/assets/me.png" alt="">
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '/src/styles/partials/mixins' as *;
@use '/src/styles/partials/variables' as *;

.ms_container {
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
        margin: 25px 0 40px;
        font-size: 38px;
    }

    img {
        width: 400px;
    }

}
</style>