<script>
import { store } from '/src/store.js';
export default {
    name: "Contacts",
    data() {
        return {
            store,
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
    <div class="container">
        <div>
            <a href="https://github.com/Andrea8802" target="_blank">
                Github
                <fa icon="fa-brands fa-github" />
            </a>
        </div>

        <div>
            <a href="https://www.linkedin.com/in/andreabonaventuradev/" target="_blank">
                Linkedin
                <fa icon="fa-brands fa-linkedin" />
            </a>
        </div>
        <div>
            <a @click="copyMail" v-if="!emailCopied">
                Email
                <fa icon="fa-solid fa-envelope" />
            </a>
            <div v-else class="copied">
                <fa icon="fa-solid fa-clipboard-check" class="iconCopied" />
                <div class="text">
                    Email Copied!
                </div>
            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
@use '/src/styles/partials/mixins' as *;
@use '/src/styles/partials/variables' as *;

.container {
    @include d-flex(center, center);
    height: calc(100vh - 110px);
    width: 100%;


    &:hover {
        color: $secondary-dark-color;
    }

    a {
        text-decoration: none;
        color: $secondary-color;
        font-size: 44px;
        width: 30px;
        font-weight: bold;

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

    .iconCopied {
        font-size: 44px;
    }
}
</style>
 