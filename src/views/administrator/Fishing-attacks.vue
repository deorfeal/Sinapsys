<template>
    <div class="biggest-wrapper">
    <div class="big-wrapper">
        <Aside :activeLink="4" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Фиштинговые атаки'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
            <main class="main main-fishing-attacks">
                <section class="main__fishing-attacks fishing-attacks">
                    <div class="fishing-attacks__buttons">
                        <button class="fishing-attacks__buttons-btn" type="button" data-filter=".item-first"
                            @click="removeClassToPlusBtn">
                            Группы
                        </button>
                        <button class="fishing-attacks__buttons-btn" type="button" data-filter=".item-second"
                            @click="addClassToPlusBtn">
                            Шаблоны писем
                        </button>
                        <a class="fishing-attacks__add" data-fancybox href="#fishing-attacks-new-letter">
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M25.833 14.6663H17.833V6.66634C17.833 6.31272 17.6925 5.97358 17.4425 5.72353C17.1924 5.47348 16.8533 5.33301 16.4997 5.33301C16.1461 5.33301 15.8069 5.47348 15.5569 5.72353C15.3068 5.97358 15.1663 6.31272 15.1663 6.66634V14.6663H7.16634C6.81272 14.6663 6.47358 14.8068 6.22353 15.0569C5.97348 15.3069 5.83301 15.6461 5.83301 15.9997C5.83301 16.3533 5.97348 16.6924 6.22353 16.9425C6.47358 17.1925 6.81272 17.333 7.16634 17.333H15.1663V25.333C15.1663 25.6866 15.3068 26.0258 15.5569 26.2758C15.8069 26.5259 16.1461 26.6663 16.4997 26.6663C16.8533 26.6663 17.1924 26.5259 17.4425 26.2758C17.6925 26.0258 17.833 25.6866 17.833 25.333V17.333H25.833C26.1866 17.333 26.5258 17.1925 26.7758 16.9425C27.0259 16.6924 27.1663 16.3533 27.1663 15.9997C27.1663 15.6461 27.0259 15.3069 26.7758 15.0569C26.5258 14.8068 26.1866 14.6663 25.833 14.6663Z"
                                    fill="#1294F2" />
                            </svg>
                            Добавить
                        </a>
                    </div>
                    <div class="fishing-attacks__inner">
                        <swiper class="fishing-attacks__swiper fishing-attacks-swiper swiper mix item-first"
                        :allowTouchMove="false"
                        :modules="modules" :slides-per-view="1" :speed="1" :space-between="200" navigation
                            :pagination="{ clickable: true, }" :loop="true" @swiper="onSwiper" @slideChange="onSlideChange">
                            <swiper-slide class="fishing-attacks-swiper__slide fishing-attacks-swiper-slide">
                                <div class="fishing-attacks-swiper-slide__inner">
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Название
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Участники
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Отправлено писем
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Частота провалов
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Статус
                                        </p>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="fishing-attacks-swiper-slide__count fishing-attacks-swiper-slide-count">
                                    <p class="fishing-attacks-swiper-slide-count__text">
                                        Запись на странице
                                    </p>
                                    <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                    </PageEntrySelect>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="fishing-attacks-swiper__slide fishing-attacks-swiper-slide">
                                <div class="fishing-attacks-swiper-slide__inner">
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Название
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Участники
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Отправлено писем
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Частота провалов
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Статус
                                        </p>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="fishing-attacks-swiper-slide__count fishing-attacks-swiper-slide-count">
                                    <p class="fishing-attacks-swiper-slide-count__text">
                                        Запись на странице
                                    </p>
                                    <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                    </PageEntrySelect>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="fishing-attacks-swiper__slide fishing-attacks-swiper-slide">
                                <div class="fishing-attacks-swiper-slide__inner">
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Название
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Участники
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Отправлено писем
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Частота провалов
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Статус
                                        </p>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            55%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="fishing-attacks-swiper-slide__count fishing-attacks-swiper-slide-count">
                                    <p class="fishing-attacks-swiper-slide-count__text">
                                        Запись на странице
                                    </p>
                                    <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                    </PageEntrySelect>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="fishing-attacks-swiper__slide fishing-attacks-swiper-slide">
                                <div class="fishing-attacks-swiper-slide__inner">
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Название
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Участники
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Отправлено писем
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Частота провалов
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Статус
                                        </p>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <div class="fishing-attacks-swiper-slide-row__box">
                                            <img class="fishing-attacks-swiper-slide-row__box-img"
                                                src="../../../public/images/fishing-attacks-user-img.svg" alt="user-icon">
                                            <p class="fishing-attacks-swiper-slide-row__box-text">
                                                Фин кафедра
                                            </p>
                                        </div>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            25
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            20
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            80%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Завершен
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" href="#">
                                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                                    fill="#1B2559"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="fishing-attacks-swiper-slide__count fishing-attacks-swiper-slide-count">
                                    <p class="fishing-attacks-swiper-slide-count__text">
                                        Запись на странице
                                    </p>
                                    <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                    </PageEntrySelect>
                                </div>
                            </swiper-slide>
                        </swiper>
                        <swiper class="fishing-attacks__swiper fishing-attacks-swiper swiper mix item-second"
                        :allowTouchMove="false"
                            :modules="modules" :slides-per-view="1" :speed="1" :space-between="200" navigation
                            :pagination="{ clickable: true, }" :loop="true" @swiper="onSwiper" @slideChange="onSlideChange">
                            <swiper-slide class="fishing-attacks-swiper__slide fishing-attacks-swiper-slide">
                                <div class="fishing-attacks-swiper-slide__inner">
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Название
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Тема
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Имя отправителя
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Частота провалов
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Категория
                                        </p>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="fishing-attacks-swiper-slide__count fishing-attacks-swiper-slide-count">
                                    <p class="fishing-attacks-swiper-slide-count__text">
                                        Запись на странице
                                    </p>
                                    <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                    </PageEntrySelect>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="fishing-attacks-swiper__slide fishing-attacks-swiper-slide">
                                <div class="fishing-attacks-swiper-slide__inner">
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Название
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Тема
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Имя отправителя
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Частота провалов
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Категория
                                        </p>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            24%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="fishing-attacks-swiper-slide__count fishing-attacks-swiper-slide-count">
                                    <p class="fishing-attacks-swiper-slide-count__text">
                                        Запись на странице
                                    </p>
                                    <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                    </PageEntrySelect>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="fishing-attacks-swiper__slide fishing-attacks-swiper-slide">
                                <div class="fishing-attacks-swiper-slide__inner">
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Название
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Тема
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Имя отправителя
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Частота провалов
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Категория
                                        </p>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            76%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="fishing-attacks-swiper-slide__count fishing-attacks-swiper-slide-count">
                                    <p class="fishing-attacks-swiper-slide-count__text">
                                        Запись на странице
                                    </p>
                                    <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                    </PageEntrySelect>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="fishing-attacks-swiper__slide fishing-attacks-swiper-slide">
                                <div class="fishing-attacks-swiper-slide__inner">
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Название
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Тема
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Имя отправителя
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Частота провалов
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Категория
                                        </p>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            10%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="fishing-attacks-swiper-slide__row fishing-attacks-swiper-slide-row">
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Запрос доступа к документу
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            k.n@support.io запрашивает доступ к таблице
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Документы Google
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            50%
                                        </p>
                                        <p class="fishing-attacks-swiper-slide-row__text">
                                            Интересное
                                        </p>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox
                                            href="#fishing-attacks-message">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M25.3334 5.33398H6.66675C5.60588 5.33398 4.58847 5.75541 3.83832 6.50556C3.08818 7.2557 2.66675 8.27312 2.66675 9.33398V22.6673C2.66675 23.7282 3.08818 24.7456 3.83832 25.4957C4.58847 26.2459 5.60588 26.6673 6.66675 26.6673H25.3334C26.3943 26.6673 27.4117 26.2459 28.1618 25.4957C28.912 24.7456 29.3334 23.7282 29.3334 22.6673V9.33398C29.3334 8.27312 28.912 7.2557 28.1618 6.50556C27.4117 5.75541 26.3943 5.33398 25.3334 5.33398ZM25.3334 8.00065L16.6667 13.9607C16.4641 14.0777 16.2341 14.1393 16.0001 14.1393C15.766 14.1393 15.5361 14.0777 15.3334 13.9607L6.66675 8.00065H25.3334Z"
                                                    fill="#1294F2" />
                                            </svg>

                                        </a>

                                        <a class="fishing-attacks-swiper-slide__row-btn" data-fancybox href="#">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16 18.002C17.1046 18.002 18 17.1065 18 16.002C18 14.8974 17.1046 14.002 16 14.002C14.8954 14.002 14 14.8974 14 16.002C14 17.1065 14.8954 18.002 16 18.002Z"
                                                    fill="#FFC44C" />
                                                <path
                                                    d="M29.16 15.3345C28.3067 13.8545 23.6133 6.4278 15.64 6.6678C8.26668 6.85446 4.00001 13.3345 2.84001 15.3345C2.72299 15.5372 2.66138 15.7671 2.66138 16.0011C2.66138 16.2352 2.72299 16.4651 2.84001 16.6678C3.68001 18.1211 8.17334 25.3345 16.0267 25.3345H16.36C23.7333 25.1478 28.0133 18.6678 29.16 16.6678C29.277 16.4651 29.3386 16.2352 29.3386 16.0011C29.3386 15.7671 29.277 15.5372 29.16 15.3345ZM16 20.6678C15.077 20.6678 14.1748 20.3941 13.4073 19.8813C12.6399 19.3685 12.0418 18.6397 11.6886 17.787C11.3354 16.9343 11.2429 15.996 11.423 15.0907C11.6031 14.1855 12.0475 13.3539 12.7002 12.7013C13.3528 12.0487 14.1843 11.6042 15.0896 11.4241C15.9948 11.2441 16.9331 11.3365 17.7859 11.6897C18.6386 12.0429 19.3674 12.641 19.8802 13.4085C20.393 14.1759 20.6667 15.0782 20.6667 16.0011C20.6667 17.2388 20.175 18.4258 19.2998 19.301C18.4247 20.1761 17.2377 20.6678 16 20.6678Z"
                                                    fill="#FFC44C" />
                                            </svg>
                                        </a>
                                        <a class="fishing-attacks-swiper-slide__row-link" data-fancybox href="#fishing-attacks-doings">
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.9999 18.6673C17.4727 18.6673 18.6666 17.4734 18.6666 16.0007C18.6666 14.5279 17.4727 13.334 15.9999 13.334C14.5272 13.334 13.3333 14.5279 13.3333 16.0007C13.3333 17.4734 14.5272 18.6673 15.9999 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M25.3334 18.6673C26.8062 18.6673 28.0001 17.4734 28.0001 16.0007C28.0001 14.5279 26.8062 13.334 25.3334 13.334C23.8607 13.334 22.6667 14.5279 22.6667 16.0007C22.6667 17.4734 23.8607 18.6673 25.3334 18.6673Z"
                                                    fill="#96A5B8" />
                                                <path
                                                    d="M6.66667 18.6673C8.13943 18.6673 9.33333 17.4734 9.33333 16.0007C9.33333 14.5279 8.13943 13.334 6.66667 13.334C5.19391 13.334 4 14.5279 4 16.0007C4 17.4734 5.19391 18.6673 6.66667 18.6673Z"
                                                    fill="#96A5B8" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div class="fishing-attacks-swiper-slide__count fishing-attacks-swiper-slide-count">
                                    <p class="fishing-attacks-swiper-slide-count__text">
                                        Запись на странице
                                    </p>
                                    <PageEntrySelect :options="['1', '2', ' 3', '4']" :default="'4'" class="select">
                                    </PageEntrySelect>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div class="fishing-attacks__new-letter fishing-attacks-new-letter" id="fishing-attacks-new-letter">
                        <div class="fishing-attacks-new-letter__top">
                            <p class="fishing-attacks-new-letter__top-text">
                                Новый шаблон писем
                            </p>
                        </div>
                        <div class="fishing-attacks-new-letter__inner">
                            <div class="fishing-attacks-new-letter__body fishing-attacks-new-letter-body">
                                <div class="fishing-attacks-new-letter-body__row">
                                    <p class="fishing-attacks-new-letter-body__row-text">
                                        *Имя
                                    </p>
                                    <input class="fishing-attacks-new-letter-body__row-input" type="text"
                                        placeholder="Письмо с непонятным PDF">
                                </div>
                                <div class="fishing-attacks-new-letter-body__row">
                                    <p class="fishing-attacks-new-letter-body__row-text">
                                        *Фамилия
                                    </p>
                                    <input class="fishing-attacks-new-letter-body__row-input" type="text"
                                        placeholder="Запрашивает доступ к таблице">
                                </div>
                                <div class="fishing-attacks-new-letter-body__row">
                                    <p class="fishing-attacks-new-letter-body__row-text">
                                        Телефон
                                    </p>
                                    <input class="fishing-attacks-new-letter-body__row-input" type="text"
                                        placeholder="Документы Google">
                                </div>
                                <div class="fishing-attacks-new-letter-body__row">
                                    <p class="fishing-attacks-new-letter-body__row-text">
                                        *Должность
                                    </p>
                                    <input class="fishing-attacks-new-letter-body__row-input" type="text"
                                        placeholder="Менеджер">
                                </div>
                                <div class="fishing-attacks-new-letter-body__row">
                                    <p class="fishing-attacks-new-letter-body__row-text">
                                        *Группа
                                    </p>
                                    <NewCursSelect :options="['Без группы', 'Без группы 2', ' Без группы 3']"
                                        :default="'Без группы'" class="select" />
                                </div>
                            </div>
                            <div class="fishing-attacks-new-letter__content fishing-attacks-new-letter-content">
                                <div class="fishing-attacks-new-letter-content__inner">
                                    <p class="fishing-attacks-new-letter-content__text">
                                        *Имя
                                    </p>
                                    <div
                                        class="fishing-attacks-new-letter-content__box fishing-attacks-new-letter-content-box">
                                        <div class="fishing-attacks-new-letter-content-box__top">
                                            <button class="fishing-attacks-new-letter-content-box__top-btn" type="button">
                                                <svg width="13" height="16" viewBox="0 0 13 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.61027 6.48293C10.182 5.78099 10.4959 4.90427 10.4997 3.99909C10.4987 2.93856 10.0768 1.9217 9.32703 1.17188C8.57704 0.422061 7.56035 0.000180567 6.49982 -0.000976562H1.49973C1.14248 -0.000976562 0.812352 0.189701 0.633726 0.499075C0.455099 0.808448 0.455099 1.18962 0.633726 1.49901C0.812352 1.80839 1.14248 1.99906 1.49973 1.99906H2.49983V13.9989H1.49973C1.14248 13.9989 0.812352 14.1896 0.633726 14.499C0.455099 14.8083 0.455099 15.1895 0.633726 15.4989C0.812352 15.8083 1.14248 15.999 1.49973 15.999H7.49966C9.02776 16.002 10.473 15.3047 11.4217 14.1069C12.3703 12.9089 12.7178 11.3423 12.3646 9.85575C12.0113 8.36901 10.9963 7.12617 9.61018 6.48298L9.61027 6.48293ZM8.49985 3.99909C8.49918 4.52927 8.28825 5.03768 7.9134 5.4125C7.5384 5.7875 7.03 5.99844 6.49982 5.99895H4.49978V1.99906H6.49982C7.03 1.99973 7.5384 2.2105 7.9134 2.58551C8.28823 2.9605 8.49917 3.46874 8.49985 3.99909ZM7.49975 13.9988H4.49978V7.9989H7.49975C8.57168 7.9989 9.56188 8.57078 10.0979 9.49889C10.6338 10.427 10.6338 11.5707 10.0979 12.4989C9.56188 13.427 8.57168 13.9988 7.49975 13.9988Z"
                                                        fill="#1B2559"></path>
                                                </svg>
                                            </button>
                                            <button class="fishing-attacks-new-letter-content-box__top-btn"
                                                type="button"><svg width="11" height="17" viewBox="0 0 11 17" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.4997 1.99816C10.4997 2.26334 10.3944 2.51781 10.2069 2.70531C10.0193 2.89281 9.76499 2.99811 9.49962 2.99811H8.2544L4.82582 14.9981H5.49967C5.85692 14.9981 6.18706 15.1888 6.36568 15.4982C6.54431 15.8076 6.54431 16.1887 6.36568 16.4981C6.18706 16.8075 5.85693 16.9982 5.49967 16.9982H3.50364L3.50062 16.9987L3.49727 16.9982H1.49974C1.14249 16.9982 0.812356 16.8075 0.633727 16.4981C0.455099 16.1887 0.455099 15.8076 0.633727 15.4982C0.812356 15.1888 1.14249 14.9981 1.49974 14.9981H2.74496L6.17354 2.99811H5.49969C5.14244 2.99811 4.8123 2.80743 4.63368 2.49805C4.45505 2.18867 4.45505 1.80749 4.63368 1.4981C4.8123 1.18872 5.14243 0.998047 5.49969 0.998047H9.49964C9.76499 0.998047 10.0193 1.10335 10.207 1.29085C10.3945 1.47851 10.4998 1.73279 10.4998 1.99816H10.4997Z"
                                                        fill="#1B2559"></path>
                                                </svg>
                                            </button>
                                            <button class="fishing-attacks-new-letter-content-box__top-btn"
                                                type="button"><svg width="13" height="16" viewBox="0 0 13 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M6.49976 12.9986C7.8253 12.997 9.09624 12.4698 10.0336 11.5325C10.9709 10.5952 11.498 9.32424 11.4997 7.9987V0.998988C11.4997 0.641743 11.309 0.311617 10.9997 0.132992C10.6903 -0.0456327 10.3091 -0.0456327 9.99974 0.132992C9.69037 0.311617 9.49969 0.641738 9.49969 0.998988V7.9987C9.49969 9.07044 8.92782 10.0608 7.99972 10.5967C7.07163 11.1326 5.92788 11.1326 4.99979 10.5967C4.07169 10.0608 3.49982 9.07044 3.49982 7.9987V0.998988C3.49982 0.641743 3.30914 0.311617 2.99977 0.132992C2.6904 -0.0456327 2.30923 -0.0456327 1.99985 0.132992C1.69048 0.311617 1.49981 0.641738 1.49981 0.998988V7.9987C1.50148 9.32424 2.02865 10.5952 2.96596 11.5325C3.90327 12.4698 5.17421 12.997 6.49976 12.9986ZM11.4998 13.9986H1.49972C1.14247 13.9986 0.812349 14.1892 0.633724 14.4986C0.4551 14.808 0.4551 15.1892 0.633724 15.4985C0.812349 15.8079 1.14247 15.9986 1.49972 15.9986H11.4998C11.857 15.9986 12.1872 15.8079 12.3658 15.4985C12.5444 15.1892 12.5444 14.808 12.3658 14.4986C12.1872 14.1892 11.857 13.9986 11.4998 13.9986Z"
                                                        fill="#1B2559"></path>
                                                </svg>
                                            </button>
                                            <button class="fishing-attacks-new-letter-content-box__top-btn"
                                                type="button"><svg width="17" height="14" viewBox="0 0 17 14" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M11.4998 11.9994H5.4997C5.14244 11.9994 4.8123 12.1899 4.63367 12.4993C4.45503 12.8087 4.45503 13.1901 4.63367 13.4995C4.8123 13.8089 5.14243 13.9994 5.4997 13.9994H11.4998C11.8571 13.9994 12.1872 13.8088 12.3658 13.4995C12.5445 13.1901 12.5445 12.8087 12.3658 12.4993C12.1872 12.1899 11.8571 11.9994 11.4998 11.9994ZM1.49976 1.99895H15.4998C15.857 1.99895 16.1871 1.80843 16.3658 1.49905C16.5444 1.18967 16.5444 0.808311 16.3658 0.498919C16.1871 0.189536 15.857 -0.000976562 15.4998 -0.000976562H1.49976C1.1425 -0.000976562 0.812362 0.18954 0.63373 0.498919C0.455098 0.808302 0.455098 1.18966 0.63373 1.49905C0.812362 1.80844 1.1425 1.99895 1.49976 1.99895ZM15.4998 3.99904H1.49976C1.1425 3.99904 0.812362 4.18973 0.63373 4.49911C0.455098 4.80849 0.455098 5.18968 0.63373 5.49907C0.812362 5.80846 1.1425 5.99914 1.49976 5.99914H15.4998C15.857 5.99914 16.1871 5.80846 16.3658 5.49907C16.5444 5.18969 16.5444 4.8085 16.3658 4.49911C16.1871 4.18973 15.857 3.99904 15.4998 3.99904ZM15.4998 7.99907H1.49976C1.1425 7.99907 0.812362 8.18975 0.63373 8.49913C0.455098 8.80852 0.455098 9.1897 0.63373 9.49909C0.812362 9.80848 1.1425 9.99916 1.49976 9.99916H15.4998C15.857 9.99916 16.1871 9.80848 16.3658 9.49909C16.5444 9.18971 16.5444 8.80852 16.3658 8.49913C16.1871 8.18975 15.857 7.99907 15.4998 7.99907Z"
                                                        fill="#1B2559"></path>
                                                </svg>
                                            </button>
                                            <button class="fishing-attacks-new-letter-content-box__top-btn"
                                                type="button"><svg width="17" height="14" viewBox="0 0 17 14" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.49975 5.99916H7.4998C7.85706 5.99916 8.1872 5.80848 8.36583 5.4991C8.54446 5.18972 8.54446 4.80854 8.36583 4.49915C8.1872 4.18976 7.85707 3.99909 7.4998 3.99909H1.49975C1.14249 3.99909 0.812359 4.18977 0.633728 4.49915C0.455098 4.80853 0.455098 5.18971 0.633728 5.4991C0.812359 5.80848 1.14249 5.99916 1.49975 5.99916ZM7.4998 11.9992H1.49975C1.14249 11.9992 0.812359 12.1897 0.633728 12.4991C0.455098 12.8085 0.455098 13.1898 0.633728 13.4992C0.812359 13.8086 1.14249 13.9991 1.49975 13.9991H7.4998C7.85706 13.9991 8.1872 13.8086 8.36583 13.4992C8.54446 13.1899 8.54446 12.8085 8.36583 12.4991C8.1872 12.1897 7.85707 11.9992 7.4998 11.9992ZM11.4998 7.99924L1.49984 7.99907C1.14258 7.99907 0.812444 8.18975 0.633814 8.49913C0.455184 8.80851 0.455184 9.18969 0.633814 9.49908C0.812444 9.80846 1.14258 9.99914 1.49984 9.99914H11.4998C11.857 9.99914 12.1872 9.80846 12.3658 9.49908C12.5444 9.1897 12.5444 8.80852 12.3658 8.49913C12.1872 8.18974 11.857 7.99907 11.4998 7.99907V7.99924ZM15.4998 -0.000976562H1.49992C1.14267 -0.000976562 0.81253 0.189538 0.6339 0.498914C0.45527 0.808293 0.45527 1.18965 0.6339 1.49904C0.81253 1.80842 1.14266 1.99893 1.49992 1.99893H15.4998C15.857 1.99893 16.1872 1.80841 16.3658 1.49904C16.5444 1.18966 16.5444 0.808302 16.3658 0.498914C16.1872 0.189534 15.857 -0.000976562 15.4998 -0.000976562Z"
                                                        fill="#1B2559"></path>
                                                </svg>
                                            </button>
                                            <button class="fishing-attacks-new-letter-content-box__top-btn"
                                                type="button"><svg width="17" height="14" viewBox="0 0 17 14" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.4999 3.99884H9.49981C9.14255 3.99884 8.81241 4.18952 8.63378 4.4989C8.45515 4.80828 8.45515 5.18947 8.63378 5.49886C8.81241 5.80825 9.14254 5.99892 9.49981 5.99892H15.4999C15.8571 5.99892 16.1873 5.80824 16.3659 5.49886C16.5445 5.18948 16.5445 4.80829 16.3659 4.4989C16.1873 4.18952 15.8571 3.99884 15.4999 3.99884ZM15.4999 11.9991H9.49981C9.14255 11.9991 8.81241 12.1896 8.63378 12.499C8.45515 12.8083 8.45515 13.1897 8.63378 13.4991C8.81241 13.8085 9.14254 13.999 9.49981 13.999H15.4999C15.8571 13.999 16.1873 13.8085 16.3659 13.4991C16.5445 13.1897 16.5445 12.8084 16.3659 12.499C16.1873 12.1896 15.8571 11.9991 15.4999 11.9991ZM15.4999 7.99909L5.4999 7.99892C5.14264 7.99892 4.81251 8.1896 4.63388 8.49898C4.45525 8.80836 4.45525 9.18955 4.63388 9.49894C4.81251 9.80833 5.14264 9.999 5.4999 9.999H15.4999C15.8571 9.999 16.1873 9.80832 16.3659 9.49894C16.5445 9.18956 16.5445 8.80837 16.3659 8.49898C16.1873 8.1896 15.8571 7.99892 15.4999 7.99892V7.99909ZM16.4998 0.999145L16.5 0.998978C16.5 0.733796 16.3945 0.479329 16.207 0.291827C16.0195 0.104325 15.7652 -0.000976562 15.4999 -0.000976562H1.5C1.14274 -0.000976562 0.812604 0.189538 0.633973 0.498915C0.455342 0.808296 0.455342 1.18965 0.633973 1.49904C0.812604 1.80842 1.14274 1.99893 1.5 1.99893H15.4999C15.7652 1.99893 16.0195 1.89363 16.207 1.70613C16.3945 1.51863 16.5 1.26418 16.5 0.998978L16.4998 0.999145Z"
                                                        fill="#1B2559"></path>
                                                </svg>
                                            </button>
                                            <button class="fishing-attacks-new-letter-content-box__top-btn"
                                                type="button"><svg width="21" height="16" viewBox="0 0 21 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M8.49727 2.99499H19.4998C19.8571 2.99499 20.1873 2.80443 20.366 2.49499C20.5447 2.18555 20.5447 1.80412 20.366 1.49466C20.1873 1.18521 19.8571 0.994668 19.4998 0.994668H8.49727C8.13994 0.994668 7.80973 1.18522 7.63106 1.49466C7.4524 1.8041 7.4524 2.18554 7.63106 2.49499C7.80973 2.80445 8.13993 2.99499 8.49727 2.99499ZM19.4998 6.9958L8.49727 6.99597C8.13994 6.99597 7.80973 7.18652 7.63106 7.49596C7.4524 7.8054 7.4524 8.18684 7.63106 8.49629C7.80973 8.80575 8.13993 8.99629 8.49727 8.99629H19.4998C19.8571 8.99629 20.1873 8.80573 20.366 8.49629C20.5447 8.18685 20.5447 7.80541 20.366 7.49596C20.1873 7.18651 19.8571 6.99597 19.4998 6.99597V6.9958ZM19.4998 12.9971L8.49727 12.9973C8.13994 12.9973 7.80973 13.1878 7.63106 13.4973C7.4524 13.8067 7.4524 14.1881 7.63106 14.4976C7.80973 14.807 8.13993 14.9976 8.49727 14.9976H19.4998C19.8571 14.9976 20.1873 14.807 20.366 14.4976C20.5447 14.1882 20.5447 13.8067 20.366 13.4973C20.1873 13.1878 19.8571 12.9973 19.4998 12.9973V12.9971ZM3.78924 0.287629L2.49588 1.58082L2.20285 1.28779V1.28763C1.94967 1.03763 1.58278 0.941012 1.23934 1.03394C0.895738 1.12671 0.627505 1.39496 0.534699 1.73858C0.441765 2.08201 0.53855 2.44888 0.78855 2.70209L1.78871 3.70225C1.97625 3.88996 2.23062 3.99528 2.49601 3.99528C2.76124 3.99528 3.01559 3.88996 3.20313 3.70225L5.20362 1.70176V1.70193C5.45362 1.44875 5.55024 1.08169 5.45731 0.738288C5.36454 0.394855 5.09629 0.126584 4.75267 0.0336495C4.40923 -0.0591178 4.04237 0.0375006 3.78916 0.287667L3.78924 0.287629ZM3.78924 6.28893L2.49588 7.58213L2.20285 7.2891V7.28893C1.94967 7.03893 1.58278 6.94231 1.23934 7.03524C0.895738 7.12801 0.627505 7.39626 0.534699 7.73988C0.441765 8.08332 0.53855 8.45018 0.78855 8.70339L1.78871 9.70355C1.97625 9.89126 2.23062 9.99658 2.49601 9.99658C2.76124 9.99658 3.01559 9.89126 3.20313 9.70355L5.20362 7.70306V7.70323C5.45362 7.45005 5.55024 7.08299 5.45731 6.73959C5.36454 6.39616 5.09629 6.12789 4.75267 6.03495C4.40923 5.94219 4.04237 6.0388 3.78916 6.28897L3.78924 6.28893ZM3.78924 12.2902L2.49588 13.5834L2.20285 13.2904V13.2902C1.94967 13.0402 1.58278 12.9436 1.23934 13.0365C0.895738 13.1293 0.627505 13.3976 0.534699 13.7412C0.441765 14.0846 0.53855 14.4515 0.78855 14.7047L1.78871 15.7049C1.97625 15.8926 2.23062 15.9979 2.49601 15.9979C2.76124 15.9979 3.01559 15.8926 3.20313 15.7049L5.20362 13.7044V13.7045C5.45362 13.4514 5.55024 13.0843 5.45731 12.7409C5.36454 12.3975 5.09629 12.1292 4.75267 12.0363C4.40923 11.9435 4.04237 12.0401 3.78916 12.2903L3.78924 12.2902Z"
                                                        fill="#1B2559"></path>
                                                </svg>
                                            </button>
                                            <button class="fishing-attacks-new-letter-content-box__top-btn"
                                                type="button"><svg width="19" height="16" viewBox="0 0 19 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.4999 6.99905H7.49977C7.14252 6.99905 6.8124 7.18956 6.63377 7.49893C6.45514 7.8083 6.45514 8.18965 6.63377 8.49904C6.8124 8.80842 7.14252 8.99892 7.49977 8.99892H17.4999C17.8572 8.99892 18.1873 8.8084 18.3659 8.49904C18.5446 8.18967 18.5446 7.80832 18.3659 7.49893C18.1873 7.18955 17.8572 6.99905 17.4999 6.99905ZM3.49996 5.99895H1.49993C1.23476 5.99895 0.980294 6.10425 0.792797 6.29175C0.605299 6.47941 0.5 6.73369 0.5 6.99905V8.99909V8.99892C0.5 9.26426 0.605299 9.51856 0.792797 9.70623C0.980294 9.89372 1.23473 9.99902 1.49993 9.99902H3.49996C3.76514 9.99902 4.0196 9.89372 4.2071 9.70623C4.39476 9.51856 4.50006 9.26429 4.4999 8.99892V6.99906C4.50006 6.73372 4.39476 6.47942 4.2071 6.29175C4.0196 6.10425 3.76516 5.99896 3.49996 5.99896V5.99895ZM7.49986 2.99899H17.5C17.8573 2.99899 18.1874 2.80848 18.366 2.49911C18.5447 2.18974 18.5447 1.80839 18.366 1.49901C18.1874 1.18962 17.8573 0.999126 17.5 0.999126H7.49986C7.14261 0.999126 6.81248 1.18964 6.63386 1.49901C6.45523 1.80837 6.45523 2.18973 6.63386 2.49911C6.81248 2.80849 7.14261 2.99899 7.49986 2.99899ZM3.49996 -0.000976562H1.49993C1.23476 -0.000976562 0.980294 0.104322 0.792797 0.29182C0.605299 0.479485 0.5 0.733757 0.5 0.999126V2.99899C0.5 3.26433 0.605299 3.51862 0.792797 3.70629C0.980294 3.89379 1.23473 3.99909 1.49993 3.99909H3.49996C3.76514 3.99909 4.0196 3.89379 4.2071 3.70629C4.39476 3.51863 4.50006 3.26436 4.4999 2.99899V0.999126C4.50006 0.733783 4.39476 0.479489 4.2071 0.29182C4.0196 0.104322 3.76516 -0.000976562 3.49996 -0.000976562ZM17.4999 12.9992H7.49977C7.14252 12.9992 6.8124 13.1897 6.63377 13.499C6.45514 13.8084 6.45514 14.1898 6.63377 14.4991C6.8124 14.8085 7.14252 14.999 7.49977 14.999H17.4999C17.8572 14.999 18.1873 14.8085 18.3659 14.4991C18.5446 14.1898 18.5446 13.8084 18.3659 13.499C18.1873 13.1897 17.8572 12.9992 17.4999 12.9992ZM3.49996 11.9991H1.49993C1.23476 11.9991 0.980294 12.1043 0.792797 12.2918C0.605299 12.4795 0.5 12.7338 0.5 12.9992V14.9992V14.999C0.5 15.2644 0.605299 15.5187 0.792797 15.7063C0.980294 15.8938 1.23473 15.9991 1.49993 15.9991H3.49996C3.76514 15.9991 4.0196 15.8938 4.2071 15.7063C4.39476 15.5187 4.50006 15.2644 4.4999 14.999V12.9992C4.50006 12.7338 4.39476 12.4795 4.2071 12.2919C4.0196 12.1044 3.76516 11.9991 3.49996 11.9991V11.9991Z"
                                                        fill="#1B2559"></path>
                                                </svg>
                                            </button>
                                            <button class="fishing-attacks-new-letter-content-box__top-btn"
                                                type="button"><svg width="21" height="16" viewBox="0 0 21 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M19.7308 0.306641H1.26923C0.844607 0.306641 0.5 0.651247 0.5 1.07587V14.922C0.5 15.3467 0.844607 15.6913 1.26923 15.6913H19.7308C20.1554 15.6913 20.5 15.3467 20.5 14.922V1.07587C20.5 0.651247 20.1554 0.306641 19.7308 0.306641ZM18.9615 1.8451V8.4495L15.6592 5.14712C15.3589 4.84682 14.8719 4.84682 14.5714 5.14712L8.96176 10.7572L7.96708 9.76255C7.69665 9.49178 7.26857 9.46138 6.96176 9.69095L2.03868 13.3834V1.84497L18.9615 1.8451ZM3.57692 14.1528L7.35077 11.3224L8.41741 12.3891C8.71737 12.6894 9.20519 12.6894 9.50514 12.3891L15.1153 6.77939L18.9614 10.6255V14.1528L3.57692 14.1528Z"
                                                        fill="#1B2559"></path>
                                                    <path
                                                        d="M6.65413 7.99917C7.92679 7.99917 8.96182 6.96414 8.96182 5.69148C8.96182 4.41882 7.92679 3.38379 6.65413 3.38379C5.38147 3.38379 4.34644 4.41882 4.34644 5.69148C4.34644 6.96414 5.38147 7.99917 6.65413 7.99917ZM6.65413 4.92225C7.0784 4.92225 7.42336 5.2672 7.42336 5.69148C7.42336 6.11576 7.0784 6.46071 6.65413 6.46071C6.22985 6.46071 5.8849 6.11576 5.8849 5.69148C5.8849 5.2672 6.22985 4.92225 6.65413 4.92225Z"
                                                        fill="#1B2559"></path>
                                                </svg>
                                            </button>
                                            <button class="fishing-attacks-new-letter-content-box__top-btn"
                                                type="button"><svg width="21" height="16" viewBox="0 0 21 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16.0558 0.980469C13.6052 0.980469 11.6113 2.97433 11.6113 5.42494C11.6113 7.87554 13.6052 9.86941 16.0558 9.86941C16.6812 9.86941 17.2762 9.73786 17.8167 9.50413C17.0629 11.1855 15.8967 12.6081 14.5389 13.3468C14.1078 13.5815 13.9483 14.121 14.183 14.5525C14.3439 14.8486 14.6497 15.0166 14.9648 15.0166C15.1078 15.0166 15.2536 14.9819 15.3888 14.9087C18.3505 13.297 20.5002 9.30866 20.5002 5.42495C20.5002 2.97435 18.5063 0.980484 16.0557 0.980484L16.0558 0.980469Z"
                                                        fill="#1B2559"></path>
                                                    <path
                                                        d="M4.94447 0.980469C2.49387 0.980469 0.5 2.97433 0.5 5.42494C0.5 7.87554 2.49387 9.86941 4.94447 9.86941C5.56984 9.86941 6.1649 9.73826 6.70539 9.50413C5.95121 11.1855 4.78493 12.6081 3.42761 13.3468C2.99646 13.5815 2.83693 14.121 3.07166 14.5525C3.23297 14.8486 3.53793 15.0166 3.85343 15.0166C3.99708 15.0166 4.14232 14.9819 4.27744 14.9087C7.23918 13.297 9.38883 9.30866 9.38883 5.42495C9.38883 2.97435 7.39497 0.980484 4.94436 0.980484L4.94447 0.980469Z"
                                                        fill="#1B2559"></path>
                                                </svg>
                                            </button>
                                            <button class="fishing-attacks-new-letter-content-box__top-btn"
                                                type="button"><svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14.3507 0.761192C14.5239 0.764374 14.6964 0.775924 14.8679 0.799612C15.2072 0.84593 15.5409 0.934084 15.8586 1.06137C16.2566 1.22024 16.6298 1.44062 16.9612 1.7124C17.322 2.00786 17.6331 2.36415 17.8778 2.76177C18.1104 3.14033 18.2827 3.55587 18.3858 3.98828C18.4779 4.37474 18.5149 4.77378 18.4951 5.17062C18.4714 5.65052 18.3642 6.12571 18.1805 6.56968C18.0364 6.9177 17.8451 7.24629 17.6136 7.54351C17.5072 7.67975 17.3925 7.80844 17.271 7.93135L9.13513 16.0673C9.11933 16.0816 9.10425 16.0964 9.08799 16.1097C9.02187 16.1632 8.94491 16.2024 8.863 16.2243C8.80183 16.2408 8.73796 16.2473 8.67431 16.2441C8.5039 16.2352 8.34219 16.1528 8.23472 16.0202C8.19477 15.971 8.16283 15.9152 8.13985 15.8559C8.11722 15.7967 8.1039 15.7337 8.10025 15.6701C8.09377 15.5428 8.12795 15.4148 8.19737 15.308C8.22824 15.2605 8.23979 15.2512 8.27715 15.2095C10.9977 12.4889 13.7339 9.78416 16.4381 7.04826C16.5233 6.95987 16.6041 6.86711 16.6786 6.76894C16.8555 6.53641 16.9979 6.27785 17.0996 6.00396C17.2362 5.6366 17.2995 5.24296 17.2851 4.85109C17.2714 4.48515 17.1899 4.12204 17.0454 3.78522C16.9109 3.47102 16.7219 3.18062 16.4892 2.93005C16.2886 2.71402 16.056 2.52781 15.8012 2.37931C15.39 2.13995 14.9218 2.00148 14.4467 1.97776C13.9941 1.95549 13.5379 2.03704 13.1216 2.21571C12.8977 2.31165 12.6855 2.43504 12.4914 2.58235C12.3933 2.65672 12.3005 2.73768 12.2121 2.82325C8.86494 6.12606 5.49696 9.40926 2.23759 12.7981C2.06364 12.9836 1.9255 13.1992 1.83572 13.4375C1.75982 13.6385 1.71857 13.8524 1.7135 14.0674C1.70879 14.2586 1.73295 14.451 1.78504 14.6353C1.84432 14.8452 1.94037 15.0447 2.06718 15.2223C2.13083 15.3107 2.20201 15.3927 2.27897 15.4704C2.27968 15.4708 2.27614 15.4676 2.27685 15.4679C2.37679 15.5654 2.48463 15.6534 2.60248 15.7278C2.88616 15.9072 3.21616 16.0092 3.55157 16.0219C3.79388 16.0308 4.03759 15.9931 4.26626 15.9116C4.51682 15.8216 4.74474 15.6794 4.9385 15.4971C7.80214 12.7374 10.6001 9.9088 13.3755 7.06036C13.4593 6.97044 13.524 6.86555 13.5628 6.74864C13.5905 6.66449 13.6048 6.57609 13.6048 6.48723C13.6048 6.41216 13.5945 6.33732 13.5747 6.26507C13.5086 6.02748 13.336 5.82723 13.1102 5.72731C13.0171 5.68594 12.9164 5.66225 12.8147 5.65718C12.7058 5.65176 12.5961 5.66803 12.4933 5.70468C12.3755 5.74675 12.2723 5.81535 12.1828 5.90244L5.57657 12.5087C5.56113 12.5227 5.54604 12.5378 5.52943 12.5511C5.46366 12.6042 5.3867 12.6435 5.30479 12.6654C5.24327 12.6819 5.17928 12.6888 5.11611 12.6856C5.05247 12.6819 4.98953 12.6687 4.93025 12.646C4.87097 12.623 4.81558 12.5909 4.76596 12.5511C4.63326 12.4436 4.55099 12.2818 4.54203 12.1115C4.5352 11.9842 4.56973 11.8562 4.63915 11.7491C4.67002 11.7016 4.68122 11.6926 4.71894 11.6506L11.3306 5.03891C11.3902 4.98069 11.4518 4.9253 11.5172 4.87426C11.662 4.76171 11.8217 4.66861 11.9913 4.59813C12.1607 4.52801 12.3397 4.48098 12.5215 4.45824C12.8548 4.41687 13.1966 4.45894 13.5097 4.57974C13.775 4.68216 14.0184 4.84032 14.2194 5.04127C14.3851 5.20697 14.522 5.40145 14.6223 5.61358C14.7291 5.83975 14.7941 6.08594 14.8125 6.33545C14.8327 6.60322 14.7992 6.87428 14.7147 7.12922C14.6468 7.33488 14.5457 7.52968 14.417 7.70364C14.3667 7.77118 14.312 7.83482 14.2548 7.89634C11.4743 10.7503 8.6388 13.5501 5.80273 16.3493C5.6916 16.4561 5.57445 16.5561 5.4494 16.6462C5.22253 16.8101 4.97352 16.9427 4.71139 17.0405C4.3274 17.1833 3.91587 17.2494 3.50678 17.2343C3.12398 17.2199 2.74473 17.1347 2.39269 16.9837C2.0641 16.8431 1.7604 16.6455 1.49864 16.4025C1.25845 16.1796 1.05325 15.9194 0.893558 15.6332C0.757671 15.3891 0.6549 15.127 0.588681 14.856C0.428045 14.1967 0.487325 13.4902 0.757686 12.8676C0.860811 12.6311 0.993162 12.4072 1.15133 12.2033C1.22428 12.1087 1.30336 12.0192 1.38609 11.9333C4.69343 8.58791 8.01676 5.25855 11.3651 1.95422C11.5766 1.75045 11.8059 1.56707 12.0542 1.41033C12.4882 1.13608 12.972 0.94232 13.4752 0.842032C13.6956 0.797838 13.9181 0.772968 14.1424 0.763304C14.2122 0.761183 14.2815 0.760475 14.3509 0.760829L14.3507 0.761192Z"
                                                        fill="#1B2559"></path>
                                                </svg>
                                            </button>
                                            <button class="fishing-attacks-new-letter-content-box__top-btn"
                                                type="button"><svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M9.93053 4.83816C10.2474 4.52129 10.2474 4.00749 9.93053 3.69006L6.77393 0.534392C6.42897 0.189076 5.97044 -0.000976562 5.48251 -0.000976562C4.99478 -0.000976562 4.53608 0.188895 4.1911 0.533835L1.03506 3.68988C0.689742 4.03483 0.499689 4.49337 0.500245 4.98166C0.500245 5.4694 0.690117 5.92847 1.03506 6.27252L4.19166 9.42945C4.35 9.58815 4.55763 9.66678 4.76543 9.66678C4.97323 9.66678 5.18068 9.58797 5.3392 9.42945C5.65607 9.11258 5.65607 8.59877 5.3392 8.28135L2.1826 5.12405C2.1335 5.07495 2.12336 5.01933 2.12336 4.98074C2.12336 4.94216 2.1335 4.88654 2.1826 4.83707L5.33864 1.68103C5.3881 1.63193 5.44408 1.62179 5.48231 1.62179C5.52054 1.62179 5.57652 1.63193 5.62599 1.6814L8.78291 4.83744C9.0996 5.15467 9.6134 5.15522 9.93045 4.83816L9.93053 4.83816Z"
                                                        fill="#1B2559"></path>
                                                    <path
                                                        d="M17.965 11.7256L14.809 8.56871C14.4921 8.25184 13.9783 8.25184 13.6612 8.56871C13.3444 8.88558 13.3444 9.39938 13.6612 9.71681L16.8178 12.8737C16.8666 12.9228 16.8771 12.9788 16.8771 13.017C16.8774 13.0553 16.8673 13.1107 16.8178 13.1603L13.6612 16.3169C13.5821 16.3961 13.4534 16.3961 13.3743 16.3169L10.2177 13.1603C9.90079 12.8435 9.38643 12.8435 9.06993 13.1603C8.75306 13.4772 8.75306 13.991 9.06993 14.3081L12.2265 17.4647C12.5824 17.8205 13.05 17.9988 13.5179 17.9988C13.9859 17.9988 14.4533 17.8207 14.8094 17.4647L17.966 14.3081C18.3113 13.9631 18.5008 13.5046 18.5004 13.0163C18.5002 12.5282 18.31 12.0697 17.965 11.7256L17.965 11.7256Z"
                                                        fill="#1B2559"></path>
                                                    <path
                                                        d="M4.90821 12.4418L3.76011 13.5895C3.44324 13.906 3.44324 14.4202 3.76011 14.7372C3.91882 14.8959 4.12663 14.9751 4.33444 14.9751C4.54226 14.9751 4.74969 14.8959 4.90821 14.7372L6.05631 13.5895C6.37318 13.273 6.37318 12.7588 6.05631 12.4418C5.73889 12.1249 5.22508 12.1249 4.90821 12.4418Z"
                                                        fill="#1B2559"></path>
                                                    <path
                                                        d="M4.57244 11.2951C4.57244 10.847 4.20882 10.4834 3.76078 10.4834H2.61268C2.16464 10.4834 1.80103 10.847 1.80103 11.2951C1.80103 11.7431 2.16464 12.1067 2.61268 12.1067H3.76078C4.20882 12.1067 4.57244 11.7435 4.57244 11.2951Z"
                                                        fill="#1B2559"></path>
                                                    <path
                                                        d="M7.20375 13.9268C6.7557 13.9268 6.39209 14.2904 6.39209 14.7384V15.8861C6.39209 16.3342 6.7557 16.6978 7.20375 16.6978C7.65179 16.6978 8.0154 16.3342 8.0154 15.8861V14.7384C8.0154 14.29 7.65233 13.9268 7.20375 13.9268Z"
                                                        fill="#1B2559"></path>
                                                    <path
                                                        d="M13.5172 5.79308C13.725 5.79308 13.9324 5.71391 14.0909 5.5552L15.2387 4.4071C15.5555 4.09023 15.5555 3.57643 15.2387 3.259C14.9218 2.94249 14.408 2.94213 14.0909 3.259L12.9432 4.4071C12.6263 4.72397 12.6263 5.23777 12.9432 5.5552C13.1019 5.71355 13.3097 5.79308 13.5172 5.79308Z"
                                                        fill="#1B2559"></path>
                                                    <path
                                                        d="M14.4275 6.70423C14.4275 7.15228 14.7911 7.51589 15.2391 7.51589H16.3869C16.8349 7.51589 17.1985 7.15228 17.1985 6.70423C17.1985 6.25619 16.8349 5.89258 16.3869 5.89258H15.2391C14.7907 5.89258 14.4275 6.25619 14.4275 6.70423Z"
                                                        fill="#1B2559"></path>
                                                    <path
                                                        d="M11.796 4.07122C12.2441 4.07122 12.6077 3.7076 12.6077 3.25956V2.11146C12.6077 1.66342 12.2441 1.2998 11.796 1.2998C11.348 1.2998 10.9844 1.66342 10.9844 2.11146V3.25956C10.9844 3.7076 11.348 4.07122 11.796 4.07122Z"
                                                        fill="#1B2559"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <textarea class="fishing-attacks-new-letter-content-box__textarea" name="" id=""
                                            cols="30" rows="10" placeholder="Асель"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="fishing-attacks-new-letter__bottom">
                            <button class="fishing-attacks-new-letter__bottom-btn" type="button">
                                Отменить
                            </button>
                            <button class="fishing-attacks-new-letter__bottom-btn" type="button">
                                Сохранить
                            </button>
                        </div>
                    </div>
                    <div class="fishing-attacks__message fishing-attacks-message" id="fishing-attacks-message">
                        <div class="fishing-attacks-message__top">
                            <p class="fishing-attacks-message__top-text">Входящие</p>
                        </div>
                        <div class="fishing-attacks-message__inner">
                            <p class="fishing-attacks-message__text">
                                Тема: k.n@support.io запрашивает доступ к таблице
                                От кого: Документы Google security@internal-mail.com
                                Кому: -

                            </p>
                            <div class="fishing-attacks-message__box fishing-attacks-message-box">
                                <h3 class="fishing-attacks-message-box__title">
                                    Предоставить доступ к таблице?

                                </h3>
                                <div class="fishing-attacks-message-box__row">
                                    <img class="fishing-attacks-message-box__row-img"
                                        src="../../../public/images/header-user-icon.svg" alt="user-icon">
                                    <p class="fishing-attacks-message-box__row-text">
                                        k.n@support.io запрашивает доступ к следующей таблице:

                                    </p>
                                </div>
                                <img class="fishing-attacks-message-box__img"
                                    src="../../../public/images/fishing-attacks-message-img.png" alt="">
                                <button class="fishing-attacks-message-box__btn">
                                    Открыть доступ
                                </button>
                            </div>
                            <div class="fishing-attacks-message__buttons fishing-attacks-message-buttons">
                                <button class="fishing-attacks-message-buttons__btn" type="button">
                                    Отменить
                                </button>
                                <button class="fishing-attacks-message-buttons__btn" type="button">
                                    Сохранить
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="fishing-attacks__doings fishing-attacks-doings" id="fishing-attacks-doings">
                        <button class="fishing-attacks-doings__btn" type="button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18 21H12C11.2044 21 10.4413 20.6839 9.87868 20.1213C9.31607 19.5587 9 18.7956 9 18V12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9H18C18.7956 9 19.5587 9.31607 20.1213 9.87868C20.6839 10.4413 21 11.2044 21 12V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21ZM12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V12C19 11.7348 18.8946 11.4804 18.7071 11.2929C18.5196 11.1054 18.2652 11 18 11H12Z"
                                    fill="#1294F2" />
                                <path
                                    d="M9.73 15H5.67C4.96268 14.9974 4.28509 14.7152 3.78494 14.2151C3.28478 13.7149 3.00263 13.0373 3 12.33V5.67C3.00263 4.96268 3.28478 4.28509 3.78494 3.78494C4.28509 3.28478 4.96268 3.00263 5.67 3H12.33C13.0373 3.00263 13.7149 3.28478 14.2151 3.78494C14.7152 4.28509 14.9974 4.96268 15 5.67V9.4H13V5.67C13 5.49231 12.9294 5.32189 12.8038 5.19624C12.6781 5.07059 12.5077 5 12.33 5H5.67C5.49231 5 5.32189 5.07059 5.19624 5.19624C5.07059 5.32189 5 5.49231 5 5.67V12.33C5 12.5077 5.07059 12.6781 5.19624 12.8038C5.32189 12.9294 5.49231 13 5.67 13H9.73V15Z"
                                    fill="#1294F2" />
                            </svg>
                            Создать копию
                        </button>
                        <button class="fishing-attacks-doings__btn" type="button">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.999 6.00138H15.999V4.33138C15.9756 3.6912 15.6992 3.08644 15.2306 2.64967C14.762 2.2129 14.1393 1.97977 13.499 2.00138H10.499C9.85878 1.97977 9.23609 2.2129 8.76745 2.64967C8.29882 3.08644 8.02248 3.6912 7.99902 4.33138V6.00138H2.99902C2.73381 6.00138 2.47945 6.10674 2.29192 6.29427C2.10438 6.48181 1.99902 6.73616 1.99902 7.00138C1.99902 7.2666 2.10438 7.52095 2.29192 7.70849C2.47945 7.89602 2.73381 8.00138 2.99902 8.00138H3.99902V19.0014C3.99902 19.797 4.31509 20.5601 4.8777 21.1227C5.44031 21.6853 6.20337 22.0014 6.99902 22.0014H16.999C17.7947 22.0014 18.5577 21.6853 19.1203 21.1227C19.683 20.5601 19.999 19.797 19.999 19.0014V8.00138H20.999C21.2642 8.00138 21.5186 7.89602 21.7061 7.70849C21.8937 7.52095 21.999 7.2666 21.999 7.00138C21.999 6.73616 21.8937 6.48181 21.7061 6.29427C21.5186 6.10674 21.2642 6.00138 20.999 6.00138ZM9.99902 4.33138C9.99902 4.17138 10.209 4.00138 10.499 4.00138H13.499C13.789 4.00138 13.999 4.17138 13.999 4.33138V6.00138H9.99902V4.33138ZM17.999 19.0014C17.999 19.2666 17.8937 19.521 17.7061 19.7085C17.5186 19.896 17.2642 20.0014 16.999 20.0014H6.99902C6.73381 20.0014 6.47945 19.896 6.29192 19.7085C6.10438 19.521 5.99902 19.2666 5.99902 19.0014V8.00138H17.999V19.0014Z"
                                    fill="#EC4848" />
                                <path
                                    d="M8.99902 17C9.26424 17 9.51859 16.8946 9.70613 16.7071C9.89367 16.5196 9.99902 16.2652 9.99902 16V12C9.99902 11.7348 9.89367 11.4804 9.70613 11.2929C9.51859 11.1054 9.26424 11 8.99902 11C8.73381 11 8.47945 11.1054 8.29192 11.2929C8.10438 11.4804 7.99902 11.7348 7.99902 12V16C7.99902 16.2652 8.10438 16.5196 8.29192 16.7071C8.47945 16.8946 8.73381 17 8.99902 17Z"
                                    fill="#EC4848" />
                                <path
                                    d="M14.999 17C15.2642 17 15.5186 16.8946 15.7061 16.7071C15.8937 16.5196 15.999 16.2652 15.999 16V12C15.999 11.7348 15.8937 11.4804 15.7061 11.2929C15.5186 11.1054 15.2642 11 14.999 11C14.7338 11 14.4795 11.1054 14.2919 11.2929C14.1044 11.4804 13.999 11.7348 13.999 12V16C13.999 16.2652 14.1044 16.5196 14.2919 16.7071C14.4795 16.8946 14.7338 17 14.999 17Z"
                                    fill="#EC4848" />
                            </svg>
                            Удалить
                        </button>
                    </div>
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
        var mixer = mixitup('.fishing-attacks__inner', {
            load: {
                filter: '.item-first'
            },
            animation: {
                enable: false
            },
        });
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
        addClassToPlusBtn() {
            document.querySelector('.fishing-attacks__add').classList.add('fishing-attacks__add--active')
        },
        removeClassToPlusBtn() {
            document.querySelector('.fishing-attacks__add').classList.remove('fishing-attacks__add--active')
        }
    }

}
</script>


