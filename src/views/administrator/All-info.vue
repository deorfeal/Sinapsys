<template>
    <div class="biggest-wrapper">
    <div class="big-wrapper">
        <Aside :activeLink="2" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Пользователи'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
            <main class="main main-all-info">
                <section class="main__all-info all-info">
                    <div class="all-info__wrapper">
                        <div class="all-info__column all-info-column">
                            <h2 class="all-info-column__title">
                                Управление пользователями
                            </h2>
                            <div class="all-info-column__box">
                                <button class="all-info-column__box-btn" type="button" data-filter=".item-first"
                                    @click="addFirstState">
                                    Пользователи
                                </button>
                                <button class="all-info-column__box-btn" type="button" data-filter=".item-second"
                                    @click="addSecondState">
                                    Группы
                                </button>
                                <button class="all-info-column__box-btn" type="button" data-filter=".item-third"
                                    @click="addThirdState">
                                    Роли
                                </button>
                            </div>
                        </div>
                        <div class="all-info__wrap">
                            <div class="all-info__top all-info-top">
                                <button class="all-info-top__btn" type="button">
                                    Импорт и синхронизация
                                </button>
                                <a class="all-info-top__link" data-fancybox href="#new-user">
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25.833 14.6663H17.833V6.66634C17.833 6.31272 17.6925 5.97358 17.4425 5.72353C17.1924 5.47348 16.8533 5.33301 16.4997 5.33301C16.1461 5.33301 15.8069 5.47348 15.5569 5.72353C15.3068 5.97358 15.1663 6.31272 15.1663 6.66634V14.6663H7.16634C6.81272 14.6663 6.47358 14.8068 6.22353 15.0569C5.97348 15.3069 5.83301 15.6461 5.83301 15.9997C5.83301 16.3533 5.97348 16.6924 6.22353 16.9425C6.47358 17.1925 6.81272 17.333 7.16634 17.333H15.1663V25.333C15.1663 25.6866 15.3068 26.0258 15.5569 26.2758C15.8069 26.5259 16.1461 26.6663 16.4997 26.6663C16.8533 26.6663 17.1924 26.5259 17.4425 26.2758C17.6925 26.0258 17.833 25.6866 17.833 25.333V17.333H25.833C26.1866 17.333 26.5258 17.1925 26.7758 16.9425C27.0259 16.6924 27.1663 16.3533 27.1663 15.9997C27.1663 15.6461 27.0259 15.3069 26.7758 15.0569C26.5258 14.8068 26.1866 14.6663 25.833 14.6663Z"
                                            fill="#1294F2" />
                                    </svg>
                                    Добавить
                                </a>
                                <a class="all-info-top__link" data-fancybox href="#all-info-delete">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.6393 3.99962H11.306V2.88628C11.2903 2.4595 11.1061 2.05632 10.7937 1.76515C10.4813 1.47397 10.0662 1.31855 9.63932 1.33295H7.63932C7.21249 1.31855 6.79736 1.47397 6.48494 1.76515C6.17252 2.05632 5.9883 2.4595 5.97266 2.88628V3.99962H2.63932C2.46251 3.99962 2.29294 4.06985 2.16792 4.19488C2.04289 4.3199 1.97266 4.48947 1.97266 4.66628C1.97266 4.84309 2.04289 5.01266 2.16792 5.13769C2.29294 5.26271 2.46251 5.33295 2.63932 5.33295H3.30599V12.6663C3.30599 13.1967 3.5167 13.7054 3.89178 14.0805C4.26685 14.4556 4.77556 14.6663 5.30599 14.6663H11.9727C12.5031 14.6663 13.0118 14.4556 13.3869 14.0805C13.7619 13.7054 13.9727 13.1967 13.9727 12.6663V5.33295H14.6393C14.8161 5.33295 14.9857 5.26271 15.1107 5.13769C15.2358 5.01266 15.306 4.84309 15.306 4.66628C15.306 4.48947 15.2358 4.3199 15.1107 4.19488C14.9857 4.06985 14.8161 3.99962 14.6393 3.99962ZM7.30599 2.88628C7.30599 2.77962 7.44599 2.66628 7.63932 2.66628H9.63932C9.83266 2.66628 9.97266 2.77962 9.97266 2.88628V3.99962H7.30599V2.88628ZM12.6393 12.6663C12.6393 12.8431 12.5691 13.0127 12.4441 13.1377C12.319 13.2627 12.1495 13.3329 11.9727 13.3329H5.30599C5.12918 13.3329 4.95961 13.2627 4.83459 13.1377C4.70956 13.0127 4.63932 12.8431 4.63932 12.6663V5.33295H12.6393V12.6663Z"
                                            fill="#EC4848"></path>
                                        <path
                                            d="M6.63932 11.333C6.81613 11.333 6.9857 11.2628 7.11073 11.1377C7.23575 11.0127 7.30599 10.8432 7.30599 10.6663V7.99967C7.30599 7.82286 7.23575 7.65329 7.11073 7.52827C6.9857 7.40325 6.81613 7.33301 6.63932 7.33301C6.46251 7.33301 6.29294 7.40325 6.16792 7.52827C6.04289 7.65329 5.97266 7.82286 5.97266 7.99967V10.6663C5.97266 10.8432 6.04289 11.0127 6.16792 11.1377C6.29294 11.2628 6.46251 11.333 6.63932 11.333Z"
                                            fill="#EC4848"></path>
                                        <path
                                            d="M10.6393 11.333C10.8161 11.333 10.9857 11.2628 11.1107 11.1377C11.2358 11.0127 11.306 10.8432 11.306 10.6663V7.99967C11.306 7.82286 11.2358 7.65329 11.1107 7.52827C10.9857 7.40325 10.8161 7.33301 10.6393 7.33301C10.4625 7.33301 10.2929 7.40325 10.1679 7.52827C10.0429 7.65329 9.97266 7.82286 9.97266 7.99967V10.6663C9.97266 10.8432 10.0429 11.0127 10.1679 11.1377C10.2929 11.2628 10.4625 11.333 10.6393 11.333Z"
                                            fill="#EC4848"></path>
                                    </svg>
                                    Удалить
                                </a>
                                <form class="all-info-top__form" action="#">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.9235 14.5525L15.2776 14.1995L15.2773 14.1992L14.9235 14.5525ZM10.8445 10.468L10.4972 10.1083L10.1314 10.4615L10.4907 10.8213L10.8445 10.468ZM10.4388 10.8243L10.7926 10.471L10.4765 10.1544L10.1268 10.4335L10.4388 10.8243ZM14.5276 14.9189L14.8825 14.5666L14.8815 14.5655L14.5276 14.9189ZM14.9158 14.9263L15.255 15.2936L15.2556 15.293L14.9158 14.9263ZM15.2773 14.1992L11.1983 10.1146L10.4907 10.8213L14.5697 14.9058L15.2773 14.1992ZM11.1919 10.8276C12.3232 9.73512 13.0295 8.22281 13.0295 6.55073H12.0295C12.0295 7.93367 11.4467 9.19143 10.4972 10.1083L11.1919 10.8276ZM13.0295 6.55073C13.0295 3.1961 10.2017 0.5 6.76474 0.5V1.5C9.68544 1.5 12.0295 3.7837 12.0295 6.55073H13.0295ZM6.76474 0.5C3.32775 0.5 0.5 3.1961 0.5 6.55073H1.5C1.5 3.7837 3.84404 1.5 6.76474 1.5V0.5ZM0.5 6.55073C0.5 9.90536 3.32775 12.6015 6.76474 12.6015V11.6015C3.84404 11.6015 1.5 9.31776 1.5 6.55073H0.5ZM6.76474 12.6015C8.27625 12.6015 9.66626 12.0809 10.7508 11.215L10.1268 10.4335C9.2151 11.1615 8.04392 11.6015 6.76474 11.6015V12.6015ZM10.085 11.1776L14.1738 15.2722L14.8815 14.5655L10.7926 10.471L10.085 11.1776ZM14.1728 15.2712C14.3272 15.4266 14.53 15.5 14.7256 15.5V14.5C14.7768 14.5 14.8357 14.5194 14.8825 14.5666L14.1728 15.2712ZM14.7256 15.5C14.9131 15.5 15.1045 15.4326 15.255 15.2936L14.5767 14.5589C14.6206 14.5183 14.6753 14.5 14.7256 14.5V15.5ZM15.2556 15.293C15.5724 14.9995 15.5828 14.5057 15.2776 14.1995L14.5694 14.9055C14.4739 14.8097 14.4777 14.6505 14.576 14.5595L15.2556 15.293ZM6.76474 11.0728C4.14683 11.0728 2.04902 9.02621 2.04902 6.55073H1.04902C1.04902 9.61382 3.63054 12.0728 6.76474 12.0728V11.0728ZM2.04902 6.55073C2.04902 4.07525 4.14683 2.02864 6.76474 2.02864V1.02864C3.63054 1.02864 1.04902 3.48764 1.04902 6.55073H2.04902ZM6.76474 2.02864C9.38265 2.02864 11.4805 4.07525 11.4805 6.55073H12.4805C12.4805 3.48764 9.89894 1.02864 6.76474 1.02864V2.02864ZM11.4805 6.55073C11.4805 9.0262 9.38239 11.0728 6.76474 11.0728V12.0728C9.89865 12.0728 12.4805 9.61384 12.4805 6.55073H11.4805Z"
                                            fill="#96A5B8"></path>
                                    </svg>
                                    <input class="all-info-top__form-input" type="text" placeholder="Поиск">
                                </form>
                            </div>
                            <div class="all-info__inner">
                                <swiper
                                    class="all-info__swiper all-info-swiper all-info-swiper--first swiper mix item-first"
                                    :modules="modules" :slides-per-view="1" :speed="1" :space-between="200" navigation
                                    :pagination="{ clickable: true, }" :loop="true" @swiper="onSwiper"
                                    @slideChange="onSlideChange">
                                    <swiper-slide class="all-info-swiper__slide all-info-swiper-slide">
                                        <div class="all-info-swiper-slide__inner">
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    E-mail
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Департамент
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Дата послденго входа
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Соглашение
                                                </p>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="all-info-swiper-slide__count all-info-swiper-slide-count">
                                            <p class="all-info-swiper-slide-count__text">
                                                Запись на странице
                                            </p>
                                            <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                            </PageEntrySelect>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="all-info-swiper__slide all-info-swiper-slide">
                                        <div class="all-info-swiper-slide__inner">
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    E-mail
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Департамент
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Дата послденго входа
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Соглашение
                                                </p>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    29 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="all-info-swiper-slide__count all-info-swiper-slide-count">
                                            <p class="all-info-swiper-slide-count__text">
                                                Запись на странице
                                            </p>
                                            <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                            </PageEntrySelect>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="all-info-swiper__slide all-info-swiper-slide">
                                        <div class="all-info-swiper-slide__inner">
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    E-mail
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Департамент
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Дата послденго входа
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Соглашение
                                                </p>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    24 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="all-info-swiper-slide__count all-info-swiper-slide-count">
                                            <p class="all-info-swiper-slide-count__text">
                                                Запись на странице
                                            </p>
                                            <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                            </PageEntrySelect>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="all-info-swiper__slide all-info-swiper-slide">
                                        <div class="all-info-swiper-slide__inner">
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    E-mail
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Департамент
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Дата послденго входа
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Соглашение
                                                </p>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    28 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Кожабай Аида
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    aida322279@gmail.com
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Фин. кафедра
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    22 июлья 2022
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    да
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="all-info-swiper-slide__count all-info-swiper-slide-count">
                                            <p class="all-info-swiper-slide-count__text">
                                                Запись на странице
                                            </p>
                                            <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                            </PageEntrySelect>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                                <swiper
                                    class="all-info__swiper all-info-swiper all-info-swiper--second swiper mix item-second"
                                    :modules="modules" :slides-per-view="1" :speed="1" :space-between="200" navigation
                                    :pagination="{ clickable: true, }" :loop="true" @swiper="onSwiper"
                                    @slideChange="onSlideChange">
                                    <swiper-slide class="all-info-swiper__slide all-info-swiper-slide">
                                        <div class="all-info-swiper-slide__inner">
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Название
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Число пользователей
                                                </p>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    20
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    15
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    154
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    25
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    463
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    46
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    26
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="all-info-swiper-slide__count all-info-swiper-slide-count">
                                            <p class="all-info-swiper-slide-count__text">
                                                Запись на странице
                                            </p>
                                            <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                            </PageEntrySelect>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="all-info-swiper__slide all-info-swiper-slide">
                                        <div class="all-info-swiper-slide__inner">
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Название
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Число пользователей
                                                </p>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    20
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    15
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    154
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    25
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    463
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    46
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    202
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="all-info-swiper-slide__count all-info-swiper-slide-count">
                                            <p class="all-info-swiper-slide-count__text">
                                                Запись на странице
                                            </p>
                                            <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                            </PageEntrySelect>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="all-info-swiper__slide all-info-swiper-slide">
                                        <div class="all-info-swiper-slide__inner">
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Название
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Число пользователей
                                                </p>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    20
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    15
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    154
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    25
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    463
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    46
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    46
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="all-info-swiper-slide__count all-info-swiper-slide-count">
                                            <p class="all-info-swiper-slide-count__text">
                                                Запись на странице
                                            </p>
                                            <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                            </PageEntrySelect>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="all-info-swiper__slide all-info-swiper-slide">
                                        <div class="all-info-swiper-slide__inner">
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Название
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Число пользователей
                                                </p>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    20
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    15
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    154
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    25
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    463
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    46
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <label class="container">
                                                    <input type="checkbox" checked>
                                                    <span class="checkmark"></span>
                                                </label>
                                                <div class="all-info-swiper-slide-row__box">
                                                    <img class="all-info-swiper-slide-row__box-img"
                                                        src="../../../public/images/header-user-icon.svg" alt="">
                                                    <p class="all-info-swiper-slide-row__box-text">
                                                        Фин кафедра
                                                    </p>
                                                </div>
                                                <p class="all-info-swiper-slide-row__text">
                                                    11
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="all-info-swiper-slide__count all-info-swiper-slide-count">
                                            <p class="all-info-swiper-slide-count__text">
                                                Запись на странице
                                            </p>
                                            <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                            </PageEntrySelect>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                                <swiper
                                    class="all-info__swiper all-info-swiper all-info-swiper--third swiper mix item-third"
                                    :modules="modules" :slides-per-view="1" :speed="1" :space-between="200" navigation
                                    :pagination="{ clickable: true, }" :loop="true" @swiper="onSwiper"
                                    @slideChange="onSlideChange">
                                    <swiper-slide class="all-info-swiper__slide all-info-swiper-slide">
                                        <div class="all-info-swiper-slide__inner">
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Название
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Описание
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователей
                                                </p>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Администратор
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь сможет управлять другими пользователямииз доступных
                                                    подразделений, назначать обучение исоздавать отчеты.
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    20
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Администратор
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь сможет управлять другими пользователямииз доступных
                                                    подразделений, назначать обучение исоздавать отчеты.
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    20
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Администратор
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь сможет управлять другими пользователямииз доступных
                                                    подразделений, назначать обучение исоздавать отчеты.
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    20
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="all-info-swiper-slide__count all-info-swiper-slide-count">
                                            <p class="all-info-swiper-slide-count__text">
                                                Запись на странице
                                            </p>
                                            <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                            </PageEntrySelect>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="all-info-swiper__slide all-info-swiper-slide">
                                        <div class="all-info-swiper-slide__inner">
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Название
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Описание
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователей
                                                </p>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Администратор
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь сможет управлять другими пользователямииз доступных
                                                    подразделений, назначать обучение исоздавать отчеты.
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    20
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Администратор
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь сможет управлять другими пользователямииз доступных
                                                    подразделений, назначать обучение исоздавать отчеты.
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    20
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Администратор
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь сможет управлять другими пользователямииз доступных
                                                    подразделений, назначать обучение исоздавать отчеты.
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    35
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="all-info-swiper-slide__count all-info-swiper-slide-count">
                                            <p class="all-info-swiper-slide-count__text">
                                                Запись на странице
                                            </p>
                                            <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                            </PageEntrySelect>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="all-info-swiper__slide all-info-swiper-slide">
                                        <div class="all-info-swiper-slide__inner">
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Название
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Описание
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователей
                                                </p>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Администратор
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь сможет управлять другими пользователямииз доступных
                                                    подразделений, назначать обучение исоздавать отчеты.
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    20
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Администратор
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь сможет управлять другими пользователямииз доступных
                                                    подразделений, назначать обучение исоздавать отчеты.
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    20
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Администратор
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь сможет управлять другими пользователямииз доступных
                                                    подразделений, назначать обучение исоздавать отчеты.
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    13
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="all-info-swiper-slide__count all-info-swiper-slide-count">
                                            <p class="all-info-swiper-slide-count__text">
                                                Запись на странице
                                            </p>
                                            <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                            </PageEntrySelect>
                                        </div>
                                    </swiper-slide>
                                    <swiper-slide class="all-info-swiper__slide all-info-swiper-slide">
                                        <div class="all-info-swiper-slide__inner">
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Название
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Описание
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователей
                                                </p>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Администратор
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь сможет управлять другими пользователямииз доступных
                                                    подразделений, назначать обучение исоздавать отчеты.
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    20
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Администратор
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь сможет управлять другими пользователямииз доступных
                                                    подразделений, назначать обучение исоздавать отчеты.
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    20
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="all-info-swiper-slide__row all-info-swiper-slide-row">
                                                <p class="all-info-swiper-slide-row__text">
                                                    Администратор
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    Пользователь сможет управлять другими пользователямииз доступных
                                                    подразделений, назначать обучение исоздавать отчеты.
                                                </p>
                                                <p class="all-info-swiper-slide-row__text">
                                                    65
                                                </p>
                                                <a class="all-info-swiper-slide-row__link" href="#">
                                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                            fill="#1B2559"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="all-info-swiper-slide__count all-info-swiper-slide-count">
                                            <p class="all-info-swiper-slide-count__text">
                                                Запись на странице
                                            </p>
                                            <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                            </PageEntrySelect>
                                        </div>
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="all-info__new-user new-user" id="new-user">
                    <div class="new-user__top">
                        <p class="new-user__top-text">
                            Новый пользователь
                        </p>
                    </div>
                    <div class="new-user__inner">
                        <div class="new-user__row new-user-row">
                            <p class="new-user-row__text">
                                *Имя
                            </p>
                            <input class="new-user-row__input" type="text" placeholder="Асель">
                        </div>
                        <div class="new-user__row new-user-row">
                            <p class="new-user-row__text">
                                *Фамилия
                            </p>
                            <input class="new-user-row__input" type="text" placeholder="Кайырбекова">
                        </div>
                        <div class="new-user__row new-user-row">
                            <p class="new-user-row__text">
                                Телефон
                            </p>
                            <input class="new-user-row__input" type="tel" placeholder="+7 (708) 323 - 24 -63">
                        </div>
                        <div class="new-user__row new-user-row">
                            <p class="new-user-row__text">
                                *Группа
                            </p>
                            <NewCursSelect :options="['Без группы', 'Без группы 1', ' Без группы 2']"
                                :default="'Без группы'" class="select" />
                        </div>
                        <div class="new-user__row new-user-row">
                            <p class="new-user-row__text">
                                *Должность
                            </p>
                            <input class="new-user-row__input" type="text" placeholder="Менеджер">
                        </div>
                        <div class="new-user__row new-user-row">
                            <p class="new-user-row__text">
                                *Логин
                            </p>
                            <input class="new-user-row__input" type="text" placeholder="acel.kayrbekova">
                        </div>
                        <div class="new-user__row new-user-row">
                            <p class="new-user-row__text">
                                *Email
                            </p>
                            <input class="new-user-row__input" type="email" placeholder="acel.kayrbekova@gmail.com">
                        </div>
                        <div class="new-user__bottom">
                            <button class="new-user__bottom-btn" type="button">
                                Отменить
                            </button>
                            <button class="new-user__bottom-btn" type="button">
                                Сохранить
                            </button>
                        </div>
                    </div>
                </div>
                <div class="all-info__delete all-info-delete" id="all-info-delete">
                    <div class="all-info-delete__top">
                        <p class="all-info-delete__top-text">
                            Удалить пользовтелья
                        </p>
                    </div>
                    <div class="all-info-delete__inner">
                        <p class="all-info-delete__text">
                            Вы уверены, что хотите удалить пользователья ?
                        </p>
                        <div class="all-info-delete__bottom">
                            <a class="all-info-delete__bottom-btn" href="#">
                                Отменить
                            </a>
                            <a class="all-info-delete__bottom-btn" href="#">
                                Подвердить
                            </a>
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
import PageEntrySelect from '../../components/admin-components/Page-entry-select.vue';
import NewCursSelect from '../../components/admin-components/New-curs-select.vue';

