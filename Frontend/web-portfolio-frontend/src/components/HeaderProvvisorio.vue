<script>
export default {
    name: "HeaderProvvisorio"

}
</script>

<template>
    <header>
        <img src="../assets/logo.png" alt="">
        <nav>
            <ul>
                <a href="https://github.com/Andrea8802" target="_blank">
                    <fa icon="fa-brands fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/andreabonaventuradev/" target="_blank">
                    <fa icon="fa-brands fa-linkedin" />
                </a>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixins' as *;

header {
    @include d-flex(space-between, center);
    height: 90px;
    background-color: $primary-color;
    padding: 0 80px;

    a {
        text-decoration: none;
        color: $secondary-color;
        font-size: 34px;
    }

    img {
        height: 60%
    }

    ul {
        @include d-flex(space-evenly, center);
        gap: 40px;
    }

    li {
        color: $secondary-color;
        list-style: none;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
    }

}
</style>
