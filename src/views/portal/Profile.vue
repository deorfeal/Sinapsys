<template>
    <div class="biggest-wrapper">
    <div class="big-wrapper">
        <Aside :activeLink="3" :sideMenuActive="this.sideMenuActive" :isAdmin="false"/>
        <div class="wrapper">
            <Header :searchIsActive="true" :title="'Мой профиль'" @openSideMenu="SideMenuToActive" :isAdmin="false"/>
            <main class="main main-profile">
                <form class="main__profile profile" action="#">
                    <div class="profile__top profile-top">
                        <a class="profile-top__link" href="#">
                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                    fill="#1B2559" />
                            </svg>
                            <span>
                                Назад
                            </span>
                        </a>
                        <button class="profile-top__btn" type="submit">Сохранить</button>
                    </div>
                    <div class="profile__info profile-info">
                        <div class="profile-info__box profile-info-box">
                            <img class="profile-info-box__img" src="../../../public/images/header-user-icon.svg"
                                alt="user-icon">
                            <div class="profile-info-box__column">
                                <h2 class="profile-info-box__column-title">
                                    Аида Кожабай
                                </h2>
                                <p class="profile-info-box__column-text">
                                    Логин:
                                    <span>aida322279@gmail.com</span>
                                </p>
                                <p class="profile-info-box__column-text">
                                    Возраст:
                                    <span>27 лет</span>
                                </p>
                                <p class="profile-info-box__column-text">
                                    Должность:
                                    <span>Менеджер</span>
                                </p>
                                <p class="profile-info-box__column-text">
                                    Департамент:
                                    <span>Финансовый отдел</span>
                                </p>
                                <p class="profile-info-box__column-text">
                                    Сотрудник компании SYNAPSYS
                                </p>
                            </div>
                        </div>
                        <div class="profile-info__level main-top-level__inner">
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
                        <p class="profile-info__text">
                            Дата регистрации: 26.12.2022
                        </p>
                    </div>
                    <SettingsOfProfileVue @clickOnButton="changedInfo"/> 
                    <button class="profile__btn" type="submit">Сохранить</button>
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
}
</script>


<style lang="scss">
@import '../../assets/scss/vars';

.main-profile {
    @include adaptiv-value('padding-top', 20, 30, 1);
    @include adaptiv-value('padding-right', 55, 30, 1);
    @include adaptiv-value('padding-bottom', 45, 30, 1);
    @include adaptiv-value('padding-left', 55, 30, 1);
}


// 

.profile {
    &__btn {
        display: none;
    }
}

.profile-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @include adaptiv-value('margin-bottom', 25, 30, 1);

    &__link {
        margin-left: -6px;
        font-weight: 500;
        @include adaptiv-value('font-size', 24, 16, 1);
        line-height: 26px;
        color: #1B2559;
        display: flex;
        gap: 10px;
        align-items: center;

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

    &__btn {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        padding: 8px;
        width: 145px;
        max-width: 145px;
        background: #1294F2;
        border-radius: 6px;

        border: 1px solid transparent;
        transition: background 0.3s, color 0.3s, border 0.3s;

        &:hover {
            background: #fff;
            color: #1294F2;
            border: 1px solid #1294F2;
        }
    }
}

.profile-info {
    background: #FFFFFF;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    @include adaptiv-value('padding-top', 25, 23, 1);
    @include adaptiv-value('padding-right', 20, 23, 1);
    @include adaptiv-value('padding-bottom', 25, 23, 1);
    @include adaptiv-value('padding-left', 35, 23, 1);
    @include adaptiv-value('margin-bottom', 30, 35, 1);
    gap: 15px;

    &__level {
        margin-left: auto;
    }

    &__text {
        margin-left: auto;
        font-weight: 500;
        line-height: 24px;
        @include adaptiv-value('font-size', 16, 14, 1);
        text-align: right;
        align-self: flex-end;
        color: #1294F2;

    }
}

.profile-info-box {
    display: flex;
    align-items: center;
    @include adaptiv-value('gap', 45, 15, 1);

    &__img {
        @include adaptiv-value('width', 184, 67, 1);
        @include adaptiv-value('height', 184, 67, 1);
    }

    &__column {}

    &__column-title {
        font-weight: 600;
        @include adaptiv-value('font-size', 24, 16, 1);
        @include adaptiv-value('margin-bottom', 20, 0, 1);
        line-height: 24px;
        color: #1B2559;
    }

    &__column-text {
        font-weight: 500;
        @include adaptiv-value('font-size', 20, 14, 1);
        @include adaptiv-value('margin-bottom', 12, 4, 1);
        line-height: 24px;
        color: #1B2559;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

@media (max-width: 1440px) {
    .profile-info {
        flex-direction: column;
    }

    .main-profile {
        .main-top-level__inner {
            margin-left: unset;
            @include adaptiv-value('margin-top', 50, 30, 1);
        }
    }
}

@media (max-width: 550px) {
    .profile-info-box {
        align-items: flex-start;
    }

    .profile-top__btn {
        display: none;
    }

    .profile-top__link {
        margin-left: unset;
    }

    .profile__btn {
        display: flex;
        justify-content: center;
        margin-left: auto;
        text-align: center;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        padding: 6px;
        background: #1294F2;
        border-radius: 6px;
        width: 130px;
        max-width: 130px;
    }
}</style>