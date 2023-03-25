<template>
    <div class="big-wrapper">
        <Aside :activeLink="2" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Каталог'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
            <main class="main main-import">
                <form class="main__import import">
                    <div class="import__top">
                        <a class="import__top-link" href="#">
                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                    fill="#1B2559" />
                            </svg>
                            <span>
                                Импорт и синхронизация
                            </span>
                        </a>
                        <button class="import__top-btn" type="submit">
                            Сохранить
                        </button>
                    </div>
                    <div class="import__inner">
                        <div class="import__content import-content">
                            <div class="import-content__buttons">
                                <button class="import-content__button-btn" type="button" data-filter=".item-first"
                                    @click="removeClassToParent">
                                    Импорт
                                </button>
                                <button class="import-content__button-btn" type="button" data-filter=".item-second"
                                    @click="addActClassToParent">
                                    Локальная служба Active Directory
                                </button>
                            </div>
                        </div>
                        <button class="import__btn" type="button">
                            История
                        </button>
                        <button class="import__button" type="button">
                            Синхронизация
                        </button>
                    </div>
                    <div class="import__wrapper">
                        <div class="import__body import-body mix item-first">
                            <div class="import-body__box import-box">
                                <h2 class="import-box__title">
                                    Описание
                                </h2>
                                <p class="import-box__text">
                                    Вы можете добавлять новые столбцы (например, «Отдел», «Регион» и пр.), но уже
                                    присутствующие
                                    в шаблоне поля обязательно должны остаться в файле в неизменном виде и быть
                                    заполнены.Обратите внимание: в режиме «Импортирование списка» все пользователи, которые
                                    когда-либо были загружены на платформу вашей компании, останутся там вне зависимости от
                                    того, присутствуют ли они в импортируемой таблице.Если вы хотите удалить учетную запись
                                    какого-либо сотрудника, пожалуйста, сделайте это на вкладке «Пользователи».
                                </p>
                            </div>
                            <h3 class="import-body__subtitle">
                                Загрузка списка импорта
                            </h3>
                            <p class="import-body__text">
                                Вложите файл
                            </p>
                            <a class="import-body__link" href="#">
                                Шаблон XLS для импорта пользователей
                            </a>
                            <div class="import-body__input">
                                <input class="import-body__input-inp" type="file" name="" id="">
                                <span>
                                    Выберите файл
                                </span>
                            </div>
                        </div>
                        <div class="import__info import-info mix item-second">
                            <div class="import-info__box import-box">
                                <h2 class="import-box__title">
                                    Описание
                                </h2>
                                <p class="import-box__text">
                                    Вы можете добавлять новые столбцы (например, «Отдел», «Регион» и пр.), но уже
                                    присутствующие
                                    в шаблоне поля обязательно должны остаться в файле в неизменном виде и быть
                                    заполнены.Обратите внимание: в режиме «Импортирование списка» все пользователи, которые
                                    когда-либо были загружены на платформу вашей компании, останутся там вне зависимости от
                                    того, присутствуют ли они в импортируемой таблице.Если вы хотите удалить учетную запись
                                    какого-либо сотрудника, пожалуйста, сделайте это на вкладке «Пользователи».
                                </p>
                            </div>
                            <h2 class="import-info__title">
                                Загрузка списка импорта
                            </h2>
                            <div class="import-info__check">
                                <label class="container">
                                    Тестовый токен включен
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="import-info__row">
                                <button class="import-info__row-btn" type="button">
                                    Перевыпустить токен
                                </button>
                                <button class="import-info__row-button" type="button">
                                    Отозвать токен
                                </button>
                            </div>
                            <div class="import-info__inner">
                                <div class="import-info__wrapper">
                                    <div class="import-info__item import-info-item">
                                        <h2 class="import-info-item__title">
                                            Обязательные параметры
                                        </h2>
                                        <div class="import-info-item__row">
                                            <p class="import-info-item__row-text">
                                                Почта
                                            </p>
                                            <NewCursSelect :options="['EmailAddress', 'EmailAddress 2', 'EmailAddress 3']"
                                                :default="'EmailAddress'" class="select" />
                                        </div>
                                        <div class="import-info-item__row">
                                            <p class="import-info-item__row-text">
                                                Краткое обращение
                                            </p>
                                            <NewCursSelect :options="['GivenName', 'GivenName 2', 'GivenName 3']"
                                                :default="'GivenName'" class="select" />
                                        </div>
                                        <div class="import-info-item__row">
                                            <p class="import-info-item__row-text">
                                                Полное обращение
                                            </p>
                                            <NewCursSelect :options="['DisplayName', 'DisplayName 2', 'DisplayName 3']"
                                                :default="'DisplayName'" class="select" />
                                        </div>
                                    </div>
                                    <div class="import-info__users import-info-users">
                                        <h2 class="import-info-users__title">
                                            Пользователи
                                        </h2>
                                        <div class="import-info-users__row">
                                            <p class="import-info-users__row-text">
                                                Группа Active Directory для синхронизации
                                            </p>
                                            <NewCursSelect
                                                :options="['Выбор одного ответа', 'Выбор одного ответа 2', 'Выбор одного ответа 3']"
                                                :default="'Выбор одного ответа'" class="select" />
                                        </div>
                                    </div>
                                </div>
                                <div class="import-info__column">
                                    <h2 class="import-info__column-title">
                                        Дополнительные параметры
                                    </h2>
                                    <p class="import-info__column-text">
                                        Дополнительные пользовательские поля отсутствуют. Вы можете добавить их и настроить
                                        правила в Настройках компании.
                                    </p>
                                    <label class="container">
                                        Автоматически применять правила для групп
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                </div>
                            </div>
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
        },
        addActClassToParent() {
            document.querySelector('.main-import').classList.add('main-import--active')
        },
        removeClassToParent() {
            document.querySelector('.main-import').classList.remove('main-import--active')
        }
    },
    data() {
        return {
            sideMenuActive: false,
        }
    },
    mounted() {
        var mixer = mixitup('.import__wrapper', {
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

.main-import--active {
    .import__btn {
        display: none;
    }

    .import__button {
        display: none;
    }

    .import__inner {
        padding-bottom: 38px;
    }

    .import__top-btn {
        display: flex;
    }
    .import__top {
        margin-bottom: 25px;
    }
}

.main-import {
    padding: 30px 55px 50px 55px;

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
        top: 0;
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

.import {
    &__top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 35px;
    }

    &__top-link {
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        display: flex;
        align-items: center;
        gap: 10px;
        color: #1B2559;
    }

    &__top-btn {
        display: none;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        text-align: center;
        justify-content: center;
        align-items: center;
        padding: 12px;

        color: #FFFFFF;

        background: #1294F2;
        /* blue */

        border: 1px solid #1294F2;
        border-radius: 6px;
    }

    &__inner {
        display: flex;
        padding-bottom: 20px;
        border-bottom: 0.5px solid #96A5B8;
    }

    &__btn {
        margin-left: auto;
        margin-right: 25px;

        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #1294F2;
        padding: 12px;

        background: #FFFFFF;
        border: 1px solid #1294F2;
        border-radius: 6px;
    }

    &__button {
        background: #1294F2;
        border: 1px solid #1294F2;
        border-radius: 6px;
        width: 185px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #fff;
    }
}

.import-content {
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
        font-size: 20px;
        line-height: 24px;
        color: #1B2559;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            bottom: -10px;
            width: 35px;
            left: 50%;
            height: 6px;
            transform: translateX(-50%);
            background: transparent;
            transition: background 0.3s;
            border-radius: 20px;
        }
    }
}

.import-body {
    padding-top: 20px;
    padding-bottom: 280px;

    &__subtitle {
        margin-top: 35px;
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        color: #1B2559;
        margin-bottom: 35px;

    }

    &__text {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #1B2559;
        margin-bottom: 25px;
    }

    &__link {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        text-decoration-line: underline;
        color: #1294F2;
        margin-bottom: 30px;
        display: block;
        max-width: 430px;
    }

    &__input {
        width: 220px;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #1294F2;
        padding: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
        border: 1px solid #1294F2;
        border-radius: 6px;
        position: relative;
    }

    &__input-inp {
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        cursor: pointer;
    }
}

.import-box {
    &__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 20px;
        color: #1B2559;
    }

    &__text {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #60678B;
    }
}

