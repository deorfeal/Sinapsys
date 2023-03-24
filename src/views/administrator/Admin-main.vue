<template>
    <div class="big-wrapper">
        <Aside :activeLink="0" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
        <div class="wrapper">
            <Header :searchIsActive="true" :title="'Главная'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
            <main class="main main-admin">
                <section class="main__statistics statistics">
                    <div class="statistics__inner">
                        <div class="statistics__user-statistics user-statistics">
                            <h2 class="user-statistics__title">
                                Статистика пользовтелей
                            </h2>
                            <ul class="user-statistics__list user-statistics-list">
                                <li class="user-statistics-list__item">
                                    <div class="user-statistics-list__box">
                                        <p class="user-statistics-list__box-text">
                                            Зарегистрировано пользователей
                                        </p>
                                        <p class="user-statistics-list__box-subtext">
                                            Общее количество пользователей
                                        </p>
                                    </div>
                                    <p class="user-statistics-list__text">
                                        63
                                    </p>
                                </li>
                                <li class="user-statistics-list__item">
                                    <div class="user-statistics-list__box">
                                        <p class="user-statistics-list__box-text">
                                            Новые пользователи
                                        </p>
                                        <p class="user-statistics-list__box-subtext">
                                            Неназначенные пользователи
                                        </p>
                                    </div>
                                    <p class="user-statistics-list__text">
                                        5
                                    </p>
                                </li>
                                <li class="user-statistics-list__item">
                                    <div class="user-statistics-list__box">
                                        <p class="user-statistics-list__box-text">
                                            В процессе
                                        </p>
                                        <p class="user-statistics-list__box-subtext">
                                            Пользователи в статусе обучения
                                        </p>
                                    </div>
                                    <p class="user-statistics-list__text">
                                        46
                                    </p>
                                </li>
                                <li class="user-statistics-list__item">
                                    <div class="user-statistics-list__box">
                                        <p class="user-statistics-list__box-text">
                                            Завершили
                                        </p>
                                        <p class="user-statistics-list__box-subtext">
                                            Пользователи в статусе обучения
                                        </p>
                                    </div>
                                    <p class="user-statistics-list__text">
                                        17
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="statistics__graph statistics-graph">
                            <h2 class="statistics-graph__title">
                                Статистика фишинговой атаки
                            </h2>
                            <div class="statistics-graph__inner">
                                <div class="statistics-graph__item">
                                    <p class="statistics-graph__item-text">
                                        50
                                    </p>
                                    <div class="statistics-graph__item-line">

                                    </div>
                                </div>
                                <div class="statistics-graph__item">
                                    <p class="statistics-graph__item-text">
                                        40
                                    </p>
                                    <div class="statistics-graph__item-line">

                                    </div>
                                </div>
                                <div class="statistics-graph__item">
                                    <p class="statistics-graph__item-text">
                                        30
                                    </p>
                                    <div class="statistics-graph__item-line">

                                    </div>
                                </div>
                                <div class="statistics-graph__item">
                                    <p class="statistics-graph__item-text">
                                        20
                                    </p>
                                    <div class="statistics-graph__item-line">

                                    </div>
                                </div>
                                <div class="statistics-graph__item">
                                    <p class="statistics-graph__item-text">
                                        10
                                    </p>
                                    <div class="statistics-graph__item-line">

                                    </div>
                                </div>
                                <div class="statistics-graph__item">
                                    <p class="statistics-graph__item-text">
                                        0
                                    </p>
                                    <div class="statistics-graph__item-line">

                                    </div>
                                </div>
                            </div>
                            <div class="statistics-graph__bottom statistics-graph-bottom">
                                <div class="statistics-graph-bottom__item">
                                    <p class="statistics-graph-bottom__item-text">
                                        Пн
                                    </p>
                                    <div class="statistics-graph-bottom__item-column">

                                        <span></span>
                                    </div>
                                </div>
                                <div class="statistics-graph-bottom__item">
                                    <p class="statistics-graph-bottom__item-text">
                                        Вт
                                    </p>
                                    <div class="statistics-graph-bottom__item-column">

                                        <span></span>
                                    </div>
                                </div>
                                <div class="statistics-graph-bottom__item">
                                    <p class="statistics-graph-bottom__item-text">
                                        Ср
                                    </p>
                                    <div class="statistics-graph-bottom__item-column">

                                        <span></span>
                                    </div>
                                </div>
                                <div class="statistics-graph-bottom__item">
                                    <p class="statistics-graph-bottom__item-text">
                                        Чт
                                    </p>
                                    <div class="statistics-graph-bottom__item-column">

                                        <span></span>
                                    </div>
                                </div>
                                <div class="statistics-graph-bottom__item">
                                    <p class="statistics-graph-bottom__item-text">
                                        Пт
                                    </p>
                                    <div class="statistics-graph-bottom__item-column">

                                        <span></span>
                                    </div>
                                </div>
                                <div class="statistics-graph-bottom__item">
                                    <p class="statistics-graph-bottom__item-text">
                                        Сб
                                    </p>
                                    <div class="statistics-graph-bottom__item-column">

                                        <span></span>
                                    </div>
                                </div>
                                <div class="statistics-graph-bottom__item">
                                    <p class="statistics-graph-bottom__item-text">
                                        Вс
                                    </p>
                                    <div class="statistics-graph-bottom__item-column">

                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div class="statistics-graph__row">
                                <p class="statistics-graph__row-text">
                                    <span>

                                    </span>
                                    <span>
                                        Отправлено писем
                                    </span>
                                </p>
                                <p class="statistics-graph__row-text">
                                    <span>

                                    </span>
                                    <span>
                                        Проверка не пройдена
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="main__events-section events-section">
                    <div class="events-section__news news">
                        <h2 class="news__title">
                            Новости
                        </h2>
                        <img class="news__img" src="../../../public/images/advise-img-1.png" alt="img">
                        <p class="news__date">
                            Сегодня, 14:55
                        </p>
                        <p class="news__text">
                            Вы можете добавлять новые столбцы (например, «Отдел», «Регион» и пр.), но уже присутствующие в
                            шаблоне поля обязательно должны остаться в файле в неизменном виде и быть заполнены
                        </p>
                    </div>
                    <div class="events-section__events events">
                        <h2 class="events__title">
                            События
                        </h2>
                        <div class="events__inner">
                            <div class="events__item events-item">
                                <div class="events-item__icon">
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.0908 15.111C17.2775 15.111 18.4375 14.7982 19.4242 14.2122C20.4109 13.6261 21.18 12.7932 21.6341 11.8187C22.0882 10.8441 22.207 9.77176 21.9755 8.73719C21.744 7.70262 21.1726 6.75232 20.3335 6.00644C19.4943 5.26055 18.4252 4.7526 17.2614 4.54682C16.0975 4.34103 14.8911 4.44665 13.7947 4.85031C12.6984 5.25398 11.7613 5.93757 11.102 6.81463C10.4427 7.69169 10.0908 8.72284 10.0908 9.77767C10.0908 11.1922 10.723 12.5487 11.8482 13.5489C12.9734 14.5491 14.4995 15.111 16.0908 15.111ZM16.0908 7.111C16.6842 7.111 17.2642 7.2674 17.7575 7.56042C18.2509 7.85344 18.6354 8.26991 18.8625 8.75718C19.0895 9.24445 19.1489 9.78063 19.0332 10.2979C18.9174 10.8152 18.6317 11.2903 18.2121 11.6633C17.7926 12.0362 17.258 12.2902 16.6761 12.3931C16.0941 12.496 15.4909 12.4432 14.9428 12.2414C14.3946 12.0395 13.9261 11.6977 13.5964 11.2592C13.2668 10.8207 13.0908 10.3051 13.0908 9.77767C13.0908 9.07043 13.4069 8.39215 13.9695 7.89205C14.5321 7.39196 15.2952 7.111 16.0908 7.111Z"
                                            fill="#1294F2" />
                                        <path
                                            d="M16.0908 17.7773C13.306 17.7773 10.6353 18.7607 8.6662 20.511C6.69707 22.2614 5.59082 24.6353 5.59082 27.1107C5.59082 27.4643 5.74886 27.8034 6.03016 28.0535C6.31146 28.3035 6.693 28.444 7.09082 28.444C7.48865 28.444 7.87018 28.3035 8.15148 28.0535C8.43278 27.8034 8.59082 27.4643 8.59082 27.1107C8.59082 25.3426 9.381 23.6469 10.7875 22.3966C12.194 21.1464 14.1017 20.444 16.0908 20.444C18.0799 20.444 19.9876 21.1464 21.3941 22.3966C22.8006 23.6469 23.5908 25.3426 23.5908 27.1107C23.5908 27.4643 23.7489 27.8034 24.0302 28.0535C24.3115 28.3035 24.693 28.444 25.0908 28.444C25.4886 28.444 25.8702 28.3035 26.1515 28.0535C26.4328 27.8034 26.5908 27.4643 26.5908 27.1107C26.5908 24.6353 25.4846 22.2614 23.5154 20.511C21.5463 18.7607 18.8756 17.7773 16.0908 17.7773Z"
                                            fill="#1294F2" />
                                    </svg>
                                </div>
                                <div class="events-item__box">
                                    <h5 class="events-item__box-title">
                                        Новый пользователь
                                    </h5>
                                    <p class="events-item__box-subtitle">
                                        2 дня назад
                                    </p>
                                    <p class="events-item__box-text">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                        an unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.

                                    </p>
                                </div>
                            </div>
                            <div class="events__item events-item">
                                <div class="events-item__icon">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M27.9997 8.00016H26.6663V6.66683C26.6663 6.31321 26.5259 5.97407 26.2758 5.72402C26.0258 5.47397 25.6866 5.3335 25.333 5.3335C24.9794 5.3335 24.6402 5.47397 24.3902 5.72402C24.1401 5.97407 23.9997 6.31321 23.9997 6.66683V8.00016H22.6663C22.3127 8.00016 21.9736 8.14064 21.7235 8.39069C21.4735 8.64074 21.333 8.97987 21.333 9.3335C21.333 9.68712 21.4735 10.0263 21.7235 10.2763C21.9736 10.5264 22.3127 10.6668 22.6663 10.6668H23.9997V12.0002C23.9997 12.3538 24.1401 12.6929 24.3902 12.943C24.6402 13.193 24.9794 13.3335 25.333 13.3335C25.6866 13.3335 26.0258 13.193 26.2758 12.943C26.5259 12.6929 26.6663 12.3538 26.6663 12.0002V10.6668H27.9997C28.3533 10.6668 28.6924 10.5264 28.9425 10.2763C29.1925 10.0263 29.333 9.68712 29.333 9.3335C29.333 8.97987 29.1925 8.64074 28.9425 8.39069C28.6924 8.14064 28.3533 8.00016 27.9997 8.00016Z"
                                            fill="#5DC983" />
                                        <path
                                            d="M13.3333 14.6667C14.3882 14.6667 15.4193 14.3539 16.2964 13.7678C17.1734 13.1818 17.857 12.3489 18.2607 11.3743C18.6644 10.3998 18.77 9.32742 18.5642 8.29285C18.3584 7.25829 17.8505 6.30798 17.1046 5.5621C16.3587 4.81622 15.4084 4.30827 14.3738 4.10248C13.3392 3.89669 12.2669 4.00231 11.2924 4.40598C10.3178 4.80965 9.48486 5.49323 8.89883 6.37029C8.31279 7.24736 8 8.2785 8 9.33334C8 10.7478 8.5619 12.1044 9.5621 13.1046C10.5623 14.1048 11.9188 14.6667 13.3333 14.6667ZM13.3333 6.66667C13.8608 6.66667 14.3763 6.82307 14.8149 7.11608C15.2534 7.4091 15.5952 7.82558 15.797 8.31285C15.9988 8.80012 16.0517 9.33629 15.9488 9.85358C15.8459 10.3709 15.5919 10.846 15.219 11.219C14.846 11.5919 14.3709 11.8459 13.8536 11.9488C13.3363 12.0517 12.8001 11.9988 12.3128 11.797C11.8256 11.5952 11.4091 11.2534 11.1161 10.8149C10.8231 10.3763 10.6667 9.86075 10.6667 9.33334C10.6667 8.62609 10.9476 7.94781 11.4477 7.44772C11.9478 6.94762 12.6261 6.66667 13.3333 6.66667Z"
                                            fill="#5DC983" />
                                        <path
                                            d="M13.3333 17.3335C10.858 17.3335 8.48401 18.3168 6.73367 20.0672C4.98333 21.8175 4 24.1915 4 26.6668C4 27.0205 4.14048 27.3596 4.39052 27.6096C4.64057 27.8597 4.97971 28.0002 5.33333 28.0002C5.68696 28.0002 6.02609 27.8597 6.27614 27.6096C6.52619 27.3596 6.66667 27.0205 6.66667 26.6668C6.66667 24.8987 7.36905 23.203 8.61929 21.9528C9.86953 20.7025 11.5652 20.0002 13.3333 20.0002C15.1014 20.0002 16.7971 20.7025 18.0474 21.9528C19.2976 23.203 20 24.8987 20 26.6668C20 27.0205 20.1405 27.3596 20.3905 27.6096C20.6406 27.8597 20.9797 28.0002 21.3333 28.0002C21.687 28.0002 22.0261 27.8597 22.2761 27.6096C22.5262 27.3596 22.6667 27.0205 22.6667 26.6668C22.6667 24.1915 21.6833 21.8175 19.933 20.0672C18.1827 18.3168 15.8087 17.3335 13.3333 17.3335Z"
                                            fill="#5DC983" />
                                    </svg>
                                </div>
                                <div class="events-item__box">
                                    <h5 class="events-item__box-title">
                                        Синхронизация прошла
                                        успешно
                                    </h5>
                                    <p class="events-item__box-subtitle">
                                        2 дня назад
                                    </p>
                                    <p class="events-item__box-text">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                        an unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
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
    mounted() {
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

.main-admin {
    padding: 40px 55px 55px 55px;
}

.statistics {
    margin-bottom: 40px;

    &__inner {
        display: flex;
        gap: 45px;
    }
}

.user-statistics {
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 16px;
    padding: 30px 60px 35px 45px;
    flex-grow: 1;
    width: 100%;

    &__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        color: #1B2559;
        margin-bottom: 35px;
    }
}

