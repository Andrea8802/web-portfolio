<script>
export default {
    name: 'Bio'
}
</script>

<template>
    <div class="ms_container">
        <h1>
            My Skills!
        </h1>
        <img src="/src/assets/skills.png" alt="">
    </div>
</template>

<style lang="scss" scoped>
@use '/src/styles/partials/mixins' as *;
@use '/src/styles/partials/variables' as *;

.ms_container {
    @include d-flex(flex-start, center);
    flex-direction: column;
    gap: 60px;
    color: $text-color;

    h1 {
        font-size: 60px;
    }
}
</style>