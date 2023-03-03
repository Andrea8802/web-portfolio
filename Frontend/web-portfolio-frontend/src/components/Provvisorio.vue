<script>
import HeaderProvvisorio from './HeaderProvvisorio.vue';
export default {
    name: "Provvisorio",
    components: {
        HeaderProvvisorio
    }

}
</script>

<template>
    <HeaderProvvisorio />
    <div class="alert"></div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_mixins' as *;


.alert {
    background-color: #f2f1df;
    background-image: url('../assets/provvisorio.jpg');
    background-size: contain;
    background-position-x: center;
    background-position-y: top;
    background-repeat: no-repeat;
    width: 100%;
    height: calc(80vh - 90px);

}
</style>