.import-info {
    padding-top: 35px;

    &__title {
        padding-top: 30px;
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 30px;
        color: #1B2559;
    }

    &__check {
        margin-bottom: 30px;
    }

    &__row {
        display: flex;
        align-items: center;
        gap: 25px;
        margin-bottom: 30px;
    }

    &__row-btn {
        padding: 12px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 235px;
        background: #1294F2;
        width: 235px;
        border: 1px solid #1294F2;
        border-radius: 6px;
        color: #FFFFFF;
    }

    &__row-button {
        padding: 12px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 180px;
        background: #fff;
        width: 180px;
        border: 1px solid #1294F2;
        border-radius: 6px;
        color: #1294F2;
    }

    &__inner {
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }

    &__wrapper {}

    &__column {
        max-width: 695px;
    }

    &__column-title {
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 20px;
        color: #1B2559;
    }

    &__column-text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #60678B;
        margin-bottom: 25px;
    }
}

.import-info-item {
    &__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 20px;
        color: #1B2559;

    }

    &__row {
        margin-bottom: 25px;
        gap: 35px;
        display: flex;
        align-items: center;
    }

    &__row-text {
        width: 195px;

        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1B2559;
    }
}

.import-info-users {
    &__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 20px;
        color: #1B2559;
    }

    &__row {
        display: flex;
        gap: 90px;
        display: flex;
        align-items: flex-start;
    }

    &__row-text {
        width: 140px;

        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1B2559;
    }
}
</style>