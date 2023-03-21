<template>
    <header class="header">
        <h1 class="header__title">
            {{ this.title }}
        </h1>
        <form class="header__form" action="#" v-if="searchIsActive">
            <input class="header__form-input" type="text" placeholder="Поиск">
            <button class="header__form-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.9235 14.5525L15.2776 14.1995L15.2773 14.1992L14.9235 14.5525ZM10.8445 10.468L10.4972 10.1083L10.1314 10.4615L10.4907 10.8213L10.8445 10.468ZM10.4388 10.8243L10.7926 10.471L10.4765 10.1544L10.1268 10.4335L10.4388 10.8243ZM14.5276 14.9189L14.8825 14.5666L14.8815 14.5655L14.5276 14.9189ZM14.9158 14.9263L15.255 15.2936L15.2556 15.293L14.9158 14.9263ZM15.2773 14.1992L11.1983 10.1146L10.4907 10.8213L14.5697 14.9058L15.2773 14.1992ZM11.1919 10.8276C12.3232 9.73512 13.0295 8.22281 13.0295 6.55073H12.0295C12.0295 7.93367 11.4467 9.19143 10.4972 10.1083L11.1919 10.8276ZM13.0295 6.55073C13.0295 3.1961 10.2017 0.5 6.76474 0.5V1.5C9.68544 1.5 12.0295 3.7837 12.0295 6.55073H13.0295ZM6.76474 0.5C3.32775 0.5 0.5 3.1961 0.5 6.55073H1.5C1.5 3.7837 3.84404 1.5 6.76474 1.5V0.5ZM0.5 6.55073C0.5 9.90536 3.32775 12.6015 6.76474 12.6015V11.6015C3.84404 11.6015 1.5 9.31776 1.5 6.55073H0.5ZM6.76474 12.6015C8.27625 12.6015 9.66626 12.0809 10.7508 11.215L10.1268 10.4335C9.2151 11.1615 8.04392 11.6015 6.76474 11.6015V12.6015ZM10.085 11.1776L14.1738 15.2722L14.8815 14.5655L10.7926 10.471L10.085 11.1776ZM14.1728 15.2712C14.3272 15.4266 14.53 15.5 14.7256 15.5V14.5C14.7768 14.5 14.8357 14.5194 14.8825 14.5666L14.1728 15.2712ZM14.7256 15.5C14.9131 15.5 15.1045 15.4326 15.255 15.2936L14.5767 14.5589C14.6206 14.5183 14.6753 14.5 14.7256 14.5V15.5ZM15.2556 15.293C15.5724 14.9995 15.5828 14.5057 15.2776 14.1995L14.5694 14.9055C14.4739 14.8097 14.4777 14.6505 14.576 14.5595L15.2556 15.293ZM6.76474 11.0728C4.14683 11.0728 2.04902 9.02621 2.04902 6.55073H1.04902C1.04902 9.61382 3.63054 12.0728 6.76474 12.0728V11.0728ZM2.04902 6.55073C2.04902 4.07525 4.14683 2.02864 6.76474 2.02864V1.02864C3.63054 1.02864 1.04902 3.48764 1.04902 6.55073H2.04902ZM6.76474 2.02864C9.38265 2.02864 11.4805 4.07525 11.4805 6.55073H12.4805C12.4805 3.48764 9.89894 1.02864 6.76474 1.02864V2.02864ZM11.4805 6.55073C11.4805 9.0262 9.38239 11.0728 6.76474 11.0728V12.0728C9.89865 12.0728 12.4805 9.61384 12.4805 6.55073H11.4805Z"
                        fill="#96A5B8" />
                </svg>
            </button>
        </form>
        <div class="header__user-nav header-user-nav">
            <div class="header-user-nav__langs">
                <a class="header-user-nav__langs-link" href="#">
                    kz
                </a>
                <a class="header-user-nav__langs-link header-user-nav__langs-link--active" href="#">
                    ru
                </a>
                <a class="header-user-nav__langs-link" href="#">
                    en
                </a>
            </div>
            <div class="header-user-nav__box header-user-nav-box">
                <div class="header-user-nav-box__user header-user-nav-box-user">
                    <a class="header-user-nav-box-user__link" href="#">
                        <img class="header-user-nav-box-user__link-img" src="../../../public/images/header-user-icon.svg"
                            alt="user-icon">
                    </a>
                    <div class="header-user-nav-box-user__column">
                        <p class="header-user-nav-box-user__column-text">
                            Аида Кожабай
                        </p>
                        <p class="header-user-nav-box-user__column-subtext">
                            пользователь
                        </p>
                    </div>
                    <button class="header-user-nav-box-user__button" @click="openProfileWindow">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 6L8.5 10L12.5 6" stroke="#151D48" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
                <div class="header-user-nav-box__profile header-user-nav-box-profile">
                    <ul class="header-user-nav-box-profile__list">
                        <li class="header-user-nav-box-profile__list-item">
                            <a class="header-user-nav-box-profile__list-link" href="#">
                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M1.28271 9.37264V17.0485H4.61375H7.94478V17.6692V18.2899H7.05513H6.16547V18.9106V19.5313H11.8758H17.5862V18.9106V18.2899H16.6965H15.8069V17.6692V17.0485H19.1379H22.4689V9.37264V1.69678H11.8758H1.28271V9.37264ZM21.2275 7.71747V12.4968H11.8758H2.52409V7.71747V2.93816H11.8758H21.2275V7.71747ZM5.71216 4.67989C5.28414 4.76381 4.75125 5.14479 4.52723 5.52709C4.18196 6.11621 4.17252 6.84205 4.50273 7.41395L4.62732 7.62978L4.38852 7.89039C4.25718 8.03373 4.09034 8.27158 4.0178 8.41893C3.81471 8.83152 3.767 9.13972 3.76618 10.0451L3.76547 10.8416H6.1034H8.44134L8.44071 10.0037C8.44005 9.08667 8.39876 8.80707 8.20833 8.43047C8.08105 8.17864 7.77869 7.78206 7.65649 7.70663C7.57196 7.65445 7.57196 7.65441 7.66911 7.49973C8.04972 6.89402 8.05254 6.10041 7.67623 5.50434C7.26438 4.85191 6.49092 4.52725 5.71216 4.67989ZM10.5103 5.2554V5.87609H15.2482H19.9862V5.2554V4.63471H15.2482H10.5103V5.2554ZM6.41416 5.96919C6.63678 6.12072 6.71934 6.2634 6.71934 6.49678C6.71934 6.82119 6.4903 7.06972 6.15985 7.10385C5.80618 7.14035 5.5034 6.86038 5.5034 6.49678C5.5034 6.02054 6.03616 5.71194 6.41416 5.96919ZM10.5103 7.73816V8.35885H15.2482H19.9862V7.73816V7.11747H15.2482H10.5103V7.73816ZM6.46361 8.42315C6.87414 8.56305 7.19872 8.99551 7.19954 9.40367L7.19996 9.60023H6.09761H4.99527L5.01869 9.37355C5.09276 8.6557 5.79347 8.19482 6.46361 8.42315ZM10.5103 10.2209V10.8416H15.2482H19.9862V10.2209V9.60023H15.2482H10.5103V10.2209ZM21.2275 14.7726V15.8071H11.8758H2.52409V14.7726V13.7382H11.8758H21.2275V14.7726ZM14.5655 17.6692V18.2899H11.8758H9.18616V17.6692V17.0485H11.8758H14.5655V17.6692Z"
                                        fill="#1B2559" />
                                </svg>
                                <span>
                                    Портал администратора
                                </span>
                            </a>
                        </li>
                        <li class="header-user-nav-box-profile__list-item">
                            <a class="header-user-nav-box-profile__list-link" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 11C12.7911 11 13.5645 10.7654 14.2223 10.3259C14.8801 9.88635 15.3928 9.26164 15.6955 8.53074C15.9983 7.79983 16.0775 6.99556 15.9231 6.21964C15.7688 5.44372 15.3878 4.73098 14.8284 4.17157C14.269 3.61216 13.5563 3.2312 12.7804 3.07686C12.0044 2.92252 11.2002 3.00173 10.4693 3.30448C9.73836 3.60723 9.11365 4.11992 8.67412 4.77772C8.2346 5.43552 8 6.20888 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11ZM12 5C12.3956 5 12.7822 5.1173 13.1111 5.33706C13.44 5.55683 13.6964 5.86918 13.8478 6.23463C13.9991 6.60009 14.0387 7.00222 13.9616 7.39018C13.8844 7.77814 13.6939 8.13451 13.4142 8.41422C13.1345 8.69392 12.7781 8.8844 12.3902 8.96157C12.0022 9.03874 11.6001 8.99914 11.2346 8.84776C10.8692 8.69639 10.5568 8.44004 10.3371 8.11114C10.1173 7.78224 10 7.39556 10 7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21072 11.4696 5 12 5Z"
                                        fill="#1B2559" />
                                    <path
                                        d="M12 13C10.1435 13 8.36301 13.7375 7.05025 15.0503C5.7375 16.363 5 18.1435 5 20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21C6.26522 21 6.51957 20.8946 6.70711 20.7071C6.89464 20.5196 7 20.2652 7 20C7 18.6739 7.52678 17.4021 8.46447 16.4645C9.40215 15.5268 10.6739 15 12 15C13.3261 15 14.5979 15.5268 15.5355 16.4645C16.4732 17.4021 17 18.6739 17 20C17 20.2652 17.1054 20.5196 17.2929 20.7071C17.4804 20.8946 17.7348 21 18 21C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20C19 18.1435 18.2625 16.363 16.9497 15.0503C15.637 13.7375 13.8565 13 12 13Z"
                                        fill="#1B2559" />
                                </svg>
                                <span>
                                    Мой профиль
                                </span>
                            </a>
                        </li>
                        <li class="header-user-nav-box-profile__list-item">
                            <a class="header-user-nav-box-profile__list-link" href="#">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 6C7.26522 6 7.51957 5.89464 7.70711 5.70711C7.89464 5.51957 8 5.26522 8 5C8 4.73478 7.89464 4.48043 7.70711 4.29289C7.51957 4.10536 7.26522 4 7 4H5C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H7C7.26522 20 7.51957 19.8946 7.70711 19.7071C7.89464 19.5196 8 19.2652 8 19C8 18.7348 7.89464 18.4804 7.70711 18.2929C7.51957 18.1054 7.26522 18 7 18H6V6H7Z"
                                        fill="#1B2559" />
                                    <path
                                        d="M20.82 11.42L18 7.41995C17.8471 7.20436 17.615 7.05809 17.3545 7.01312C17.0941 6.96815 16.8264 7.02813 16.61 7.17995C16.5018 7.25574 16.4098 7.35219 16.3391 7.46376C16.2684 7.57532 16.2206 7.69977 16.1982 7.82994C16.1759 7.9601 16.1796 8.09339 16.2091 8.22212C16.2386 8.35085 16.2933 8.47247 16.37 8.57995L18.09 11H18H10C9.73478 11 9.48043 11.1053 9.29289 11.2928C9.10536 11.4804 9 11.7347 9 12C9 12.2652 9.10536 12.5195 9.29289 12.7071C9.48043 12.8946 9.73478 13 10 13H18L16.2 15.4C16.1212 15.505 16.0639 15.6246 16.0313 15.7518C15.9987 15.879 15.9915 16.0114 16.01 16.1414C16.0286 16.2714 16.0726 16.3964 16.1395 16.5094C16.2064 16.6224 16.2949 16.7212 16.4 16.7999C16.5731 16.9298 16.7836 17 17 17C17.1552 17 17.3084 16.9638 17.4472 16.8944C17.5861 16.8249 17.7069 16.7241 17.8 16.6L20.8 12.6C20.9281 12.4308 20.999 12.2253 21.0026 12.0132C21.0062 11.8011 20.9423 11.5933 20.82 11.42Z"
                                        fill="#1B2559" />
                                </svg>
                                <span>
                                    Выйти
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: ['searchIsActive', 'title'],
    methods: {
        openProfileWindow() {
            if ( document.querySelector('.header-user-nav-box').classList.contains('header-user-nav-box--active') ) {
                document.querySelector('.header-user-nav-box').classList.remove('header-user-nav-box--active')
            } else {
                document.querySelector('.header-user-nav-box').classList.add('header-user-nav-box--active')
            }
        }
    }
}
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 55px 30px 55px;
    background: #FFFFFF;
    &__title {
        font-weight: 600;
        font-size: 28px;
        line-height: 30px;
        color: #1B2559;
    //    margin-right: 220px;

    }

    &__form {
        // margin-right: 150px;
        width: 540px;
        border: 1.5px solid #96A5B8;
        border-radius: 16px;
        position: relative;
    }

    &__form-input {
        padding: 17px 30px 17px 50px;
        border-radius: 16px;
        width: 100%;
    }

    &__form-btn {
        position: absolute;
        width: 14px;
        height: 14px;
        top: 50%;
        left: 23px;
        transform: translateY(-50%);
    }
}