import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

export default {
    components: {
        Aside,
        Header,
        Footer,
        PageEntrySelect,
        Swiper,
        SwiperSlide,
        NewCursSelect
    },
    data() {
        return {
            sideMenuActive: false,
        }
    },
    setup() {
        const onSwiper = (swiper) => {
        };
        const onSlideChange = () => {
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination, Autoplay, Navigation],
        };
    },
    mounted() {
        var mixer = mixitup('.all-info__inner', {
            load: {
                filter: '.item-first'
            },
            animation: {
                enable: false
            },
        })
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
        addFirstState() {
            document.querySelector('.all-info-top').classList.remove('all-info-top--second')
            document.querySelector('.all-info-top').classList.remove('all-info-top--third')
        },
        addSecondState() {
            document.querySelector('.all-info-top').classList.remove('all-info-top--third')
            document.querySelector('.all-info-top').classList.add('all-info-top--second')
        },
        addThirdState() {
            document.querySelector('.all-info-top').classList.remove('all-info-top--second')
            document.querySelector('.all-info-top').classList.add('all-info-top--third')
        }
    }

}
</script>


<style lang="scss">
@import '../../assets/scss/vars';

.main-all-info {
    padding: 25px 25px 35px 55px;
}

// 

.all-info {

    &__wrapper {
        display: flex;
        gap: 20px;
    }

    &__wrap {
        max-width: 1165px;
    }

    &__inner {}
}

