<template>
    <div class="biggest-wrapper">
    <div class="big-wrapper">
        <Aside :activeLink="2" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Настройки'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
            <main class="main main-admin-users-info">
                <section class="main__users-info users-info">
                    <swiper class="users-info__swiper users-info-swiper swiper" :modules="modules" :slides-per-view="1"
                        :speed="1" :space-between="100" navigation :pagination="{ clickable: true, }" :loop="true"
                        @swiper="onSwiper" @slideChange="onSlideChange">
                        <swiper-slide class="users-info-swiper__slide users-info-swiper-slide">
                            <div class="users-info-swiper-slide__top users-info-swiper-slide-top">
                                <a class="users-info-swiper-slide-top__link" href="#">
                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                            fill="#1B2559" />
                                    </svg>
                                    <span>
                                        Фин кафедра
                                    </span>
                                </a>
                                <button class="users-info-swiper-slide-top__btn" type="buutton">
                                    Сохранить
                                </button>
                            </div>
                            <div class="users-info-swiper-slide__inner">
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фамилия и имя
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Email
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Департамент
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Дата послденго входа
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Соглашение
                                    </p>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="users-info-swiper-slide__count users-info-swiper-slide-count">
                                <p class="users-info-swiper-slide-count__text">
                                    Запись на странице
                                </p>
                                <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                </PageEntrySelect>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="users-info-swiper__slide users-info-swiper-slide">
                            <div class="users-info-swiper-slide__top users-info-swiper-slide-top">
                                <a class="users-info-swiper-slide-top__link" href="#">
                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                            fill="#1B2559" />
                                    </svg>
                                    <span>
                                        Фин кафедра
                                    </span>
                                </a>
                                <button class="users-info-swiper-slide-top__btn" type="buutton">
                                    Сохранить
                                </button>
                            </div>
                            <div class="users-info-swiper-slide__inner">
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фамилия и имя
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Email
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Департамент
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Дата послденго входа
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Соглашение
                                    </p>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="users-info-swiper-slide__count users-info-swiper-slide-count">
                                <p class="users-info-swiper-slide-count__text">
                                    Запись на странице
                                </p>
                                <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                </PageEntrySelect>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="users-info-swiper__slide users-info-swiper-slide">
                            <div class="users-info-swiper-slide__top users-info-swiper-slide-top">
                                <a class="users-info-swiper-slide-top__link" href="#">
                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                            fill="#1B2559" />
                                    </svg>
                                    <span>
                                        Фин кафедра
                                    </span>
                                </a>
                                <button class="users-info-swiper-slide-top__btn" type="buutton">
                                    Сохранить
                                </button>
                            </div>
                            <div class="users-info-swiper-slide__inner">
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фамилия и имя
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Email
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Департамент
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Дата послденго входа
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Соглашение
                                    </p>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="users-info-swiper-slide__count users-info-swiper-slide-count">
                                <p class="users-info-swiper-slide-count__text">
                                    Запись на странице
                                </p>
                                <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                </PageEntrySelect>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="users-info-swiper__slide users-info-swiper-slide">
                            <div class="users-info-swiper-slide__top users-info-swiper-slide-top">
                                <a class="users-info-swiper-slide-top__link" href="#">
                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                            fill="#1B2559" />
                                    </svg>
                                    <span>
                                        Фин кафедра
                                    </span>
                                </a>
                                <button class="users-info-swiper-slide-top__btn" type="buutton">
                                    Сохранить
                                </button>
                            </div>
                            <div class="users-info-swiper-slide__inner">
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фамилия и имя
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Email
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Департамент
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Дата послденго входа
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Соглашение
                                    </p>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="users-info-swiper-slide__row users-info-swiper-slide-row">
                                    <label class="container">
                                        <input type="checkbox" checked>
                                        <span class="checkmark"></span>
                                    </label>
                                    <div class="users-info-swiper-slide-row__box">
                                        <img class="users-info-swiper-slide-row__box-img"
                                            src="../../../public/images/header-user-icon.svg" alt="icon">
                                        <p class="users-info-swiper-slide-row__box-text">
                                            Кожабай Аида
                                        </p>
                                    </div>
                                    <p class="users-info-swiper-slide-row__text">
                                        aida322279@gmail.com
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        Фин. кафедра
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        22 июлья 2022
                                    </p>
                                    <p class="users-info-swiper-slide-row__text">
                                        да
                                    </p>
                                    <div class="users-info-swiper-slide-row__icon">
                                        <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                fill="#1B2559"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="users-info-swiper-slide__count users-info-swiper-slide-count">
                                <p class="users-info-swiper-slide-count__text">
                                    Запись на странице
                                </p>
                                <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                </PageEntrySelect>
                            </div>
                        </swiper-slide>
                    </swiper>
                </section>
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

