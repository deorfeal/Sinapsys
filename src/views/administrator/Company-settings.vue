<template>
    <div class="biggest-wrapper">
    <div class="big-wrapper">
        <Aside :activeLink="5" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Настройки'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
            <main class="main main-company-settings">
                <form class="main__company-settings company-settings" action="#">
                    <div class="company-settings__top company-settings-top">
                        <a class="company-settings-top__img" data-fancybox href="#add-logo">
                            <img class="company-settings-top__img-image" src="../../../public/images/company-setting-img.svg"
                                alt="company-icon">
                        </a>
                        <div class="company-settings-top__box">
                            <h2 class="company-settings-top__box-title">
                                Компания
                                &lt;&lt;SINAPSYS&gt;&gt;
                            </h2>
                            <p class="company-settings-top__box-text">
                                Бин: 1213213132131
                                <span></span>
                            </p>
                            <p class="company-settings-top__box-text">
                                Адрес: город Астана, улица Мангилик Ел 53
                                <span></span>
                            </p>
                            <p class="company-settings-top__box-text">
                                Вид деятельности: Недвижимость
                                <span></span>
                            </p>
                        </div>
                        <button class="company-settings-top__btn" type="submit">
                            Сохранить
                        </button>
                    </div>
                    <div class="company-settings__bottom company-settings-bottom">
                        <div class="company-settings-bottom__wrapper">
                            <div class="company-settings-bottom__item company-settings-bottom-item">
                                <h3 class="company-settings-bottom-item__title">
                                    Информация о лицензии
                                </h3>
                                <div class="company-settings-bottom-item__row">
                                    <p class="company-settings-bottom-item__row-text">
                                        Срок:
                                    </p>
                                    <p class="company-settings-bottom-item__row-text">
                                        с 21 июля 2022 года до 21 ноября 2022 года
                                    </p>
                                </div>
                                <div class="company-settings-bottom-item__row">
                                    <p class="company-settings-bottom-item__row-text">
                                        Общее количество свободных слотов обучения
                                    </p>
                                    <p class="company-settings-bottom-item__row-text">
                                        270
                                    </p>
                                </div>
                                <div class="company-settings-bottom-item__row">
                                    <p class="company-settings-bottom-item__row-text">
                                        Общее количество слотов обучения
                                    </p>
                                    <p class="company-settings-bottom-item__row-text">
                                        106
                                    </p>
                                </div>
                            </div>
                            <div class="company-settings-bottom__item company-settings-bottom-item">
                                <h3 class="company-settings-bottom-item__title">
                                    Дополнительно
                                </h3>
                                <div class="company-settings-bottom-item__row">
                                    <p class="company-settings-bottom-item__row-text">
                                        Наименование партнера
                                    </p>
                                    <p class="company-settings-bottom-item__row-text">
                                        Sinapsys
                                    </p>
                                </div>
                                <label class="container">
                                    Имитация фишинговых атак включена
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div class="company-settings-bottom-item__column">
                            <h3 class="company-settings-bottom-item__column-title">
                                Обратная связь
                            </h3>
                            <p class="company-settings-bottom-item__column-text">
                                Опишите вашу задачу и желаемый функционал. Наша продуктовая команда будет признательна
                                вам
                                за обратную связь.
                            </p>
                            <a class="company-settings-bottom-item__column-link" href="#">
                                Написать
                            </a>
                        </div>

                    </div>
                </form>
                <div class="main-company-settings__add-logo add-logo" id="add-logo">
                    <div class="add-logo__top">
                        <p class="add-logo__top-text">
                            Добавить логотип
                        </p>
                    </div>
                    <div class="add-logo__inner">
                        <p class="add-logo__text">
                            Вы можете изменить логотип компании. <br>
                            Он появится во всех интерфейсах, относящихся к компании, включая <br>
                            интерфейсы сайта для
                            пользователей. <br>
                            Размер файла не должен превышать 500 Kb, поддерживаемые форматы: jpeg, png, gif, bmp
                        </p>
                        <div class="add-logo__bottom">
                            <button class="add-logo__bottom-btn" type="button">
                                Отменить
                            </button>
                            <div class="add-logo__bottom-input">
                                <input type="file">
                                <span>
                                    Выбрать логотип
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
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
export default {
    components: {
        Aside,
        Header,
        Footer,
    },
    data() {
        return {
            sideMenuActive: false,
        }
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
    }

}
</script>


<style lang="scss">
@import '../../assets/scss/vars';

.main-company-settings {
    @include adaptiv-value("padding-top", 30, 30, 1);
    @include adaptiv-value("padding-right", 55, 30, 1);
    @include adaptiv-value("padding-bottom", 20, 30, 1);
    @include adaptiv-value("padding-left", 55, 30, 1);
}

// 
.company-settings {}