<style lang="scss">
@import '../../assets/scss/vars';

.main-fishing-attacks {
    padding: 20px 55px 35px 55px;
}

.fishing-attacks {
    &__buttons {
        height: 80px;
        margin-bottom: 25px;
        display: flex;
        align-items: center;
        gap: 20px;
        border-bottom: 0.5px solid #96A5B8;
        padding-bottom: 25px;

        .mixitup-control-active {
            color: #000;

            &::before {
                background: #1294F2;
            }
        }
    }

    &__buttons-btn {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #1B2559;
        position: relative;

        &::before {
            content: '';
            position: absolute;
            bottom: -10px;
            width: 35px;
            left: 50%;
            height: 6px;
            transform: translateX(-50%);
            background: transparent;
            transition: background 0.3s;
            border-radius: 20px;
        }
    }

    &__add {
        display: none;
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
        gap: 5px;
        margin-left: auto;

        svg {
            width: 16px;
            height: 16px;

            path {
                fill: #fff;
            }
        }

        svg path {
            transition: fill 0.3s;
            fill: #1294F2;
        }

        transition: background 0.3s, border 0.3s, color 0.3s;
        border: 1px solid transparent;
        color: #1294F2;
        background: #fff;
        border: 1px solid #1294F2;
        transition: border 0.3s, background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
            svg path {
                fill: #fff;
            }
        }
    }

    &__add--active {
        display: flex;
    }

    &__inner {}
}

