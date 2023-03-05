<script>
export default {
    name: 'Bio'
}
</script>

<template>
    <div class="container">
    </div>
</template>

<style lang="scss" scoped>
@use '/src/styles/partials/mixins' as *;

.container {
    @include d-flex(center, center);
    gap: 50px;
    color: #222220;

}
</style>