<script>
export default {
    name: "Header"

}
</script>

<template>
    <header>
        <img src="../assets/logo.png" alt="">
        <nav>
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixins' as *;

header {
    @include d-flex(space-between, center);
    height: 110px;
    background-color: $primary-color;
    padding: 0 80px;

    img {
        height: 70%
    }

    ul {
        @include d-flex(space-evenly, center);
        gap: 20px;
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
