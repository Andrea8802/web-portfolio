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
        <img src="../assets/logo.png" alt="">
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
@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixins' as *;

header {
    @include d-flex(space-between, center);
    height: 90px;
    background-color: $primary-color;
    padding: 0 80px;

    img {
        height: 70%
    }

    ul {
        @include d-flex(space-evenly, center);
        gap: 40px;

        li {
            color: $secondary-color;
            list-style: none;
            font-size: 34px;
            width: 30px;
            font-weight: bold;
            cursor: pointer;

            a {
                text-decoration: none;
                color: $secondary-color;
                font-size: 34px;
            }
        }

        .copied {
            position: relative;

            .text {
                position: absolute;
                top: 70px;
                left: -55px;
                font-size: 20px;
                width: 400px;
            }
        }
    }

}
</style>