.user-statistics-list {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__item {
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        border: 1px solid #96A5B8;
        border-radius: 16px;
    }

    &__box {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
    }

    &__box-text {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #1B2559;
    }

    &__box-subtext {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #96A5B8;
    }

    &__text {
        font-weight: 600;
        font-size: 32px;
        line-height: 24px;
        text-align: right;
        color: #1294F2;
        width: 45px;
    }
}

.statistics-graph {
    width: 100%;
    padding: 35px 30px 25px 30px;
    background: #FFFFFF;
    border-radius: 16px;
    flex-grow: 1;
    min-width: 765px;

    &__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 50px;
        color: #1B2559;
    }

    &__inner {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-bottom: 30px;
    }

    &__item {
        padding-bottom: 15px;
        display: flex;
        gap: 20px;
        align-items: flex-end;
    }

    &__item-text {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #7B91B0;
        width: 25px;
    }

    &__item-line {
        width: 100%;
        height: 1px;
        background: #EFF1F3;
    }

    &__row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    &__row-text {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #1B2559;
        gap: 8px;
        display: flex;
        align-items: center;

        &:nth-child(1) {
            span:nth-child(1) {
                display: block;
                width: 16px;
                height: 16px;
                background: #F9E8E8;
                border-radius: 2px;
            }
        }

        &:nth-child(2) {
            span:nth-child(1) {
                display: block;
                width: 16px;
                height: 16px;
                background: #EC4848;
                border-radius: 2px;
            }
        }
    }
}

