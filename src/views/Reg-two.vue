<template>
    <div class="entrance reg-two big-container">
        <Aside />
        <div class="entrance__wrapper">
            <form class="entrance__form entrance-form" action="#">
                <div class="entrance-form__inner">
                    <h1 class="entrance-form__title">
                        Регистрация
                    </h1>
                    <p class="entrance-form__text">
                        Заполните свои данные, чтобы получить доступ к вашему пространству
                    </p>
                    <div class="entrance-form__row">
                        <a class="entrance-form__row-link" href="#">
                            kz
                        </a>
                        <a class="entrance-form__row-link entrance-form__row-link--active" href="#">
                            ru
                        </a>
                        <a class="entrance-form__row-link" href="#">
                            en
                        </a>
                    </div>
                    <div class="entrance-form__box">
                        <p class="entrance-form__box-text">
                            Название компании
                        </p>
                        <input class="entrance-form__box-input" type="text" placeholder="SINAPSYS">
                        <p class="entrance-form__box-subtext">
                            Обязательное поле.
                        </p>
                    </div>
                    <div class="entrance-form__box">
                        <p class="entrance-form__box-text">
                            Бин
                        </p>
                        <input class="entrance-form__box-input" type="text" placeholder="1234511452565">
                        <p class="entrance-form__box-subtext">
                            Обязательное поле.
                        </p>
                    </div>

                    <div class="entrance-form__select entrance-form-select entrance-form-select--first" id="1">
                        <p class="entrance-form-select__text">
                            Отрасль
                        </p>
                        <div class="entrance-form-select__top" @click="showFirstSearchPanel">
                            <p class="entrance-form-select__top-text">
                                {{ firstActiveTitle }}
                            </p>
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.2998 21.3334C15.9883 21.334 15.6864 21.2255 15.4465 21.0268L7.44651 14.3601C7.17422 14.1338 7.00299 13.8085 6.97049 13.456C6.93798 13.1034 7.04686 12.7524 7.27318 12.4801C7.4995 12.2078 7.82471 12.0366 8.17728 12.0041C8.52985 11.9715 8.88089 12.0804 9.15318 12.3067L16.2998 18.2801L23.4465 12.5201C23.5829 12.4093 23.7398 12.3266 23.9083 12.2767C24.0767 12.2268 24.2534 12.2107 24.4281 12.2293C24.6028 12.2478 24.7721 12.3008 24.9263 12.385C25.0805 12.4692 25.2165 12.5831 25.3265 12.7201C25.4486 12.8572 25.5411 13.018 25.5982 13.1925C25.6552 13.367 25.6756 13.5514 25.6581 13.7342C25.6406 13.9169 25.5855 14.0941 25.4963 14.2546C25.4071 14.415 25.2858 14.5554 25.1398 14.6667L17.1398 21.1067C16.8931 21.2741 16.5973 21.3539 16.2998 21.3334Z"
                                    fill="#96A5B8" />
                            </svg>
                        </div>
                        <p class="entrance-form__box-subtext">
                            Обязательное поле.
                        </p>
                        <div class="entrance-form-select__box entrance-form-select-box">
                            <div class="entrance-form-select-box__top">
                                <input @input="findResult" v-model="searchTerm" class="entrance-form-select-box__top-input"
                                    type="text" placeholder="Поиск">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.2555 14.5525L15.6081 14.1979L15.6077 14.1976L15.2555 14.5525ZM11.1399 10.468L10.7942 10.1067L10.4236 10.4615L10.7877 10.8228L11.1399 10.468ZM10.7306 10.8243L11.0828 10.4694L10.768 10.157L10.4203 10.4322L10.7306 10.8243ZM14.8561 14.9189L15.2093 14.565L15.2083 14.564L14.8561 14.9189ZM15.2478 14.9263L15.5853 15.2951L15.586 15.2945L15.2478 14.9263ZM15.6077 14.1976L11.4921 10.1131L10.7877 10.8228L14.9033 14.9074L15.6077 14.1976ZM11.4856 10.8292C12.6267 9.7371 13.34 8.22435 13.34 6.55073H12.34C12.34 7.93213 11.7526 9.18946 10.7942 10.1067L11.4856 10.8292ZM13.34 6.55073C13.34 3.19198 10.4847 0.5 7.02352 0.5V1.5C9.97705 1.5 12.34 3.78782 12.34 6.55073H13.34ZM7.02352 0.5C3.56229 0.5 0.707031 3.19198 0.707031 6.55073H1.70703C1.70703 3.78782 4.06999 1.5 7.02352 1.5V0.5ZM0.707031 6.55073C0.707031 9.90948 3.56229 12.6015 7.02352 12.6015V11.6015C4.06999 11.6015 1.70703 9.31364 1.70703 6.55073H0.707031ZM7.02352 12.6015C8.54636 12.6015 9.94729 12.0817 11.0408 11.2164L10.4203 10.4322C9.49967 11.1607 8.31641 11.6015 7.02352 11.6015V12.6015ZM10.3783 11.1791L14.5039 15.2737L15.2083 14.564L11.0828 10.4694L10.3783 11.1791ZM14.5029 15.2727C14.6581 15.4276 14.861 15.5 15.0558 15.5V14.5C15.105 14.5 15.1627 14.5184 15.2093 14.565L14.5029 15.2727ZM15.0558 15.5C15.2427 15.5 15.4341 15.4335 15.5853 15.2951L14.9102 14.5574C14.9539 14.5174 15.0074 14.5 15.0558 14.5V15.5ZM15.586 15.2945C15.9057 15.0009 15.9164 14.5046 15.6081 14.1979L14.903 14.9071C14.8062 14.8109 14.8103 14.6491 14.9096 14.558L15.586 15.2945ZM7.02426 11.0715C4.37623 11.0715 2.26172 9.0208 2.26172 6.54943H1.26172C1.26172 9.61664 3.86853 12.0715 7.02426 12.0715V11.0715ZM2.26172 6.54943C2.26172 4.07807 4.37623 2.02734 7.02426 2.02734V1.02734C3.86853 1.02734 1.26172 3.48223 1.26172 6.54943H2.26172ZM7.02426 2.02734C9.67228 2.02734 11.7868 4.07807 11.7868 6.54943H12.7868C12.7868 3.48223 10.18 1.02734 7.02426 1.02734V2.02734ZM11.7868 6.54943C11.7868 9.02078 9.67202 11.0715 7.02426 11.0715V12.0715C10.1797 12.0715 12.7868 9.61666 12.7868 6.54943H11.7868Z"
                                        fill="#96A5B8" />
                                </svg>
                            </div>
                            <ul ref="searchlist" class="entrance-form-select-box__list">
                                <li class="entrance-form-select-box__list-item" v-for="word in this.filteredWords"
                                    :key="word.id">
                                    <SearchItem :word="word" @sendInfoToParent="getInfoFromChild" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="entrance-form__select entrance-form-select entrance-form-select--second" id="2">
                        <p class="entrance-form-select__text">
                            Страна
                        </p>
                        <div class="entrance-form-select__top" @click="showSecondSearchPanel">
                            <p class="entrance-form-select__top-text">
                                {{ SecondActiveTitle }}
                            </p>
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.2998 21.3334C15.9883 21.334 15.6864 21.2255 15.4465 21.0268L7.44651 14.3601C7.17422 14.1338 7.00299 13.8085 6.97049 13.456C6.93798 13.1034 7.04686 12.7524 7.27318 12.4801C7.4995 12.2078 7.82471 12.0366 8.17728 12.0041C8.52985 11.9715 8.88089 12.0804 9.15318 12.3067L16.2998 18.2801L23.4465 12.5201C23.5829 12.4093 23.7398 12.3266 23.9083 12.2767C24.0767 12.2268 24.2534 12.2107 24.4281 12.2293C24.6028 12.2478 24.7721 12.3008 24.9263 12.385C25.0805 12.4692 25.2165 12.5831 25.3265 12.7201C25.4486 12.8572 25.5411 13.018 25.5982 13.1925C25.6552 13.367 25.6756 13.5514 25.6581 13.7342C25.6406 13.9169 25.5855 14.0941 25.4963 14.2546C25.4071 14.415 25.2858 14.5554 25.1398 14.6667L17.1398 21.1067C16.8931 21.2741 16.5973 21.3539 16.2998 21.3334Z"
                                    fill="#96A5B8" />
                            </svg>
                        </div>
                        <p class="entrance-form__box-subtext">
                            Обязательное поле.
                        </p>
                        <div class="entrance-form-select__box entrance-form-select-box">
                            <div class="entrance-form-select-box__top">
                                <input @input="findResult" v-model="searchTerm" class="entrance-form-select-box__top-input"
                                    type="text" placeholder="Поиск">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.2555 14.5525L15.6081 14.1979L15.6077 14.1976L15.2555 14.5525ZM11.1399 10.468L10.7942 10.1067L10.4236 10.4615L10.7877 10.8228L11.1399 10.468ZM10.7306 10.8243L11.0828 10.4694L10.768 10.157L10.4203 10.4322L10.7306 10.8243ZM14.8561 14.9189L15.2093 14.565L15.2083 14.564L14.8561 14.9189ZM15.2478 14.9263L15.5853 15.2951L15.586 15.2945L15.2478 14.9263ZM15.6077 14.1976L11.4921 10.1131L10.7877 10.8228L14.9033 14.9074L15.6077 14.1976ZM11.4856 10.8292C12.6267 9.7371 13.34 8.22435 13.34 6.55073H12.34C12.34 7.93213 11.7526 9.18946 10.7942 10.1067L11.4856 10.8292ZM13.34 6.55073C13.34 3.19198 10.4847 0.5 7.02352 0.5V1.5C9.97705 1.5 12.34 3.78782 12.34 6.55073H13.34ZM7.02352 0.5C3.56229 0.5 0.707031 3.19198 0.707031 6.55073H1.70703C1.70703 3.78782 4.06999 1.5 7.02352 1.5V0.5ZM0.707031 6.55073C0.707031 9.90948 3.56229 12.6015 7.02352 12.6015V11.6015C4.06999 11.6015 1.70703 9.31364 1.70703 6.55073H0.707031ZM7.02352 12.6015C8.54636 12.6015 9.94729 12.0817 11.0408 11.2164L10.4203 10.4322C9.49967 11.1607 8.31641 11.6015 7.02352 11.6015V12.6015ZM10.3783 11.1791L14.5039 15.2737L15.2083 14.564L11.0828 10.4694L10.3783 11.1791ZM14.5029 15.2727C14.6581 15.4276 14.861 15.5 15.0558 15.5V14.5C15.105 14.5 15.1627 14.5184 15.2093 14.565L14.5029 15.2727ZM15.0558 15.5C15.2427 15.5 15.4341 15.4335 15.5853 15.2951L14.9102 14.5574C14.9539 14.5174 15.0074 14.5 15.0558 14.5V15.5ZM15.586 15.2945C15.9057 15.0009 15.9164 14.5046 15.6081 14.1979L14.903 14.9071C14.8062 14.8109 14.8103 14.6491 14.9096 14.558L15.586 15.2945ZM7.02426 11.0715C4.37623 11.0715 2.26172 9.0208 2.26172 6.54943H1.26172C1.26172 9.61664 3.86853 12.0715 7.02426 12.0715V11.0715ZM2.26172 6.54943C2.26172 4.07807 4.37623 2.02734 7.02426 2.02734V1.02734C3.86853 1.02734 1.26172 3.48223 1.26172 6.54943H2.26172ZM7.02426 2.02734C9.67228 2.02734 11.7868 4.07807 11.7868 6.54943H12.7868C12.7868 3.48223 10.18 1.02734 7.02426 1.02734V2.02734ZM11.7868 6.54943C11.7868 9.02078 9.67202 11.0715 7.02426 11.0715V12.0715C10.1797 12.0715 12.7868 9.61666 12.7868 6.54943H11.7868Z"
                                        fill="#96A5B8" />
                                </svg>
                            </div>
                            <ul ref="searchlist" class="entrance-form-select-box__list">
                                <li class="entrance-form-select-box__list-item" v-for="word in this.filteredWords"
                                    :key="word.id">
                                    <SearchItem :word="word" @sendInfoToParent="getInfoFromChild" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="entrance-form__select entrance-form-select entrance-form-select--third" id="3">
                        <p class="entrance-form-select__text">
                            Город
                        </p>
                        <div class="entrance-form-select__top" @click="showThirdSearchPanel">
                            <p class="entrance-form-select__top-text">
                                {{ ThirdActiveTitle }}
                            </p>
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.2998 21.3334C15.9883 21.334 15.6864 21.2255 15.4465 21.0268L7.44651 14.3601C7.17422 14.1338 7.00299 13.8085 6.97049 13.456C6.93798 13.1034 7.04686 12.7524 7.27318 12.4801C7.4995 12.2078 7.82471 12.0366 8.17728 12.0041C8.52985 11.9715 8.88089 12.0804 9.15318 12.3067L16.2998 18.2801L23.4465 12.5201C23.5829 12.4093 23.7398 12.3266 23.9083 12.2767C24.0767 12.2268 24.2534 12.2107 24.4281 12.2293C24.6028 12.2478 24.7721 12.3008 24.9263 12.385C25.0805 12.4692 25.2165 12.5831 25.3265 12.7201C25.4486 12.8572 25.5411 13.018 25.5982 13.1925C25.6552 13.367 25.6756 13.5514 25.6581 13.7342C25.6406 13.9169 25.5855 14.0941 25.4963 14.2546C25.4071 14.415 25.2858 14.5554 25.1398 14.6667L17.1398 21.1067C16.8931 21.2741 16.5973 21.3539 16.2998 21.3334Z"
                                    fill="#96A5B8" />
                            </svg>
                        </div>
                        <p class="entrance-form__box-subtext">
                            Обязательное поле.
                        </p>
                        <div class="entrance-form-select__box entrance-form-select-box">
                            <div class="entrance-form-select-box__top">
                                <input @input="findResult" v-model="searchTerm" class="entrance-form-select-box__top-input"
                                    type="text" placeholder="Поиск">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15.2555 14.5525L15.6081 14.1979L15.6077 14.1976L15.2555 14.5525ZM11.1399 10.468L10.7942 10.1067L10.4236 10.4615L10.7877 10.8228L11.1399 10.468ZM10.7306 10.8243L11.0828 10.4694L10.768 10.157L10.4203 10.4322L10.7306 10.8243ZM14.8561 14.9189L15.2093 14.565L15.2083 14.564L14.8561 14.9189ZM15.2478 14.9263L15.5853 15.2951L15.586 15.2945L15.2478 14.9263ZM15.6077 14.1976L11.4921 10.1131L10.7877 10.8228L14.9033 14.9074L15.6077 14.1976ZM11.4856 10.8292C12.6267 9.7371 13.34 8.22435 13.34 6.55073H12.34C12.34 7.93213 11.7526 9.18946 10.7942 10.1067L11.4856 10.8292ZM13.34 6.55073C13.34 3.19198 10.4847 0.5 7.02352 0.5V1.5C9.97705 1.5 12.34 3.78782 12.34 6.55073H13.34ZM7.02352 0.5C3.56229 0.5 0.707031 3.19198 0.707031 6.55073H1.70703C1.70703 3.78782 4.06999 1.5 7.02352 1.5V0.5ZM0.707031 6.55073C0.707031 9.90948 3.56229 12.6015 7.02352 12.6015V11.6015C4.06999 11.6015 1.70703 9.31364 1.70703 6.55073H0.707031ZM7.02352 12.6015C8.54636 12.6015 9.94729 12.0817 11.0408 11.2164L10.4203 10.4322C9.49967 11.1607 8.31641 11.6015 7.02352 11.6015V12.6015ZM10.3783 11.1791L14.5039 15.2737L15.2083 14.564L11.0828 10.4694L10.3783 11.1791ZM14.5029 15.2727C14.6581 15.4276 14.861 15.5 15.0558 15.5V14.5C15.105 14.5 15.1627 14.5184 15.2093 14.565L14.5029 15.2727ZM15.0558 15.5C15.2427 15.5 15.4341 15.4335 15.5853 15.2951L14.9102 14.5574C14.9539 14.5174 15.0074 14.5 15.0558 14.5V15.5ZM15.586 15.2945C15.9057 15.0009 15.9164 14.5046 15.6081 14.1979L14.903 14.9071C14.8062 14.8109 14.8103 14.6491 14.9096 14.558L15.586 15.2945ZM7.02426 11.0715C4.37623 11.0715 2.26172 9.0208 2.26172 6.54943H1.26172C1.26172 9.61664 3.86853 12.0715 7.02426 12.0715V11.0715ZM2.26172 6.54943C2.26172 4.07807 4.37623 2.02734 7.02426 2.02734V1.02734C3.86853 1.02734 1.26172 3.48223 1.26172 6.54943H2.26172ZM7.02426 2.02734C9.67228 2.02734 11.7868 4.07807 11.7868 6.54943H12.7868C12.7868 3.48223 10.18 1.02734 7.02426 1.02734V2.02734ZM11.7868 6.54943C11.7868 9.02078 9.67202 11.0715 7.02426 11.0715V12.0715C10.1797 12.0715 12.7868 9.61666 12.7868 6.54943H11.7868Z"
                                        fill="#96A5B8" />
                                </svg>
                            </div>
                            <ul ref="searchlist" class="entrance-form-select-box__list">
                                <li class="entrance-form-select-box__list-item" v-for="word in this.filteredWords"
                                    :key="word.id">
                                    <SearchItem :word="word" @sendInfoToParent="getInfoFromChild" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="entrance-form__check">
                        <div class="entrance-form__check-box">
                            <label class="container">
                                <a href="#">
                                    Я прочитал(-а) условия пользования сервисом
                                </a>
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="entrance-form__check-box">
                            <label class="container">
                                <a href="#">
                                    Я согласен(-сна) с условиями пользования сервисом
                                </a>
                                <input type="checkbox" checked="checked">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>

                    <div class="entrance-form__buttons">
                        <a class="entrance-form__buttons-link" href="#">
                            Назад
                        </a>
                        <button class="entrance-form__buttons-btn" type="sumnit" @click="sendData">
                            Продолжить
                        </button>
                    </div>
                    <p class="entrance-form__bottom">
                        У меня уже есть аккаун,
                        <a href="#">
                            Войти
                        </a>
                    </p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Aside from '../components/entrance-components/Aside.vue';
