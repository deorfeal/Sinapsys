<template>
    <div class="big-wrapper">
        <Aside :activeLink="1" :sideMenuActive="this.sideMenuActive" :isAdmin="false"/>
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Мои Курсы'" @openSideMenu="SideMenuToActive" :isAdmin="false"/>
            <main class="main main-curs-preview">
                <section class="main__rurs-preview curs-preview">
                    <a class="curs-preview__link" href="#">
                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                fill="#1B2559" />
                        </svg>
                        <span>
                            Электронная почта
                        </span>
                    </a>
                    <div class="curs-preview__top curs-preview-top">
                        <div class="curs-preview-top__wrapper">
                            <img class="curs-preview-top__img" src="../../../public/images/curs-preview-img-1.png"
                                alt="img">
                            <div class="curs-preview-top__inner">
                                <div class="curs-preview-top__wrap">
                                    <div class="curs-preview-top__box curs-preview-top-box">
                                        <p class="curs-preview-top-box__date">
                                            Дата обновления: 18 июня
                                        </p>
                                        <h2 class="curs-preview-top-box__title">
                                            Электронная почта: Начальный
                                        </h2>
                                        <p class="curs-preview-top-box__subtitle">
                                            Кибербезопасность
                                        </p>
                                    </div>
                                    <div class="curs-preview-top__content curs-preview-top-content">
                                        <a class="curs-preview-top-content__link" href="#">
                                            Начать обучение
                                        </a>
                                        <p class="curs-preview-top-content__text">
                                            Доступные языки: русский
                                        </p>
                                    </div>
                                </div>
                                <div class="curs-preview-top__row">
                                    <p class="curs-preview-top__row-text">
                                        0/700 px
                                    </p>
                                    <div class="curs-preview-top__row-line">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="curs-preview-top__column">
                            <p class="curs-preview-top__column-text">
                                0/700 px
                            </p>
                            <div class="curs-preview-top__column-row">
                                <span>

                                </span>
                            </div>
                            <a class="curs-preview-top__column-link" href="#">
                                <span>
                                    Начать
                                </span>
                                <span>