.statistics-graph-bottom {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

    &__item {
        width: 93px;
        text-align: center;
        position: relative;

        &:nth-child(1) {
            .statistics-graph-bottom__item-column {
                height: 250px;

                span {
                    height: 137px;
                }
            }
        }

        &:nth-child(2) {
            .statistics-graph-bottom__item-column {
                height: 162px;

                span {
                    height: 76px;
                }
            }
        }

        &:nth-child(3) {
            .statistics-graph-bottom__item-column {
                height: 241px;

                span {
                    height: 41px;
                }
            }
        }

        &:nth-child(4) {
            .statistics-graph-bottom__item-column {
                height: 218px;

                span {
                    height: 76px;
                }
            }
        }

        &:nth-child(5) {
            .statistics-graph-bottom__item-column {
                height: 183px;

                span {
                    height: 59px;
                }
            }
        }

        &:nth-child(6) {
            .statistics-graph-bottom__item-column {
                height: 228px;

                span {
                    height: 120px;
                }
            }
        }

        &:nth-child(7) {
            .statistics-graph-bottom__item-column {
                height: 204px;

                span {
                    height: 61px;
                }
            }
        }
    }

    &__item-text {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #7B91B0;
    }

    &__item-column {
        width: 46px;
        position: absolute;
        left: 50%;
        bottom: 61px;
        transform: translateX(-50%);
        background: #F9E8E8;
        border-radius: 2px;

        span {
            position: absolute;
            display: block;
            left: 0;
            right: 0;
            width: 100%;
            bottom: 0;
            background: #EC4848;
            border-radius: 0px 0px 2px 2px;
        }
    }


}