import { Pagination, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/pagination';

export default {
    components: {
        Aside,
        Header,
        Footer,
        NewCursSelect,
        PageEntrySelect,
        Swiper,
        SwiperSlide,
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

.main-admin-users-info {
    padding: 30px 55px 35px 55px;

    .users-info {}

    .users-info-swiper {
        max-width: 1450px;
        position: relative;
        width: 100%;

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

    .users-info-swiper-slide {
        padding-bottom: 385px;

        &__inner {}
    }

    .users-info-swiper-slide-top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 35px;

        &__link {
            display: flex;
            align-items: center;
            gap: 5px;
            font-weight: 500;
            font-size: 22px;
            line-height: 24px;
            color: #1B2559;
        }

        &__btn {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #FFFFFF;
            padding: 12px;

            width: 140px;
            background: #1294F2;
            border: 1px solid #1294F2;
            border-radius: 6px;

            transition: background 0.3s, border 0.3s, color 0.3s;
            border: 1px solid transparent;
            &:hover {
                background: transparent;
                border: 1px solid #1294F2;
                color: #1294F2;
            }
        }
    }

    .users-info-swiper-slide-row {
        display: flex;
        align-items: center;
        position: relative;
        padding: 10px 0;
        border-bottom: 0.5px solid #96A5B8;

        .container {
            display: block;
            position: relative;
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

        &:first-child {
            .users-info-swiper-slide-row__text {
                font-weight: 500;
            }
        }

        &__text {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #1B2559;

            &:nth-child(2) {
                width: 180px;
                text-align: left;
                justify-content: flex-start;
            }

            &:nth-child(3) {
                width: 200px;
                margin-left: auto;
                margin-right: 30px;
            }

            &:nth-child(4) {
                width: 190px;
                margin-right: 45px;
            }

            &:nth-child(5) {
                width: 205px;
                margin-right: 30px;
            }

            &:nth-child(6) {
                width: 190px;
            }
        }

        &__box {
            display: flex;
            gap: 8px;
            align-items: center;
            width: 180px;
        }

        &__box-img {
            width: 48px;
            height: 48px;
        }

        &__box-text {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #1B2559;
        }

        &__icon {
            transform: translateY(-50%) rotate(180deg);
            position: absolute;
            right: 0;
            top: 50%;

            svg path {
                fill: #96A5B8;
            }
        }
    }

    .users-info-swiper-slide-count {
        display: flex;
        align-items: center;
        gap: 10px;
        position: absolute;
        bottom: 0;

        &__text {
            font-size: 16px;
            line-height: 24px;
            color: #1B2559;
        }
    }
}

// 

@media (max-width: 1440px) {
    .main-admin-users-info .users-info-swiper-slide-top__link {
        @include adaptiv-value("font-size", 24, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
    }
    .main-admin-users-info .users-info-swiper-slide-top__btn {
        @include adaptiv-value("padding", 12, 8, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("gap", 10, 5, 1);
        @include adaptiv-value("width", 135, 130, 1);
        @include adaptiv-value("max-width", 135, 130, 1);
    }
    .main-admin-users-info .users-info-swiper-slide-top {
        @include adaptiv-value("margin-bottom", 35, 10, 1);
    }
    .main-admin-users-info .users-info-swiper .swiper-button-prev {
        @include adaptiv-value("width", 48, 30, 1);
        @include adaptiv-value("height", 48, 30, 1);
        &:before {
            @include adaptiv-value("width", 32, 20, 1);
            @include adaptiv-value("height", 32, 20, 1);
            background-size: cover;
        }
    }
    .main-admin-users-info .users-info-swiper .swiper-button-next { 
        @include adaptiv-value("width", 48, 30, 1);
        @include adaptiv-value("height", 48, 30, 1);
        &:before {
            @include adaptiv-value("width", 32, 20, 1);
            @include adaptiv-value("height", 32, 20, 1);
            background-size: cover;
        }
    }
    .main-admin-users-info .users-info-swiper .swiper-pagination-bullet  {
        background: #FFFFFF;
        @include adaptiv-value("width", 48, 30, 1);
        @include adaptiv-value("height", 48, 30, 1);
    }
    .main-admin-users-info {
        @include adaptiv-value("padding-top", 30, 30, 1);
        @include adaptiv-value("padding-right", 55, 30, 1);
        @include adaptiv-value("padding-bottom", 35, 30, 1);
        @include adaptiv-value("padding-left", 55, 30, 1);
    }
    .main-admin-users-info .users-info-swiper {
        @include adaptiv-value("max-width", 1450, 100, 1);
    }
    .main-admin-users-info .users-info-swiper-slide {
        @include adaptiv-value("padding-bottom", 385, 130, 1);
    }

    .main-admin-users-info .users-info-swiper-slide-row__text {
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
    }
    .main-admin-users-info .users-info-swiper .swiper-pagination  {
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
}
@media (max-width: 1400px) {
    .main-admin-users-info .users-info-swiper-slide-row {
        gap: 20px;
    }
}
@media (max-width: 1300px) {
    .big-wrapper {
        max-width: 100%;
    }
    .main-admin-users-info .users-info-swiper {
        max-width: 100%;
    }

    .main-admin-users-info .users-info-swiper-slide-row {
        gap: unset;
    }
}
@media (max-width: 1200px) {
    .import-history-swiper-slide-row {
        gap: 20px;
    }
}
@media (max-width: 1150px) {
    .main-admin-users-info .users-info-swiper-slide-row {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 10px;
    }
    .main-admin-users-info .users-info-swiper-slide-row__text {
        margin-left: unset !important; 
        justify-content: flex-start;
        text-align: left !important;
    }
    .main-admin-users-info .users-info-swiper-slide-row .container {
        margin-bottom: 15px;
        margin-top: 20px;
    }
}

@media (max-width: 750px) {
    .main-admin-users-info .users-info-swiper-slide-count {
        bottom: 50px;
    }
    .main-admin-users-info .users-info-swiper .swiper-pagination  {
        justify-content: flex-start;
        margin-left: unset;
        margin-right: auto;
        padding-left: 58px;
        padding-right: unset;
    }
    .main-admin-users-info .users-info-swiper .swiper-button-prev {
        left: 0;
        transform: unset;
    }
    .main-admin-users-info .users-info-swiper .swiper-button-next  {
        right: unset;
        @include adaptiv-value("left", 300, 250, 1);
    }
}

@media (max-width: 450px) {
    .import-history-swiper-slide__top {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
    .main-admin-users-info .users-info-swiper-slide-top {
        flex-direction: column;
        gap: 20px;
    }
}


</style>