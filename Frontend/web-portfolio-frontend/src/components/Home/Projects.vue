<script>
import imgProject from '/src/assets/proj-img/proj-img.json';

export default {
    name: 'Projects',
    data() {
        return {
            images: imgProject,
            current: 0,
            direction: 1,
            transitionName: "fade",
            show: false,
        }
    },
    methods: {
        slide(dir) {
            this.direction = dir;
            dir === 1
                ? (this.transitionName = "slide-next")
                : (this.transitionName = "slide-prev");
            var len = this.images.length;
            this.current = (this.current + dir % len + len) % len;
        }
    },
    mounted() {
        this.show = true;
    }
}
</script>

<template>
    <div class="ms_project_container">
        <div id="slider">
            <transition-group tag="div" :name="transitionName" class="slides-group">
                <div v-if="show" :key="current" class="slide" :class="direction == 1 ? 'next-anim' : 'prev-anim'">
                    <img :src="images[current].src">
                </div>
            </transition-group>

            <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
                <fa icon="fa-solid fa-angle-left" />
            </div>

            <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
                <fa icon="fa-solid fa-angle-right" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '/src/styles/partials/mixins' as *;
@use '/src/styles/partials/variables' as *;

.ms_project_container {
    @include d-flex(center, flex-start);
    width: 100%;
    height: 100vh;

    .next-anim {
        animation: nextAnim 0.5s ease;
    }


    @keyframes nextAnim {
        from {
            transform: translate(-100%);
        }

        to {
            transform: translate(0%);
        }
    }

    .prev-anim {
        animation: prevAnim 0.5s ease;
    }

    @keyframes prevAnim {
        from {
            transform: translate(100%);
        }

        to {
            transform: translate(0%);
        }
    }

    /* FADE IN */
    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-enter {
        opacity: 0;
    }

    /* GO TO NEXT SLIDE */
    .slide-next-enter-active,
    .slide-next-leave-active {
        transition: transform 0.5s ease-in-out;
    }

    .slide-next-enter {
        transform: translate(200%);
    }

    .slide-next-leave-to {
        transform: translate(-200%);
    }

    /* GO TO PREVIOUS SLIDE */
    .slide-prev-enter-active,
    .slide-prev-leave-active {
        transition: transform 0.5s ease-in-out;
    }

    .slide-prev-enter {
        transform: translate(-200%);
    }

    .slide-prev-leave-to {
        transform: translate(200%);
    }


    #slider {
        width: 70%;
        height: 70%;
        position: relative;

        img {
            width: 100%;
            border: 2px solid $secondary-color;
            border-radius: 20px;
        }
    }

    .slide-group {
        position: relative;
    }

    .slide {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn {
        z-index: 5;
        cursor: pointer;
        border: 3px solid $secondary-color;
        border-radius: 50%;
        color: $secondary-color;
        background-color: $primary-color;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 40px;
        height: 40px;
        top: 50%;
        left: 1%;
        transform: translate(0%, -50%);
        transition: all 0.2s ease;
        user-select: none;
    }

    .btn-next {
        left: auto;
        right: 1%;
    }

    .btn:hover {
        border: 3px solid $secondary-dark-color;
        color: $primary-color;
        background-color: $secondary-color;
    }


}
</style>