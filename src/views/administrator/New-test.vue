<template>
    <div class="biggest-wrapper">
    <div class="big-wrapper">
        <Aside :activeLink="1" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Каталог'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
            <main class="main main-new-test">
                <form class="main__new-test-section new-test-section">
                    <a class="new-test__link" href="#">
                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                fill="#1B2559" />
                        </svg>
                        <span>
                            Новый тест
                        </span>
                    </a>
                    <div class="new-test__inner">
                        <div class="new-test__content new-test-content">
                            <div class="new-test-content__buttons">
                                <button class="new-test-content__button-btn" type="button" data-filter=".item-first">
                                    Титульный экран
                                </button>
                                <button class="new-test-content__button-btn" type="button" data-filter=".item-second">
                                    Вопросы
                                </button>
                            </div>
                        </div>
                        <button class="new-test__btn" type="button">
                            Сохранить
                        </button>
                    </div>
                    <div class="main__new-test new-test mix item-first">
                        <div class="new-test__bottom new-test-bottom">
                            <div class="new-test-bottom__item">
                                <p class="new-test-bottom__item-text">
                                    Название
                                </p>
                                <input class="new-test-bottom__item-input" type="text" placeholder="Электронная почта">
                            </div>
                            <div class="new-test-bottom__item">
                                <p class="new-test-bottom__item-text">
                                    Описание
                                </p>
                                <textarea class="new-test-bottom__item-textarea" name="" id="" cols="30" rows="10"
                                    placeholder="Описание......"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="main__new-tes-questions new-tes-questions mix item-second">
                        <div class="new-tes-questions__wrap">
                            <ul class="new-tes-questions__list new-tes-questions-list">
                                <li class="new-tes-questions-list__item">
                                    <p class="new-tes-questions-list__text">
                                        <span>
                                            №
                                        </span>
                                        <span>
                                            Вопрос
                                        </span>
                                        <span>
                                            Тип
                                        </span>
                                    </p>
                                </li>
                                <li class="new-tes-questions-list__item">
                                    <p class="new-tes-questions-list__text">
                                        <span>
                                            2
                                        </span>
                                        <span>
                                            Что делать, если мою электронную почту взломали?
                                        </span>
                                        <span>
                                            Выбор одного ответа
                                        </span>
                                    </p>
                                </li>
                                <li class="new-tes-questions-list__item">
                                    <p class="new-tes-questions-list__text">
                                        <span>
                                            3
                                        </span>
                                        <span>
                                            Что делать, если мою электронную почту взломали?
                                        </span>
                                        <span>
                                            Выбор одного ответа
                                        </span>
                                    </p>
                                </li>
                                <li class="new-tes-questions-list__item">
                                    <p class="new-tes-questions-list__text">
                                        <span>
                                            4
                                        </span>
                                        <span>
                                            Что делать, если мою электронную почту взломали?
                                        </span>
                                        <span>
                                            Выбор одного ответа
                                        </span>
                                    </p>
                                </li>
                                <li class="new-tes-questions-list__item">
                                    <p class="new-tes-questions-list__text">
                                        <span>
                                            5
                                        </span>
                                        <span>
                                            Что делать, если мою электронную почту взломали?
                                        </span>
                                        <span>
                                            Выбор одного ответа
                                        </span>
                                    </p>
                                </li>
                                <li class="new-tes-questions-list__item">
                                    <p class="new-tes-questions-list__text">
                                        <span>
                                            6
                                        </span>
                                        <span>
                                            Что делать, если мою электронную почту взломали?
                                        </span>
                                        <span>
                                            Выбор одного ответа
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <a class="new-tes-questions__btn" href="#">
                            <span>
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M25.833 14.6663H17.833V6.66634C17.833 6.31272 17.6925 5.97358 17.4425 5.72353C17.1924 5.47348 16.8533 5.33301 16.4997 5.33301C16.1461 5.33301 15.8069 5.47348 15.5569 5.72353C15.3068 5.97358 15.1663 6.31272 15.1663 6.66634V14.6663H7.16634C6.81272 14.6663 6.47358 14.8068 6.22353 15.0569C5.97348 15.3069 5.83301 15.6461 5.83301 15.9997C5.83301 16.3533 5.97348 16.6924 6.22353 16.9425C6.47358 17.1925 6.81272 17.333 7.16634 17.333H15.1663V25.333C15.1663 25.6866 15.3068 26.0258 15.5569 26.2758C15.8069 26.5259 16.1461 26.6663 16.4997 26.6663C16.8533 26.6663 17.1924 26.5259 17.4425 26.2758C17.6925 26.0258 17.833 25.6866 17.833 25.333V17.333H25.833C26.1866 17.333 26.5258 17.1925 26.7758 16.9425C27.0259 16.6924 27.1663 16.3533 27.1663 15.9997C27.1663 15.6461 27.0259 15.3069 26.7758 15.0569C26.5258 14.8068 26.1866 14.6663 25.833 14.6663Z"
                                        fill="#1294F2" />
                                </svg>
                            </span>
                            <span>
                                Добавить вопрос
                            </span>
                        </a>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    </div>
    </div>