.all-info-column {
    max-width: 295px;
    min-width: 295px;

    &__title {
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 30px;
        color: #1B2559;
    }

    &__box {
        display: flex;
        flex-direction: column;
        gap: 15px;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;

        .mixitup-control-active {
            background: #1294F2;
            color: #fff;
        }
    }

    &__box-btn {
        text-align: left;
        width: 100%;
        border-radius: 6px;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        padding: 12px 10px;
        color: #1B2559;
        transition: background 0.3s, color 0.3s;

        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }
}

.all-info-top {
    display: flex;
    margin-bottom: 30px;

    &__btn {
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        max-height: 50px;
        color: #1294F2;
        background: #FFFFFF;
        border: 1px solid #1294F2;
        border-radius: 6px;
        margin-right: 20px;

        transition: background 0.3s, border 0.3s, color 0.3s;

        @include adaptiv-value("padding", 11, 8, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("width", 270, 240, 1);
        @include adaptiv-value("max-width", 270, 240, 1);
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }

    &__link {
        max-height: 50px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 11px;
        text-align: center;
        color: #1294F2;
        background: #FFFFFF;
        border: 1px solid #1294F2;
        border-radius: 6px;
        margin-right: 20px;
        gap: 10px;

        &:nth-child(2) {
            width: 155px;
            max-width: 155px;

            svg {
                width: 16px;
                height: 16px;
            }
        }

        &:nth-child(3) {
            border: 1px solid #EC4848;
            width: 145px;
            max-width: 145px;
            color: #EC4848;
            &:hover {
                background: #EC4848;
                color: #fff;
                svg path {
                    fill: #fff;
                }
            }
        }

        svg path {
            transition: fill 0.3s;
        }
        transition: background 0.3s, border 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
            svg path {
                fill: #fff;
            }
        }

        @include adaptiv-value("padding", 12, 8, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("gap", 10, 5, 1);
        @include adaptiv-value("width", 155, 130, 1);
        @include adaptiv-value("max-width", 155, 130, 1);
    }

    &__form {
        margin-left: auto;
        width: 430px;
        border: 1.5px solid #96A5B8;
        border-radius: 15px;
        position: relative;
        max-height: 50px;

        svg {
            position: absolute;
            width: 14px;
            height: 14px;
            top: 50%;
            left: 23px;
            transform: translateY(-50%);
        }
    }

    &__form-input {
        border-radius: 16px;
        width: 100%;
        height: 100%;
        font-size: 16px;
        line-height: 17px;
        font-weight: 500;
        color: #96A5B8;
        letter-spacing: 0.14px;
        @include adaptiv-value("padding-top", 17, 15, 1);
        @include adaptiv-value("padding-right", 30, 15, 1);
        @include adaptiv-value("padding-bottom", 17, 15, 1);
        @include adaptiv-value("padding-left", 50, 45, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 17, 16, 1);
        &:focus {
            &::placeholder {
                opacity: 0;
            }
        }
        &::placeholder {
            font-size: 16px;
            line-height: 17px;
            font-weight: 500;
            color: #96A5B8;
        }
    }
}

.all-info-swiper {
    .swiper-pagination {
        max-width: 500px;
        position: absolute;
        margin-left: auto;
        right: 0;
        bottom: 0;
        top: unset !important;
        display: flex;
        justify-content: flex-end;
        padding-right: 58px;
    }

    .swiper-pagination-bullet {
        background: #FFFFFF;
        width: 48px;
        height: 48px;
        opacity: 1;
        border: 1px solid #96A5B8;
        border-radius: 6px;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #96A5B8;
        transition: background 0.3s, color 0.3s border 0.3s;
        margin-left: 5px !important;
        position: relative;
        margin-right: 5px !important;

        &:hover {
            background: #1294F2;
            color: #fff;
            border: 1px solid #1294F2;

            &::before {
                color: #fff;
            }
        }

        &::before {
            content: '';
            transition: color 0.3s;
            position: absolute;
            top: 50%;
            left: 50%;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #96A5B8;
            transform: translateX(-50%) translateY(-50%);
        }

        &:nth-child(1) {
            &::before {
                content: '1';
            }
        }

        &:nth-child(2) {
            &::before {
                content: '2';
            }
        }

        &:nth-child(3) {
            &::before {
                content: '3';
            }
        }

        &:nth-child(4) {
            &::before {
                content: '4';
            }
        }
    }

    .swiper-pagination-bullet-active {
        background: #1294F2 !important;
        color: #fff;
        border: 1px solid #1294F2;

        &::before {
            color: #fff;
        }
    }

    .swiper-button-prev {
        cursor: pointer;
        position: relative;
        background: #FFFFFF;
        width: 48px;
        height: 48px;
        border: 1px solid #96A5B8;
        border-radius: 6px;
        position: absolute;
        right: 0;
        transform: translateX(-615%);
        bottom: 0;
        z-index: 20;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%) rotate(90deg);
            width: 32px;
            height: 32px;
            background-repeat: no-repeat;
            background-image: url(../../../public/images/reg-two-arrow.svg);
        }
    }

    .swiper-button-next {
        cursor: pointer;
        z-index: 20;
        position: absolute;
        background: #FFFFFF;
        width: 48px;
        height: 48px;
        border: 1px solid #96A5B8;
        border-radius: 6px;
        right: 0;
        bottom: 0;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%) rotate(270deg);
            width: 32px;
            height: 32px;
            background-repeat: no-repeat;
            background-image: url(../../../public/images/reg-two-arrow.svg);
        }
    }
}