Продолжить
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="curs-preview__content curs-preview-content">
                        <p class="curs-preview-content__text">
                            Описание
                        </p>
                        <p class="curs-preview-content__subtext">
                            Электронная почта — основной канал корпоративной связи. Она есть почти у каждого пользователя
                            Интернета, и именно с ней, как правило, связаны учетные записи других сервисов. Взлом
                            электронной почты позволяет получить доступ к вашей рабочей переписке или банковским данным.
                            Входящие письма от кибермошенников могут содержать файлы и ссылки, которые нанесут вред вам и
                            вашей организации. <br>
                            Ознакомьтесь с правилами безопасности, чтобы не стать жертвами кибермошенников.
                        </p>
                    </div>
                    <div class="curs-preview__bottom curs-preview-bottom">
                        <p class="curs-preview-bottom__text">
                            Материалы
                        </p>
                        <div class="curs-preview-bottom__inner">
                            <div class="curs-preview-bottom__item curs-preview-bottom-item">
                                <img class="curs-preview-bottom-item__img"
                                    src="../../../public/images/curs-preview-img-2.png" alt="img">
                                <div class="curs-preview-bottom-item__box">
                                    <h3 class="curs-preview-bottom-item__box-title">
                                        1. Что может угрожать моей электронной почте?
                                    </h3>
                                    <p class="curs-preview-bottom-item__box-info">
                                        <span>Пройдено</span>
                                        <span>В процессе</span>
                                    </p>
                                    <p class="curs-preview-bottom-item__box-text">
                                        Формат: урок
                                    </p>
                                </div>
                            </div>
                            <div class="curs-preview-bottom__item curs-preview-bottom-item">
                                <img class="curs-preview-bottom-item__img"
                                    src="../../../public/images/curs-preview-img-2.png" alt="img">
                                <div class="curs-preview-bottom-item__box">
                                    <h3 class="curs-preview-bottom-item__box-title">
                                        2. Что может угрожать моей электронной почте?
                                    </h3>
                                    <p class="curs-preview-bottom-item__box-info">
                                        <span>Пройдено</span>
                                        <span>В процессе</span>
                                    </p>
                                    <p class="curs-preview-bottom-item__box-text">
                                        Формат: урок
                                    </p>
                                </div>
                            </div>
                            <div class="curs-preview-bottom__item curs-preview-bottom-item">
                                <img class="curs-preview-bottom-item__img"
                                    src="../../../public/images/curs-preview-img-2.png" alt="img">
                                <div class="curs-preview-bottom-item__box">
                                    <h3 class="curs-preview-bottom-item__box-title">
                                        3. Что может угрожать моей электронной почте?
                                    </h3>
                                    <p class="curs-preview-bottom-item__box-info">
                                        <span>Пройдено</span>
                                        <span>В процессе</span>
                                    </p>
                                    <p class="curs-preview-bottom-item__box-text">
                                        Формат: урок
                                    </p>
                                </div>
                            </div>
                            <div class="curs-preview-bottom__item curs-preview-bottom-item">
                                <img class="curs-preview-bottom-item__img"
                                    src="../../../public/images/curs-preview-img-2.png" alt="img">
                                <div class="curs-preview-bottom-item__box">
                                    <h3 class="curs-preview-bottom-item__box-title">
                                        4. Что может угрожать моей электронной почте?
                                    </h3>
                                    <p class="curs-preview-bottom-item__box-info">
                                        <span>Пройдено</span>
                                        <span>В процессе</span>
                                    </p>
                                    <p class="curs-preview-bottom-item__box-text">
                                        Формат: урок
                                    </p>
                                </div>
                            </div>
                            <div class="curs-preview-bottom__item curs-preview-bottom-item">
                                <img class="curs-preview-bottom-item__img"
                                    src="../../../public/images/curs-preview-img-2.png" alt="img">
                                <div class="curs-preview-bottom-item__box">
                                    <h3 class="curs-preview-bottom-item__box-title">
                                        5. Что может угрожать моей электронной почте?
                                    </h3>
                                    <p class="curs-preview-bottom-item__box-info">
                                        <span>Пройдено</span>
                                        <span>В процессе</span>
                                    </p>
                                    <p class="curs-preview-bottom-item__box-text">
                                        Формат: урок
                                    </p>
                                </div>
                            </div>
                            <div class="curs-preview-bottom__item curs-preview-bottom-item">
                                <img class="curs-preview-bottom-item__img"
                                    src="../../../public/images/curs-preview-img-2.png" alt="img">
                                <div class="curs-preview-bottom-item__box">
                                    <h3 class="curs-preview-bottom-item__box-title">
                                        6. Что может угрожать моей электронной почте?
                                    </h3>
                                    <p class="curs-preview-bottom-item__box-info">
                                        <span>Пройдено</span>
                                        <span>В процессе</span>
                                    </p>
                                    <p class="curs-preview-bottom-item__box-text">
                                        Формат: тест
                                    </p>
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

.main-curs-preview {
    @include adaptiv-value('padding-top', 30, 30, 1);
    @include adaptiv-value('padding-right', 55, 30, 1);
    @include adaptiv-value('padding-bottom', 110, 30, 1);
    @include adaptiv-value('padding-left', 55, 30, 1);
}

// 

