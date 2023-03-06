<script>
export default {
    name: "Header",
    data() {
        return {
            emailCopied: false
        }
    },

    methods: {
        copyMail() {
            navigator.clipboard.writeText("andreabonaventuradev@gmail.com");
            this.emailCopied = true;
            setTimeout(() => {
                this.emailCopied = false;
            }, 1500);

        }
    }

}
</script>

<template>
    <header>
        <img src="/src/assets/logo.png" alt="">
        <nav>
            <ul>
                <li>
                    <a href="https://github.com/Andrea8802" target="_blank">
                        <fa icon="fa-brands fa-github" />
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/andreabonaventuradev/" target="_blank">
                        <fa icon="fa-brands fa-linkedin" />
                    </a>
                </li>

                <li @click="copyMail" v-if="!emailCopied">
                    <fa icon="fa-solid fa-envelope" />
                </li>

                <li v-else class="copied">
                    <fa icon="fa-solid fa-clipboard-check" />
                    <div class="text">
                        Email Copied!
                    </div>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '/src/styles/partials/_variables' as *;
@use '/src/styles/partials/_mixins' as *;

header {
    @include d-flex(space-between, center);
    height: 110px;
    background-color: $primary-color;
    padding: 0 80px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;


    img {
        height: 70%;

        &:hover {
            cursor: pointer;
        }
    }

    ul {
        @include d-flex(space-evenly, center);
        gap: 60px;

        li {
            color: $secondary-color;
            list-style: none;
            font-size: 44px;
            width: 30px;
            font-weight: bold;
            cursor: pointer;

            &:hover {
                color: $secondary-dark-color;
            }

            a {
                text-decoration: none;
                color: $secondary-color;
                font-size: 44px;

                &:hover {
                    color: $secondary-dark-color;
                }
            }
        }

        .copied {
            position: relative;

            .text {
                position: absolute;
                top: 80px;
                left: -60px;
                font-size: 26px;
                width: 400px;
            }
        }
    }

}
</style>
