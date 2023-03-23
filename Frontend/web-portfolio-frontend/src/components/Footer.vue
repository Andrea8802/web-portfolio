<script>

export default {
    name: "Footer",

    data() {
        return {

        }
    }

}
</script>

<template>
    <footer>
        <h1>Prova</h1>
    </footer>
</template>

<style lang="scss" scoped>
@use '/src/styles/partials/variables' as *;

footer {
    height: 30vh;
    width: 100%;
    background-color: $text-color;
    color: gray;
}
</style>
