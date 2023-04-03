<template>
    <div class="biggest-wrapper">
    <div class="big-wrapper">
        <Aside :activeLink="2" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'История импорта'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
            <main class="main main-import-hisoty">
                <section class="main__import-histoty import-history">
                    <swiper class="import-history__swiper import-history-swiper swiper"  :allowTouchMove="false" :modules="modules"
                        :slides-per-view="1" :speed="1" :space-between="100" navigation :pagination="{ clickable: true, }"
                        :loop="true" @swiper="onSwiper" @slideChange="onSlideChange">
                        <swiper-slide class="import-history-swiper__slide import-history-swiper-slide">
                            <div class="import-history-swiper-slide__top">
                                <a class="import-history-swiper-slide__top-link" href="#">
                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                            fill="#1B2559" />
                                    </svg>
                                    <span>
                                        История импорта
                                    </span>
                                </a>
                                <a class="import-history-swiper-slide__top-btn" href="#">
                                    Скачать
                                </a>
                            </div>
                            <div class="import-history-swiper-slide__inner">
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        Дата
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Автор
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Имя файла
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Режим импортирования
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Статус
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Всего пользователей
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                            </div>
                            <div class="import-history__count import-history-count">
                                <p class="import-history-count__text">
                                    Запись на странице
                                </p>
                                <PageEntrySelect :options="['1', '2', ' 3', '4']"
                                :default="'4'" class="select"></PageEntrySelect>
                            </div>

                        </swiper-slide>
                        <swiper-slide class="import-history-swiper__slide import-history-swiper-slide">
                            <div class="import-history-swiper-slide__top">
                                <a class="import-history-swiper-slide__top-link" href="#">
                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                            fill="#1B2559" />
                                    </svg>
                                    <span>
                                        История импорта
                                    </span>
                                </a>
                                <a class="import-history-swiper-slide__top-btn" href="#">
                                    Скачать
                                </a>
                            </div>
                            <div class="import-history-swiper-slide__inner">
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        Дата
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Автор
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Имя файла
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Режим импортирования
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Статус
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Всего пользователей
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        46
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        365
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        35
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                            </div>
                            <div class="import-history__count import-history-count">
                                <p class="import-history-count__text">
                                    Запись на странице
                                </p>
                                <PageEntrySelect :options="['1', '2', ' 3', '4']"
                                :default="'4'" class="select"></PageEntrySelect>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="import-history-swiper__slide import-history-swiper-slide">
                            <div class="import-history-swiper-slide__top">
                                <a class="import-history-swiper-slide__top-link" href="#">
                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                            fill="#1B2559" />
                                    </svg>
                                    <span>
                                        История импорта
                                    </span>
                                </a>
                                <a class="import-history-swiper-slide__top-btn" href="#">
                                    Скачать
                                </a>
                            </div>
                            <div class="import-history-swiper-slide__inner">
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        Дата
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Автор
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Имя файла
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Режим импортирования
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Статус
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Всего пользователей
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        225
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        246
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        24
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        25
                                    </p>
                                </div>
                            </div>
                            <div class="import-history__count import-history-count">
                                <p class="import-history-count__text">
                                    Запись на странице
                                </p>
                                <PageEntrySelect :options="['1', '2', ' 3', '4']"
                                :default="'4'" class="select"></PageEntrySelect>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="import-history-swiper__slide import-history-swiper-slide">
                            <div class="import-history-swiper-slide__top">
                                <a class="import-history-swiper-slide__top-link" href="#">
                                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                            fill="#1B2559" />
                                    </svg>
                                    <span>
                                        История импорта
                                    </span>
                                </a>
                                <a class="import-history-swiper-slide__top-btn" href="#">
                                    Скачать
                                </a>
                            </div>
                            <div class="import-history-swiper-slide__inner">
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        Дата
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Автор
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Имя файла
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Режим импортирования
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Статус
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Всего пользователей
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        236
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        236
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        22
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                                <div class="import-history-swiper-slide__row import-history-swiper-slide-row">
                                    <p class="import-history-swiper-slide-row__text">
                                        16.11.2022
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Аида К
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        blabla
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        XLS
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        Завершен
                                    </p>
                                    <p class="import-history-swiper-slide-row__text">
                                        20
                                    </p>
                                </div>
                            </div>
                            <div class="import-history__count import-history-count">
                                <p class="import-history-count__text">
                                    Запись на странице
                                </p>
                                <PageEntrySelect :options="['1', '2', ' 3', '4']"
                                :default="'4'" class="select"></PageEntrySelect>
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
        Swiper,
        SwiperSlide,
        PageEntrySelect
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
        },
    }

}
</script>


