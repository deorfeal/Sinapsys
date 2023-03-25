<template>
    <div class="big-wrapper">
        <Aside :activeLink="1" :sideMenuActive="this.sideMenuActive" :isAdmin="true" />
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Каталог'" @openSideMenu="SideMenuToActive" :isAdmin="true" />
            <main class="main main-author-info">
                <section class="main__author-info author-info">
                    <div class="author-info__top">
                        <a class="author-info__top-link" href="#">
                            <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                    fill="#1B2559" />
                            </svg>
                            <span>
                                Аида Кожабай
                            </span>
                        </a>
                    </div>
                    <div class="author-info__person author-info-person">
                        <img class="author-info-person__img" src="../../../public/images/author-info-person-img.svg"
                            alt="image">
                        <div class="author-info-person__box">
                            <h2 class="author-info-person__box-title">
                                Аида Кожабай
                            </h2>
                            <p class="author-info-person__subtitle">
                                Биография:
                            </p>
                            <p class="author-info-person__text">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages, and more recently with desktop publishing software like Aldus PageMaker including
                                versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div class="author-info__content author-info-content">
                        <div class="author-info-content__top">
                            <p class="author-info-content__top-text">
                                №
                            </p>
                            <p class="author-info-content__top-text">
                                Название
                            </p>
                            <p class="author-info-content__top-text">
                                Направление
                            </p>
                            <p class="author-info-content__top-text">
                                Статус
                            </p>
                            <p class="author-info-content__top-text">
                                Дата обновления
                            </p>
                            <p class="author-info-content__top-text">
                                Доступные языки
                            </p>
                        </div>
                        <div class="author-info-content__inner">
                            <a href="#" class="author-info-content__item author-info-content-item">
                                <p class="author-info-content-item__text">
                                    1
                                </p>
                                <img class="author-info-content-item__img"
                                    src="../../../public/images/autor-info-bottom-img-1.png" alt="image">
                                <div class="author-info-content-item__box">
                                    <p class="author-info-content-item__box-text">
                                        Электронная почта
                                    </p>
                                    <p class="author-info-content-item__box-rait">
                                        <span>
                                            Рейтинг:
                                        </span>
                                        <span>
                                            4.5
                                        </span>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.5236 21.0041C17.3637 21.0048 17.206 20.967 17.0636 20.8941L11.9636 18.2241L6.86363 20.8941C6.69802 20.9812 6.51131 21.0201 6.32471 21.0063C6.13811 20.9926 5.95911 20.9267 5.80806 20.8163C5.65701 20.7059 5.53997 20.5553 5.47024 20.3817C5.40052 20.208 5.3809 20.0183 5.41363 19.8341L6.41363 14.2041L2.29363 10.2041C2.16509 10.0758 2.0739 9.91498 2.02986 9.7388C1.98581 9.56263 1.99057 9.37778 2.04363 9.20411C2.10159 9.02638 2.20821 8.86846 2.35138 8.74827C2.49455 8.62807 2.66855 8.55042 2.85363 8.52411L8.55363 7.69411L11.0636 2.56411C11.1455 2.39504 11.2734 2.25245 11.4325 2.15268C11.5917 2.05292 11.7758 2 11.9636 2C12.1515 2 12.3355 2.05292 12.4947 2.15268C12.6539 2.25245 12.7817 2.39504 12.8636 2.56411L15.4036 7.68411L21.1036 8.51411C21.2887 8.54042 21.4627 8.61807 21.6059 8.73827C21.7491 8.85846 21.8557 9.01638 21.9136 9.19411C21.9667 9.36778 21.9714 9.55263 21.9274 9.7288C21.8834 9.90498 21.7922 10.0658 21.6636 10.1941L17.5436 14.1941L18.5436 19.8241C18.5793 20.0116 18.5606 20.2054 18.4898 20.3826C18.4189 20.5598 18.2988 20.713 18.1436 20.8241C17.9625 20.951 17.7445 21.0143 17.5236 21.0041Z"
                                                    fill="#1294F2" />
                                            </svg>
                                        </span>
                                    </p>
                                </div>
                                <p class="author-info-content-item__subsc">
                                    Кибербезопастность
                                </p>
                                <p class="author-info-content-item__subsc">
                                    Опубликовано
                                </p>
                                <p class="author-info-content-item__subsc">
                                    16.11.2022
                                </p>
                                <p class="author-info-content-item__subsc">
                                    RU
                                </p>
                                <svg class="author-info-content-item__arrow" width="32" height="28" viewBox="0 0 32 28" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                        fill="#96A5B8" />
                                </svg>
                            </a>
                            <a href="#" class="author-info-content__item author-info-content-item">
                                <p class="author-info-content-item__text">
                                    2
                                </p>
                                <img class="author-info-content-item__img"
                                    src="../../../public/images/autor-info-bottom-img-1.png" alt="image">
                                <div class="author-info-content-item__box">
                                    <p class="author-info-content-item__box-text">
                                        Электронная почта
                                    </p>
                                    <p class="author-info-content-item__box-rait">
                                        <span>
                                            Рейтинг:
                                        </span>
                                        <span>
                                            4.5
                                        </span>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.5236 21.0041C17.3637 21.0048 17.206 20.967 17.0636 20.8941L11.9636 18.2241L6.86363 20.8941C6.69802 20.9812 6.51131 21.0201 6.32471 21.0063C6.13811 20.9926 5.95911 20.9267 5.80806 20.8163C5.65701 20.7059 5.53997 20.5553 5.47024 20.3817C5.40052 20.208 5.3809 20.0183 5.41363 19.8341L6.41363 14.2041L2.29363 10.2041C2.16509 10.0758 2.0739 9.91498 2.02986 9.7388C1.98581 9.56263 1.99057 9.37778 2.04363 9.20411C2.10159 9.02638 2.20821 8.86846 2.35138 8.74827C2.49455 8.62807 2.66855 8.55042 2.85363 8.52411L8.55363 7.69411L11.0636 2.56411C11.1455 2.39504 11.2734 2.25245 11.4325 2.15268C11.5917 2.05292 11.7758 2 11.9636 2C12.1515 2 12.3355 2.05292 12.4947 2.15268C12.6539 2.25245 12.7817 2.39504 12.8636 2.56411L15.4036 7.68411L21.1036 8.51411C21.2887 8.54042 21.4627 8.61807 21.6059 8.73827C21.7491 8.85846 21.8557 9.01638 21.9136 9.19411C21.9667 9.36778 21.9714 9.55263 21.9274 9.7288C21.8834 9.90498 21.7922 10.0658 21.6636 10.1941L17.5436 14.1941L18.5436 19.8241C18.5793 20.0116 18.5606 20.2054 18.4898 20.3826C18.4189 20.5598 18.2988 20.713 18.1436 20.8241C17.9625 20.951 17.7445 21.0143 17.5236 21.0041Z"
                                                    fill="#1294F2" />
                                            </svg>
                                        </span>
                                    </p>
                                </div>
                                <p class="author-info-content-item__subsc">
                                    Кибербезопастность
                                </p>
                                <p class="author-info-content-item__subsc">
                                    Опубликовано
                                </p>
                                <p class="author-info-content-item__subsc">
                                    16.11.2022
                                </p>
                                <p class="author-info-content-item__subsc">
                                    RU
                                </p>
                                <svg class="author-info-content-item__arrow" width="32" height="28" viewBox="0 0 32 28" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                        fill="#96A5B8" />
                                </svg>
                            </a>
                            <a href="#" class="author-info-content__item author-info-content-item">
                                <p class="author-info-content-item__text">
                                    3
                                </p>
                                <img class="author-info-content-item__img"
                                    src="../../../public/images/autor-info-bottom-img-1.png" alt="image">
                                <div class="author-info-content-item__box">
                                    <p class="author-info-content-item__box-text">
                                        Электронная почта
                                    </p>
                                    <p class="author-info-content-item__box-rait">
                                        <span>
                                            Рейтинг:
                                        </span>
                                        <span>
                                            4.5
                                        </span>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.5236 21.0041C17.3637 21.0048 17.206 20.967 17.0636 20.8941L11.9636 18.2241L6.86363 20.8941C6.69802 20.9812 6.51131 21.0201 6.32471 21.0063C6.13811 20.9926 5.95911 20.9267 5.80806 20.8163C5.65701 20.7059 5.53997 20.5553 5.47024 20.3817C5.40052 20.208 5.3809 20.0183 5.41363 19.8341L6.41363 14.2041L2.29363 10.2041C2.16509 10.0758 2.0739 9.91498 2.02986 9.7388C1.98581 9.56263 1.99057 9.37778 2.04363 9.20411C2.10159 9.02638 2.20821 8.86846 2.35138 8.74827C2.49455 8.62807 2.66855 8.55042 2.85363 8.52411L8.55363 7.69411L11.0636 2.56411C11.1455 2.39504 11.2734 2.25245 11.4325 2.15268C11.5917 2.05292 11.7758 2 11.9636 2C12.1515 2 12.3355 2.05292 12.4947 2.15268C12.6539 2.25245 12.7817 2.39504 12.8636 2.56411L15.4036 7.68411L21.1036 8.51411C21.2887 8.54042 21.4627 8.61807 21.6059 8.73827C21.7491 8.85846 21.8557 9.01638 21.9136 9.19411C21.9667 9.36778 21.9714 9.55263 21.9274 9.7288C21.8834 9.90498 21.7922 10.0658 21.6636 10.1941L17.5436 14.1941L18.5436 19.8241C18.5793 20.0116 18.5606 20.2054 18.4898 20.3826C18.4189 20.5598 18.2988 20.713 18.1436 20.8241C17.9625 20.951 17.7445 21.0143 17.5236 21.0041Z"
                                                    fill="#1294F2" />
                                            </svg>
                                        </span>
                                    </p>
                                </div>
                                <p class="author-info-content-item__subsc">
                                    Кибербезопастность
                                </p>
                                <p class="author-info-content-item__subsc">
                                    Опубликовано
                                </p>
                                <p class="author-info-content-item__subsc">
                                    16.11.2022
                                </p>
                                <p class="author-info-content-item__subsc">
                                    RU
                                </p>
                                <svg class="author-info-content-item__arrow" width="32" height="28" viewBox="0 0 32 28" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                        fill="#96A5B8" />
                                </svg>
                            </a>
                            <a href="#" class="author-info-content__item author-info-content-item">
                                <p class="author-info-content-item__text">
                                    4
                                </p>
                                <img class="author-info-content-item__img"
                                    src="../../../public/images/autor-info-bottom-img-1.png" alt="image">
                                <div class="author-info-content-item__box">
                                    <p class="author-info-content-item__box-text">
                                        Электронная почта
                                    </p>
                                    <p class="author-info-content-item__box-rait">
                                        <span>
                                            Рейтинг:
                                        </span>
                                        <span>
                                            4.5
                                        </span>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.5236 21.0041C17.3637 21.0048 17.206 20.967 17.0636 20.8941L11.9636 18.2241L6.86363 20.8941C6.69802 20.9812 6.51131 21.0201 6.32471 21.0063C6.13811 20.9926 5.95911 20.9267 5.80806 20.8163C5.65701 20.7059 5.53997 20.5553 5.47024 20.3817C5.40052 20.208 5.3809 20.0183 5.41363 19.8341L6.41363 14.2041L2.29363 10.2041C2.16509 10.0758 2.0739 9.91498 2.02986 9.7388C1.98581 9.56263 1.99057 9.37778 2.04363 9.20411C2.10159 9.02638 2.20821 8.86846 2.35138 8.74827C2.49455 8.62807 2.66855 8.55042 2.85363 8.52411L8.55363 7.69411L11.0636 2.56411C11.1455 2.39504 11.2734 2.25245 11.4325 2.15268C11.5917 2.05292 11.7758 2 11.9636 2C12.1515 2 12.3355 2.05292 12.4947 2.15268C12.6539 2.25245 12.7817 2.39504 12.8636 2.56411L15.4036 7.68411L21.1036 8.51411C21.2887 8.54042 21.4627 8.61807 21.6059 8.73827C21.7491 8.85846 21.8557 9.01638 21.9136 9.19411C21.9667 9.36778 21.9714 9.55263 21.9274 9.7288C21.8834 9.90498 21.7922 10.0658 21.6636 10.1941L17.5436 14.1941L18.5436 19.8241C18.5793 20.0116 18.5606 20.2054 18.4898 20.3826C18.4189 20.5598 18.2988 20.713 18.1436 20.8241C17.9625 20.951 17.7445 21.0143 17.5236 21.0041Z"
                                                    fill="#1294F2" />
                                            </svg>
                                        </span>
                                    </p>
                                </div>
                                <p class="author-info-content-item__subsc">
                                    Кибербезопастность
                                </p>
                                <p class="author-info-content-item__subsc">
                                    Опубликовано
                                </p>
                                <p class="author-info-content-item__subsc">
                                    16.11.2022
                                </p>
                                <p class="author-info-content-item__subsc">
                                    RU
                                </p>
                                <svg class="author-info-content-item__arrow" width="32" height="28" viewBox="0 0 32 28" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                        fill="#96A5B8" />
                                </svg>
                            </a>
                            <a href="#" class="author-info-content__item author-info-content-item">
                                <p class="author-info-content-item__text">
                                    5
                                </p>
                                <img class="author-info-content-item__img"
                                    src="../../../public/images/autor-info-bottom-img-1.png" alt="image">
                                <div class="author-info-content-item__box">
                                    <p class="author-info-content-item__box-text">
                                        Электронная почта
                                    </p>
                                    <p class="author-info-content-item__box-rait">
                                        <span>
                                            Рейтинг:
                                        </span>
                                        <span>
                                            4.5
                                        </span>
                                        <span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.5236 21.0041C17.3637 21.0048 17.206 20.967 17.0636 20.8941L11.9636 18.2241L6.86363 20.8941C6.69802 20.9812 6.51131 21.0201 6.32471 21.0063C6.13811 20.9926 5.95911 20.9267 5.80806 20.8163C5.65701 20.7059 5.53997 20.5553 5.47024 20.3817C5.40052 20.208 5.3809 20.0183 5.41363 19.8341L6.41363 14.2041L2.29363 10.2041C2.16509 10.0758 2.0739 9.91498 2.02986 9.7388C1.98581 9.56263 1.99057 9.37778 2.04363 9.20411C2.10159 9.02638 2.20821 8.86846 2.35138 8.74827C2.49455 8.62807 2.66855 8.55042 2.85363 8.52411L8.55363 7.69411L11.0636 2.56411C11.1455 2.39504 11.2734 2.25245 11.4325 2.15268C11.5917 2.05292 11.7758 2 11.9636 2C12.1515 2 12.3355 2.05292 12.4947 2.15268C12.6539 2.25245 12.7817 2.39504 12.8636 2.56411L15.4036 7.68411L21.1036 8.51411C21.2887 8.54042 21.4627 8.61807 21.6059 8.73827C21.7491 8.85846 21.8557 9.01638 21.9136 9.19411C21.9667 9.36778 21.9714 9.55263 21.9274 9.7288C21.8834 9.90498 21.7922 10.0658 21.6636 10.1941L17.5436 14.1941L18.5436 19.8241C18.5793 20.0116 18.5606 20.2054 18.4898 20.3826C18.4189 20.5598 18.2988 20.713 18.1436 20.8241C17.9625 20.951 17.7445 21.0143 17.5236 21.0041Z"
                                                    fill="#1294F2" />
                                            </svg>
                                        </span>
                                    </p>
                                </div>
                                <p class="author-info-content-item__subsc">
                                    Кибербезопастность
                                </p>
                                <p class="author-info-content-item__subsc">
                                    Опубликовано
                                </p>
                                <p class="author-info-content-item__subsc">
                                    16.11.2022
                                </p>
                                <p class="author-info-content-item__subsc">
                                    RU
                                </p>
                                <svg class="author-info-content-item__arrow" width="32" height="28" viewBox="0 0 32 28" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                                        fill="#96A5B8" />
                                </svg>
                            </a>
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

