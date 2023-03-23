<template>
    <div class="big-wrapper">
        <Aside :activeLink="1" :sideMenuActive="this.sideMenuActive"/>
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Каталог'" @openSideMenu="SideMenuToActive"/>
            <main class="main main-catalog">
                <section class="main__catalog catalog">
                    <div class="catalog__top">
                        <a class="catalog__top-link" href="#">
                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                    fill="#1B2559" />
                            </svg>
                            <span>
                                Электронная почта
                            </span>
                        </a>
                        <p class="catalog__top-text">
                            Уровни обучения
                        </p>
                    </div>
                    <div class="catalog__inner">
                        <div class="catalog__item catalog-item">
                            <div class="catalog-item__top">
                                <p class="catalog-item__top-text">
                                    Уровень: Начальный
                                </p>
                            </div>
                            <div class="catalog-item__inner">
                                <div class="catalog-item__content catalog-item-content">
                                    <div class="catalog-item-content__box">
                                        <h3 class="catalog-item-content__box-title">Электронная почта</h3>
                                        <p class="catalog-item-content__box-text">5 уроков</p>
                                    </div>
                                    <p class="catalog-item-content__text">
                                        700px
                                    </p>
                                </div>
                                <p class="catalog-item__text">
                                    Электронная почта — ключ к множеству других ресурсов. Мошенники понимают это и
                                    используют
                                    различные способы взломать почтовый ящик, похитить пароль с помощью вредоносного ПО или
                                    выманить его у владельца аккаунта.
                                </p>
                                <div class="catalog-item__buttons">
                                    <a class="catalog-item__buttons-link" href="#">
                                        Посмотреть
                                    </a>
                                    <a class="catalog-item__buttons-button" href="#">
                                        Начать
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="catalog__item catalog-item">
                            <div class="catalog-item__top">
                                <p class="catalog-item__top-text">
                                    Уровень: Средний
                                </p>
                            </div>
                            <div class="catalog-item__inner">
                                <div class="catalog-item__content catalog-item-content">
                                    <div class="catalog-item-content__box">
                                        <h3 class="catalog-item-content__box-title">Электронная почта</h3>
                                        <p class="catalog-item-content__box-text">5 уроков</p>
                                    </div>
                                    <p class="catalog-item-content__text">
                                        1400px
                                    </p>
                                </div>
                                <p class="catalog-item__text">
                                    Электронная почта — ключ к множеству других ресурсов. Мошенники понимают это и
                                    используют
                                    различные способы взломать почтовый ящик, похитить пароль с помощью вредоносного ПО или
                                    выманить его у владельца аккаунта.
                                </p>
                                <div class="catalog-item__buttons">
                                    <a class="catalog-item__buttons-link" href="#">
                                        Посмотреть
                                    </a>
                                    <a class="catalog-item__buttons-button catalog-item__buttons-button--lock" href="#">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17 8.00011H16V6.11011C16 5.04924 15.5786 4.03183 14.8284 3.28168C14.0783 2.53153 13.0609 2.11011 12 2.11011C10.9391 2.11011 9.92172 2.53153 9.17157 3.28168C8.42143 4.03183 8 5.04924 8 6.11011V8.00011H7C6.20435 8.00011 5.44129 8.31618 4.87868 8.87879C4.31607 9.4414 4 10.2045 4 11.0001V19.0001C4 19.7958 4.31607 20.5588 4.87868 21.1214C5.44129 21.684 6.20435 22.0001 7 22.0001H17C17.7956 22.0001 18.5587 21.684 19.1213 21.1214C19.6839 20.5588 20 19.7958 20 19.0001V11.0001C20 10.2045 19.6839 9.4414 19.1213 8.87879C18.5587 8.31618 17.7956 8.00011 17 8.00011ZM10 6.11011C9.98655 5.5654 10.1894 5.03756 10.5643 4.6421C10.9391 4.24665 11.4554 4.01581 12 4.00011C12.5446 4.01581 13.0609 4.24665 13.4357 4.6421C13.8106 5.03756 14.0135 5.5654 14 6.11011V8.00011H10V6.11011ZM18 19.0001C18 19.2653 17.8946 19.5197 17.7071 19.7072C17.5196 19.8948 17.2652 20.0001 17 20.0001H7C6.73478 20.0001 6.48043 19.8948 6.29289 19.7072C6.10536 19.5197 6 19.2653 6 19.0001V11.0001C6 10.7349 6.10536 10.4805 6.29289 10.293C6.48043 10.1055 6.73478 10.0001 7 10.0001H17C17.2652 10.0001 17.5196 10.1055 17.7071 10.293C17.8946 10.4805 18 10.7349 18 11.0001V19.0001Z"
                                                fill="#96A5B8" />
                                            <path
                                                d="M12 12C11.4067 12 10.8266 12.1759 10.3333 12.5056C9.83994 12.8352 9.45543 13.3038 9.22836 13.8519C9.0013 14.4001 8.94189 15.0033 9.05765 15.5853C9.1734 16.1672 9.45912 16.7018 9.87868 17.1213C10.2982 17.5409 10.8328 17.8266 11.4147 17.9424C11.9967 18.0581 12.5999 17.9987 13.1481 17.7716C13.6962 17.5446 14.1648 17.1601 14.4944 16.6667C14.8241 16.1734 15 15.5933 15 15C15 14.2044 14.6839 13.4413 14.1213 12.8787C13.5587 12.3161 12.7957 12 12 12ZM12 16C11.8022 16 11.6089 15.9414 11.4444 15.8315C11.28 15.7216 11.1518 15.5654 11.0761 15.3827C11.0004 15.2 10.9806 14.9989 11.0192 14.8049C11.0578 14.6109 11.153 14.4327 11.2929 14.2929C11.4327 14.153 11.6109 14.0578 11.8049 14.0192C11.9989 13.9806 12.2 14.0004 12.3827 14.0761C12.5654 14.1518 12.7216 14.28 12.8315 14.4444C12.9414 14.6089 13 14.8022 13 15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16Z"
                                                fill="#96A5B8" />
                                        </svg>
                                        <span>
                                            Начать
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="catalog__item catalog-item">
                            <div class="catalog-item__top">
                                <p class="catalog-item__top-text">
                                    Уровень: Продвинутый
                                </p>
                            </div>
                            <div class="catalog-item__inner">
                                <div class="catalog-item__content catalog-item-content">
                                    <div class="catalog-item-content__box">
                                        <h3 class="catalog-item-content__box-title">Электронная почта</h3>
                                        <p class="catalog-item-content__box-text">5 уроков</p>
                                    </div>
                                    <p class="catalog-item-content__text">
                                        1900px
                                    </p>
                                </div>
                                <p class="catalog-item__text">
                                    Электронная почта — ключ к множеству других ресурсов. Мошенники понимают это и
                                    используют
                                    различные способы взломать почтовый ящик, похитить пароль с помощью вредоносного ПО или
                                    выманить его у владельца аккаунта.
                                </p>
                                <div class="catalog-item__buttons">
                                    <a class="catalog-item__buttons-link" href="#">
                                        Посмотреть
                                    </a>
                                    <a class="catalog-item__buttons-button catalog-item__buttons-button--lock" href="#">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17 8.00011H16V6.11011C16 5.04924 15.5786 4.03183 14.8284 3.28168C14.0783 2.53153 13.0609 2.11011 12 2.11011C10.9391 2.11011 9.92172 2.53153 9.17157 3.28168C8.42143 4.03183 8 5.04924 8 6.11011V8.00011H7C6.20435 8.00011 5.44129 8.31618 4.87868 8.87879C4.31607 9.4414 4 10.2045 4 11.0001V19.0001C4 19.7958 4.31607 20.5588 4.87868 21.1214C5.44129 21.684 6.20435 22.0001 7 22.0001H17C17.7956 22.0001 18.5587 21.684 19.1213 21.1214C19.6839 20.5588 20 19.7958 20 19.0001V11.0001C20 10.2045 19.6839 9.4414 19.1213 8.87879C18.5587 8.31618 17.7956 8.00011 17 8.00011ZM10 6.11011C9.98655 5.5654 10.1894 5.03756 10.5643 4.6421C10.9391 4.24665 11.4554 4.01581 12 4.00011C12.5446 4.01581 13.0609 4.24665 13.4357 4.6421C13.8106 5.03756 14.0135 5.5654 14 6.11011V8.00011H10V6.11011ZM18 19.0001C18 19.2653 17.8946 19.5197 17.7071 19.7072C17.5196 19.8948 17.2652 20.0001 17 20.0001H7C6.73478 20.0001 6.48043 19.8948 6.29289 19.7072C6.10536 19.5197 6 19.2653 6 19.0001V11.0001C6 10.7349 6.10536 10.4805 6.29289 10.293C6.48043 10.1055 6.73478 10.0001 7 10.0001H17C17.2652 10.0001 17.5196 10.1055 17.7071 10.293C17.8946 10.4805 18 10.7349 18 11.0001V19.0001Z"
                                                fill="#96A5B8" />
                                            <path
                                                d="M12 12C11.4067 12 10.8266 12.1759 10.3333 12.5056C9.83994 12.8352 9.45543 13.3038 9.22836 13.8519C9.0013 14.4001 8.94189 15.0033 9.05765 15.5853C9.1734 16.1672 9.45912 16.7018 9.87868 17.1213C10.2982 17.5409 10.8328 17.8266 11.4147 17.9424C11.9967 18.0581 12.5999 17.9987 13.1481 17.7716C13.6962 17.5446 14.1648 17.1601 14.4944 16.6667C14.8241 16.1734 15 15.5933 15 15C15 14.2044 14.6839 13.4413 14.1213 12.8787C13.5587 12.3161 12.7957 12 12 12ZM12 16C11.8022 16 11.6089 15.9414 11.4444 15.8315C11.28 15.7216 11.1518 15.5654 11.0761 15.3827C11.0004 15.2 10.9806 14.9989 11.0192 14.8049C11.0578 14.6109 11.153 14.4327 11.2929 14.2929C11.4327 14.153 11.6109 14.0578 11.8049 14.0192C11.9989 13.9806 12.2 14.0004 12.3827 14.0761C12.5654 14.1518 12.7216 14.28 12.8315 14.4444C12.9414 14.6089 13 14.8022 13 15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16Z"
                                                fill="#96A5B8" />
                                        </svg>
                                        <span>
                                            Начать
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    </div>
</template>

