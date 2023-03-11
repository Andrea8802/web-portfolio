<script>
export default {
    name: 'Projects'
}
</script>

<template>
    <div class="container">

    </div>
</template>

<style lang="scss" scoped>
@use '/src/styles/partials/mixins' as *;
@use '/src/styles/partials/variables' as *;

.container {
    @include d-flex(flex-start, center);
    gap: 60px;
    color: $text-color;

    h1 {
        font-size: 60px;
    }
}
</style>