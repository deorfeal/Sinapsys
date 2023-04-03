<template>
    <div class="entrance end-recovery big-container">
        <Aside />
        <div class="entrance__wrapper">
            <form class="entrance__form entrance-form" action="#">
                <div class="entrance-form__inner">
                    <h1 class="entrance-form__title">
                        Восстановления пароля
                    </h1>
                    <p class="entrance-form__text">
                        Восстановите пароль, чтобы получить доступ к вашему пространству
                    </p>
                    <div class="entrance-form__row">
                        <a class="entrance-form__row-link" href="#">
                            kz
                        </a>
                        <a class="entrance-form__row-link entrance-form__row-link--active" href="#">
                            ru
                        </a>
                        <a class="entrance-form__row-link" href="#">
                            en
                        </a>
                    </div>
                    <a class="entrance-form__instruction" href="#">
                        Инструкция по восстановлению пароля отправлены по почте
                    </a>
                    <a href="#" class="entrance-form__button">
                        Вернуться к авторизации
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Aside from '../components/entrance-components/Aside.vue';
export default {
    components: {
        Aside
    },
    mounted() {
        document.querySelector('.entrance').parentNode.style.height = '100%'
        function handleResize() {
            if ( window.innerHeight < 900 ) {
                document.querySelector('.entrance').parentNode.style.height = 'unset'
            }
            if ( window.innerWidth == 1920 || window.innerWidth < 1920 ) {
                document.querySelector('.entrance').parentNode.parentNode.style.zoom = '100%' 
                document.querySelector('.entrance').parentNode.parentNode.parentNode.style.zoom = '100%' 
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
    }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';
.end-recovery {
    .entrance-form__row {
        @include adaptiv-value("margin-bottom", 40, 15, 1);
    }

    .entrance-form__instruction {
        font-weight: 400;
        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 20, 15, 1);
        text-align: center;
        color: #1294F2;
        @include adaptiv-value("margin-bottom", 40, 15, 1);
        max-width: 445px;
        &:hover {
            text-decoration: underline;
        }
    }
    .entrance-form__button {
        @include adaptiv-value("width", 400, 230, 1);
        @include adaptiv-value("max-width", 400, 230, 1);
    }
}
</style>