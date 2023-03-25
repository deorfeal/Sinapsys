<template>
    <div class="big-wrapper">
        <Aside :activeLink="1" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Каталог'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
            <main class="main main-new-question">
                <form class="main__new-question new-question" action="#">
                    <div class="new-question__top new-question-top">
                        <a class="new-question-top__link" href="#">
                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                    fill="#1B2559" />
                            </svg>
                            <span>
                                Новый вопрос
                            </span>
                        </a>
                        <button class="new-question-top__btn">Сохранить</button>
                    </div>
                    <div class="new-question__inner">
                        <div class="new-question__item new-question-item">
                            <p class="new-question-item__text">
                                Название
                            </p>
                            <input class="new-question-item__input" type="text"
                                placeholder="Что делать, если мою электронную почту взломали?">
                        </div>
                        <div class="new-question__item new-question-item">
                            <p class="new-question-item__text">
                                Тема
                            </p>
                            <NewCursSelect
                                :options="['Выбор одного ответа', 'Выбор одного ответа 2', 'Выбор одного ответа 3']"
                                :default="'Выбор одного ответа'" class="select" />
                        </div>
                        <div class="new-question__item new-question-item">
                            <p class="new-question-item__text">
                                Описание
                            </p>
                            <textarea class="new-question-item__textarea" name="" id="" cols="30" rows="10"
                                placeholder="Описание"></textarea>
                        </div>
                        <div class="new-question__item new-question-item">
                            <p class="new-question-item__text">
                                Описание
                            </p>
                            <a class="new-question-item__btn" href="#">
                                <span>
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25.833 14.6663H17.833V6.66634C17.833 6.31272 17.6925 5.97358 17.4425 5.72353C17.1924 5.47348 16.8533 5.33301 16.4997 5.33301C16.1461 5.33301 15.8069 5.47348 15.5569 5.72353C15.3068 5.97358 15.1663 6.31272 15.1663 6.66634V14.6663H7.16634C6.81272 14.6663 6.47358 14.8068 6.22353 15.0569C5.97348 15.3069 5.83301 15.6461 5.83301 15.9997C5.83301 16.3533 5.97348 16.6924 6.22353 16.9425C6.47358 17.1925 6.81272 17.333 7.16634 17.333H15.1663V25.333C15.1663 25.6866 15.3068 26.0258 15.5569 26.2758C15.8069 26.5259 16.1461 26.6663 16.4997 26.6663C16.8533 26.6663 17.1924 26.5259 17.4425 26.2758C17.6925 26.0258 17.833 25.6866 17.833 25.333V17.333H25.833C26.1866 17.333 26.5258 17.1925 26.7758 16.9425C27.0259 16.6924 27.1663 16.3533 27.1663 15.9997C27.1663 15.6461 27.0259 15.3069 26.7758 15.0569C26.5258 14.8068 26.1866 14.6663 25.833 14.6663Z"
                                            fill="#1294F2"></path>
                                    </svg>
                                </span>
                                <span>
                                    Добавить картинку или видео
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="new-question__bottom new-question-bottom">
                        <p class="new-question-bottom__text">
                            <span>
                                Верно
                            </span>
                            <span>
                                Вариант ответа
                            </span>
                        </p>
                        <div class="new-question-bottom__item">
                            <label class="container">
                                <input href="#" value="Что делать, если мою электронную почту взломали?" disabled>
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="new-question-bottom__item">
                            <label class="container">
                                <input href="#" value="Что делать, если мою электронную почту взломали?" disabled>
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="new-question-bottom__item">
                            <label class="container">
                                <input href="#" value="Что делать, если мою электронную почту взломали?" disabled>
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="new-question-bottom__item">
                            <label class="container">
                                <input href="#" value="Что делать, если мою электронную почту взломали?" disabled>
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="new-question-bottom__item">
                            <label class="container">
                                <input href="#" placeholder="Введите вариант ответа">
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    </div>
</template>

