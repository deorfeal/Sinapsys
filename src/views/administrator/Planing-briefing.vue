<template>
    <div class="big-wrapper">
        <Aside :activeLink="3" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Планирование'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
            <main class="main main-planing-briefing">
                <section class="main__planing-briefing planing-briefing">
                    <div class="planing-briefing__top planing-briefing-top">
                        <a class="planing-briefing-top__link" href="#">
                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                    fill="#1B2559" />
                            </svg>
                            <span>
                                Вводный инструктаж
                            </span>
                        </a>
                        <div class="planing-briefing-top__buttons">
                            <a class="planing-briefing-top__buttons-btn" href="#">
                                Изменить
                            </a>
                            <a class="planing-briefing-top__buttons-btn" href="#">
                                <span>
                                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M10.019 10.0298V12.5786L16 6.78638L10.019 0.994141V3.72106L10.0165 3.49317C10.0165 3.49317 0 5.48391 0 17.0057C0 17.0057 4.07975 9.91025 10.0188 10.0297L10.019 10.0298Z"
                                            fill="#1294F2" />
                                    </svg>
                                </span>
                                <span>
                                    Экспорт
                                </span>
                            </a>
                        </div>
                    </div>
                    <div class="planing-briefing__info briefing-info">
                        <h2 class="briefing-info__title">
                            Вводный инструктаж
                        </h2>
                        <div class="briefing-info__inner">
                            <div class="briefing-info__box">
                                <p class="briefing-info__box-text">
                                    Дата начала:
                                </p>
                                <p class="briefing-info__box-subtext">
                                    24.06.2022
                                </p>
                            </div>
                            <div class="briefing-info__box">
                                <p class="briefing-info__box-text">
                                    Срок окончания:
                                </p>
                                <p class="briefing-info__box-subtext">
                                    24.06.2022
                                </p>
                            </div>
                            <div class="briefing-info__box">
                                <p class="briefing-info__box-text">
                                    Статус:
                                </p>
                                <p class="briefing-info__box-subtext briefing-info__box-subtext--lightning">
                                    В процессе
                                </p>
                            </div>
                            <div class="briefing-info__box">
                                <p class="briefing-info__box-text">
                                    Курсы:
                                </p>
                                <p class="briefing-info__box-subtext">
                                    Электронная почта
                                    Пароли и учетные записи
                                </p>
                            </div>
                            <div class="briefing-info__box">
                                <p class="briefing-info__box-text">
                                    Фишинговая атака:
                                </p>
                                <p class="briefing-info__box-subtext">
                                    Запрос доступка к документу
                                </p>
                            </div>
                            <div class="briefing-info__box">
                                <p class="briefing-info__box-text">
                                    Группа:
                                </p>
                                <p class="briefing-info__box-subtext">
                                    Фин кафедра
                                </p>
                            </div>
                            <div class="briefing-info__box">
                                <p class="briefing-info__box-text">
                                    Периодичность:
                                </p>
                                <p class="briefing-info__box-subtext">
                                    Каждые полгода
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="planing-briefing__content briefing-content">
                        <h2 class="briefing-content__title">
                            Электронная почта
                        </h2>
                        <div class="briefing-content__inner">
                            <div class="briefing-content__column briefing-content-column">
                                <div class="briefing-content-column__icon">
                                    <svg width="64" height="59" viewBox="0 0 64 59" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M52.7395 44.5311C52.7309 41.5176 55.2177 39.3693 58.3298 39.7225C58.3218 35.3408 58.3138 30.9606 58.3068 26.5801C49.8819 27.929 41.3734 29.4745 32.8389 31.5752C32.8405 40.5947 32.8421 49.6153 32.8437 58.6354C41.4271 57.3025 49.991 57.0304 58.3624 57.5848C58.3586 55.4687 58.3543 53.3536 58.3506 51.2376C55.246 50.4029 52.747 47.5476 52.74 44.5315L52.7395 44.5311Z"
                                            fill="#E9EDF7" />
                                        <path
                                            d="M58.8636 40.5078C56.0156 40.0262 53.6981 41.9425 53.7051 44.6758C53.7121 47.415 56.0403 50.0272 58.8801 50.6577C61.7211 51.2866 63.9979 49.5728 63.9995 46.6827C64.0006 43.7984 61.7125 40.9836 58.8636 40.508V40.5078Z"
                                            fill="#E9EDF7" />
                                        <path
                                            d="M5.66938 39.7231C8.78094 39.3701 11.2693 41.5178 11.2612 44.5317C11.2543 47.5484 8.75406 50.4032 5.64894 51.2401C5.64519 53.3562 5.64198 55.4713 5.6377 57.5884C14.01 57.0334 22.5724 57.305 31.1564 58.6379C31.158 49.6178 31.1596 40.5964 31.1612 31.5763C22.6276 29.4758 14.1181 27.929 5.69326 26.5801C5.68576 30.9602 5.67826 35.3408 5.67022 39.7225L5.66938 39.7231Z"
                                            fill="#E9EDF7" />
                                        <path
                                            d="M10.2939 44.6772C10.3008 41.9428 7.9827 40.0266 5.13597 40.5077C2.28704 40.984 -0.00164486 43.7981 8.8701e-07 46.684C0.0016081 49.5722 2.28005 51.2875 5.11937 50.6585C7.9587 50.0285 10.2876 47.4148 10.2939 44.6772Z"
                                            fill="#E9EDF7" />
                                        <path
                                            d="M46.4605 14.462C46.4599 6.48671 39.9723 0 31.9985 0C24.0247 0 17.5378 6.48658 17.5378 14.4606C17.5378 22.4354 24.0244 28.9213 31.9985 28.9213C39.9732 28.9213 46.4605 22.4347 46.4605 14.462Z"
                                            fill="#E9EDF7" />
                                    </svg>
                                </div>
                                <div class="briefing-content-column__info">
                                    <p class="briefing-content-column__info-text">
                                        Обученность
                                    </p>
                                    <p class="briefing-content-column__info-subtext">
                                        75%
                                    </p>
                                </div>
                            </div>
                            <div class="briefing-content__box">
                                <p class="briefing-content__box-text">
                                    Завершено
                                </p>
                                <p class="briefing-content__box-subtext">
                                    0
                                </p>
                            </div>
                            <div class="briefing-content__box">
                                <p class="briefing-content__box-text">
                                    В процессе
                                </p>
                                <p class="briefing-content__box-subtext">
                                    2
                                </p>
                            </div>
                            <div class="briefing-content__box">
                                <p class="briefing-content__box-text">
                                    Не начато
                                </p>
                                <p class="briefing-content__box-subtext">
                                    0
                                </p>
                            </div>
                            <div class="briefing-content__box">
                                <p class="briefing-content__box-text">
                                    Просрочено
                                </p>
                                <p class="briefing-content__box-subtext">
                                    1
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="planing-briefing__content briefing-content">
                        <h2 class="briefing-content__title">
                            Запрос доступа к документу
                        </h2>
                        <div class="briefing-content__inner">
                            <div class="briefing-content__column briefing-content-column">
                                <div class="briefing-content-column__icon">
                                    <svg width="64" height="62" viewBox="0 0 64 62" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.6272 34.0783H40.3731C45.5985 31.9734 50.1376 28.1064 50.1376 23.2565C50.1376 16.2463 39.7984 0 31.9999 0C24.1967 0 13.8623 16.2457 13.8623 23.2565C13.8623 28.1064 18.4014 31.9734 23.6268 34.0783H23.6272ZM42.2567 20.9389C42.2567 26.5906 37.6525 30.2673 32.0009 30.2673C26.3445 30.2673 21.745 26.5906 21.745 20.9389C21.745 14.61 42.257 14.61 42.257 20.9384L42.2567 20.9389Z"
                                            fill="#E9EDF7" />
                                        <path
                                            d="M9.17456 35.4128C9.87756 34.5662 10.921 34.077 12.0217 34.0775H16.1062C15.6702 33.7389 15.2485 33.3865 14.8498 33.0202C13.2761 31.6175 12.0143 29.9005 11.145 27.9805C9.86049 29.0377 8.35843 30.3311 6.81474 31.7962C4.30522 34.1791 1.77359 40.2434 0.474314 43.6846C-0.117373 45.256 -0.156631 46.9821 0.362996 48.5789L3.45262 58.1097C3.7547 59.0418 4.34409 59.8538 5.1362 60.4302C5.92881 61.0062 6.88303 61.3166 7.86281 61.3166H12.5497L8.37233 38.4539H8.37279C8.17648 37.3713 8.47025 36.2576 9.17464 35.4123L9.17456 35.4128Z"
                                            fill="#E9EDF7" />
                                        <path
                                            d="M63.5264 43.6846C62.2271 40.2431 59.6955 34.1788 57.186 31.7962C55.6418 30.3311 54.1398 29.0373 52.8557 27.9805C51.9864 29.9005 50.7246 31.6175 49.1509 33.0202C48.7523 33.3865 48.3301 33.7389 47.8945 34.0775H51.9791C53.0793 34.0789 54.1218 34.5685 54.8262 35.4133C55.5306 36.2581 55.8243 37.3717 55.628 38.4544L51.4507 61.3171H56.138C57.1177 61.3171 58.0719 61.0067 58.8646 60.4308C59.6568 59.8543 60.2462 59.0423 60.5482 58.1102L63.6378 48.5794C64.157 46.9826 64.1177 45.2565 63.5265 43.6851L63.5264 43.6846Z"
                                            fill="#E9EDF7" />
                                        <path
                                            d="M51.0976 37.7891H12.902C12.6849 37.7891 12.4789 37.8856 12.3399 38.0523C12.2009 38.2191 12.1427 38.4389 12.1819 38.6528L16.3186 61.3216H47.6808L51.8175 38.6528C51.8567 38.4389 51.7985 38.2191 51.6595 38.0523C51.5205 37.8856 51.3145 37.7891 51.0974 37.7891H51.0976ZM31.9998 51.9879C29.4178 51.9879 27.3245 50.8983 27.3245 49.5547C27.3245 48.211 29.4178 47.1214 31.9998 47.1214C34.5818 47.1214 36.6751 48.2106 36.6751 49.5547C36.6746 50.8988 34.5818 51.9879 31.9998 51.9879Z"
                                            fill="#E9EDF7" />
                                    </svg>
                                </div>
                                <div class="briefing-content-column__info">
                                    <p class="briefing-content-column__info-text">
                                        Частота провалов
                                    </p>
                                    <p class="briefing-content-column__info-subtext">
                                        30%
                                    </p>
                                </div>
                            </div>
                            <div class="briefing-content__box">
                                <p class="briefing-content__box-text">
                                    Участники
                                </p>
                                <p class="briefing-content__box-subtext">
                                    20
                                </p>
                            </div>
                            <div class="briefing-content__box">
                                <p class="briefing-content__box-text">
                                    Отправлено
                                    писем
                                </p>
                                <p class="briefing-content__box-subtext">
                                    20
                                </p>
                            </div>
                            <div class="briefing-content__box">
                                <p class="briefing-content__box-text">
                                    Прошли
                                </p>
                                <p class="briefing-content__box-subtext">
                                    16
                                </p>
                            </div>
                            <div class="briefing-content__box">
                                <p class="briefing-content__box-text">
                                    Не прошли
                                </p>
                                <p class="briefing-content__box-subtext">
                                    4
                                </p>
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