.fishing-attacks-swiper {
    max-width: 1450px;
    position: relative;
    width: 100%;

    &:nth-child(1) {
        .fishing-attacks-swiper-slide__row-link {
            transform: rotate(180deg);
            transition: transform 0.3s;
            &:hover {
                transform: rotate(180deg) translateX(-5px);
            }
            svg {
                path {
                    fill: #96A5B8;
                }
            }
        }
    }

    &:nth-child(2) {
        .fishing-attacks-swiper-slide-row {
            align-items: flex-start;
            gap: unset;

            &:nth-child(1) {
                padding-top: 0;
                padding-right: 145px;
                margin-bottom: 0;
            }

            .fishing-attacks-swiper-slide-row__text:nth-child(1) {
                justify-content: flex-start;
                margin-right: 50px;
                text-align: left;
            }

            border-bottom: 0.5px solid #96A5B8;
        }

        .fishing-attacks-swiper-slide__row-btn {
            margin-right: 25px;
        }

        .fishing-attacks-swiper-slide-row__text {
            margin-right: 50px;

            &:nth-child(1) {
                width: 275px !important;
            }

            &:nth-child(2) {
                width: 350px;
            }

            &:nth-child(3) {
                width: 170px;
            }

            &:nth-child(4) {
                width: 170px;
            }

            &:nth-child(5) {
                margin-right: 10px;
                width: 170px;
            }
        }

        .fishing-attacks-swiper-slide__row-link {
            margin-right: 25px;

            &:last-child {
                margin-right: 0;
            }
        }
    }

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

.fishing-attacks-swiper-slide {
    padding-bottom: 380px;

    &__inner {}

    &__row-link {}

    &__row-btn {}
}

.fishing-attacks-swiper-slide-row {
    display: flex;
    align-items: center;
    padding: 15px 0;
    border-bottom: 0.5px solid #96A5B8;
    gap: 50px;

    &:nth-child(1) {
        margin-bottom: 10px;
        padding-right: 85px;
        border-bottom: unset;

        .fishing-attacks-swiper-slide-row__text {
            font-weight: 500;

            &:first-child {
                justify-content: flex-start;
                text-align: left;
                margin-right: auto;
                width: 180px;
            }
        }
    }

    &__text {
        font-size: 16px;
        line-height: 24px;
        color: #1B2559;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;

        &:nth-child(2) {
            width: 145px;
        }

        &:nth-child(3) {
            width: 170px;
        }

        &:nth-child(4) {
            width: 170px;
        }

        &:nth-child(5) {
            width: 170px;
        }
    }

    &__box {
        display: flex;
        gap: 10px;
        align-items: center;
        width: 180px;
        margin-right: auto;
    }

    &__box-img {}

    &__box-text {}
}

.fishing-attacks-swiper-slide-count {
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

// new letter 

.fishing-attacks-new-letter {
    padding: 0;
    display: none;
    background: #FFFFFF;
    border: 1px solid #96A5B8;
    border-radius: 12px;
    max-width: 1305px;
    width: 1305px;

    &__top {
        background: #1294F2;
        border-radius: 12px 12px 0px 0px;
        padding: 23px 0 24px 40px;

        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
    }

    &__top-text {}

    &__inner {
        padding: 50px 50px 50px 25px;
        display: flex;
        justify-content: space-between;
    }

    &__content {}

    &__bottom {
        padding: 0 50px 50px 50px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 25px;
    }

    &__bottom-btn {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #1294F2;
        width: 150px;

        background: #FFFFFF;
        border: 1px solid #1294F2;
        border-radius: 6px;

    
        transition: border 0.3s, background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }
}

.fishing-attacks-new-letter-body {
    display: flex;
    flex-direction: column;
    gap: 25px;

    &__row {
        display: flex;
        gap: 75px;
        align-items: center;
    }

    &__row-text {
        width: 140px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1B2559;
    }

    &__row-input {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #96A5B8;
        padding: 12px 12px 12px 16px;

        background: #FFFFFF;
        border: 1px solid #96A5B8;
        border-radius: 4px;
        min-width: 390px;

        &::placeholder {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #96A5B8;
        }
        &:focus {
            &::placeholder {
                opacity: 0;
            }
        }
    }
}

.fishing-attacks-new-letter-content {

    &__inner {
        display: flex;
        gap: 20px;
    }

    &__text {
        margin-top: 40px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        width: 140px;

        color: #1B2559;
    }
}

.fishing-attacks-new-letter-content-box {

    &__top {
        display: flex;
        align-items: center;
        gap: 15px;
        background: #F3F3F3;
        padding: 5px 10px;
    }

    &__top-btn {}

    &__textarea {
        width: 100%;
        padding: 12px 12px 12px 16px;
        background: #FFFFFF;
        border: 1px solid #96A5B8;
        border-radius: 4px;
        min-height: 315px;
        resize: unset;

        &::placeholder {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #96A5B8;
        }
        &:focus {
            &::placeholder {
                opacity: 0;
            }
        }
    }
}

// message 

.fishing-attacks-message {
    display: none;
    max-width: 692px;
    width: 692px;
    padding: unset;
    border-radius: 12px;

    &__top {
        padding: 23px;
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
        background: #FFFFFF;
        padding: 20px 40px 50px 20px;
        border: 1px solid #96A5B8;
        border-radius: 0 0 12px 12px;
    }

    &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        max-width: 455px;
        color: #1B2559;
        margin-bottom: 25px;
    }
}

.fishing-attacks-message-box {
    margin-bottom: 50px;
    background: #FFFFFF;
    border: 1px solid #1294F2;
    border-radius: 8px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__title {
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        text-align: center;
        color: #1B2559;
        max-width: 345px;
    }

    &__row {
        display: flex;
        gap: 20px;
        align-items: center;
        margin-bottom: 20px;
    }

    &__row-img {}

    &__row-text {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #1B2559;
    }

    &__img {
        margin-bottom: 15px;
    }

    &__btn {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        padding: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #1294F2;
        background: #fff;
        border: 1px solid #1294F2;
        transition: border 0.3s, background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
        border-radius: 6px;
        width: 200px;
    }
}

.fishing-attacks-message-buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 25px;

    &__btn {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #1294F2;
        width: 150px;

        background: #FFFFFF;
        border: 1px solid #1294F2;
        border-radius: 6px;

        &:last-child {
      
        }
   
        transition: border 0.3s, background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }
}

