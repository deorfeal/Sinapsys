<template>
    <div class="big-wrapper">
        <Aside :activeLink="1" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Каталог'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
            <main class="main main-new-curs">
                <div class="main__new-curs-top new-curs-top">
                    <a class="new-curs-top__link" href="#">
                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                fill="#1B2559" />
                        </svg>
                        <span>
                            Новый курс
                        </span>
                    </a>
                    <div class="new-curs-top__inner">
                        <div class="new-curs-top__content new-curs-top-content">
                            <div class="new-curs-top-content__buttons">
                                <button class="new-curs-top-content__button-btn" type="button" data-filter=".item-first">
                                    Описание
                                </button>
                                <button class="new-curs-top-content__button-btn" type="button" data-filter=".item-second">
                                    Настройки
                                </button>
                            </div>
                        </div>
                        <p class="new-curs-top__text">
                            Текущий язык: русский
                        </p>
                        <button class="new-curs-top__btn" type="button">
                            Сохранить
                        </button>
                    </div>
                </div>
                <div class="new-curs__inner">
                    <div class="new-curs__body new-curs-body mix item-first">
                        <div class="new-curs-body__item">
                            <p class="new-curs-body__item-text">
                                Название
                            </p>
                            <input class="new-curs-body__item-input" type="text" placeholder="Электронная почта">
                        </div>
                        <div class="new-curs-body__item">
                            <p class="new-curs-body__item-text">
                                Тема
                            </p>
                            <input class="new-curs-body__item-input" type="text" placeholder="Кибербезопасность">
                        </div>
                        <div class="new-curs-body__item">
                            <p class="new-curs-body__item-text">
                                Описание
                            </p>
                            <textarea class="new-curs-body__item-textarea" name="" id="" cols="30" rows="10"
                                placeholder="Описание......"></textarea>
                        </div>
                        <div class="new-curs-body__download new-curs-body-download">
                            <p class="new-curs-body-download__text">
                                Обложка курса
                            </p>
                            <div class="new-curs-body-download__box">
                                <a class="new-curs-body-download__box-text" href="#">
                                    <span>
                                        <svg width="25" height="22" viewBox="0 0 25 22" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M20.5071 13.1221C20.242 13.1225 19.9878 13.228 19.8003 13.4155C19.6128 13.603 19.5073 13.8572 19.5068 14.1225V16.5233C19.5064 16.6823 19.4431 16.8348 19.3305 16.9472C19.2181 17.0597 19.0657 17.1231 18.9066 17.1235H6.10185C5.94282 17.1231 5.79035 17.0597 5.67796 16.9472C5.56542 16.8348 5.50205 16.6823 5.50165 16.5233V14.1225C5.50165 13.765 5.311 13.4348 5.00151 13.256C4.69203 13.0774 4.31072 13.0774 4.00111 13.256C3.69163 13.4348 3.50098 13.765 3.50098 14.1225V16.5233C3.50178 17.2128 3.77616 17.8739 4.26369 18.3615C4.75124 18.849 5.4124 19.1234 6.10186 19.1242H18.9067C19.5961 19.1234 20.2573 18.849 20.7448 18.3615C21.2324 17.8739 21.5068 17.2128 21.5075 16.5233V14.1225C21.5071 13.8572 21.4016 13.603 21.2141 13.4155C21.0266 13.228 20.7724 13.1225 20.5072 13.1221H20.5071Z"
                                                fill="#1294F2" />
                                            <path
                                                d="M12.5045 1.11817C12.2394 1.11857 11.9851 1.22414 11.7977 1.41158C11.6101 1.59915 11.5045 1.8533 11.5041 2.11856V11.1866L8.3431 8.55276C8.13919 8.38328 7.87634 8.30155 7.61225 8.32553C7.34832 8.34951 7.10447 8.47733 6.93459 8.68082C6.76498 8.88474 6.68325 9.14745 6.70723 9.41154C6.73135 9.67561 6.85903 9.91932 7.06252 10.0893L11.8642 14.0909C11.9148 14.1267 11.9683 14.1577 12.0243 14.1837C12.0609 14.2082 12.0991 14.2301 12.1388 14.2492C12.3719 14.3474 12.6347 14.3474 12.8679 14.2492C12.9064 14.2301 12.944 14.2084 12.9799 14.1845C13.0359 14.1584 13.0895 14.1273 13.14 14.0917L17.9417 10.0901C18.1534 9.91397 18.2832 9.65833 18.3003 9.38354C18.3176 9.10862 18.2206 8.83878 18.0325 8.63769C17.8444 8.4366 17.5817 8.32191 17.3062 8.32071C17.0723 8.32111 16.8459 8.40323 16.666 8.55275L13.5049 11.1866V2.11856C13.5045 1.85328 13.3989 1.59911 13.2114 1.41157C13.0239 1.22414 12.7696 1.11857 12.5045 1.11816L12.5045 1.11817Z"
                                                fill="#1294F2" />
                                        </svg>
                                    </span>
                                    <span>
                                        Загрузить
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <section class="new-curs__content new-curs-content mix item-second">
                        <h2 class="new-curs-content__title">
                            Настройка
                        </h2>
                        <div class="new-curs-content__inner">
                            <div class="new-curs-content__item new-curs-content-item">
                                <p class="new-curs-content-item__text">
                                    Сертификация
                                </p>
                                <label class="container">

                                    Выдать сертификат после завершения курса

                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="new-curs-content__item new-curs-content-item">
                                <p class="new-curs-content-item__text">
                                    Переназначение курса
                                </p>
                                <label class="container">

                                    Автоматически переназначать курс

                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="new-curs-content__item new-curs-content-item">
                                <p class="new-curs-content-item__text">
                                    Геймификация
                                </p>
                                <label class="container">

                                    Начислить за прохождение курса:

                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                </label>
                                <input class="new-curs-content-item__input" type="text" placeholder="200">
                                <p class="new-curs-content-item__subtext">px</p>
                            </div>
                            <div class="new-curs-content__item new-curs-content-item">
                                <p class="new-curs-content-item__text">
                                    Самостоятельная регистрация
                                </p>
                                <label class="container">

                                    Разрешить учащимся самостоятельно записываться на курс из Каталога

                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                </label>

                            </div>
                            <div class="new-curs-content__item new-curs-content-item">
                                <p class="new-curs-content-item__text">
                                    Досрочная сдача
                                </p>
                                <label class="container">

                                    Досрочная сдача тестов разрешена

                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <h2 class="new-curs-content__title">
                            Автоматическое назначение
                        </h2>
                        <p class="new-curs-content__text">
                            Курс автоматически будет назначен учащимся при выполнении любого из перечисленных ниже правил.
                        </p>
                        <div class="new-curs-content__row">
                            <p class="new-curs-content__row-text">
                                Когда учащийся добавлен в группу

                            </p>
                            <NewCursSelect :options="['Фин кафедра', 'Фин кафедра 1', 'Фин кафедра 2']" :default="'Фин кафедра'" class="select" />
                        </div>
                        <div class="new-curs-content__wrap">
                            <a class="new-curs-content__link" href="#">
                                <span>
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25.833 14.6663H17.833V6.66634C17.833 6.31272 17.6925 5.97358 17.4425 5.72353C17.1924 5.47348 16.8533 5.33301 16.4997 5.33301C16.1461 5.33301 15.8069 5.47348 15.5569 5.72353C15.3068 5.97358 15.1663 6.31272 15.1663 6.66634V14.6663H7.16634C6.81272 14.6663 6.47358 14.8068 6.22353 15.0569C5.97348 15.3069 5.83301 15.6461 5.83301 15.9997C5.83301 16.3533 5.97348 16.6924 6.22353 16.9425C6.47358 17.1925 6.81272 17.333 7.16634 17.333H15.1663V25.333C15.1663 25.6866 15.3068 26.0258 15.5569 26.2758C15.8069 26.5259 16.1461 26.6663 16.4997 26.6663C16.8533 26.6663 17.1924 26.5259 17.4425 26.2758C17.6925 26.0258 17.833 25.6866 17.833 25.333V17.333H25.833C26.1866 17.333 26.5258 17.1925 26.7758 16.9425C27.0259 16.6924 27.1663 16.3533 27.1663 15.9997C27.1663 15.6461 27.0259 15.3069 26.7758 15.0569C26.5258 14.8068 26.1866 14.6663 25.833 14.6663Z"
                                            fill="#1294F2" />
                                    </svg>
                                </span>
                                <span>
                                    Добавить правило
                                </span>
                            </a>
                        </div>
                    </section>
                </div>
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
    mounted() {
        var mixer = mixitup('.new-curs__inner', {
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

.main-new-curs {
    @include adaptiv-value("padding-top", 30, 30, 1);
    @include adaptiv-value("padding-right", 55, 30, 1);
    @include adaptiv-value("padding-bottom", 40, 30, 1);
    @include adaptiv-value("padding-left", 55, 30, 1);
}

.new-curs-top {
    &__inner {
        display: flex;
        padding-bottom: 10px;
        align-items: center;
        border-bottom: 0.5px solid #96A5B8;
    }

    &__link {
        display: flex;
        align-items: center;
        font-weight: 500;
        gap: 10px;
        color: #1B2559;
        @include adaptiv-value("font-size", 24, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("margin-bottom", 45, 30, 1);
    }

    &__text {
        font-weight: 400;
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 16, 1);
        margin-top: auto;
        margin-bottom: auto;
        text-align: right;
        color: #1B2559;
        margin-left: auto;
    }

    &__btn {
        font-weight: 500;
        @include adaptiv-value("font-size", 20, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("padding", 16, 12, 1);
        @include adaptiv-value("width", 160, 130, 1);
        @include adaptiv-value("max-width", 160, 130, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        margin-left: 15px;
        background: #1294F2;
        border-radius: 6px;
    }
}

.new-curs-top-content {
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

.new-curs__inner {
    @include adaptiv-value("margin-top", 45, 20, 1);
}

.new-curs-body {
    display: flex;
    flex-direction: column;
    gap: 25px;

    &__item {
        display: flex;
        @include adaptiv-value("gap", 75, 20, 1);
        align-items: flex-start;
    }

    &__item-text {
        @include adaptiv-value("width", 140, 90, 1);
        @include adaptiv-value("max-width", 140, 90, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 16, 1);
        font-weight: 400;
        color: #1B2559;
    }

    &__item-input {
        @include adaptiv-value("padding-top", 12, 8, 1);
        @include adaptiv-value("padding-right", 12, 8, 1);
        @include adaptiv-value("padding-bottom", 12, 8, 1);
        @include adaptiv-value("padding-left", 16, 12, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 16, 1);
        font-weight: 500;
        color: #96A5B8;
        min-width: 390px;
        border: 1px solid #96A5B8;
        border-radius: 4px;

        &::placeholder {
            @include adaptiv-value("font-size", 16, 14, 1);
            @include adaptiv-value("line-height", 24, 16, 1);
            color: #96A5B8;
        }
    }

    &__item-textarea {
        font-weight: 500;
        min-width: 610px;
        @include adaptiv-value("min-height", 290, 150, 1);
        @include adaptiv-value("padding-top", 12, 8, 1);
        @include adaptiv-value("padding-right", 12, 8, 1);
        @include adaptiv-value("padding-bottom", 12, 8, 1);
        @include adaptiv-value("padding-left", 16, 12, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 16, 1);
        color: #96A5B8;
        resize: unset;
        border: 1px solid #96A5B8;
        border-radius: 4px;

        &::placeholder {
            font-weight: 500;
            @include adaptiv-value("font-size", 16, 14, 1);
            @include adaptiv-value("line-height", 24, 16, 1);
            color: #96A5B8;
        }
    }
}

.new-curs-body-download {
    display: flex;
    align-items: flex-start;
    @include adaptiv-value("gap", 75, 20, 1);

    &__text {
        font-weight: 400;
        @include adaptiv-value("width", 140, 90, 1);
        @include adaptiv-value("max-width", 140, 90, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 16, 1);
        color: #1B2559;

    }

    &__box {
        min-width: 610px;
        min-height: 200px;
        background: #FFFFFF;
        display: flex;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        border: 1px solid #96A5B8;
        border-radius: 4px;

        &:hover {
            .new-curs-body-download__box-text {
                opacity: 1;
            }
        }

    }

    &__box-text {
        opacity: 0;
        transition: opacity 0.3s;
        @include adaptiv-value("gap", 10, 5, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        @include adaptiv-value("font-size", 20, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        width: 220px;
        @include adaptiv-value("padding", 12, 8, 1);
        max-width: 220px;

        border: 1px solid #1294F2;
        border-radius: 6px;
        color: #1294F2;

        span:first-child {
            @include adaptiv-value("width", 25, 16, 1);
            @include adaptiv-value("height", 22, 14, 1);
            svg {
                @include adaptiv-value("width", 25, 16, 1);
                @include adaptiv-value("height", 22, 14, 1);
            }
        }
    }
}

.new-curs-content {
    margin-top: 25px;

    &__wrap {
        max-width: 715px;
        display: flex;
        justify-content: flex-end;
        @include adaptiv-value("min-width", 715, 300, 1);
    }

    &__title {
        font-weight: 600;
        @include adaptiv-value("font-size", 24, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("margin-bottom", 25, 15, 1);
        color: #1B2559;

        &:nth-child(3) {
            @include adaptiv-value("margin-bottom", 15, 10, 1);
        }
    }

    &__inner {
        @include adaptiv-value("margin-bottom", 50, 30, 1);
        display: flex;
        flex-direction: column;
        gap: 25px;
      

        /* Customize the label (the container) */
        .container {
            display: block;
            position: relative;
            @include adaptiv-value("padding-left", 36, 30, 1);
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

        /* Hide the browser's default checkbox */
        .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        /* Create a custom checkbox */
        .checkmark {
            position: absolute;
            @include adaptiv-value("top", 0, -3, 1);
            left: 0;
            @include adaptiv-value("height", 24, 20, 1);
            @include adaptiv-value("width", 24, 20, 1);
            border: 2px solid #1294F2;
            border-radius: 6px;
        }

        /* On mouse-over, add a grey background color */
        .container:hover input~.checkmark {}

        /* When the checkbox is checked, add a blue background */
        .container input:checked~.checkmark {}

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }

        /* Show the checkmark when checked */
        .container input:checked~.checkmark:after {
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
            background-image: url(../../public/images/new-curs-tick-icon-blue.svg);
            background-repeat: no-repeat;
            background-size: cover;
        }

        // // // 
    }

    &__text {
        font-weight: 400;
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 16, 1);
        color: #60678B;
        @include adaptiv-value("margin-bottom", 25, 15, 1);
    }

    &__row {
        @include adaptiv-value("gap", 25, 15, 1);
        display: flex;
        align-items: center;
        max-width: 715px;
        @include adaptiv-value("min-width", 715, 300, 1);
        @include adaptiv-value("margin-bottom", 25, 20, 1);
        .custom-select-new-curs {
            margin-left: auto;
        }
    }

    &__row-text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1B2559;
    }

    &__link {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-weight: 500;
    
        background: #FFFFFF;
        border: 1px solid #1294F2;
        border-radius: 6px;
        @include adaptiv-value("padding", 12, 10, 1);
        @include adaptiv-value("width", 235, 200, 1);
        @include adaptiv-value("max-width", 235, 200, 1);
        color: #1294F2;

        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 16, 1);
        span:first-child {
            width: 16px;
            height: 16px;

            svg {
                width: 16px;
                height: 16px;
            }
        }
    }
}

.new-curs-content-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @include adaptiv-value("gap", 20, 15, 1);
    &__text {
        font-weight: 400;
        @include adaptiv-value("font-size", 16, 13, 1);
        @include adaptiv-value("line-height", 24, 15, 1);
        color: #1B2559;
        @include adaptiv-value("width", 220, 150, 1);
        @include adaptiv-value("max-width", 220, 150, 1);
        @include adaptiv-value("min-width", 220, 150, 1);
    }

    &__input {
        margin-left: 20px;
        margin-right: 10px;

        font-weight: 500;
        @include adaptiv-value("font-size", 16, 13, 1);
        @include adaptiv-value("line-height", 24, 15, 1);
        color: #96A5B8;
        background: #FFFFFF;
        border: 1px solid #96A5B8;
        border-radius: 6px;
        @include adaptiv-value("padding-top", 5, 5, 1);
        @include adaptiv-value("padding-right", 10, 5, 1);
        @include adaptiv-value("padding-bottom", 5, 5, 1);
        @include adaptiv-value("padding-left", 10, 5, 1);
        @include adaptiv-value("width", 52, 40, 1);
        @include adaptiv-value("max-width", 52, 45, 1);

        &::placeholder {
            font-weight: 500;
            @include adaptiv-value("font-size", 16, 13, 1);
            @include adaptiv-value("line-height", 24, 15, 1);
            color: #96A5B8;
        }
    }

    &__subtext {
        @include adaptiv-value("font-size", 16, 13, 1);
        @include adaptiv-value("line-height", 24, 15, 1);
        color: #1B2559;
    }
}
@media (max-width: 1000px) {
    .new-curs-body__item-textarea {
        min-width: unset;
        width: 100%;
    }
    .new-curs-body-download__box{
        min-width: unset;
        width: 100%;
    }
    .new-curs-body__item-text {
        @include adaptiv-value("min-width", 140, 90, 1);
    }
    .new-curs-body-download__text {
        @include adaptiv-value("min-width", 140, 90, 1);
    }
}
@media (max-width: 800px) {
    .new-curs-top__inner {
        flex-direction: column;
        align-items: flex-start;
        @include adaptiv-value("gap", 20, 10, 1);
    }
    .new-curs-top__text {
        margin-left: unset;
        margin-right: auto;
        @include adaptiv-value("margin-top", 30, 20, 1);
    }
    .new-curs-top__btn {
        margin-left: 0;
    }
}
@media (max-width: 750px) {
    .new-curs-body__item-input {
        min-width: unset;
        width: 100%;
    }
}
@media (max-width: 550px) {
    .new-curs-content__row {
        flex-direction: column;
        align-items: flex-start;
    }
    .new-curs-content__wrap {
        align-items: flex-start;
        justify-content: flex-start;
    }
    .new-curs-content-item {
        flex-direction: column;
        align-items: flex-start;
    }
    .new-curs-content-item__input {
        margin-left: 0;
    }
    .new-curs-content-item__subtext {
        margin-top: -10px;
    }
    .new-curs-content__row .custom-select-new-curs {
        margin-left: unset;
    }
}
@media (max-width: 450px) {
    .new-curs-body__item {
        flex-direction: column;
    }
    .new-curs-body-download {
        flex-direction: column;
    }
    .new-curs-body-download__text {
        width: unset;
        max-width: unset;
    }
    .new-curs-body-download {
        gap: 10px;
    }
    .new-curs-body__item-text {
        width: unset;
        max-width: unset;
    }
    .new-curs-body__item {
        gap: 10px;
    }
}
</style>