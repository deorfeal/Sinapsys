<template>
    <div class="big-wrapper">
        <Aside :activeLink="0" :sideMenuActive="this.sideMenuActive" />
        <div class="wrapper">
            <Header :searchIsActive="true" :title="'Главная'" @openSideMenu="SideMenuToActive" />
            <main class="main main-main">
                <section class="main__top main-top">
                    <div class="main-top__level main-top-level">
                        <h2 class="main-top-level__title">
                            Ваш уровень
                        </h2>
                        <div class="main-top-level__inner">
                            <p class="main-top-level__text">
                                Уровень 2
                            </p>
                            <div class="main-top-level__row">
                                <span></span>
                            </div>
                            <p class="main-top-level__subtext">
                                1600 / 2000 xp
                            </p>
                            <div class="main-top-level__item main-top-level-item">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M27.4937 5.62687C27.3388 5.50157 27.1578 5.41257 26.964 5.36642C26.7702 5.32028 26.5685 5.31815 26.3737 5.36021L16.0004 7.69354L5.62707 5.33354C5.42924 5.28886 5.22382 5.2899 5.02644 5.33658C4.82907 5.38326 4.64495 5.47435 4.4881 5.60293C4.33124 5.7315 4.20578 5.89416 4.12127 6.07853C4.03676 6.2629 3.99542 6.46412 4.0004 6.66687V22.9335C3.99287 23.2418 4.09238 23.5431 4.282 23.7862C4.47162 24.0293 4.73963 24.1991 5.0404 24.2669L15.7071 26.6669H16.0004H16.2937L26.9604 24.2669C27.2612 24.1991 27.5292 24.0293 27.7188 23.7862C27.9084 23.5431 28.0079 23.2418 28.0004 22.9335V6.66687C27.9995 6.4666 27.9535 6.26911 27.8657 6.08906C27.778 5.90901 27.6509 5.75104 27.4937 5.62687ZM6.66707 8.33354L14.6671 10.1335V23.6669L6.66707 21.8669V8.33354ZM25.3337 21.8669L17.3337 23.6669V10.1335L25.3337 8.33354V21.8669Z"
                                        fill="#FBA63C" />
                                </svg>
                                <div class="main-top-level-item__box">
                                    <p class="main-top-level-item__box-procents">
                                        75%
                                    </p>
                                    <p class="main-top-level-item__box-text">
                                        процент успеваемости
                                    </p>
                                </div>
                            </div>
                            <div class="main-top-level__item main-top-level-item">
                                <svg width="32" height="33" viewBox="0 0 32 33" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.61314 5.13889C10.7801 3.64258 13.3275 2.84414 15.9331 2.84414C17.6631 2.84414 19.3763 3.19628 20.9749 3.88055C22.5735 4.56482 24.0262 5.56786 25.25 6.83257C26.4738 8.09728 27.4448 9.5989 28.1073 11.2518C28.7698 12.9046 29.1108 14.6763 29.1108 16.4655C29.1108 19.1602 28.3376 21.7942 26.8891 24.0344C25.4408 26.2744 23.3825 28.0199 20.9749 29.0504C18.5674 30.081 15.9184 30.3505 13.3628 29.8252C10.8072 29.2999 8.45928 28.0031 6.61611 26.0984C4.77291 24.1936 3.51732 21.7664 3.00861 19.1235C2.49989 16.4806 2.76101 13.7411 3.75881 11.2518C4.7566 8.7624 6.44609 6.63524 8.61314 5.13889ZM9.97485 25.6749C11.7382 26.8925 13.8117 27.5426 15.9331 27.5426C18.7778 27.5426 21.5054 26.3747 23.516 24.297C25.5264 22.2194 26.6553 19.4023 26.6553 16.4655C26.6553 14.2754 26.0268 12.1342 24.8491 10.3126C23.6713 8.4911 21.997 7.07086 20.0374 6.23206C18.0777 5.39323 15.9212 5.1737 13.8406 5.60138C11.7601 6.02905 9.84945 7.08459 8.35015 8.63398C6.85088 10.1833 5.83022 12.1569 5.41674 14.3051C5.00327 16.4532 5.21545 18.6798 6.02658 20.7034C6.83772 22.7271 8.21156 24.4573 9.97485 25.6749Z"
                                        fill="#5DC983" stroke="white" stroke-width="0.2" />
                                    <path
                                        d="M14.436 18.2891L12.3343 15.4776C12.1178 15.1901 11.7995 15.0033 11.4497 14.9583C11.0998 14.9133 10.747 15.0137 10.4688 15.2375C10.1906 15.4613 10.0098 15.7902 9.96625 16.1517C9.92268 16.5132 10.0199 16.8779 10.2364 17.1654L13.4629 21.4327C13.588 21.5962 13.7474 21.7282 13.9292 21.8185C14.1109 21.9089 14.3102 21.9552 14.5119 21.9541L14.436 18.2891ZM14.436 18.2891L14.4179 18.3138L14.4986 18.3728L14.5787 18.313L14.5604 18.2884L19.4444 11.6122H19.5043H19.5176L14.436 18.2891ZM19.5983 11.5712L19.6877 11.449C19.8791 11.2484 20.1301 11.118 20.402 11.0802C20.7257 11.0351 21.054 11.1246 21.3146 11.33C21.5753 11.5355 21.7472 11.8402 21.7912 12.1778C21.8352 12.5153 21.7476 12.8567 21.5483 13.1268L21.5483 13.1268L15.4806 21.3592C15.4806 21.3593 15.4805 21.3594 15.4804 21.3595C15.3658 21.5133 15.2189 21.6376 15.051 21.7233C14.8831 21.8089 14.6986 21.8536 14.5116 21.8541L14.5113 21.8541C14.3254 21.8551 14.1415 21.8124 13.9737 21.729C13.8059 21.6456 13.6584 21.5236 13.5425 21.3721C13.5425 21.3721 13.5424 21.372 13.5424 21.372L10.3163 17.1052C10.3163 17.1052 10.3163 17.1052 10.3163 17.1051C10.1155 16.8386 10.025 16.4999 10.0655 16.1637C10.1061 15.8275 10.2741 15.5225 10.5315 15.3154C10.7888 15.1084 11.1144 15.016 11.4369 15.0575C11.7594 15.099 12.0536 15.2713 12.2544 15.5377C12.2544 15.5377 12.2544 15.5378 12.2545 15.5378L14.4185 18.4327L14.4995 18.541L14.5793 18.4319L19.5983 11.5712Z"
                                        fill="#5DC983" stroke="white" stroke-width="0.2" />
                                </svg>

                                <div class="main-top-level-item__box">
                                    <p class="main-top-level-item__box-procents">
                                        100%
                                    </p>
                                    <p class="main-top-level-item__box-text">
                                        процент успеха
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="main-top__rait main-top-rait">
                        <h2 class="main-top-rait__title">
                            Рейтинг по организации
                        </h2>
                        <div class="main-top-rait__row main-top-rait-row">
                            <div class="main-top-rait-row__buttons">
                                <button class="main-top-rait-row__buttons-btn" type="button" data-filter=".item-first">
                                    Все время
                                </button>
                                <button class="main-top-rait-row__buttons-btn" type="button" data-filter=".item-second">
                                    Неделя
                                </button>
                                <button class="main-top-rait-row__buttons-btn" type="button" data-filter=".item-third">
                                    Месяц
                                </button>
                            </div>
                            <p class="main-top-rait-row__text">
                                xp
                            </p>
                        </div>
                        <div class="main-top-rait__inner">
                            <ul class="main-top-rait__list mix item-first">
                                <li class="main-top-rait__list-item">
                                    <span>
                                        1.
                                    </span>
                                    <p>
                                        Тамир Мейрек
                                    </p>
                                    <span>
                                        18000
                                    </span>
                                </li>
                                <li class="main-top-rait__list-item">
                                    <span>
                                        2.
                                    </span>
                                    <p>
                                        Асель Орынбасар
                                    </p>
                                    <span>
                                        16500
                                    </span>
                                </li>
                                <li class="main-top-rait__list-item">
                                    <span>
                                        3.
                                    </span>
                                    <p>
                                        Амир Едеев
                                    </p>
                                    <span>
                                        12000
                                    </span>
                                </li>
                                <li class="main-top-rait__list-item">
                                    <span>
                                        20.
                                    </span>
                                    <p>
                                        Кожабай Аида
                                    </p>
                                    <span>
                                        1600
                                    </span>
                                </li>
                            </ul>
                            <ul class="main-top-rait__list mix item-second">
                                <li class="main-top-rait__list-item">
                                    <span>
                                        1.
                                    </span>
                                    <p>
                                        Тамир Мейрек
                                    </p>
                                    <span>
                                        2000
                                    </span>
                                </li>
                                <li class="main-top-rait__list-item">
                                    <span>
                                        2.
                                    </span>
                                    <p>
                                        Асель Орынбасар
                                    </p>
                                    <span>
                                        16500
                                    </span>
                                </li>
                                <li class="main-top-rait__list-item">
                                    <span>
                                        3.
                                    </span>
                                    <p>
                                        Амир Едеев
                                    </p>
                                    <span>
                                        12000
                                    </span>
                                </li>
                                <li class="main-top-rait__list-item">
                                    <span>
                                        20.
                                    </span>
                                    <p>
                                        Кожабай Аида
                                    </p>
                                    <span>
                                        1600
                                    </span>
                                </li>
                            </ul>
                            <ul class="main-top-rait__list mix item-third">
                                <li class="main-top-rait__list-item">
                                    <span>
                                        1.
                                    </span>
                                    <p>
                                        Тамир Мейрек
                                    </p>
                                    <span>
                                        4000
                                    </span>
                                </li>
                                <li class="main-top-rait__list-item">
                                    <span>
                                        2.
                                    </span>
                                    <p>
                                        Асель Орынбасар
                                    </p>
                                    <span>
                                        16500
                                    </span>
                                </li>
                                <li class="main-top-rait__list-item">
                                    <span>
                                        3.
                                    </span>
                                    <p>
                                        Амир Едеев
                                    </p>
                                    <span>
                                        12000
                                    </span>
                                </li>
                                <li class="main-top-rait__list-item">
                                    <span>
                                        20.
                                    </span>
                                    <p>
                                        Кожабай Аида
                                    </p>
                                    <span>
                                        1600
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="main-top__advise main-top-advise">
                        <h2 class="main-top-advise__title">
                            Совет дня
                        </h2>
                        <a class="main-top-advise__link" href="#">
                            <img class="main-top-advise__link-img" src="../../../public/images/advise-img-1.png" alt="#">
                        </a>
                        <p class="main-top-advise__date">
                            Сегодня, 14:55
                        </p>
                        <a class="main-top-advise__text" href="#">
                            Вы можете добавлять новые столбцы (например, «Отдел», «Регион» и пр.), но уже
                        </a>
                    </div>
                </section>
                <section class="main__lessons lessons">
                    <h2 class="lessons__title">
                        Текущие уроки
                    </h2>
                    <div class="lessons__inner">
                        <div class="lessons__item lessons-item">
                            <img class="lessons-item__img" src="../../../public/images/lessons-img-1.png" alt="img">
                            <div class="lessons-item__inner">
                                <div class="lessons-item__box">
                                    <h3 class="lessons-item__box-title">
                                        Пароли и учетные записи
                                    </h3>
                                    <p class="lessons-item__box-text">
                                        Начальный
                                    </p>
                                    <p class="lessons-item__box-subtext">
                                        Можно ли сообщать свои пароли другим людям?

                                    </p>
                                </div>
                                <div class="lessons-item__content lessons-item-content">
                                    <div class="lessons-item-content__wrap">
                                        <div class="lessons-item-content__info">
                                            <p class="lessons-item-content__info-text">
                                                4
                                                <span>
                                                    Урок
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <a class="lessons-item-content__link" href="#">
                                        Продолжить
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="lessons__item lessons-item">
                            <img class="lessons-item__img" src="../../../public/images/lessons-img-2.png" alt="img">
                            <div class="lessons-item__inner">
                                <div class="lessons-item__box">
                                    <h3 class="lessons-item__box-title">
                                        Электронная
                                        почта
                                    </h3>
                                    <p class="lessons-item__box-text">
                                        Начальный
                                    </p>
                                    <p class="lessons-item__box-subtext">
                                        Что делать, если мою электронную почту взломали?
                                    </p>
                                </div>
                                <div class="lessons-item__content lessons-item-content">
                                    <div class="lessons-item-content__wrap">
                                        <div class="lessons-item-content__info">
                                            <p class="lessons-item-content__info-text">
                                                2
                                                <span>
                                                    Урок
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <a class="lessons-item-content__link" href="#">
                                        Продолжить
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="lessons__item lessons-item">
                            <img class="lessons-item__img" src="../../../public/images/lessons-img-3.png" alt="img">
                            <div class="lessons-item__inner">
                                <div class="lessons-item__box">
                                    <h3 class="lessons-item__box-title">
                                        Веб-сайты и интернет
                                    </h3>
                                    <p class="lessons-item__box-text">
                                        Начальный
                                    </p>
                                    <p class="lessons-item__box-subtext">
                                        ПО из Интернета: скрытая угроза
                                    </p>
                                </div>
                                <div class="lessons-item__content lessons-item-content">
                                    <div class="lessons-item-content__wrap">
                                        <div class="lessons-item-content__info">
                                            <p class="lessons-item-content__info-text">
                                                1
                                                <span>
                                                    Урок
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <a class="lessons-item-content__link" href="#">
                                        Продолжить
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="main__terms-popup terms-popup" id="terms-popup">
                    <div class="terms-popup__inner">
                        <h2 class="terms-popup__title">
                            Условия использования веб-сайта
                        </h2>
                        <ul class="terms-popup__list">
                            <li class="terms-popup__list-item">
                                <p class="terms-popup__list-text">
                                    ВНИМАНИЕ! Внимательно ознакомьтесь с положениями, описанными в данном соглашении, перед
                                    началом
                                    использования веб-сайта KASPERSKY AUTOMATED SECURITY AWARENESS PLATFORM (далее
                                    «Веб-сайт»).
                                </p>
                            </li>
                            <li class="terms-popup__list-item">
                                <p class="terms-popup__list-text">
                                    Использование Веб-сайта означает ваше безоговорочное согласие с настоящими Условиями
                                    использования. АО «Лаборатория Касперского» (далее Лаборатория Касперского,
                                    Правообладатель)
                                    оставляет за собой право без предварительных уведомлений в любое время и по своему
                                    усмотрению
                                    изменять настоящие Условия использования, а также модифицировать Веб-сайт или любую его
                                    функциональность. Продолжение использования Веб-сайта после внесения изменений означает
                                    принятие
                                    вами таких изменений. Если вы не согласны со всеми Условиями использования Веб-сайта, вы
                                    не
                                    должны использовать Веб-сайт.
                                </p>
                            </li>
                            <li class="terms-popup__list-item">
                                <p class="terms-popup__list-text">
                                    1. Права на интеллектуальную собственность
                                </p>
                            </li>
                            <li class="terms-popup__list-item">
                                <p class="terms-popup__list-text">
                                    Лаборатория Касперского является владельцем всех прав на Веб-сайт, включая как
                                    исключительные
                                    права, так и другие применимые виды прав. Лаборатория Касперского имеет все необходимые
                                    права,
                                    включая права на интеллектуальную собственность, и лицензии на опубликованные на
                                    Веб-сайте
                                    материалы и информацию, включая, но не ограничиваясь текстовыми, графическими, фото-,
                                    видео- и
                                    аудиоматериалами, а также программами для ЭВМ независимо от их вида (все вместе далее
                                    «Контент»).
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="terms-popup__entrance-form entrance-form__check">
                        <div class="entrance-form__check-box">
                            <label class="container">
                                <a href="#">
                                    Я прочитал(-а) условия пользования сервисом
                                </a>
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="entrance-form__check-box">
                            <label class="container">
                                <a href="#">
                                    Я согласен(-сна) с условиями пользования сервисом
                                </a>
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <button class="terms-popup__btn" type="button">
                        <span>
                            Согласится и
                        </span>
                        <span>
                            продолжить
                        </span>

                    </button>
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
export default {
    components: {
        Aside,
        Header,
        Footer
    },
    mounted() {
        var mixer = mixitup('.main-top-rait__inner', {
            load: {
                filter: '.item-first'
            },
            animation: {
                enable: false
            },
        })
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

.main-main {
    @include adaptiv-value('padding-top', 20, 30, 1);
    @include adaptiv-value('padding-bottom', 30, 30, 1);
    @include adaptiv-value('padding-right', 55, 30, 1);
    @include adaptiv-value('padding-left', 55, 30, 1);
}

.main-top {
    @include adaptiv-value('margin-bottom', 50, 25, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 55px;
}

.main-top-level {
    background: #FFFFFF;
    border-radius: 16px;
    @include adaptiv-value('padding-top', 30, 20, 1);
    @include adaptiv-value('padding-bottom', 40, 20, 1);
    @include adaptiv-value('padding-right', 50, 20, 1);
    @include adaptiv-value('padding-left', 40, 20, 1);
    flex-grow: 1;
    max-width: 450px;
    min-height: 390px;

    &__title {
        font-weight: 600;
        @include adaptiv-value('font-size', 24, 20, 1);
        @include adaptiv-value('line-height', 28, 24, 1);
        @include adaptiv-value('margin-bottom', 65, 20, 1);
        color: #1B2559;
    }

    &__inner {}

    &__text {
        font-weight: 500;
        line-height: 20px;
        color: #1B2559;
        @include adaptiv-value('font-size', 24, 20, 1);
        @include adaptiv-value('margin-bottom', 25, 20, 1);
    }

    &__row {
        background: #E9EDF7;
        height: 6px;
        border-radius: 10px;
        @include adaptiv-value('margin-bottom', 15, 10, 1);
        position: relative;
        @include adaptiv-value('width', 355, 265, 1);

        span {
            background: #1294F2;
            @include adaptiv-value('width', 240, 209, 1);
            height: 6px;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 10px;
        }
    }

    &__subtext {
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 25px;
        @include adaptiv-value('font-size', 16, 14, 1);
        @include adaptiv-value('margin-bottom', 25, 10, 1);
        color: #1B2559;
    }
}

.main-top-level-item {
    flex-grow: 1;
    display: flex;
    @include adaptiv-value('gap', 15, 10, 1);
    margin-bottom: 15px;

    &:last-child {
        margin-bottom: 0;

        .main-top-level-item__box-text {
            color: #5DC983;
        }
    }

    &__box {}

    &__box-procents {
        font-weight: 400;
        line-height: 24px;
        @include adaptiv-value('font-size', 20, 16, 1);
        color: #1B2559;
    }

    &__box-text {
        font-weight: 400;
        @include adaptiv-value('font-size', 16, 12, 1);
        line-height: 24px;
        color: #FBA63C;
    }
}

.main-top-rait {
    max-width: 450px;
    min-width: 450px;
    @include adaptiv-value('padding-top', 30, 20, 1);
    @include adaptiv-value('padding-bottom', 55, 35, 1);
    @include adaptiv-value('padding-right', 50, 10, 1);
    @include adaptiv-value('padding-left', 30, 20, 1);
    flex-grow: 1;
    background: #FFFFFF;
    border-radius: 16px;
    min-height: 390px;

    &__title {
        font-weight: 600;
        color: #1B2559;

        @include adaptiv-value('font-size', 24, 20, 1);
        @include adaptiv-value('margin-bottom', 40, 20, 1);
    }

    &__inner {}

    &__list {
        max-width: 370px;
        display: flex;
        flex-direction: column;
        @include adaptiv-value('gap', 25, 15, 1);
    }

    &__list-item {
        display: flex;
        font-weight: 400;
        line-height: 24px;
        color: #1B2559;
        @include adaptiv-value('gap', 15, 3, 1);
        @include adaptiv-value('font-size', 20, 16, 1);

        span:first-child {
            @include adaptiv-value('width', 30, 25, 1);
        }

        span:last-child {
            @include adaptiv-value('width', 60, 50, 1);
            color: #1294F2;
            text-align: right;
        }

        p {
            margin-right: auto;
            @include adaptiv-value('width', 190, 160, 1);
        }

        &:last-child {
            font-weight: 600;
        }
    }
}

.main-top-rait-row {
    display: flex;
    align-items: center;
    @include adaptiv-value('margin-bottom', 45, 15, 1);
    @include adaptiv-value('gap', 45, 10, 1);

    &__buttons {
        display: flex;
        gap: 20px;
        align-items: center;

        .mixitup-control-active {
            position: relative;

            &:hover {
                color: #1B2559;
            }

            &::before {
                content: '';
                width: 40px;
                height: 6px;
                border-radius: 10px;
                background: #1294F2;
                position: absolute;
                left: 50%;
                bottom: -12px;
                transform: translateX(-50%);
            }
        }
    }

    &__buttons-btn {
        font-weight: 400;
        @include adaptiv-value('font-size', 20, 16, 1);
        line-height: 24px;
        color: #1B2559;
        transition: color 0.3s;

        &:hover {
            color: #1294F2;
        }
    }

    &__text {
        font-weight: 500;
        @include adaptiv-value('font-size', 20, 16, 1);
        line-height: 24px;
        color: #1B2559;
    }
}

.main-top-advise {
    background: #FFFFFF;
    border-radius: 16px;
    min-height: 390px;
    max-width: 450px;
    @include adaptiv-value('padding', 30, 20, 1);

    &__title {
        font-weight: 600;
        @include adaptiv-value('font-size', 24, 20, 1);
        line-height: 24px;
        color: #1B2559;
        @include adaptiv-value('margin-bottom', 30, 20, 1);
    }

    &__link {
        display: block;

        @include adaptiv-value('margin-bottom', 20, 5, 1);
    }

    &__link-img {
        max-width: 100%;
    }

    &__date {
        font-weight: 400;
        @include adaptiv-value('font-size', 16, 12, 1);
        line-height: 24px;
        @include adaptiv-value('margin-bottom', 15, 0, 1);
        color: #1B2559;
    }

    &__text {
        font-weight: 400;
        @include adaptiv-value('font-size', 16, 14, 1);
        line-height: 24px;
        color: #1B2559;
        transition: color 0.3s;

        &:hover {
            color: #000;
        }
    }
}

// 

.lessons {
    &__title {
        font-weight: 600;
        @include adaptiv-value('margin-left', 55, 20, 1);
        @include adaptiv-value('font-size', 24, 20, 1);
        line-height: 27px;
        color: #1B2559;
        margin-bottom: 25px;
    }

    &__inner {
        display: flex;
        justify-content: space-between;
        gap: 50px;
    }
}

.lessons-item {
    padding: 8px 8px 20px 8px;
    background: #FFFFFF;
    border-radius: 16px;

    &:nth-child(2) {
        .lessons-item-content__info {
            border: 10px solid #EC4848;
        }
    }

    &:nth-child(3) {
        .lessons-item-content__info {
            border: 10px solid #5DC983;
        }
    }

    &__img {
        @include adaptiv-value('margin-bottom', 20, 15, 1);
    }

    &__inner {
        max-width: 370px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        gap: 5px;
    }

    &__box {}

    &__box-title {
        font-weight: 600;
        @include adaptiv-value('font-size', 20, 16, 1);
        line-height: 24px;
        @include adaptiv-value('margin-bottom', 20, 10, 1);
        color: #1B2559;
        max-width: 200px;
    }

    &__box-text {
        font-weight: 500;
        @include adaptiv-value('font-size', 16, 14, 1);
        line-height: 24px;
        color: #1B2559;
        margin-bottom: 10px;
    }

    &__box-subtext {
        font-weight: 500;
        @include adaptiv-value('font-size', 15, 12, 1);
        line-height: 24px;
        color: #AEB5D7;
        max-width: 250px;
    }
}

.lessons-item-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;

    &__wrap {
        border-radius: 100%;
        position: relative;
        &::before {
            content: '';
            width: 100%;
            height: 100%;
            background: transparent;
            border: 10px solid #CECECE;
            position: absolute;
            top: 0;
            border-radius: 100%;
            left: 0;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        border: 10px solid #FFC44C;
        @include adaptiv-value('width', 112, 77, 1);
        @include adaptiv-value('height', 112, 77, 1);
        @include adaptiv-value('max-width', 112, 77, 1);
        @include adaptiv-value('max-height', 122, 77, 1);
    }

    &__info-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        @include adaptiv-value('font-size', 32, 24, 1);
        line-height: 24px;
        color: rgba(#1B2559, $alpha: 0.4);

        span {
            font-weight: 400;
            @include adaptiv-value('font-size', 16, 14, 1);
            line-height: 24px;
            color: #1B2559;
        }
    }

    &__link {
        font-weight: 400;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #96A5B8;
        padding: 4px;
        border: 1px solid #1294F2;
        border-radius: 6px;

        @include adaptiv-value('width', 110, 100, 1);
        @include adaptiv-value('max-width', 110, 100, 1);
        @include adaptiv-value('font-size', 12, 10, 1);

        transition: background 0.3s, color 0.3s;

        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }

    &__link--small {
        @include adaptiv-value('width', 75, 75, 1);
        @include adaptiv-value('max-width', 75, 75, 1);
    }
}

// 

.terms-popup {
    @include adaptiv-value('min-width', 675, 315, 1);
    @include adaptiv-value('max-width', 675, 315, 1);
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(27, 37, 89, 0.1);
    border-radius: 4px;
    @include adaptiv-value('padding-top', 25, 20, 1);
    @include adaptiv-value('padding-right', 30, 10, 1);
    @include adaptiv-value('padding-bottom', 25, 50, 1);
    @include adaptiv-value('padding-left', 30, 20, 1);
    display: none;

    // // //

    /* Customize the label (the container) */
    .container {
        display: block;
        position: relative;
        @include adaptiv-value("padding-left", 40, 30, 1);
        cursor: pointer;
        font-weight: 400;
        @include adaptiv-value("font-size", 15, 10, 1);
        @include adaptiv-value("line-height", 25, 15, 1);
        color: #1294F2;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding-right: unset;
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
        @include adaptiv-value("height", 24, 16, 1);
        @include adaptiv-value("width", 24, 16, 1);
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
        @include adaptiv-value("height", 8, 6, 1);
        @include adaptiv-value("width", 11, 8, 1);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-image: url(../../public/images/reg-two-tick-icon.svg);
        background-repeat: no-repeat;
        background-size: cover;
    }

    // // // 

    &__inner {
        margin-bottom: 20px;
        padding-right: 20px;
        max-height: 600px;
        overflow-y: scroll;

        /* width */
        &::-webkit-scrollbar {
            width: 7px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            background: #E9EDF7;
            border-radius: 15px;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: #1294F2;
            border-radius: 15px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }

    }

    &__title {
        font-weight: 700;
        @include adaptiv-value('font-size', 20, 16, 1);
        line-height: 24px;
        color: #1B2559;
        margin-bottom: 30px;
        padding-left: 20px;
    }

    &__list {
        padding-left: 20px;
    }

    &__list-item {
        position: relative;

        &::before {
            content: '';
            width: 3px;
            height: 3px;
            background: #1B2559;
            position: absolute;
            top: 10px;
            left: -10px;
        }
    }

    &__list-text {
        font-weight: 500;
        @include adaptiv-value('font-size', 16, 12, 1);
        line-height: 24px;
        color: #1B2559;
    }

    &__entrance-form {
        padding-left: 20px;
        margin-bottom: 20px;
    }

    &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        @include adaptiv-value('font-size', 16, 14, 1);
        line-height: 24px;
        color: #FFFFFF;
        text-align: center;

        background: #1294F2;
        border: 1px solid #1294F2;
        border-radius: 6px;
        @include adaptiv-value('padding', 12, 6, 1);
        margin-left: auto;
        margin-right: auto;
        transition: background 0.3s, color 0.3s;

        &:hover {
            background: transparent;
            color: #1294F2;
        }
    }
}

// // 

@media (max-width: 1918px) {
    .lessons__inner {
        gap: 10px;
    }

    .main-top {
        gap: 10px;
    }
}

@media (max-width: 1850px) {
    .main-top {
        gap: 25px;
    }

    .lessons__inner {
        flex-wrap: wrap;
        justify-content: flex-start;
    }
}

@media (max-width: 1800px) {
    .main-top {
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .main-top-rait__list {
        width: 100%;
    }

    .main-top-rait {
        min-width: unset;
    }

    .main-top-rait {
        max-width: unset;
    }
}

@media (max-width: 1400px) {
    .main-top-rait {
        width: 100%;
        max-width: 100%;
    }

    .main-main {
        .main-top-level {
            max-width: 100%;
        }
    }

    .main-top-advise {
        max-width: 100%;
        width: 100%;
    }

    .lessons__inner {
        flex-direction: column;
    }

    .lessons-item {
        display: flex;
        align-items: flex-start;
        gap: 30px;
    }

    .lessons__inner {
        gap: 25px;
    }

    .lessons-item__img {}

    .lessons-item__inner {
        margin-left: unset;
    }
}

@media (max-width: 1300px) {
    .main-top-rait {
        max-width: 450px;
    }

    .main-main {
        .main-top-level {
            max-width: 100%;
        }
    }

    .main-top-advise {
        max-width: 100%;
        width: 100%;
    }

    .main-top-rait__list {
        max-width: unset;
    }

    .main-top-rait__row {
        justify-content: space-between;
    }

    .main-top-advise__link {}
}

@media (max-width: 950px) {
    .main-top-rait {
        max-width: 100%;
    }

    .main-main {
        .main-top-level {
            min-height: unset;
        }
    }

    .main-top-advise {
        min-height: unset;
    }

    .main-top-rait {
        min-height: unset;
    }
}

@media (max-width: 850px) {
    .lessons-item {
        flex-direction: column;
        gap: 0;
        justify-content: center;
        align-items: center;
    }

    .lessons-item__inner {
        margin-left: auto;
    }

    .main-top-advise__link {
        display: flex;
        justify-content: center;
    }
}

@media (max-width: 550px) {
    .lessons-item {
        padding: 0 0 20px 0;
    }

    .lessons-item__inner {
        margin-left: 15px;
        margin-right: 15px;
    }

    .lessons-item__img {
        width: 100%;
        height: unset;
    }

    .lessons-item-content__wrap {
        flex-grow: 1;
    }

    .lessons-item-content__info {
        margin-left: auto;
    }

    .lessons-item-content__info {

        border: 6px solid #FFC44C;
    }

    .lessons-item:nth-child(2) .lessons-item-content__info {
        border: 6px solid #EC4848;
    }

    .lessons-item:nth-child(3) .lessons-item-content__info {
        border: 10px solid #5DC983;
    }

    .lessons-item-content {
        align-items: center;
    }

    .lessons-item__box-title {
        max-width: 160px;
    }

    // 
    .terms-popup__btn {
        width: 145px;

        span:first-child {
            display: none;
        }
    }

    .terms-popup__entrance-form {
        padding-left: 0;

        .entrance-form__check-box a {
            max-width: 230px;
            display: block;
        }
    }

    // // 
}

@media (max-width: 400px) {
    .main-top-advise__text {
        max-width: 220px;
        display: block;
    }
}

// // </style>