</template>

<script>
import Aside from '../../components/portal-components/Aside.vue';
import Header from '../../components/portal-components/Header.vue';
import Footer from '../../components/portal-components/Footer.vue';
import SettingsOfProfileVue from '../../components/portal-components/Settings-of-profile.vue';
export default {
    components: {
        Aside,
        Header,
        Footer,
        SettingsOfProfileVue,
    },
    methods: {
        changedInfo() {
        },
        SideMenuToActive() {
            if (this.sideMenuActive == true) {
                this.sideMenuActive = false
            } else {
                this.sideMenuActive = true
            }
        }
    },
    data() {
        return {
            sideMenuActive: false,
        }
    },
    mounted() {
        var mixer = mixitup('.new-test-section', {
            load: {
                filter: '.item-first'
            },
            animation: {
                enable: false
            },
        })
    }
}
</script>


<style lang="scss">
@import '../../assets/scss/vars';

//

.main-new-test {
    @include adaptiv-value("padding-top", 30, 30, 1);
    @include adaptiv-value("padding-right", 55, 30, 1);
    @include adaptiv-value("padding-bottom", 50, 30, 1);
    @include adaptiv-value("padding-left", 55, 30, 1);
}

.new-test {
    @include adaptiv-value("padding-bottom", 300, 0, 1);

    &__link {
        display: flex;
        gap: 10px;
        align-items: center;
        @include adaptiv-value("margin-bottom", 35, 30, 1);

        font-weight: 500;
        @include adaptiv-value("font-size", 24, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        color: #1B2559;
    }

    &__inner {
        display: flex;
        justify-content: space-between;
        border-bottom: 0.5px solid #96A5B8;
        padding-bottom: 10px;
    }

    &__btn {
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-left: 15px;
        border-radius: 6px;


        @include adaptiv-value("font-size", 20, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("padding", 16, 12, 1);
        @include adaptiv-value("width", 160, 130, 1);
        @include adaptiv-value("max-width", 160, 130, 1);
        background: #fff;
        transition: background 0.3s, border 0.3s, color 0.3s;
        color: #1294F2;
        border: 1px solid #1294F2;
        transition: border 0.3s, background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }
}

.new-test-content {
    &__buttons {
        display: flex;
        align-items: center;
        gap: 20px;

        .mixitup-control-active {
            color: #000;

            &::before {
                background: #1294F2;
            }
        }
    }

    &__button-btn {
        font-weight: 500;
        @include adaptiv-value("font-size", 20, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        color: #1B2559;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            bottom: -10px;
            width: 35px;
            left: 50%;
            @include adaptiv-value("height", 6, 4, 1);
            transform: translateX(-50%);
            background: transparent;
            transition: background 0.3s;
            border-radius: 20px;
        }
    }
}

.new-test-bottom {
    padding-top: 45px;
    display: flex;
    flex-direction: column;
    @include adaptiv-value("gap", 25, 20, 1);

    &__item {
        display: flex;
        align-items: flex-start;
        @include adaptiv-value("gap", 65, 15, 1);
    }

    &__item-text {
        width: 150px;
        font-weight: 400;
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 16, 1);
        color: #1B2559;
    }

    &__item-input {
        font-weight: 500;
        color: #96A5B8;
        @include adaptiv-value("padding-top", 12, 8, 1);
        @include adaptiv-value("padding-right", 12, 8, 1);
        @include adaptiv-value("padding-bottom", 12, 8, 1);
        @include adaptiv-value("padding-left", 16, 12, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 16, 1);
        width: 390px;
        max-width: 390px;
        border: 1px solid #96A5B8;
        border-radius: 4px;
        &:focus {
            &::placeholder {
                opacity: 0;
            }
        }
        &::placeholder {
            @include adaptiv-value("font-size", 16, 14, 1);
            @include adaptiv-value("line-height", 24, 16, 1);
            color: #96A5B8;
        }
    }

    &__item-textarea {
        resize: none;
        color: #96A5B8;
        @include adaptiv-value("padding-top", 12, 8, 1);
        @include adaptiv-value("padding-right", 12, 8, 1);
        @include adaptiv-value("padding-bottom", 12, 8, 1);
        @include adaptiv-value("padding-left", 16, 12, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 16, 1);
        @include adaptiv-value("min-height", 290, 150, 1);
        width: 610px;
        border: 1px solid #96A5B8;
        border-radius: 4px;

        &::placeholder {
            @include adaptiv-value("font-size", 16, 14, 1);
            @include adaptiv-value("line-height", 24, 16, 1);
            color: #96A5B8;
        }
        &:focus {
            &::placeholder {
                opacity: 0;
            }
        }
    }
}

// 


.new-tes-questions {
    padding-top: 25px;
    @include adaptiv-value("padding-bottom", 150, 0, 1);

    &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        max-width: 1300px;

        span:first-child {
            width: 16px;
            height: 16px;
        }

        svg {
            width: 16px;
            height: 16px;
        }

        font-weight: 400;
        @include adaptiv-value("font-size", 20, 14, 1);
        @include adaptiv-value("line-height", 24, 16, 1);
        color: #1294F2;

        background: #FFFFFF;
        padding: 13px;
        border: 1px solid #1294F2;
        border-radius: 6px;

        svg path {
            transition: fill 0.3s;
        }
        transition: background 0.3s, border 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
           color: #fff;
           svg {
            path {
                fill: #fff;
            }
           }
        }

    }
}

