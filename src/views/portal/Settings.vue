<template>
    <div class="big-wrapper">
        <Aside :activeLink="3" :sideMenuActive="this.sideMenuActive" :isAdmin="false"/>
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Настройки'" @openSideMenu="SideMenuToActive" :isAdmin="false"/>
            <main class="main main-profile main-settings">
                <form class="main__profile profile" action="#">
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
                        <a class="profile-info__btn" href="#">
                            Сохранить
                        </a>
                    </div>
                    <SettingsOfProfileVue @clickOnButton="changedInfo" />
                    <button class="profile__btn" type="submit">Сохранить</button>
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
export default {
    components: {
        Aside,
        Header,
        Footer,
        SettingsOfProfileVue,
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
.profile-info__btn {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    text-align: center;
    background: #1294F2;
    border-radius: 6px;
    width: 160px;
    max-width: 160px;
    padding: 8px;
    color: #FFFFFF;

    border: 1px solid transparent;
    transition: background 0.3s, color 0.3s, border 0.3s;
    &:hover {
        background: #fff;
        color: #1294F2;
        border: 1px solid #1294F2;
    }
}
.main-settings {
    .profile-info {
        padding: 40px 30px 40px 35px;
        @include adaptiv-value('padding-top', 40, 30, 1);
        @include adaptiv-value('padding-right', 40, 25, 1);
        @include adaptiv-value('padding-bottom', 40, 30, 1);
        @include adaptiv-value('padding-left', 35, 25, 1);
        @include adaptiv-value('margin-bottom', 35, 25, 1);
    }
}
@media (max-width: 1700px) {
    .main-settings {
        .profile-info {
            flex-direction: row;
        }
    }
}
@media (max-width: 650px) {
    .main-settings {
        .profile-info {
            flex-direction: column;
            gap: 30px;
        }
    }
}
@media (max-width: 550px) {
    .main-settings {
        .profile-info__btn {
            display: none;
        }
        .profile-settings__btn {
            display: none;
        }
        .profile-settings {
            padding-bottom: 30px;
        }
    }
}
</style>