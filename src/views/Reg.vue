<template>
    <div class="entrance reg big-container">
        <Aside />
        <div class="entrance__wrapper">
            <form class="entrance__form entrance-form" action="#">
                <div class="entrance-form__inner">
                    <h1 class="entrance-form__title">
                        Регистрация
                    </h1>
                    <p class="entrance-form__text">
                        Заполните свои данные, чтобы получить доступ к вашему пространству
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
                            Имя
                        </p>
                        <input class="entrance-form__box-input" type="text" placeholder="Аида">
                        <p class="entrance-form__box-subtext">
                            Обязательное поле.
                        </p>
                    </div>
                    <div class="entrance-form__box">
                        <p class="entrance-form__box-text">
                            Фамилия
                        </p>
                        <input class="entrance-form__box-input" type="text" placeholder="Кожабай">
                        <p class="entrance-form__box-subtext">
                            Обязательное поле.
                        </p>
                    </div>

                    <div class="entrance-form__box">
                        <p class="entrance-form__box-text">
                            Электронная почта
                        </p>
                        <input class="entrance-form__box-input" type="email" placeholder="paul@gmail.com">
                        <p class="entrance-form__box-subtext">
                            Обязательное поле.
                        </p>
                    </div>
                    <div class="entrance-form__box">
                        <p class="entrance-form__box-text">
                            Пароль
                        </p>
                        <input class="entrance-form__box-input" type="password" placeholder="***************" v-model="this.firstPasswordData">
                        <p class="entrance-form__box-subtext">
                            Обязательное поле.
                        </p>
                    </div>
                    <div class="entrance-form__box">
                        <p class="entrance-form__box-text">
                            Повторите пароль
                        </p>
                        <input class="entrance-form__box-input" type="password" placeholder="***************" v-model="this.secondPasswordData">
                        <p class="entrance-form__box-subtext">
                            Обязательное поле.
                        </p>
                        <p class="entrance-form__box-different">
                            Пароли не совпадают.
                        </p>
                    </div>
                    <button class="entrance-form__button" type="submit" @click="sendData">
                        Продолжить
                    </button>
                    <p class="entrance-form__bottom">
                        У меня уже есть аккаун, 
                        <a href="#">
                            Войти
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
    data() {
        return{
            firstPasswordData: '',
            secondPasswordData: '',
        }
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
            if ( this.firstPasswordData != this.secondPasswordData ) {
                document.querySelectorAll('.entrance-form__box-different')[0].classList.add('entrance-form__box-different--disabled')
            } else {
                document.querySelectorAll('.entrance-form__box-different')[0].classList.remove('entrance-form__box-different--disabled')
            }
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';

.reg .entrance-form__box {
    margin-bottom: 15px;
    &:nth-child(5) .entrance-form__box-input {
        margin-bottom: 0;
    }
    &:nth-last-child(3) {
        @include adaptiv-value("margin-bottom", 30, 15, 1);
    }
}
.reg {
    .entrance-form__button {
        @include adaptiv-value("width", 280, 200, 1);
        @include adaptiv-value("max-width", 280, 200, 1);
    }
    .entrance-form__text {
        max-width: 520px;
    }
    .entrance-form__box-different {
        display: none;
        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 20, 15, 1);
        color: #EC4848;
    }
    .entrance-form__box-different--disabled  {
        display: block;
    }
}


</style>