.new-tes-questions-list {
    margin-bottom: 20px;
    max-width: 1300px;

    &__item {
        border-bottom: 0.5px solid #96A5B8;
        @include adaptiv-value("padding-top", 30, 15, 1);
        @include adaptiv-value("padding-bottom", 50, 15, 1);
        &:nth-child(1) {
            span {
                font-weight: 500;
            }
        }

    }

    &__text {
        display: flex;
        align-items: center;

        span {
            font-weight: 400;
            @include adaptiv-value("font-size", 16, 13, 1);
            @include adaptiv-value("line-height", 24, 16, 1);
            color: #1B2559;
        }

        span:nth-child(1) {
            width: 50px;
            min-width: 50px;
        }

        span:nth-child(2) {
            width: 450px;
            min-width: 450px;
            margin-left: auto;
        }

        span:nth-child(3) {
            width: 330px;
            min-width: 330px;
            margin-left: 100px;
        }
    }
}

@media (max-width: 1050px) {
    .new-tes-questions-list__item {
        display: flex;
        flex-direction: column;
    }

    .new-tes-questions-list__text {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 10px;
        span {
            margin-left: unset !important;
            width: unset !important;
            min-width: unset !important;
        }
    }
}

@media (max-width: 950px) {
    .new-test-bottom__item-input {
        max-width: 100%;
        width: 100%;
    }

    .new-test-bottom__item-textarea {
        max-width: 100%;
        width: 100%;
    }
}

@media (max-width: 650px) {
    .new-test__inner {
        flex-direction: column;
        align-items: flex-start;
    }

    .new-test__btn {
        display: block;
        margin-top: 30px;
        margin-left: unset;
    }
}

@media (max-width: 550px) {
    .new-test-bottom__item {
        flex-direction: column;
    }
}
</style>