<script>
import Aside from '../../components/portal-components/Aside.vue';
import Header from '../../components/portal-components/Header.vue';
import Footer from '../../components/portal-components/Footer.vue';

export default {
    components: {
        Aside,
        Header,
        Footer
    },
    data() {
        return {
            sideMenuActive: false,
        }
    },
    methods: {
        SideMenuToActive() {
            if (this.sideMenuActive == true) {
                this.sideMenuActive = false
            } else {
                this.sideMenuActive = true
            }
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';
.main-catalog {
    @include adaptiv-value('padding-top', 30, 30, 1);
    @include adaptiv-value('padding-right', 55, 30, 1);
    @include adaptiv-value('padding-bottom', 40, 30, 1);
    @include adaptiv-value('padding-left', 55, 30, 1);
}
.catalog {
 
    &__top {
        @include adaptiv-value('margin-bottom', 40, 20, 1);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__top-link {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-left: -10px;
        font-weight: 500;
        @include adaptiv-value('font-size', 24, 16, 1);
        line-height: 26px;
        color: #1B2559;
        transition: color 0.3s;
        &:hover {
            color: #1294F2;
            svg path {
                fill: #1294F2;
            }
        }
        svg path {
            transition: fill 0.3s;
        }
    }

    &__top-text {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #1B2559;
    }

    &__inner {
        display: flex;
        flex-direction: column;
        @include adaptiv-value('gap', 10, 15, 1);
    }
}

.catalog-item {
    background: #FFFFFF;
    border-radius: 0px 0px 16px 16px;

    &__inner {
        background: #FFFFFF;
        border-radius: 0px 0px 16px 16px;

        @include adaptiv-value('padding-top', 20, 23, 1);
        @include adaptiv-value('padding-right', 40, 25, 1);
        @include adaptiv-value('padding-bottom', 30, 15, 1);
        @include adaptiv-value('padding-left', 45, 15, 1);
    }

    &__top {
        background: #1294F2;
        border-radius: 16px;
        @include adaptiv-value('padding-top', 28, 16, 1);
        @include adaptiv-value('padding-right', 48, 22, 1);
        @include adaptiv-value('padding-bottom', 28, 16, 1);
        @include adaptiv-value('padding-left', 48, 22, 1);
    }


    &__top-text {
        font-weight: 500;
        @include adaptiv-value('font-size', 20, 16, 1);
        @include adaptiv-value('line-height', 24, 18, 1);
        color: #FFFFFF;
    }

    &__text {
        margin-bottom: 15px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #60678B;

        @include adaptiv-value('font-size', 16, 14, 1);
  

    }

    &__buttons {
        display: flex;
        @include adaptiv-value('gap', 25, 20, 1);
        justify-content: flex-end;
    }

    &__buttons-link {
        font-weight: 500;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #1294F2;
        border: 1px solid #1294F2;
        border-radius: 6px;
        @include adaptiv-value('font-size', 16, 14, 1);
        @include adaptiv-value('width', 160, 115, 1);
        @include adaptiv-value('max-width', 160, 115, 1);
        @include adaptiv-value('padding', 10, 4, 1);

        transition: background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }

    &__buttons-button {
        font-weight: 500;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: #1294F2;
        color: #fff;
        border: 1px solid #1294F2;
        border-radius: 6px;

        @include adaptiv-value('font-size', 16, 14, 1);
        @include adaptiv-value('width', 140, 115, 1);
        @include adaptiv-value('max-width', 140, 115, 1);
        @include adaptiv-value('padding', 10, 4, 1);

        border: 1px solid transparent;
        transition: background 0.3s, color 0.3s, border 0.3s;
        &:hover {
            background: #fff;
            color: #1294F2;
            border: 1px solid #1294F2;
        }
    }

    &__buttons-button--lock {
        background: #CECECE;
        color: #96A5B8;
        gap: 4px;
        align-items: center;
        display: flex;
        justify-content: center;
        border: 1px solid #CECECE;
        &:hover {
            background: #CECECE;
            color: #96A5B8;
            border: 1px solid #CECECE;
        }
    }
}

.catalog-item-content {
    display: flex;
    justify-content: space-between;

    &__box {}

    &__box-title {
        font-weight: 600;
        margin-bottom: 15px;
        color: #1B2559;

        @include adaptiv-value('font-size', 20, 16, 1);
        @include adaptiv-value('line-height', 24, 18, 1);
    }

    &__box-text {
        font-weight: 400;
        @include adaptiv-value('font-size', 16, 14, 1);
        @include adaptiv-value('line-height', 24, 24, 1);
        margin-bottom: 10px;
        color: #96A5B8;
    }

    &__text {
        font-weight: 600;
        line-height: 24px;
        color: #1294F2;

        @include adaptiv-value('font-size', 18, 14, 1);
    }
}
@media (max-width: 1300px) {
    .catalog__top-link {
        margin-left: unset;
    }
}
@media (max-width: 700px) {
    .catalog__top-text {
        display: none;
    }
}
@media (max-width: 550px) {
    .catalog-item__buttons {
        justify-content: center;
    }
}
</style>