.header-user-nav {
    display: flex;
    align-items: center;
    gap: 25px;

    &__langs {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &__langs-link {
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #96A5B8;
        transition: color 0.3s;
        &:hover {
            color: #1294F2;
        }
    }

    &__langs-link--active {
        color: #1294F2;
    }
}

.header-user-nav-box {
    position: relative;
    display: flex;
    align-items: center;
    gap: 25px;
}

.header-user-nav-box--active {
    .header-user-nav-box-profile {
        display: flex;
    }
    .header-user-nav-box-user__button {
        svg {
            transform: rotate(180deg);
        }
    }
}

.header-user-nav-box-user {
    display: flex;
    align-items: center;
    gap: 25px;

    &__link {}

    &__link-img {}

    &__column {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }

    &__column-text {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #1B2559;

    }

    &__column-subtext {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1B2559;

    }

    &__button {
        svg {
            transition: transform 0.3s;
        }
    }
}

.header-user-nav-box-profile {
    display: none;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(27, 37, 89, 0.1);
    border-radius: 4px;
    padding: 35px 25px;
    position: absolute;
    top: 60px;
    z-index: 10;
    width: 310px;
    justify-content: center;
    align-items: center;
    right: 0;
    &__list {}

    &__list-item {
        margin-bottom: 24px;
        &:nth-child(2) {
            border-bottom: 0.5px solid #96A5B8;
            padding-bottom: 24px;
        }
        &:nth-child(3) {
            margin-bottom: 0;
        }
    }

    &__list-link {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        gap: 18px;
        align-items: center;
        color: #1B2559;
    }
}
</style>