import SearchItem from '../components/entrance-components/Search-item.vue';
export default {
    components: {
        Aside,
        SearchItem
    },
    data() {
        return {
            firstActiveTitle: "Выберите отрасль",
            SecondActiveTitle: "Выберите страну",
            ThirdActiveTitle: "Выберите город",
            searchTerm: "",
            words: [],
            sortedWords: [],
            searchTermSorted: '',
            sortedWordsIndex: 0,
            activeListOfTitles: '',
            firstListOfTitles: [
                'Афганистан 1',
                'Албания',
                'Алгерия',
                'Андора',
                'Афганистан',
                'Албания',
                'Алгерия',
                'Андора',
            ],
            secondListOfTitles: [
                'Афганистан 2',
                'Албания',
                'Алгерия',
                'Андора',
                'Андора',
                'Афганистан',
                'Албания',
                'Алгерия',
                'Андора',
                'Андора',
            ],
            thirdListOfTitles: [
                'Афганистан 3',
                'Албания',
                'Алгерия',
                'Алгерия',
                'Андора',
                'Андора',
                'Афганистан',
                'Албания',
                'Алгерия',
                'Алгерия',
                'Андора',
                'Андора',
            ]
        };
    },
    computed: {
        filteredWords() {

            let localWords = this.words

            let arrayWithResults = []

            for (let item of this.sortedWords) {
                for (let word of item[0].value) {
                    if (this.searchTermSorted != '') {
                        if (word == this.searchTermSorted) {
                            arrayWithResults.push({ value: [localWords[this.sortedWords.indexOf(item)]], id: item[1].id })

                        }
                    } else {
                        if (item[0].value.indexOf(word) == 1) {
                            arrayWithResults.push({ value: [localWords[this.sortedWords.indexOf(item)]], id: item[1].id })
                        }
                    }
                }
            }
            return arrayWithResults
        },
    },
    mounted() {
        this.infoAboutSearh()
    },
    methods: {
        sendData(event) {
            let allInputs = document.querySelectorAll('.entrance-form__box-input')
            for ( let item of allInputs ) {
                if( item.value == '' ) {
                    event.preventDefault()
                    item.parentNode.classList.add('entrance-form__box--disabled')
                } else {
                    item.parentNode.classList.remove('entrance-form__box--disabled')
                }
            }
        },
        findResult() {
            let localSearchTerm = [...this.searchTerm.toLowerCase()]

            if (localSearchTerm.length > 1) {
                let str = ''
                for (let item of localSearchTerm) {
                    str += item
                }
                this.searchTermSorted = str.split()
            } else {
                this.searchTermSorted = localSearchTerm
            }
        },
        showFirstSearchPanel() {
            if (document.querySelector('.entrance-form-select--first').classList.contains('entrance-form-select--first--active')) {
                document.querySelector('.entrance-form-select--first').classList.remove('entrance-form-select--first--active')
            } else {
                document.querySelector('.entrance-form-select--first').classList.add('entrance-form-select--first--active')
            }
            this.activeListOfTitles = this.firstListOfTitles

            this.infoAboutSearh()

            document.querySelector('.entrance-form-select--second').classList.remove('entrance-form-select--second--active')
            document.querySelector('.entrance-form-select--third').classList.remove('entrance-form-select--third--active')
        },
        showSecondSearchPanel() {
            if (document.querySelector('.entrance-form-select--second').classList.contains('entrance-form-select--second--active')) {
                document.querySelector('.entrance-form-select--second').classList.remove('entrance-form-select--second--active')
            } else {
                document.querySelector('.entrance-form-select--second').classList.add('entrance-form-select--second--active')
            }
            this.activeListOfTitles = this.secondListOfTitles

            this.infoAboutSearh()

            document.querySelector('.entrance-form-select--first').classList.remove('entrance-form-select--first--active')
            document.querySelector('.entrance-form-select--third').classList.remove('entrance-form-select--third--active')
        },
        showThirdSearchPanel() {
            if (document.querySelector('.entrance-form-select--third').classList.contains('entrance-form-select--third--active')) {
                document.querySelector('.entrance-form-select--third').classList.remove('entrance-form-select--third--active')
            } else {
                document.querySelector('.entrance-form-select--third').classList.add('entrance-form-select--third--active')
            }
            this.activeListOfTitles = this.thirdListOfTitles

            this.infoAboutSearh()

            document.querySelector('.entrance-form-select--first').classList.remove('entrance-form-select--first--active')
            document.querySelector('.entrance-form-select--second').classList.remove('entrance-form-select--second--active')
        },
        infoAboutSearh() {
            let wordsArr = []
            for (let item of this.activeListOfTitles) {
                wordsArr.push(item)
            }

            this.words = wordsArr

            let symbolsArr = []
            for (let item of wordsArr) {
                symbolsArr.push([...item.toLowerCase()])
            }

            let symbolsArrResult = []
            let idOfWords = 0
            for (let item of symbolsArr) {
                this.sortedWordsIndex = this.sortedWordsIndex++
                symbolsArrResult.unshift([{ value: [] }, { id: idOfWords }])
                idOfWords = ++idOfWords
                let letters = ''
                for (let letter of item) {
                    letters += letter
                    symbolsArrResult[this.sortedWordsIndex][0].value.push(letters)
                }
            }
            this.sortedWords = symbolsArrResult.reverse()
        },
        getInfoFromChild(elem, currentElem) {
            if (currentElem.parentNode.parentNode.parentNode.parentNode.id == 1) {
                this.firstActiveTitle = elem.value[0]

                let arrayOfselectLink = document.querySelectorAll('.entrance-form-select-box__list-link')
                for (let item of arrayOfselectLink) {
                    if (item.id != elem.id) {
                        if (item.parentNode.parentNode.parentNode.parentNode.id == 1) {
                            item.classList.remove('entrance-form-select-box__list-link--active')
                        }
                    } else {
                        if (item.parentNode.parentNode.parentNode.parentNode.id == 1) {
                            item.classList.add('entrance-form-select-box__list-link--active')
                        }
                    }
                }

                document.querySelector('.entrance-form-select--first').classList.remove('entrance-form-select--first--active')
            } else if (currentElem.parentNode.parentNode.parentNode.parentNode.id == 2) {
                this.SecondActiveTitle = elem.value[0]

                let arrayOfselectLink = document.querySelectorAll('.entrance-form-select-box__list-link')
                for (let item of arrayOfselectLink) {
                    if (item.id != elem.id) {
                        if (item.parentNode.parentNode.parentNode.parentNode.id == 2) {
                            item.classList.remove('entrance-form-select-box__list-link--active')
                        }
                    } else {
                        if (item.parentNode.parentNode.parentNode.parentNode.id == 2) {
                            item.classList.add('entrance-form-select-box__list-link--active')
                        }
                    }
                }

                document.querySelector('.entrance-form-select--second').classList.remove('entrance-form-select--second--active')
            } else if (currentElem.parentNode.parentNode.parentNode.parentNode.id == 3) {
                this.ThirdActiveTitle = elem.value[0]

                let arrayOfselectLink = document.querySelectorAll('.entrance-form-select-box__list-link')
                for (let item of arrayOfselectLink) {
                    if (item.id != elem.id) {
                        if (item.parentNode.parentNode.parentNode.parentNode.id == 3) {
                            item.classList.remove('entrance-form-select-box__list-link--active')
                        }
                    } else {
                        if (item.parentNode.parentNode.parentNode.parentNode.id == 3) {
                            item.classList.add('entrance-form-select-box__list-link--active')
                        }
                    }
                }

                document.querySelector('.entrance-form-select--third').classList.remove('entrance-form-select--third--active')
            }
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/vars';
.reg-two {
    .entrance-form__box {
        margin-bottom: 15px;
    }

    .entrance-form__box:nth-child(5) {
        margin-bottom: 15px;
    }

    .entrance-form__box:nth-child(5) .entrance-form__box-input {
        margin-bottom: 0;
    }
}

.entrance-form-select {
    width: 100%;
    margin-bottom: 15px;
    position: relative;

    &__text {
        font-weight: 400;
        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 20, 15, 1);
        color: #96A5B8;
        @include adaptiv-value("margin-bottom", 8, 6, 1);
    }

    &__top {
        cursor: pointer;
        display: flex;
        background: #F4F4F4;
        border: 1px solid #F2F2F2;
        width: 100%;
        border-radius: 10px;
        @include adaptiv-value("padding-top", 8, 5, 1);
        @include adaptiv-value("padding-right", 15, 10, 1);
        @include adaptiv-value("padding-bottom", 8, 5, 1);
        @include adaptiv-value("padding-left", 35, 20, 1);
        justify-content: space-between;
        align-items: center;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: rgba(0, 0, 0, 0.5);
        transition: border 0.3s;

        svg {
            transition: transform 0.3s;
            @include adaptiv-value("width", 33, 29.5, 1);
            @include adaptiv-value("height", 33, 29.5, 1);
        }
    }

    &__top-text {
        @include adaptiv-value("font-size", 14, 12, 1);
        @include adaptiv-value("line-height", 17, 15, 1);
    }
}

.entrance-form-select-box {
    z-index: 10;
    background: #FFFFFF;
    border: 1px solid #1294F2;
    border-radius: 6px;
    @include adaptiv-value("padding-top", 24, 15, 1);
    @include adaptiv-value("padding-right", 20, 10, 1);
    @include adaptiv-value("padding-bottom", 24, 15, 1);
    @include adaptiv-value("padding-left", 20, 10, 1);
    position: absolute;
    @include adaptiv-value("top", 80, 67, 1);
    width: 100%;
    max-height: 320px;
    display: none;

    &__top {
        display: flex;
        align-items: center;

        @include adaptiv-value("margin-bottom", 20, 15, 1);
        @include adaptiv-value("padding-top", 15, 8, 1);
        @include adaptiv-value("padding-right", 23, 10, 1);
        @include adaptiv-value("padding-bottom", 15, 8, 1);
        @include adaptiv-value("padding-left", 23, 10, 1);

        background: #FFFFFF;
        border: 1px solid #96A5B8;
        border-radius: 6px;
        @include adaptiv-value("gap", 15, 10, 1);
        border-radius: 6px;

        svg {
            order: -1;
        }
    }

    &__top-input {
        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 17, 15, 1);
        letter-spacing: 0.14px;
        width: 100%;
        color: #96A5B8;

        &::placeholder {
            @include adaptiv-value("font-size", 16, 12, 1);
            @include adaptiv-value("line-height", 17, 15, 1);
            letter-spacing: 0.14px;
            color: #96A5B8;
        }
    }

    &__list {
        max-height: 200px;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 7px;
        }

        &::-webkit-scrollbar-track {
            background: #E9EDF7;
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background: #1294F2;
            border-radius: 10px;
        }

        // &::-webkit-scrollbar-thumb:hover {
        //    background: #555;
        // }
    }

    &__list-item {
        @include adaptiv-value("padding-top", 13, 6, 1);
        @include adaptiv-value("padding-right", 24, 10, 1);
        @include adaptiv-value("padding-bottom", 13, 6, 1);
        @include adaptiv-value("padding-left", 24, 10, 1);
    }
}

