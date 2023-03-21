<template>
    <aside class="entrance__aside entrance-aside">
        <img class="entrance-aside__img" src="../../../public/images/entrance-img.png" alt="img">
        <h2 class="entrance-aside__title">
            SINAPSYS
        </h2>
        <p class="entrance-aside__text">
            Надёжная платформа для онлайн‑обучения персонала
        </p>
    </aside>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../assets/scss/vars';
.entrance-aside {
    position: relative;
    width: 50%;
    max-width: 50%;
    min-height: 1024px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;

    &__img {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__title {
        font-weight: 600;
        z-index: 2;
        position: relative;
        @include adaptiv-value("margin-bottom", 65, 0, 1);
        @include adaptiv-value("font-size", 65, 30, 1);
        @include adaptiv-value("line-height", 70, 35, 1);
        text-align: center;
        color: #FFFFFF;
        margin-left: auto;
        margin-right: auto;
    }

    &__text {
        z-index: 2;
        position: relative;
        @include adaptiv-value("font-size", 45, 24, 1);
        @include adaptiv-value("line-height", 54, 28, 1);
        text-align: center;
        max-width: 750px;
        margin-left: auto;
        margin-right: auto;
        color: #FFFFFF;
    }
}

@media (max-height: 1050px) {
    .entrance-aside {
        min-height: unset;
        height: 100%;
    }
}

@media(max-width: 950px) {
    .entrance-aside {
        display: none;
    }
}

@media (max-height: 850px) {
    #app {
        height: unset;
    }
    .entrance-aside {
        height: 100vh;
    }
}
</style>