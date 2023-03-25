<template>
    <div class="big-wrapper">
        <Aside :activeLink="2" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Настройки'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
            <main class="main main-user-info">
                <form class="main__user-info user-info" action="#">
                    <div class="user-info__top">
                        <a class="user-info__top-link" href="#">
                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                    fill="#1B2559" />
                            </svg>
                            <span>
                                Информация о пользователе
                            </span>
                        </a>
                        <button class="user-info__top-btn" type="submit">
                            Сохранить
                        </button>
                    </div>
                    <div class="user-info__profile profile">
                        <div class="profile__info profile-info">
                            <div class="profile-info__box profile-info-box">
                                <img class="profile-info-box__img" src="../../../public/images/header-user-icon.svg"
                                    alt="user-icon">
                                <div class="profile-info-box__column">
                                    <h2 class="profile-info-box__column-title">
                                        Аида Кожабай
                                    </h2>
                                    <p class="profile-info-box__column-text">
                                        Возраст:
                                        <span>27 лет</span>
                                    </p>
                                    <p class="profile-info-box__column-text">
                                        Должность:
                                        <span>Менеджер</span>
                                    </p>
                                    <p class="profile-info-box__column-text">
                                        Сотрудник компании SYNAPSYS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="user-info__bottom user-info-bottom">
                        <div class="user-info-bottom__box user-info-bottom-box">
                            <h2 class="user-info-bottom-box__title">
                                Личная информация
                            </h2>
                            <div class="user-info-bottom-box__row">
                                <p class="user-info-bottom-box__row-text">
                                    Страна:
                                </p>
                                <NewCursSelect :options="['Казахстан', 'Казахстан 2', ' Казахстан 3']"
                                    :default="'Казахстан'" class="select" />
                            </div>
                            <div class="user-info-bottom-box__row">
                                <p class="user-info-bottom-box__row-text">
                                    Город:
                                </p>
                                <NewCursSelect :options="['Астана', 'Астана 2', ' Астана 3']" :default="'Астана'"
                                    class="select" />
                            </div>
                            <div class="user-info-bottom-box__row">
                                <p class="user-info-bottom-box__row-text">
                                    Номер телефона
                                </p>
                                <NewCursSelect
                                    :options="['+7 (708) 717 2438', '+7 (708) 717 2438 2', ' +7 (708) 717 2438 3']"
                                    :default="'+7 (708) 717 2438'" class="select" />
                            </div>
                            <div class="user-info-bottom-box__row">
                                <p class="user-info-bottom-box__row-text">
                                    Аккаунт телеграмм
                                </p>
                                <input class="user-info-bottom-box__row-input" type="text" placeholder="@lolikxxx">
                            </div>
                            <div class="user-info-bottom-box__row">
                                <p class="user-info-bottom-box__row-text">
                                    Группа
                                </p>
                                <NewCursSelect :options="['Фин кафедра', 'Фин кафедра 2', ' Фин кафедра 3']"
                                    :default="'Фин кафедра'" class="select" />
                            </div>
                        </div>
                        <div class="user-info-bottom__item user-info-bottom-item">
                            <h2 class="user-info-bottom-item__title">
                                Профиль
                            </h2>
                            <div class="user-info-bottom-item__row">
                                <p class="user-info-bottom-item__row-text">
                                    <span>
                                        Логин:
                                    </span>
                                    <span>
                                        aida322279@gmail.com
                                    </span>
                                </p>
                            </div>
                            <div class="user-info-bottom-item__row">
                                <p class="user-info-bottom-item__row-text">
                                    <span>
                                        Почта:
                                    </span>
                                    <span>
                                        aida322279@gmail.com
                                    </span>
                                </p>
                            </div>
                            <div class="user-info-bottom-item__row">
                                <p class="user-info-bottom-item__row-text">
                                    <span>
                                        Пароль
                                    </span>
                                    <span>
                                        *****************
                                    </span>
                                </p>
                                <button class="user-info-bottom-item__row-btn" type="button">
                                    Посмотреть
                                </button>
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
import NewCursSelect from '../../components/admin-components/New-curs-select.vue';
export default {
    components: {
        Aside,
        Header,
        Footer,
        NewCursSelect
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

.main-user-info {
    padding: 30px 55px 40px 55px;

    .custom-select-new-curs {
        max-width: 330px;
    }
}

// 

.user-info {

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
    }

    &__top-link {
        display: flex;
        align-items: center;
        gap: 10px;

        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        color: #1B2559;
    }

    &__top-btn {
        padding: 12px;

        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        width: 140px;
        max-width: 140px;
        background: #1294F2;
        border: 1px solid #1294F2;
        border-radius: 6px;
    }

    &__profile {}
}

.user-info-bottom {
    margin-top: 25px;
    background: #FFFFFF;
    border-radius: 16px;
    padding: 55px 40px;
    display: flex;
    gap: 90px;
}

.user-info-bottom-box {
    display: flex;
    flex-direction: column;
    gap: 25px;

    &__title {
        font-weight: 500;
        font-size: 22px;
        line-height: 24px;
        color: #1B2559;

    }

    &__row {
        padding-left: 55px;
        display: flex;
        align-items: center;
        gap: 25px;

    }

    &__row-text {
        width: 205px;

        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #60678B;
    }

    &__row-input {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        background: #FFFFFF;
        color: #96A5B8;
        border: 1px solid #96A5B8;
        border-radius: 4px;
        width: 330px;
        padding: 12px 16px;

        &::placeholder {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            background: #FFFFFF;
            color: #96A5B8;
        }
    }
}

.user-info-bottom-item {

    &__title {
        font-weight: 500;
        font-size: 22px;
        line-height: 24px;
        margin-bottom: 25px;
        color: #1B2559;
    }

    &__row {
        margin-bottom: 25px;

        &:nth-last-child(2) {
            margin-bottom: 15px;
        }

        &:nth-child(4) {
            display: flex;
            gap: 10px;
            align-items: baseline;

            p span:last-child {
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                color: #96A5B8;
            }
        }
    }

    &__row-text {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #60678B;
        display: flex;
        align-items: center;

        span:nth-child(1) {
            width: 80px;
        }

        span:nth-child(2) {
            margin-left: 100px;
            display: block;
        }
    }

    &__row-btn {
        font-size: 16px;
        line-height: 24px;
        width: 135px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #96A5B8;

        border: 1px solid #96A5B8;
        border-radius: 12px;
        padding: 8px;

    }
}
</style>