.company-settings-top {
    background: #FFFFFF;
    border-radius: 16px;
    padding: 40px 45px 40px 35px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;

    &__img {
        @include adaptiv-value("width", 185, 140, 1);
        .company-settings-top__img-image {
            width: 100%;
        }
    }

    &__box {
        margin-left: 40px;
        margin-right: auto;
    }

    &__box-title {
        font-weight: 600;

        @include adaptiv-value("font-size", 24, 18, 1);
        @include adaptiv-value("line-height", 24, 20, 1);
        @include adaptiv-value("margin-bottom", 30, 20, 1);
        color: #1B2559;
    }

    &__box-text {
        font-weight: 500;
        @include adaptiv-value("font-size", 20, 16, 1);
        @include adaptiv-value("line-height", 24, 20, 1);
        color: #1B2559;
        margin-bottom: 10px;
    }

    &__btn {
        font-weight: 500;
        border-radius: 6px;
        text-align: center;
        padding: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-start;
        margin-left: 30px;

        @include adaptiv-value("font-size", 20, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("width", 145, 130, 1);
        @include adaptiv-value("max-width", 145, 130, 1);

        transition: background 0.3s, border 0.3s, color 0.3s;
        color: #1294F2;
        background: #fff;
        border: 1px solid #1294F2;
        transition: border 0.3s, background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }
}

.company-settings-bottom {
    align-items: center;
    justify-content: space-between;
    display: flex;
    @include adaptiv-value("padding-top", 60, 20, 1);
    @include adaptiv-value("padding-right", 45, 20, 1);
    @include adaptiv-value("padding-bottom", 60, 20, 1);
    @include adaptiv-value("padding-left", 35, 20, 1);
    background: #FFFFFF;
    border-radius: 16px;
    @include adaptiv-value("gap", 30, 20, 1);
}

.company-settings-bottom-item {
    //

    .container {
        display: block;
        position: relative;
        @include adaptiv-value("padding-left", 42, 30, 1);
        cursor: pointer;
        font-weight: 400;
        @include adaptiv-value("font-size", 20, 12, 1);
        @include adaptiv-value("line-height", 24, 15, 1);
        color: #96A5B8;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding-right: unset;
        margin: unset;
        @include adaptiv-value("margin-left", 55, 20, 1);
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
        border: 2px solid #96A5B8;
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
        background-image: url(../../../public/images/reg-two-tick-icon.svg);
        background-repeat: no-repeat;
        background-size: cover;
    }

    // // // 

    // // 

    &__title {
        font-weight: 500;
    
        @include adaptiv-value("font-size", 20, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("margin-bottom", 25, 15, 1);
        color: #1B2559;
    }

    &__row {
        @include adaptiv-value("padding-left", 55, 20, 1);
        margin-bottom: 25px;
        display: flex;
        @include adaptiv-value("gap", 55, 10, 1);
        align-items: flex-start;
    }

    &__row-text {
        font-weight: 400;
        @include adaptiv-value("width", 270, 140, 1);
        @include adaptiv-value("font-size", 20, 14, 1);
        @include adaptiv-value("line-height", 24, 16, 1);
        color: #96A5B8;
    }

    &__column {}

    &__column-title {
        font-weight: 500;
        @include adaptiv-value("font-size", 22, 18, 1);
        @include adaptiv-value("line-height", 24, 20, 1);
        color: #1B2559;
        @include adaptiv-value("margin-bottom", 35, 15, 1);
        max-width: 360px;
    }

    &__column-text {
        max-width: 580px;
        font-weight: 400;
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        color: #60678B;
        margin-bottom: 15px;
        @include adaptiv-value("margin-left", 55, 20, 1);
    }

    &__column-link {
        margin-left: auto;

        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #1294F2;

        background: #FFFFFF;
        border: 1px solid #1294F2;
        border-radius: 6px;

        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 16, 1);
        @include adaptiv-value("padding", 12, 10, 1);
        @include adaptiv-value("width", 150, 130, 1);
        @include adaptiv-value("max-width", 150, 130, 1);

        transition: background 0.3s, border 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }
}

// 

.add-logo {
    padding: 0 !important;
    display: none;
    max-width: 670px;
    border-radius: 12px;
    &__top {
        background: #1294F2;
        border-radius: 12px 12px 0px 0px;
    }

    &__top-text {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
        padding: 23px 21px 23px 21px;
    }

    &__inner {
        background: #FFFFFF;
        border: 1px solid #96A5B8;
        border-radius: 0 0 12px 12px;
        border-top: unset;
        padding: 20px 35px 45px 20px;
    }

    &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 25px;
        color: #1B2559;
    }

    &__bottom {
        display: flex;
        gap: 25px;
        justify-content: flex-end;
    }

    &__bottom-btn {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFFFFF;
        border: 1px solid #1294F2;
        border-radius: 6px;
        padding: 12px;
        width: 150px;
        color: #1294F2;

    }

    &__bottom-input {
        cursor: pointer;
        padding: 12px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        position: relative;
        text-align: center;
        color: #FFFFFF;

        background: #1294F2;
        border-radius: 6px;
        width: 195px;
        max-width: 195px;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
    }
}

@media (max-width: 1440px) {
    .company-settings-bottom {
        flex-direction: column;
    }
}
@media (max-width: 900px) {
    .company-settings-top {
        flex-direction: column;
    }
    .company-settings-top__box {
        margin-left: auto;
    }
    .company-settings-top__btn {
        margin-left: auto;
        margin-right: auto;
    }
    .company-settings-top__box {
        margin-bottom: 20px;
    }
}
@media (max-width: 850px) {
    .company-settings-bottom-item__row {
        flex-direction: column;
    }
    .company-settings-bottom {
        align-items: flex-start;
    }
}
@media (max-width: 500px) {
    .company-settings-top__box {
        text-align: center;
    }
}
</style>