.fishing-attacks-doings {
    display: flex;
    display: none;
    flex-direction: column;
    padding: 11px 10px 10px 14px;
    background: #FFFFFF;
    border-radius: 4px;
    max-width: 188px;
    width: 188px;
    justify-content: center;
    align-items: center;
    &__btn {
        width: 100%;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        display: flex;
        gap: 10px;
        align-items: center;
        color: #1294F2;
        padding-bottom: 8px;
        margin-bottom: 8px;
        border-bottom: 0.3px solid #96A5B8;
        &:nth-child(2) {
            border: unset;
            color: #EC4848;
            padding-bottom: 0 !important;
            margin-bottom: 0 !important;
        }
    }
}

//

@media (max-width: 1440px) {
    .fishing-attacks__add {
        @include adaptiv-value("padding", 12, 8, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("gap", 5, 5, 1);
        @include adaptiv-value("width", 140, 130, 1);
        @include adaptiv-value("max-width", 140, 130, 1);
    }
    .fishing-attacks__buttons {
        @include adaptiv-value("margin-bottom", 25, 20, 1);
    }
    .fishing-attacks-swiper .swiper-button-prev {
        @include adaptiv-value("width", 48, 30, 1);
        @include adaptiv-value("height", 48, 30, 1);
        &:before {
            @include adaptiv-value("width", 32, 20, 1);
            @include adaptiv-value("height", 32, 20, 1);
            background-size: cover;
        }
    }
    .fishing-attacks-swiper .swiper-button-next {
        @include adaptiv-value("width", 48, 30, 1);
        @include adaptiv-value("height", 48, 30, 1);
        &:before {
            @include adaptiv-value("width", 32, 20, 1);
            @include adaptiv-value("height", 32, 20, 1);
            background-size: cover;
        }
    }
    .fishing-attacks-swiper .swiper-pagination-bullet {
        background: #FFFFFF;
        @include adaptiv-value("width", 48, 30, 1);
        @include adaptiv-value("height", 48, 30, 1);
    }
    .main-fishing-attacks {
        @include adaptiv-value("padding-top", 30, 30, 1);
        @include adaptiv-value("padding-right", 55, 30, 1);
        @include adaptiv-value("padding-bottom", 35, 30, 1);
        @include adaptiv-value("padding-left", 55, 30, 1);
    }
    .fishing-attacks-swiper {
        @include adaptiv-value("max-width", 1450, 100, 1);
    }
    .fishing-attacks-swiper-slide {
        @include adaptiv-value("padding-bottom", 380, 100, 1);
    }

    .fishing-attacks-swiper-slide-row__text {
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
    }
    .fishing-attacks-swiper .swiper-pagination {
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


    .fishing-attacks-message-box__row {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .fishing-attacks-message-box__title {
        margin-bottom: 20px
    }
    .fishing-attacks-message {
        @include adaptiv-value("width", 692, 350, 1);
    }
    .fishing-attacks-new-letter {
        @include adaptiv-value("width", 1305, 350, 1);
    }
    .fishing-attacks-new-letter__inner {
        flex-direction: column;
        gap: 30px;
    }
    .fishing-attacks-new-letter-content__inner {
        gap: 75px;
    }
}
@media (max-width: 1300px) {
    .big-wrapper {
        max-width: 100%;
    }
    .fishing-attacks-swiper {
        max-width: 100%;
    }
}
@media (max-width: 1200px) {
    .import-history-swiper-slide-row {
        gap: 20px;
    }
}
@media (max-width: 950px) {
    .fishing-attacks-new-letter-body__row {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }
    .fishing-attacks-new-letter-content__inner {
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
    }
    .fishing-attacks-new-letter-body__row-input {
        width: 100%;
        min-width: unset;
    }
    .fishing-attacks-new-letter-content-box {
        width: 100%;
    }
    .fishing-attacks-new-letter__inner {
        padding: 30px;
    }
}
@media (max-width: 850px) {
    .fishing-attacks-swiper-slide-row {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 10px;
    }
    .fishing-attacks-swiper-slide-row:nth-child(1) {
        border-bottom: 0.5px solid #96A5B8;
    }
    .fishing-attacks-swiper-slide-row__text {
        text-align: left !important;
        justify-content: flex-start !important;
    }
    .fishing-attacks-swiper:nth-child(2) {
        .fishing-attacks-swiper-slide-row {
            gap: 10px;
        }
    }
}

@media (max-width: 750px) {
    .fishing-attacks-swiper-slide-count {
        bottom: 50px;
    }
    .fishing-attacks-swiper .swiper-pagination {
        justify-content: flex-start;
        margin-left: unset;
        margin-right: auto;
        padding-left: 58px;
        padding-right: unset;
    }
    .fishing-attacks-swiper .swiper-button-prev {
        left: 0;
        transform: unset;
    }
    .fishing-attacks-swiper .swiper-button-next {
        right: unset;
        @include adaptiv-value("left", 300, 250, 1);
    }
}

@media (max-width: 550px) {
    .fishing-attacks__buttons {
        flex-direction: column;
        align-items: flex-start;
    }
    .fishing-attacks__add {
        margin-left: unset;
        margin-top: 10px;
    }
    .fishing-attacks__buttons-btn::before {
        left: 0;
        transform: unset;
    }
    .fishing-attacks-new-letter-content-box__top {
        flex-wrap: wrap;
    }
    .fishing-attacks__buttons {
        height: unset;
    }
}


</style>