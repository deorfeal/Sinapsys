<template>
    <div class="biggest-wrapper">
        <div class="big-wrapper">
            <Aside :activeLink="3" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
            <div class="wrapper">
                <Header :searchIsActive="false" :title="'Планирование'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
                <main class="main main-new-planing">
                    <div class="main__new-planing new-planing">
                        <div class="new-planing__top new-planing-top">
                            <a class="new-planing-top__link" href="#">
                                <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                        fill="#1B2559" />
                                </svg>
                                <span>
                                    Новое планирование
                                </span>
                            </a>
                            <button class="new-planing-top__btn" type="button">
                                Сохранить
                            </button>
                        </div>
                        <div class="new-planing__inner">
                            <div class="new-planing__box new-planing-box">
                                <p class="new-planing-box__text">
                                    Название
                                </p>
                                <input class="new-planing-box__input" type="text" placeholder="Кибербезопасность">
                            </div>
                            <div class="new-planing__box new-planing-box">
                                <div class="new-planing-box__inner">
                                    <p class="new-planing-box__text">
                                        Курсы
                                    </p>
                                    <NewCursSelect :selectStatus="this.selectIsDisabled"
                                        :options="['Кибербезопастность', 'Кибербезопастность 1', 'Кибербезопастность 2', 'Кибербезопастность 3']"
                                        :default="'Кибербезопастность'" class="select select-first" />
                                    <NewCursSelect :selectStatus="this.selectIsDisabled"
                                        :options="['Выберите курс', 'Выберите курс 1', 'Выберите курс 2', 'Выберите курс 3']"
                                        :default="'Выберите курс'" class="select select-first" />
                                </div>
                                <p class="new-planing-box__text">
                                    Электронная почта
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.4099 12.0021L17.7099 7.71214C17.8982 7.52384 18.004 7.26844 18.004 7.00214C18.004 6.73584 17.8982 6.48044 17.7099 6.29214C17.5216 6.10383 17.2662 5.99805 16.9999 5.99805C16.7336 5.99805 16.4782 6.10383 16.2899 6.29214L11.9999 10.5921L7.70994 6.29214C7.52164 6.10383 7.26624 5.99805 6.99994 5.99805C6.73364 5.99805 6.47824 6.10383 6.28994 6.29214C6.10164 6.48044 5.99585 6.73584 5.99585 7.00214C5.99585 7.26844 6.10164 7.52384 6.28994 7.71214L10.5899 12.0021L6.28994 16.2921C6.19621 16.3851 6.12182 16.4957 6.07105 16.6176C6.02028 16.7394 5.99414 16.8701 5.99414 17.0021C5.99414 17.1342 6.02028 17.2649 6.07105 17.3867C6.12182 17.5086 6.19621 17.6192 6.28994 17.7121C6.3829 17.8059 6.4935 17.8803 6.61536 17.931C6.73722 17.9818 6.86793 18.0079 6.99994 18.0079C7.13195 18.0079 7.26266 17.9818 7.38452 17.931C7.50637 17.8803 7.61698 17.8059 7.70994 17.7121L11.9999 13.4121L16.2899 17.7121C16.3829 17.8059 16.4935 17.8803 16.6154 17.931C16.7372 17.9818 16.8679 18.0079 16.9999 18.0079C17.132 18.0079 17.2627 17.9818 17.3845 17.931C17.5064 17.8803 17.617 17.8059 17.7099 17.7121C17.8037 17.6192 17.8781 17.5086 17.9288 17.3867C17.9796 17.2649 18.0057 17.1342 18.0057 17.0021C18.0057 16.8701 17.9796 16.7394 17.9288 16.6176C17.8781 16.4957 17.8037 16.3851 17.7099 16.2921L13.4099 12.0021Z"
                                            fill="#1294F2" />
                                    </svg>
                                </p>
                            </div>
                            <div class="new-planing__box new-planing-box">
                                <div class="new-planing-box__inner">
                                    <p class="new-planing-box__text">
                                        Фиштинг атака
                                    </p>
                                    <NewCursSelect :selectStatus="this.selectIsDisabled"
                                        :options="['Выберите шаблон писем', 'Выберите шаблон писем 1', 'Выберите шаблон писем 2', 'Выберите шаблон писем 3']"
                                        :default="'Кибербезопастность'" class="select select-first" />
                                </div>
                                <p class="new-planing-box__text">
                                    Запрос доступа к документу
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.4099 12.0021L17.7099 7.71214C17.8982 7.52384 18.004 7.26844 18.004 7.00214C18.004 6.73584 17.8982 6.48044 17.7099 6.29214C17.5216 6.10383 17.2662 5.99805 16.9999 5.99805C16.7336 5.99805 16.4782 6.10383 16.2899 6.29214L11.9999 10.5921L7.70994 6.29214C7.52164 6.10383 7.26624 5.99805 6.99994 5.99805C6.73364 5.99805 6.47824 6.10383 6.28994 6.29214C6.10164 6.48044 5.99585 6.73584 5.99585 7.00214C5.99585 7.26844 6.10164 7.52384 6.28994 7.71214L10.5899 12.0021L6.28994 16.2921C6.19621 16.3851 6.12182 16.4957 6.07105 16.6176C6.02028 16.7394 5.99414 16.8701 5.99414 17.0021C5.99414 17.1342 6.02028 17.2649 6.07105 17.3867C6.12182 17.5086 6.19621 17.6192 6.28994 17.7121C6.3829 17.8059 6.4935 17.8803 6.61536 17.931C6.73722 17.9818 6.86793 18.0079 6.99994 18.0079C7.13195 18.0079 7.26266 17.9818 7.38452 17.931C7.50637 17.8803 7.61698 17.8059 7.70994 17.7121L11.9999 13.4121L16.2899 17.7121C16.3829 17.8059 16.4935 17.8803 16.6154 17.931C16.7372 17.9818 16.8679 18.0079 16.9999 18.0079C17.132 18.0079 17.2627 17.9818 17.3845 17.931C17.5064 17.8803 17.617 17.8059 17.7099 17.7121C17.8037 17.6192 17.8781 17.5086 17.9288 17.3867C17.9796 17.2649 18.0057 17.1342 18.0057 17.0021C18.0057 16.8701 17.9796 16.7394 17.9288 16.6176C17.8781 16.4957 17.8037 16.3851 17.7099 16.2921L13.4099 12.0021Z"
                                            fill="#1294F2" />
                                    </svg>
                                </p>
                            </div>
                            <div class="new-planing__box new-planing-box">
                                <p class="new-planing-box__text">
                                    Группа
                                </p>
                                <NewCursSelect
                                    :options="['Фин кафедра', 'Фин кафедра 1', 'Фин кафедра 2', 'Фин кафедра 3']"
                                    :default="'Выберите'" class="select select-first" />
                            </div>
                            <div class="new-planing__box new-planing-box">
                                <p class="new-planing-box__text">
                                    Старт
                                </p>
                                <div class="new-planing-box__wrap">
                                    <input class="new-planing-box__input" type="text" placeholder="24.09.2022">
                                    <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 2.66667H18.6667V1.33333C18.6667 0.979711 18.5262 0.640573 18.2761 0.390524C18.0261 0.140476 17.687 0 17.3333 0C16.9797 0 16.6406 0.140476 16.3905 0.390524C16.1405 0.640573 16 0.979711 16 1.33333V2.66667H8V1.33333C8 0.979711 7.85952 0.640573 7.60948 0.390524C7.35943 0.140476 7.02029 0 6.66667 0C6.31305 0 5.97391 0.140476 5.72386 0.390524C5.47381 0.640573 5.33333 0.979711 5.33333 1.33333V2.66667H4C2.93913 2.66667 1.92172 3.08809 1.17157 3.83824C0.421427 4.58839 0 5.6058 0 6.66667V22.6667C0 23.7275 0.421427 24.7449 1.17157 25.4951C1.92172 26.2452 2.93913 26.6667 4 26.6667H20C21.0609 26.6667 22.0783 26.2452 22.8284 25.4951C23.5786 24.7449 24 23.7275 24 22.6667V6.66667C24 5.6058 23.5786 4.58839 22.8284 3.83824C22.0783 3.08809 21.0609 2.66667 20 2.66667ZM4 5.33333H5.33333V6.66667C5.33333 7.02029 5.47381 7.35943 5.72386 7.60948C5.97391 7.85952 6.31305 8 6.66667 8C7.02029 8 7.35943 7.85952 7.60948 7.60948C7.85952 7.35943 8 7.02029 8 6.66667V5.33333H16V6.66667C16 7.02029 16.1405 7.35943 16.3905 7.60948C16.6406 7.85952 16.9797 8 17.3333 8C17.687 8 18.0261 7.85952 18.2761 7.60948C18.5262 7.35943 18.6667 7.02029 18.6667 6.66667V5.33333H20C20.3536 5.33333 20.6928 5.47381 20.9428 5.72386C21.1929 5.97391 21.3333 6.31305 21.3333 6.66667V12H2.66667V6.66667C2.66667 6.31305 2.80714 5.97391 3.05719 5.72386C3.30724 5.47381 3.64638 5.33333 4 5.33333ZM20 24H4C3.64638 24 3.30724 23.8595 3.05719 23.6095C2.80714 23.3594 2.66667 23.0203 2.66667 22.6667V14.6667H21.3333V22.6667C21.3333 23.0203 21.1929 23.3594 20.9428 23.6095C20.6928 23.8595 20.3536 24 20 24Z" fill="#96A5B8"/>
                                        <path d="M6.66665 19.9997C7.40303 19.9997 7.99998 19.4027 7.99998 18.6663C7.99998 17.93 7.40303 17.333 6.66665 17.333C5.93027 17.333 5.33331 17.93 5.33331 18.6663C5.33331 19.4027 5.93027 19.9997 6.66665 19.9997Z" fill="#96A5B8"/>
                                        <path d="M17.3334 17.333H12C11.6464 17.333 11.3073 17.4735 11.0572 17.7235C10.8072 17.9736 10.6667 18.3127 10.6667 18.6663C10.6667 19.02 10.8072 19.3591 11.0572 19.6092C11.3073 19.8592 11.6464 19.9997 12 19.9997H17.3334C17.687 19.9997 18.0261 19.8592 18.2762 19.6092C18.5262 19.3591 18.6667 19.02 18.6667 18.6663C18.6667 18.3127 18.5262 17.9736 18.2762 17.7235C18.0261 17.4735 17.687 17.333 17.3334 17.333Z" fill="#96A5B8"/>
                                        </svg>
                                        
                                </div>
                            </div>
                            <div class="new-planing__box new-planing-box">
                                <p class="new-planing-box__text">
                                    Завершение
                                </p>
                                <div class="new-planing-box__wrap">
                                    <input class="new-planing-box__input" type="text" placeholder="24.09.2022">
                                    <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 2.66667H18.6667V1.33333C18.6667 0.979711 18.5262 0.640573 18.2761 0.390524C18.0261 0.140476 17.687 0 17.3333 0C16.9797 0 16.6406 0.140476 16.3905 0.390524C16.1405 0.640573 16 0.979711 16 1.33333V2.66667H8V1.33333C8 0.979711 7.85952 0.640573 7.60948 0.390524C7.35943 0.140476 7.02029 0 6.66667 0C6.31305 0 5.97391 0.140476 5.72386 0.390524C5.47381 0.640573 5.33333 0.979711 5.33333 1.33333V2.66667H4C2.93913 2.66667 1.92172 3.08809 1.17157 3.83824C0.421427 4.58839 0 5.6058 0 6.66667V22.6667C0 23.7275 0.421427 24.7449 1.17157 25.4951C1.92172 26.2452 2.93913 26.6667 4 26.6667H20C21.0609 26.6667 22.0783 26.2452 22.8284 25.4951C23.5786 24.7449 24 23.7275 24 22.6667V6.66667C24 5.6058 23.5786 4.58839 22.8284 3.83824C22.0783 3.08809 21.0609 2.66667 20 2.66667ZM4 5.33333H5.33333V6.66667C5.33333 7.02029 5.47381 7.35943 5.72386 7.60948C5.97391 7.85952 6.31305 8 6.66667 8C7.02029 8 7.35943 7.85952 7.60948 7.60948C7.85952 7.35943 8 7.02029 8 6.66667V5.33333H16V6.66667C16 7.02029 16.1405 7.35943 16.3905 7.60948C16.6406 7.85952 16.9797 8 17.3333 8C17.687 8 18.0261 7.85952 18.2761 7.60948C18.5262 7.35943 18.6667 7.02029 18.6667 6.66667V5.33333H20C20.3536 5.33333 20.6928 5.47381 20.9428 5.72386C21.1929 5.97391 21.3333 6.31305 21.3333 6.66667V12H2.66667V6.66667C2.66667 6.31305 2.80714 5.97391 3.05719 5.72386C3.30724 5.47381 3.64638 5.33333 4 5.33333ZM20 24H4C3.64638 24 3.30724 23.8595 3.05719 23.6095C2.80714 23.3594 2.66667 23.0203 2.66667 22.6667V14.6667H21.3333V22.6667C21.3333 23.0203 21.1929 23.3594 20.9428 23.6095C20.6928 23.8595 20.3536 24 20 24Z" fill="#96A5B8"/>
                                        <path d="M6.66665 19.9997C7.40303 19.9997 7.99998 19.4027 7.99998 18.6663C7.99998 17.93 7.40303 17.333 6.66665 17.333C5.93027 17.333 5.33331 17.93 5.33331 18.6663C5.33331 19.4027 5.93027 19.9997 6.66665 19.9997Z" fill="#96A5B8"/>
                                        <path d="M17.3334 17.333H12C11.6464 17.333 11.3073 17.4735 11.0572 17.7235C10.8072 17.9736 10.6667 18.3127 10.6667 18.6663C10.6667 19.02 10.8072 19.3591 11.0572 19.6092C11.3073 19.8592 11.6464 19.9997 12 19.9997H17.3334C17.687 19.9997 18.0261 19.8592 18.2762 19.6092C18.5262 19.3591 18.6667 19.02 18.6667 18.6663C18.6667 18.3127 18.5262 17.9736 18.2762 17.7235C18.0261 17.4735 17.687 17.333 17.3334 17.333Z" fill="#96A5B8"/>
                                        </svg>
                                        
                                </div>
                            </div>

                            <div class="new-planing__box new-planing-box">
                                <p class="new-planing-box__text">
                                    Периодичность
                                </p>
                                <NewCursSelect :selectStatus="this.selectIsDisabled"
                                    :options="['каждые полгода', 'каждые полгода 1', 'каждые полгода 2', 'каждые полгода 3']"
                                    :default="'каждые полгода'" class="select select-first" />
                            </div>
                            <div class="new-planing__box new-planing-box">
                                <p class="new-planing-box__text">
                                    Досрочная сдача
                                </p>
                                <label class="container">
                                    Досрочная сдача тестов разрешена
                                    <input type="checkbox" checked>
                                    <span class="checkmark"></span>
                                </label>
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
import NewCursSelect from '../../components/admin-components/New-curs-select.vue';
import PageEntrySelect from '../../components/admin-components/Page-entry-select.vue';

