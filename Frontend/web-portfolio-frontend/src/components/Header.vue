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
    height: 90px;
    background-color: $primary-color;
    padding: 0 20px;

    ul {
        @include d-flex(space-evenly, center);
        gap: 10px;
    }

    li {
        color: $secondary-color;
        list-style: none;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
    }




}
</style>