<style lang="scss">
@import '../../assets/scss/vars';

.main-import-hisoty {
    padding: 30px 55px 35px 55px;
}

// // 

.main {
    &__import-histoty {}
}

.import-history {}

.import-history-swiper {
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

.import-history-swiper-slide {
    padding-bottom: 450px;
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
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        padding: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 6px;
        max-width: 115px;

        transition: background 0.3s, border 0.3s, color 0.3s;
        color: #1294F2;
        background: #fff;
        border: 1px solid #1294F2;
        transition: border 0.3s, background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }

    &__inner {}
}

.import-history-swiper-slide-row {
    padding: 15px 0;
    display: flex;
    width: 100%;
    gap: 85px;
    border-bottom: 0.5px solid #96A5B8;

    &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        width: 155px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #1B2559;

        &:nth-child(1) {
            width: 110px;
        }

        &:nth-child(4) {
            width: 225px;
        }

        &:nth-child(5) {
            width: 155px;
        }

        &:nth-child(6) {
            width: 215px;
        }
    }
}

.import-history-count {
    position: absolute;
    bottom: 0;
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 1000;
    &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1B2559;
    }
}
//@media (max-width: 1917px) {
   // .import-history-swiper-slide-row {
   //     flex-wrap: wrap;
   //     flex-direction: column;
    //    gap: 10px;
   // }
  //  .import-history-swiper-slide-row__text {
   //     align-items: flex-start !important;
   //   text-align: left !important;
//     justify-content: flex-start;
  //  }
//}

@media (max-width: 1440px) {
    .import-history-swiper-slide__top-link {
        @include adaptiv-value("font-size", 24, 16, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
    }
    .import-history-swiper-slide__top-btn {
        @include adaptiv-value("padding", 12, 8, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
        @include adaptiv-value("gap", 10, 5, 1);
        @include adaptiv-value("width", 135, 130, 1);
        @include adaptiv-value("max-width", 135, 130, 1);
    }
    .import-history-swiper-slide__top {
        @include adaptiv-value("margin-bottom", 30, 20, 1);
    }
    .import-history-swiper .swiper-button-prev {
        @include adaptiv-value("width", 48, 30, 1);
        @include adaptiv-value("height", 48, 30, 1);
        &:before {
            @include adaptiv-value("width", 32, 20, 1);
            @include adaptiv-value("height", 32, 20, 1);
            background-size: cover;
        }
    }
    .import-history-swiper .swiper-button-next {
        @include adaptiv-value("width", 48, 30, 1);
        @include adaptiv-value("height", 48, 30, 1);
        &:before {
            @include adaptiv-value("width", 32, 20, 1);
            @include adaptiv-value("height", 32, 20, 1);
            background-size: cover;
        }
    }
    .import-history-swiper .swiper-pagination-bullet {
        background: #FFFFFF;
        @include adaptiv-value("width", 48, 30, 1);
        @include adaptiv-value("height", 48, 30, 1);
    }
    .main-import-hisoty {
        @include adaptiv-value("padding-top", 30, 30, 1);
        @include adaptiv-value("padding-right", 55, 30, 1);
        @include adaptiv-value("padding-bottom", 35, 30, 1);
        @include adaptiv-value("padding-left", 55, 30, 1);
    }
    .import-history-swiper {
        @include adaptiv-value("max-width", 1450, 100, 1);
    }
    .import-history-swiper-slide {
        @include adaptiv-value("padding-bottom", 400, 100, 1);
    }

    .import-history-swiper-slide-row__text {
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 24, 18, 1);
    }
    .import-history-swiper .swiper-pagination {
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
@media (max-width: 1300px) {
    .big-wrapper {
        max-width: 100%;
    }
    .import-history-swiper {
        max-width: 100%;
    }
}
@media (max-width: 1200px) {
    .import-history-swiper-slide-row {
        gap: 20px;
    }
}
@media (max-width: 850px) {
    .import-history-swiper-slide-row {
        flex-direction: column;
    }
    .import-history-swiper-slide-row__text {
        text-align: left !important;
        justify-content: flex-start !important;
    }
}

@media (max-width: 750px) {
    .import-history-count {
        bottom: 50px;
    }
    .import-history-swiper .swiper-pagination {
        justify-content: flex-start;
        margin-left: unset;
        margin-right: auto;
        padding-left: 58px;
        padding-right: unset;
    }
    .import-history-swiper .swiper-button-prev {
        left: 0;
        transform: unset;
    }
    .import-history-swiper .swiper-button-next {
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
}
</style>