.curs-preview {

    &__link {
        display: flex;
        align-items: center;
        gap: 10px;

        font-weight: 500;
        @include adaptiv-value('font-size', 24, 16, 1);
        line-height: 24px;
        color: #1B2559;
        @include adaptiv-value('margin-bottom', 40, 35, 1);
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
}

.curs-preview-top {
    @include adaptiv-value('margin-bottom', 40, 5, 1);

    &__wrapper {
        display: flex;
        @include adaptiv-value('gap', 50, 10, 1);
        justify-content: flex-start;
    }

    &__wrap {
        width: 100%;
        gap: 20px;
        display: flex;
        justify-content: space-between;
    }

    &__img {
        object-fit: cover;
        border-radius: 16px;
        @include adaptiv-value('width', 365, 165, 1);
        @include adaptiv-value('height', 192, 135, 1);
    }

    &__inner {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 5px;
    }

    &__row {}

    &__row-text {
        font-weight: 400;
        @include adaptiv-value('font-size', 16, 12, 1);
        line-height: 24px;
        text-align: right;
        color: #1B2559;
        margin-bottom: 20px;
    }

    &__row-line {
        width: 100%;
        height: 6px;
        background: #E9EDF7;
        border-radius: 20px;

        span {}
    }

    &__column {
        display: none;
    }

    &__column-text {}

    &__column-row {}

    &__column-link {}
}

.curs-preview-top-box {

    &__date {
        font-weight: 500;
        @include adaptiv-value('font-size', 20, 12, 1);
        @include adaptiv-value('margin-bottom', 25, 0, 1);
        line-height: 24px;
        color: #1294F2;
    }

    &__title {
        font-weight: 500;
        line-height: 32px;
        color: #1B2559;

        @include adaptiv-value('font-size', 28, 14, 1);
        @include adaptiv-value('margin-bottom', 30, 0, 1);
    }

    &__subtitle {
        font-weight: 500;
        @include adaptiv-value('font-size', 24, 10, 1);
        line-height: 26px;
        color: #96A5B8;
    }
}

.curs-preview-top-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &__link {
        @include adaptiv-value('font-size', 20, 16, 1);
        @include adaptiv-value('margin-bottom', 25, 15, 1);
        background: #1294F2;
        border-radius: 6px;
        @include adaptiv-value('padding', 16, 6, 1);
        font-weight: 500;
        line-height: 24px;
        width: 230px;
        max-width: 230px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        color: #FFFFFF;

        border: 1px solid transparent;
        transition: background 0.3s, color 0.3s, border 0.3s;

        &:hover {
            background: #fff;
            color: #1294F2;
            border: 1px solid #1294F2;
        }
    }

    &__text {
        font-weight: 500;
        @include adaptiv-value('font-size', 20, 16, 1);
        @include adaptiv-value('margin-bottom', 30, 0, 1);
        line-height: 24px;
        color: #96A5B8;
        text-align: right;
    }

    &__row {}

    &__row-text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        text-align: right;
        color: #1B2559;
    }

    &__row-line {}
}

.curs-preview-content {

    &__text {
        font-weight: 600;
        line-height: 26px;
        color: #1B2559;

        @include adaptiv-value('font-size', 24, 16, 1);
        @include adaptiv-value('margin-bottom', 25, 10, 1);
    }

    &__subtext {
        font-weight: 400;
        @include adaptiv-value('font-size', 20, 12, 1);
        @include adaptiv-value('margin-bottom', 40, 25, 1);
        line-height: 24px;
        color: #60678B;
    }
}

.curs-preview-bottom {

    &__text {
        font-weight: 600;
        line-height: 26px;
        margin-bottom: 15px;
        color: #1B2559;

        @include adaptiv-value('font-size', 24, 16, 1);
    }

    &__inner {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}

.curs-preview-bottom-item {
    display: flex;
    align-items: center;
    @include adaptiv-value('gap', 35, 15, 1);

    &__img {
        object-fit: cover;
        @include adaptiv-value('width', 297, 167, 1);
        @include adaptiv-value('height', 127, 94, 1);
        border-radius: 6px;
    }

    &__box {}

    &__box-title {
        font-weight: 500;
        @include adaptiv-value('font-size', 20, 12, 1);
        @include adaptiv-value('line-height', 24, 15, 1);
        @include adaptiv-value('margin-bottom', 15, 2, 1);

        color: #1B2559;
    }

    &__box-info {
        display: none;
    }

    &__box-text {
        font-weight: 400;
        @include adaptiv-value('font-size', 16, 10, 1);
        line-height: 24px;
        color: #60678B;
    }
}

@media (max-width: 800px) {
    .curs-preview-top-content {
        display: none;
    }

    .curs-preview-top__row {
        display: none;
    }

    .curs-preview-top__column {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .curs-preview-top__column-text {
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        text-align: right;
        color: #1B2559;
        margin-bottom: 20px;
    }

    .curs-preview-top__column-row {
        height: 6px;
        width: 100%;
        background: #E9EDF7;
        border-radius: 15px;
        margin-bottom: 15px;
    }

    .curs-preview-top__column-link {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #1294F2;
        border-radius: 10px;
        padding: 12px;
        font-weight: 500;
        font-size: 15px;
        line-height: 24px;
        color: #FFFFFF;
        span:last-child {
            display: none;
        }
    }
}

@media (max-width: 550px) {
    .curs-preview-bottom-item {
        align-items: flex-start;
    }
}

// // </style>