<script>
import Aside from '../../components/portal-components/Aside.vue';
import Header from '../../components/portal-components/Header.vue';
import Footer from '../../components/portal-components/Footer.vue';
import SettingsOfProfileVue from '../../components/portal-components/Settings-of-profile.vue';
import NewCursSelect from '../../components/admin-components/New-curs-select.vue';
export default {
    components: {
        Aside,
        Header,
        Footer,
        SettingsOfProfileVue,
        NewCursSelect
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
}
</script>


<style lang="scss">
@import '../../assets/scss/vars';


.main-new-question {
    padding: 30px 55px 30px 55px;
}

.new-question-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    &__link {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 35px;

        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        color: #1B2559;
    }

    &__btn {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 16px;
        color: #FFFFFF;
        margin-left: 15px;
        background: #1294F2;
        border-radius: 6px;
        width: 160px;
        max-width: 160px;
    }
}

.new-question {
    &__inner {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-bottom: 30px;
    }
}

.new-question-item {
    display: flex;
    align-items: flex-start;
    gap: 65px;

    &:nth-child(1) {
        align-items: center;
    
    }

    &:nth-child(4) {
        align-items: center;
    }

    &__text {
        width: 150px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1B2559;
    }

    &__input {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #96A5B8;

        padding: 12px 12px 12px 16px;

        background: #FFFFFF;
        border: 1px solid #96A5B8;
        border-radius: 4px;
        width: 955px;
        max-width: 955px;

        &::placeholder {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #96A5B8;
        }
    }

    &__textarea {
        border: 1px solid #96A5B8;
        border-radius: 4px;
        width: 955px;
        max-width: 955px;
        padding: 12px 12px 12px 16px;
        resize: unset;
        font-weight: 500;
        max-height: 125px;
        font-size: 16px;
        line-height: 24px;
        color: #96A5B8;

        &::placeholder {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #96A5B8;
        }
    }

    &__btn {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #1294F2;
        background: #FFFFFF;
        border: 1px solid #1294F2;
        border-radius: 6px;
        width: 555px;
        padding: 12px;

        span:first-child {
            width: 16px;
            height: 16px;
        }

        svg {
            width: 16px;
            height: 16px;
        }
    }
}

.new-question-bottom {
    max-width: 1300px;
    &__text {
        display: flex;
        gap: 30px;
        align-items: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #1B2559;
        padding-bottom: 15px;
        border-bottom: 0.5px solid #96A5B8;
        margin-bottom: 10px;
    }

    &__item {
        margin-bottom: 15px;
        padding: 0 0 19px 0;
        &:nth-child(2) {
            padding-top: 10px;
        }
        &:last-child {
            input:first-child {
                color: #96A5B8;
                &::placeholder {
                    color: #96A5B8;
                }
            }
        }
        border-bottom: 0.5px solid #96A5B8;

        // // //

        /* Customize the label (the container) */
        .container {
            display: block;
            padding-left: 85px;
            position: relative;
            cursor: pointer;
            font-weight: 400;
            @include adaptiv-value("font-size", 16, 12, 1);
            @include adaptiv-value("line-height", 24, 15, 1);
            color: #1B2559;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            padding-right: unset;
            margin: unset;
        }

        .container input:nth-child(1) {
            width: 860px;
            background: unset;
        }

        /* Hide the browser's default checkbox */
        .container input:nth-child(2) {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
            left: 0;
            top: 0;
            width: 24px;
            height: 24px;
            z-index: 1;
        }

        /* Create a custom checkbox */
        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            @include adaptiv-value("height", 24, 20, 1);
            @include adaptiv-value("width", 24, 20, 1);
            border: 2px solid #96A5B8;
            border-radius: 6px;
        }

        /* On mouse-over, add a grey background color */
        .container:hover input:nth-child(2)~.checkmark {}

        /* When the checkbox is checked, add a blue background */
        .container input:nth-child(2)~.checkmark {}

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }

        /* Show the checkmark when checked */
        .container input:nth-child(2):checked~.checkmark:after {
            display: block;
        }

        /* Style the checkmark/indicator */
        .container .checkmark:after {
            width: 11px;
            height: 8px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            background-image: url(../../../public/images/reg-two-tick-icon.svg);
            background-repeat: no-repeat;
            background-size: cover;
        }

        // // // 
    }
}
</style>