.entrance-form {
    &__buttons {
        display: flex;
        @include adaptiv-value("gap", 12, 6, 1);
        align-items: center;
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 20, 24, 1);
        @include adaptiv-value("margin-bottom", 10, 15, 1);
    }

    &__buttons-link {
        @include adaptiv-value("padding", 18, 6, 1);
        color: #1294F2;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid #1294F2;
        @include adaptiv-value("border-radius", 10, 6, 1);
        @include adaptiv-value("width", 185, 160, 1);
        @include adaptiv-value("max-width", 185, 160, 1);
        transition: background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }

    &__buttons-btn {
        @include adaptiv-value("padding", 18, 6, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        background: #1294F2;
        @include adaptiv-value("border-radius", 10, 6, 1);
        @include adaptiv-value("width", 275, 200, 1);
        @include adaptiv-value("max-width", 275, 200, 1);
        @include adaptiv-value("font-size", 16, 14, 1);
        @include adaptiv-value("line-height", 20, 24, 1);
        border: 1px solid transparent;
        transition: background 0.3s, color 0.3s, border 0.3s;
        &:hover {
            background: transparent;
            color: #1294F2;
            border: 1px solid #1294F2;
        }
    }
}

.entrance-form-select--first--active,
.entrance-form-select--second--active,
.entrance-form-select--third--active {
    .entrance-form-select-box {
        display: block;
    }

    .entrance-form-select__top {
        svg {
            transform: rotate(180deg);
        }
    }

    .entrance-form-select__top {
        border: 1px solid #1294F2;
    }
}

.entrance-form {
    &__check {
        @include adaptiv-value("margin-bottom", 30, 15, 1);
    }

    &__check-box {
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 0;
        }

        a {
            color: #1294F2;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    // // //

    /* Customize the label (the container) */
    .container {
        display: block;
        position: relative;
        @include adaptiv-value("padding-left", 40, 30, 1);
        cursor: pointer;
        font-weight: 400;
        @include adaptiv-value("font-size", 15, 12, 1);
        @include adaptiv-value("line-height", 25, 15, 1);
        color: #1294F2;
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
@media (max-width: 1400px) {
    .entrance-form__buttons {
        flex-direction: column;
        align-items: flex-start;
        align-self: flex-start;
    }
}
</style>