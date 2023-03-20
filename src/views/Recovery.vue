<template>
    <div class="entrance recovery big-container">
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
                    <div class="entrance-form__box">
                        <p class="entrance-form__box-text">
                            Электронная почта
                        </p>
                        <input class="entrance-form__box-input" type="email" placeholder="Адрес электронной почты">
                        <p class="entrance-form__box-subtext">
                            Обязательное поле.
                        </p>
                    </div>
                    <button class="entrance-form__button" type="submit" @click="sendData">
                        Восстановить
                    </button>
                    <p class="entrance-form__bottom">
                        <a href="#">
                            Вернуться к авторизации
                        </a>
                    </p>
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
    methods: {
        sendData(event) {
            let allInputs = document.querySelectorAll('.entrance-form__box-input')
            for ( let item of allInputs ) {
                if( item.value == '' ) {
                    event.preventDefault()
                    item.parentNode.classList.add('entrance-form__box--disabled')
                } else {
                    item.parentNode.classList.remove('entrance-form__box--disabled')
                }
            }
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.recovery {
    .entrance-form__box {
        @include adaptiv-value("margin-bottom", 40, 15, 1);
    }
    .entrance-form__button {
        @include adaptiv-value("width", 300, 220, 1);
        @include adaptiv-value("max-width", 300, 220, 1);
    }
}
</style>