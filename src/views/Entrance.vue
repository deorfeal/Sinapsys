<template>
    <div class="entrance big-container">
        <Aside />
        <div class="entrance__wrapper">
            <form class="entrance__form entrance-form" action="#">
                <div class="entrance-form__inner">
                    <h1 class="entrance-form__title">
                        Вход
                    </h1>
                    <p class="entrance-form__text">
                        Войдите в систему, чтобы получить доступ к вашему пространству
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
                        <input class="entrance-form__box-input" type="email" placeholder="paul@gmail.com">
                        <p class="entrance-form__box-subtext">
                            Обязательное поле.
                        </p>
                    </div>
                    <div class="entrance-form__box">
                        <p class="entrance-form__box-text">
                            Пароль
                        </p>
                        <input class="entrance-form__box-input" type="password" placeholder="***************">
                        <p class="entrance-form__box-subtext">
                            Обязательное поле.
                        </p>
                        <div class="entrance-form__box-wrap">
                            <a class="entrance-form__box-link" href="#">
                                Забыли пароль?
                            </a>
                        </div>
                    </div>
                    <button class="entrance-form__button" type="submit" @click="sendData">
                        Войти в систему
                    </button>
                    <p class="entrance-form__bottom">
                        Еще нет учетной записи?
                        <a href="#">
                            Зарегистрироваться
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
        return {

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
         
        }
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



#app {
    height: 100%;
}

.entrance {
    min-height: 1024px;
	width: 1920px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.entrance__wrapper {
    width: 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

// entrance-form 

.entrance-form {
    background: #FFFFFF;
    box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    @include adaptiv-value("padding-top", 35, 25, 1);
    @include adaptiv-value("padding-right", 65, 20, 1);
    @include adaptiv-value("padding-bottom", 35, 25, 1);
    @include adaptiv-value("padding-left", 65, 20, 1);

    &__inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 475px;
    }

    &__title {
        text-align: center;
        color: #1294F2;
        margin-bottom: 15px;

        @include adaptiv-value("font-size", 30, 20, 1);
        @include adaptiv-value("line-height", 37, 24, 1);
    }

    &__text {
        font-weight: 400;

        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 20, 15, 1);
        text-align: center;
        @include adaptiv-value("margin-bottom", 12, 8, 1);
        color: #60678B;
    }

    &__row {
        @include adaptiv-value("margin-bottom", 12, 15, 1);
        justify-content: center;
        align-items: center;
        display: flex;
        @include adaptiv-value("gap", 20, 15, 1);
    }

    &__row-link {
        @include adaptiv-value("font-size", 18, 14, 1);
        @include adaptiv-value("line-height", 22, 17, 1);
        color: #96A5B8;
        transition: color 0.3s;

        &:hover {
            color: #1294F2;
        }
    }

    &__row-link--active {
        color: #1294F2;
    }

    &__box {
        width: 100%;
        @include adaptiv-value("margin-bottom", 40, 20, 1);

        &:nth-child(5) {
            @include adaptiv-value("margin-bottom", 30, 15, 1);

            .entrance-form__box-input {
                @include adaptiv-value("margin-bottom", 15, 8, 1);
            }
        }
    }

    &__box--disabled {
        .entrance-form__box-text {
            color: #EC4848;
        }
        .entrance-form__box-input {
            border: 1px solid #EC4848;
        }   
        .entrance-form__box-subtext {
            display: block;
            opacity: 1;
            margin-top: 6px;
        }
    }

    &__box-subtext {
        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 20, 15, 1);
        display: none;
        opacity: 0;
        transition: opacity 0.3s;
        color: #EC4848;
    }

    &__box-wrap {
        display: flex;
        justify-content: flex-end;
    }

    &__box-text {
        font-weight: 400;
        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 20, 15, 1);
        color: #96A5B8;
        @include adaptiv-value("margin-bottom", 8, 6, 1);
    }

    &__box-input {
        background: #F4F4F4;
        border: 1px solid #F2F2F2;
        width: 100%;
        border-radius: 10px;
        @include adaptiv-value("padding-top", 15, 12, 1);
        @include adaptiv-value("padding-right", 35, 20, 1);
        @include adaptiv-value("padding-bottom", 15, 12, 1);
        @include adaptiv-value("padding-left", 35, 20, 1);
        font-weight: 400;
        @include adaptiv-value("font-size", 14, 12, 1);
        @include adaptiv-value("line-height", 17, 15, 1);
        color: rgba(0, 0, 0, 0.5);
        border: 1px solid transparent;
        transition: border 0.3s;

        &::placeholder {
            font-weight: 400;
            @include adaptiv-value("font-size", 14, 12, 1);
            @include adaptiv-value("line-height", 17, 15, 1);
            color: rgba(0, 0, 0, 0.5);
        }

        &:focus {
            border: 1px solid #1294F2;
            &::placeholder {
                opacity: 0;
            }
        }
    }

    &__box-link {
        font-weight: 400;
        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 20, 15, 1);
        text-align: right;
        color: #60678B;
        text-align: right;

        &:hover {
            text-decoration: underline;
        }
    }

    &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        @include adaptiv-value("padding", 18, 4, 1);
        @include adaptiv-value("width", 320, 150, 1);
        @include adaptiv-value("max-width", 320, 150, 1);
        @include adaptiv-value("border-radius", 10, 6, 1);
        
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 20, 24, 1);
        @include adaptiv-value("margin-bottom", 15, 10, 1);

        color: #1294F2;
        border: 1px solid #1294F2;
        transition: border 0.3s, background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }

    &__bottom {
        font-weight: 400;
        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 20, 15, 1);
        color: #96A5B8;
        text-align: center;

        a {
            color: #1294F2;
            text-decoration: underline;

            &:hover {
                text-decoration: unset;
            }
        }

    }
}

// // 

@media (max-width: 1400px) {
    .entrance-form {
        margin-left: 30px;
        margin-right: 30px;
    }
}

@media (max-width: 950px) {
    .entrance {
        padding-top: 30px;
        padding-block: 30px;
    }

    .entrance {
        justify-content: center;
    }

    .entrance-form {
        min-width: 315px;
    }

    #app {
        height: unset;
    }
    .entrance  {
        min-height: unset !important;
    }
}
</style>