// 

.events-section {
    display: flex;
    gap: 45px;
}

.news {
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 16px;
    padding: 45px 30px 35px 30px;
    max-width: 735px;
    width: 100%;
    flex-grow: 1;

    &__title {
        margin-bottom: 25px;
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        color: #1B2559;
    }

    &__img {
        margin-bottom: 15px;
        height: 207px;
        width: 100%;
        border-radius: 6px;
        object-fit: cover;
    }

    &__date {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 25px;
        color: #96A5B8;

    }

    &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #60678B;
    }
}

.events {
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 16px;
    padding: 45px 30px 35px 30px;
    max-width: 690px;

    &__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 25px;
        color: #1B2559;

    }

    &__inner {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
}

.events-item {
    display: flex;
    gap: 20px;

    &:nth-child(2) {
        .events-item__icon {
            background: #DCFCE7;
        }
    }

    &__icon {
        min-width: 64px;
        min-height: 64px;
        max-height: 64px;
        max-width: 64px;
        background: #F4F7FE;
        display: flex;
        border-radius: 100%;
        justify-content: center;
        align-items: center;
    }

    &__box {}

    &__box-title {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 8px;
        color: #1294F2;

    }

    &__box-subtitle {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 12px;
        color: #96A5B8;
    }

    &__box-text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #60678B;
    }
}


// // </style>