.all-info-swiper--first {
    .all-info-swiper-slide {
        padding-bottom: 340px;
    }
}

.all-info-swiper--second {
    .all-info-swiper-slide {
        padding-bottom: 280px;
    }

    .all-info-swiper-slide-row__link {
        position: relative;
        transform: rotate(180deg);
        transition: transform 0.3s;
        &:hover {
            transform: rotate(180deg) translateX(-5px);
        }
    }

    .all-info-swiper-slide-row {
        .all-info-swiper-slide-row__text:last-child {
            margin-left: 40px;
            width: 100%;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    }
}

.all-info-swiper--third {
    .all-info-swiper-slide-row:nth-child(1) .all-info-swiper-slide-row__text:first-child {
        margin-left: 10px;
    }

    .all-info-swiper-slide-row__text:first-child {
        margin-left: 10px;
    }

    .all-info-swiper-slide {
        padding-bottom: 490px;
    }

    .all-info-swiper-slide-row__text {
        &:nth-child(1) {
            width: 150px;
        }

        &:nth-child(2) {
            margin-left: auto;
            text-align: left;
            width: 420px;
            justify-content: flex-start;
            margin-right: 50px;
        }

        &:nth-child(3) {
            margin-right: 40px;
            width: 150px;
        }

    }
}


.all-info-swiper-slide {
    &__inner {}
}

.all-info-swiper-slide-row {
    padding: 10px 0;
    border-bottom: 0.5px solid #96A5B8;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;

    &:nth-child(1) {
        padding-bottom: 15px;

        .all-info-swiper-slide-row__text {
            font-weight: 500;

            &:first-child {
                margin-left: 50px;
            }
        }
    }

    .container {
        position: absolute;
        display: block;
        top: 50%;
        left: 0;
        @include adaptiv-value("padding-left", 36, 30, 1);
        cursor: pointer;
        font-weight: 400;
        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 24, 15, 1);
        color: #96A5B8;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding-right: unset;
        margin: unset;
        transition: color 0.3s;

        &:hover {
            color: #1294F2;
        }
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
        top: -12px;
        left: 0;
        @include adaptiv-value("height", 24, 20, 1);
        @include adaptiv-value("width", 24, 20, 1);
        border: 2px solid #96A5B8;
        border-radius: 6px;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input~.checkmark {}

    /* When the checkbox is checked, add a blue background */
    .container input:checked~.checkmark {
        border: 2px solid #96A5B8;
    }

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

    &__text {
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1B2559;

        &:nth-child(2) {
            width: 185px;
        }

        &:nth-child(3) {
            width: 200px;
        }

        &:nth-child(4) {
            width: 165px;
        }

        &:nth-child(5) {
            width: 220px;
        }

        &:nth-child(6) {
            width: 180px;
        }
    }

    &__box {
        display: flex;
        width: 185px;
        gap: 10px;
        align-items: center;
        margin-left: 50px;
    }

    &__box-img {
        width: 48px;
        height: 48px;
    }

    &__box-text {
        font-size: 16px;
        line-height: 24px;
    }

    &__link {
        display: block;
        transform: rotate(180deg) translateY(50%);
        width: 32px;
        height: 32px;
        position: absolute;
        top: 50%;
        right: 0;   
        transition: transform 0.3s;
        &:hover {
            transform: translateY(-50%) rotate(180deg) translateX(-5px);
        }
        svg {
            width: 100%;
            height: 100%;
        }

        svg path {
            fill: #96A5B8;
        }
    }
}

.all-info-swiper-slide-count {
    display: flex;
    align-items: center;
    gap: 10px;
    position: absolute;
    bottom: 0;
    left: 0;

    &__text {
        font-size: 16px;
        line-height: 24px;
        color: #1B2559;
    }
}

.all-info-top--second {
    .all-info-top__btn {
        display: none;
    }
}

.all-info-top--third {
    .all-info-top__btn {
        display: none;
    }

    .all-info-top__link {
        display: none;
    }
}

// 


.new-user {
    max-width: 670px;
    width: 670px;
    padding: unset;
    border-radius: 12px;
    display: none;

    &__top {
        padding: 22px 24px;
        background: #1294F2;
        border-radius: 12px 12px 0px 0px;
    }

    &__top-text {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
    }

    &__inner {
        padding: 50px 55px 50px 25px;
        display: flex;
        flex-direction: column;
        gap: 25px;
        background: #FFFFFF;

        border: 1px solid #96A5B8;
        border-radius: 0 0 12px 12px;
    }

    &__bottom {
        display: flex;
        gap: 25px;
        align-items: center;
        margin-top: 25px;
        justify-content: flex-end;
    }

    &__bottom-btn {
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid #1294F2;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #1294F2;
        border-radius: 6px;
        width: 150px;

        &:last-child {
            background: #1294F2;
            color: #fff;
        }
    }
}

.new-user-row {
    display: flex;
    gap: 75px;

    &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        width: 140px;
        color: #1B2559;

    }

    &__input {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        padding: 12px 12px 12px 16px;
        color: #96A5B8;
        width: 390px;
        background: #FFFFFF;
        border: 1px solid #96A5B8;
        border-radius: 4px;

        &::placeholder {
            color: #96A5B8;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
        }
        &:focus {
            &::placeholder {
                opacity: 0;
            }
        }
    }
}

