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
                    <fa icon="fa-solid fa-check" />
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
    height: 90px;
    background-color: $primary-color;
    padding: 0 80px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 900;


    img {
        height: 70%;

        &:hover {
            cursor: pointer;
        }
    }

    nav {
        height: 100%;

        ul {
            @include d-flex(space-evenly, center);
            gap: 60px;
            height: 100%;

            li {
                color: $secondary-color;
                list-style: none;
                font-size: 36px;
                width: 30px;
                font-weight: bold;
                cursor: pointer;

                &:hover {
                    color: $secondary-dark-color;
                }

                a {
                    text-decoration: none;
                    color: $secondary-color;
                    font-size: 36px;


                    &:hover {
                        color: $secondary-dark-color;
                    }
                }
            }

            .copied {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                font-size: 32px;

                .text {
                    font-size: 16px;
                    width: 200px;
                    text-align: center;
                }
            }
        }
    }



}
</style>