export default {
    components: {
        Aside,
        Header,
        Footer,
        NewCursSelect,
        PageEntrySelect,
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

.main-new-planing {
    @include adaptiv-value("padding-top", 30, 30, 1);
    @include adaptiv-value("padding-right", 55, 30, 1);
    @include adaptiv-value("padding-bottom", 80, 30, 1);
    @include adaptiv-value("padding-left", 55, 30, 1);
}

.new-planing {

    &__inner {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
}

.new-planing-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 25px;

    &__link {
        display: flex;
        align-items: center;
        gap: 5px;
        font-weight: 500;
        @include adaptiv-value("font-size", 22, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        color: #1B2559;
    }

    &__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        text-align: center;
       
        border-radius: 6px;

        transition: background 0.3s, border 0.3s, color 0.3s;
        border: 1px solid transparent;

        @include adaptiv-value("padding", 12, 8, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("gap", 10, 5, 1);
        @include adaptiv-value("width", 140, 130, 1);
        @include adaptiv-value("max-width", 140, 130, 1);

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

.new-planing-box {
    display: flex;

    &:nth-child(2) {
        flex-direction: column;
        .new-planing-box__text:last-child {
            max-width: 210px;
        }
    }

    &:nth-child(3) {
        flex-direction: column;
    }
    &:nth-child(5) {
  
        .new-planing-box__wrap {
            position: relative;
        }
        svg {
            right: 20px;
            top: 50%;
            position: absolute;
            transform: translateY(-50%);
        }
        .new-planing-box__input {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            border: unset;
            padding-right: 50px;
            background: transparent;
            bottom: 0;
        }
    }
    &:nth-child(6) {
        .new-planing-box__wrap {
            position: relative;
            svg {
                right: 20px;
                top: 50%;
                position: absolute;
                transform: translateY(-50%);
            }
        }
        .new-planing-box__input {
            width: 100%;
            height: 100%;
            padding-right: 50px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            border: unset;
            background: transparent;
            bottom: 0;
        }
    }
    .custom-select-new-curs {
        min-width: 390px;
    }
    .custom-select-new-curs:nth-child(3) {
        margin-left: 25px;
    }

    &__text {
        width: 145px;
        font-weight: 400;
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        color: #1B2559;
        margin-right: 75px;
        &:last-child {
            margin-left: 220px;
            width: unset;
            margin-right: unset;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            gap: 5px;
            padding: 8px 16px;
            display: flex;
            align-items: center;
            color: #1B2559;
            max-width: 275px;
            border: 1px solid #1294F2;
border-radius: 12px;
justify-content: center;
        }
    }

    &__wrap {
        padding: 12px 12px 12px 16px;
        background: #FFFFFF;
        border: 1px solid #96A5B8;
        @include adaptiv-value('font-size', 16, 14, 1);
        @include adaptiv-value('padding-top', 12, 8, 1);
        @include adaptiv-value('padding-right', 12, 13, 1);
        @include adaptiv-value('padding-bottom', 12, 8, 1);
        @include adaptiv-value('padding-left', 16, 16, 1);
        @include adaptiv-value('width', 390, 175, 1);
        height: 50px;
        position: relative;
    }
    &__input {
        font-weight: 500;
        line-height: 24px;
        color: #96A5B8;
        background: #FFFFFF;
        border: 1px solid #96A5B8;
        border-radius: 4px;
        min-width: 390px;
 @include adaptiv-value('width', 390, 175, 1);
        @include adaptiv-value('font-size', 16, 14, 1);
        @include adaptiv-value('padding-top', 12, 8, 1);
        @include adaptiv-value('padding-right', 12, 13, 1);
        @include adaptiv-value('padding-bottom', 12, 8, 1);
        @include adaptiv-value('padding-left', 16, 16, 1);

        &::placeholder {
            font-size: 16px;
            line-height: 24px;
            color: #96A5B8;
            font-weight: 500;
        }
        &:focus {
            &::placeholder {
                opacity: 0;
            }
        }
    }

    &__inner {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
    }

        /* Customize the label (the container) */
        .container {
            margin-left: unset;
            margin-right: unset;
            display: block;
            position: relative;
            @include adaptiv-value("padding-left", 40, 30, 1);
            cursor: pointer;
            font-weight: 400;
            @include adaptiv-value("font-size", 15, 12, 1);
            @include adaptiv-value("line-height", 25, 15, 1);
        color: #96A5B8;
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
            background-image: url(../../public/images/reg-two-tick-icon.svg);
            background-repeat: no-repeat;
            background-size: cover;
        }
    
        // // // 

}

@media (max-width: 1150px) {
    .new-planing-box .custom-select-new-curs {
        min-width: 250px;
    }
    .new-planing-box__input {
        min-width: 250px;
    }
}

@media (max-width: 850px) {
    .new-planing-box {
        flex-direction: column;
    }
    .new-planing-box__inner {
        align-items: flex-start;
        flex-direction: column;
        gap: 15px;
    }
    .new-planing-box__text {
        margin-left: unset !important;
    }
    .new-planing-box   .custom-select-new-curs {
        margin-left: unset !important;
    }
    .new-planing-box {
        gap: 10px;
    }
  
}

@media (max-width: 550px) {
    .new-planing-top {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
}

</style>