// 

.all-info-delete {
    max-width: 670px;
    border-radius: 12px;
    width: 670px;
    padding: 0;
    display: none;
    &__top {
        padding: 22px 24px;
        background: #1294F2;
        border-radius: 12px 12px 0px 0px;
    }

    &__top-text {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
    }

    &__inner {
        padding: 20px 75px 35px 20px;
        display: flex;
        flex-direction: column;
        gap: 35px;
        background: #FFFFFF;

        border: 1px solid #96A5B8;
        border-radius: 0 0 12px 12px;
    }

    &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        width: 100%;
        color: #1B2559;
    }

    &__bottom {
        display: flex;
        gap: 25px;
        align-items: center;
        justify-content: flex-end;
    }

    &__bottom-btn {
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid #1294F2;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #1294F2;
        border-radius: 6px;
        width: 150px;

        &:last-child {
            background: #1294F2;
            color: #fff;
        }
    }
}

@media (max-width: 1440px) {
    .all-info__wrapper {
        flex-direction: column;
    }
}

@media (max-width: 1440px) {
    .all-info-top {
        flex-wrap: wrap;
        row-gap: 20px;
    }
    .all-info-top__form {
        width: 100%;
    }
    .all-info-swiper-slide__top-link {
        @include adaptiv-value("font-size", 24, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
    }
    .all-info-swiper-slide__top-btn {
        @include adaptiv-value("padding", 12, 8, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("gap", 10, 5, 1);
        @include adaptiv-value("width", 135, 130, 1);
        @include adaptiv-value("max-width", 135, 130, 1);
    }
    .all-info-swiper-slide__top {
        @include adaptiv-value("margin-bottom", 30, 20, 1);
    }
    .all-info-swiper .swiper-button-prev {
        @include adaptiv-value("width", 48, 30, 1);
        @include adaptiv-value("height", 48, 30, 1);
        &:before {
            @include adaptiv-value("width", 32, 20, 1);
            @include adaptiv-value("height", 32, 20, 1);
            background-size: cover;
        }
    }
    .all-info-swiper .swiper-button-next {
        @include adaptiv-value("width", 48, 30, 1);
        @include adaptiv-value("height", 48, 30, 1);
        &:before {
            @include adaptiv-value("width", 32, 20, 1);
            @include adaptiv-value("height", 32, 20, 1);
            background-size: cover;
        }
    }
    .all-info-swiper .swiper-pagination-bullet {
        background: #FFFFFF;
        @include adaptiv-value("width", 48, 30, 1);
        @include adaptiv-value("height", 48, 30, 1);
    }
    .main-all-info {
        @include adaptiv-value("padding-top", 30, 30, 1);
        @include adaptiv-value("padding-right", 55, 30, 1);
        @include adaptiv-value("padding-bottom", 35, 30, 1);
        @include adaptiv-value("padding-left", 55, 30, 1);
    }
    .all-info-swiper {
        @include adaptiv-value("max-width", 1450, 100, 1);
    }
    .all-info-swiper-slide {
        @include adaptiv-value("padding-bottom", 340, 100, 1);
    }

    .all-info-swiper--first .all-info-swiper-slide {
        @include adaptiv-value("padding-bottom", 340, 100, 1);
    }

    .all-info-swiper--third .all-info-swiper-slide {
        @include adaptiv-value("padding-bottom", 340, 100, 1);
    }
    .all-info-swiper--second .all-info-swiper-slide {
        @include adaptiv-value("padding-bottom", 340, 100, 1);
    }
    .all-info-swiper-slide-row__text {
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
    }
    .all-info-swiper .swiper-pagination {
        max-width: 500px;
        position: absolute;
        margin-left: auto;
        right: 0;
        bottom: 0;
        top: unset !important;
        display: flex;
        justify-content: flex-end;
        @include adaptiv-value("padding-right", 60, 23, 1);
    }
    .all-info-swiper--third .all-info-swiper-slide-row__text:nth-child(2) {
        padding-right: 90px;
    }

    .all-info-swiper--second .all-info-swiper-slide-row .all-info-swiper-slide-row__text:last-child {
        margin-left: 0;
    }

    .all-info-column__title {
        @include adaptiv-value("font-size", 24, 20, 1);
        @include adaptiv-value("line-height", 24, 22, 1);
        @include adaptiv-value("margin-bottom", 30, 10, 1);
    }
    .all-info-column__box-btn { 
        @include adaptiv-value("font-size", 20, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
    }
}
@media (max-width: 1300px) {
    .big-wrapper {
        max-width: 100%;
    }
    .all-info-swiper {
        max-width: 100%;
    }
}
@media (max-width: 1200px) {
    .all-info-swiper-slide-row {
        gap: 20px;
    }
}
@media (max-width: 1050px) {
    .all-info-swiper-slide-row {
        flex-direction: column;
        align-items: flex-start;
    }
    .all-info-swiper-slide-row__text {
        text-align: left !important;
        justify-content: flex-start !important;
    }
    .all-info-swiper-slide-row .container {
        top: 16%;
    }
    .all-info-swiper-slide-row:nth-child(1) .container {
        top: 10%;
    }
    .all-info-swiper-slide-row:nth-child(1) .all-info-swiper-slide-row__text:nth-child(2) {
        padding-left: 30px;
    }
    .all-info-swiper-slide-row__box {
        margin-left: 30px;
    }
    .all-info-swiper--third {
        .all-info-swiper-slide-row .all-info-swiper-slide-row__text {
            padding-left: 0 !important;
            margin-left: 0 !important;
        }
    }
    .all-info-swiper--second {
        .all-info-swiper-slide-row .container {
            top: 21%;
        }
        .all-info-swiper-slide-row:nth-child(1) .container {
            top: 23%;
        }
    }
}

@media (max-width: 750px) {
    .all-info-swiper-slide-count {
        bottom: 50px;
    }
    .all-info-swiper .swiper-pagination {
        justify-content: flex-start;
        margin-left: unset;
        margin-right: auto;
        padding-left: 58px;
        padding-right: unset;
    }
    .all-info-swiper .swiper-button-prev {
        left: 0;
        transform: unset;
    }
    .all-info-swiper .swiper-button-next {
        right: unset;
        @include adaptiv-value("left", 300, 250, 1);
    }
}

@media (max-width: 450px) {
    .all-info-swiper-slide__top {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
}
</style>