.main-author-info {
    padding: 30px 55px 20px 55px;
}

// 

.author-info {

    &__top {}

    &__top-link {
        font-weight: 500;
        font-size: 24px;
        line-height: 24px;
        color: #1B2559;
        gap: 10px;
        display: flex;
        align-items: center;
        margin-bottom: 25px;
    }
}

.author-info-person {
    display: flex;
    gap: 45px;
    align-items: center;
    padding: 15px 65px 30px 35px;
    background: #FFFFFF;
    border-radius: 16px;
    margin-bottom: 30px;

    &__img {}

    &__box {}

    &__box-title {
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 25px;
        color: #1B2559;
    }

    &__subtitle {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 10px;
        color: #1B2559;
    }

    &__text {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #60678B;
    }
}

.author-info-content {

    &__top {
        display: flex;
        gap: 22px;
        padding-bottom: 15px;
        border-bottom: 0.5px solid #CECECE;
        width: 100%;
        padding-right: 70px;
    }

    &__top-text {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #1B2559;
        text-align: center;

        &:nth-child(2) {
            width: 110px;
            max-width: 110px;
            text-align: left;
        }

        &:nth-child(3) {
            margin-left: auto;
            width: 180px;
            max-width: 180px;
        }

        &:nth-child(4) {
            width: 150px;
            max-width: 150px;
        }

        &:nth-child(5) {
            width: 185px;
            max-width: 185px;
        }

        &:nth-child(6) {
            width: 185px;
            max-width: 185px;
        }
    }

    &__inner {}
}

.author-info-content-item {
    &:hover {
        .author-info-content-item__arrow {
            transform: rotate(180deg) translateX(-30%);
        }
    }
    display: flex;
    padding: 12px 0;
    border-bottom: 0.5px solid #CECECE;

    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #1B2559;
    align-items: center;
    width: 100%;
    padding-right: 30px;
    &__text {
        &:first-child {
            width: 30px;
            max-width: 30px;
            font-weight: 500;
            font-size: 20px;
        }
    }

    &__img {
        margin-left: 15px;
        margin-right: 25px;
    }

    &__box {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    &__box-text {}

    &__box-rait {
        display: flex;
        align-items: center;
        gap: 5px;

        span:last-child {
            width: 24px;
            height: 24px;
        }
    }

    &__subsc {     
        width: 185px;
        max-width: 185px;
        text-align: center;
        margin-right: 10px;
        &:nth-child(4) {
            margin-left: auto;
        }
    }
    &__arrow {
        transition: transform 0.3s;
        transform: rotate(180deg);
    }
}
</style>