import 'swiper/css';
import 'swiper/css/pagination';
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
        },
    }

}
</script>


<style lang="scss">
@import '../../assets/scss/vars';

.main-planing-briefing {
    @include adaptiv-value("padding-top", 25, 30, 1);
    @include adaptiv-value("padding-right", 55, 30, 1);
    @include adaptiv-value("padding-bottom", 15, 30, 1);
    @include adaptiv-value("padding-left", 55, 30, 1);
}

.planing-briefing {}

.planing-briefing-top {
    @include adaptiv-value("margin-bottom", 35, 20, 1);
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__link {
        font-weight: 500;
        @include adaptiv-value("font-size", 24, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        gap: 10px;
        display: flex;
        align-items: center;
        color: #1B2559;
    }

    &__buttons {
        display: flex;
        align-items: center;
        gap: 25px;
    }

    &__buttons-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        color: #1294F2;
        background: #FFFFFF;
        border: 1px solid #1294F2;
        border-radius: 6px;

        @include adaptiv-value("padding", 12, 8, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("gap", 10, 5, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("width", 135, 130, 1);
        @include adaptiv-value("max-width", 135, 130, 1);

        &:last-child {
            @include adaptiv-value("width", 145, 140, 1);
            @include adaptiv-value("max-width", 145, 140, 1);
            span:first-child {
                display: block;
                @include adaptiv-value("width", 16, 12, 1);
                @include adaptiv-value("height", 16, 12, 1);
                svg {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}

.briefing-info {
    @include adaptiv-value("padding-top", 30, 20, 1);
    @include adaptiv-value("padding-right", 20, 20, 1);
    @include adaptiv-value("padding-bottom", 30, 20, 1);
    @include adaptiv-value("padding-left", 15, 20, 1);
    @include adaptiv-value("margin-bottom", 30, 20, 1);
    background: #FFFFFF;
    border-radius: 16px;

    &__title {
        font-weight: 600;
        @include adaptiv-value("font-size", 24, 18, 1);
        @include adaptiv-value("line-height", 24, 20, 1);
        @include adaptiv-value("margin-bottom", 45, 15, 1);
        color: #1B2559;
    }

    &__inner {
        display: flex;
        gap: 20px;
        align-items: flex-start;
        justify-content: space-between;
    }

    &__box {
        &:nth-child(4) {
            max-width: 280px;
        }

        &:nth-child(5) {
            max-width: 220px;
        }
    }

    &__box-text {
        font-weight: 500;
        @include adaptiv-value("font-size", 20, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        color: #1B2559;
        @include adaptiv-value("margin-bottom", 30, 20, 1);
    }

    &__box-subtext {
        font-weight: 400;
        @include adaptiv-value("font-size", 20, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        color: #1B2559;
    }

    &__box-subtext--lightning {
        color: #5DC983;

    }
}

.briefing-content {
    margin-bottom: 15px;
    background: #FFFFFF;
    border-radius: 16px;
    @include adaptiv-value("padding-top", 15, 20, 1);
    @include adaptiv-value("padding-right", 65, 20, 1);
    @include adaptiv-value("padding-bottom", 35, 20, 1);
    @include adaptiv-value("padding-left", 15, 20, 1);
    &:last-child {
        margin-bottom: 0;
    }
    &__title {
        font-weight: 600;
        @include adaptiv-value("font-size", 24, 18, 1);
        @include adaptiv-value("line-height", 24, 20, 1);
        margin-bottom: 25px;
        color: #1B2559;
    }

    &__inner {
        display: flex;
    }

    &__box {
        @include adaptiv-value("padding-bottom", 45, 20, 1);
        display: flex;
        flex-direction: column;
        padding-right: 50px;
        position: relative;
        padding-left: 25px;
        width: 220px;
        &::after {
            content: '';
            width: 1px;
            height: 100%;
            background: #96A5B8;
            right: 0;
            top: 0;
            position: absolute;
        }
        &:last-child {
            &::after {
                content: unset;
            }
        }
    }

    &__box-text {
        flex-grow: 1;
        font-weight: 500;
        @include adaptiv-value("font-size", 20, 16, 1);
        @include adaptiv-value("line-height", 24, 20, 1);
        @include adaptiv-value("margin-bottom", 30, 15, 1);
        color: #96A5B8;
        max-width: 150px;
    }

    &__box-subtext {
        font-weight: 500;
        @include adaptiv-value("font-size", 36, 20, 1);
        @include adaptiv-value("line-height", 24, 24, 1);
        max-width: 150px;
        color: #1B2559;
    }
}

.briefing-content-column {
    width: 460px;
    padding-right: 50px;
    display: flex;
    align-items: flex-start;
    @include adaptiv-value("gap", 65, 20, 1);
    position: relative;
    padding-left: 50px;
    &::after {
        content: '';
        width: 1px;
        height: 100%;
        background: #96A5B8;
        right: 0;
        top: 0;
        position: absolute;
    }
    &__icon {
        @include adaptiv-value("width", 147, 100, 1);
        @include adaptiv-value("height", 147, 100, 1);
        border: 15px solid #E9EDF7;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        svg {
            @include adaptiv-value("width", 64, 40, 1);
            @include adaptiv-value("height", 64, 40, 1);
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding-bottom: 45px;
    }

    &__info-text {
        flex-grow: 1;
        font-weight: 500;
        @include adaptiv-value("font-size", 20, 18, 1);
        @include adaptiv-value("line-height", 24, 22, 1);
        margin-bottom: 30px;
        color: #96A5B8;
        max-width: 150px;
    }

    &__info-subtext {
        font-weight: 500;
        @include adaptiv-value("font-size", 36, 20, 1);
        @include adaptiv-value("line-height", 24, 24, 1);
        max-width: 150px;
        color: #1B2559;
    }
}

.briefing-content__box {
    padding-right: 20px;
    padding-left: 20px;
    width: 185px;
}
@media (max-width: 1700px) {
    .briefing-info__inner {
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start
    }
    .briefing-info__box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .briefing-content__inner {
        flex-wrap: wrap;
        row-gap: 20px;
    }
    .briefing-content-column {
        width: 100%;
        &::after {
            content: unset;
        }
    }
    .briefing-content__box:nth-child(2) {
        margin-left: auto;
    }
    .briefing-content__box:last-child {
        margin-right: auto;
    }
}
@media (max-width: 900px) {
    .briefing-content__box {
        flex-grow: 1;
        width: 100%;
        justify-content: center;
        align-items: center;
        &::after {
            content: unset;
        }
    }
    .briefing-content-column {
        justify-content: center;
        align-items: center;
        @include adaptiv-value("margin-bottom", 30, 20, 1);
        padding-left: 0;
        padding-right: 0;
    }
    .briefing-content-column__info {
        padding-bottom: 0;
        justify-content: center;
    }
    .briefing-content-column__info-text {
        margin-bottom: 20px;
        flex-grow: 0;
    }
    .briefing-content__box-text {
        text-align: center;
    }
    .briefing-content__title {
        text-align: center;
    }
}
@media (max-width: 600px) {
    .planing-briefing-top {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    .planing-briefing-top__buttons {
        margin-left: auto;
        margin-right: auto;
    }
  
}
</style>