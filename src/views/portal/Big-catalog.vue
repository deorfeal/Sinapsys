<template>
    <div class="big-wrapper">
        <Aside :activeLink="2" :sideMenuActive="this.sideMenuActive"/>
        <div class="wrapper">
            <Header :searchIsActive="false" :title="'Каталог'" @openSideMenu="SideMenuToActive"/>
            <main class="main main-my-courses main-big-catalog">
                <section class="main__my-courses-top my-courses-top">
                    <div class="my-courses-top__select my-courses-top-select">
                        <div class="my-courses-top-select__box" @click="showDirections">
                            <p class="my-courses-top-select__box-text">
                                Направления
                            </p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.9997 7.99997C12.2334 7.99951 12.4598 8.08089 12.6397 8.22997L18.6397 13.23C18.8439 13.3997 18.9724 13.6436 18.9967 13.908C19.0211 14.1725 18.9395 14.4358 18.7697 14.64C18.6 14.8442 18.3561 14.9726 18.0916 14.997C17.8272 15.0214 17.5639 14.9397 17.3597 14.77L11.9997 10.29L6.63972 14.61C6.53744 14.693 6.41974 14.7551 6.2934 14.7925C6.16706 14.8299 6.03457 14.842 5.90354 14.8281C5.77251 14.8141 5.64553 14.7744 5.52989 14.7113C5.41426 14.6481 5.31225 14.5627 5.22972 14.46C5.13814 14.3571 5.06878 14.2365 5.02599 14.1056C4.9832 13.9748 4.9679 13.8365 4.98104 13.6994C4.99418 13.5623 5.03549 13.4295 5.10237 13.3091C5.16926 13.1888 5.26027 13.0835 5.36973 13L11.3697 8.16997C11.5548 8.04445 11.7766 7.9846 11.9997 7.99997Z"
                                    fill="#96A5B8" />
                            </svg>
                        </div>
                        <div class="my-courses-top-select__body">
                            <button
                                class="my-courses-top-select__body-btn my-courses-top-select__body-btn--first my-courses-top-select__body-btn--active"
                                type="button" @click="addFirstElements">
                                Кибербезопастность
                            </button>
                            <button class="my-courses-top-select__body-btn my-courses-top-select__body-btn--second"
                                type="button" @click="addSecondElements">
                                Меньшество
                            </button>
                            <button class="my-courses-top-select__body-btn my-courses-top-select__body-btn--third"
                                type="button" @click="addThirdElements">
                                Некоторые
                            </button>
                            <button class="my-courses-top-select__body-btn my-courses-top-select__body-btn--fourth"
                                type="button" @click="addFourthElements">
                                Большинство
                            </button>
                        </div>
                    </div>
                    <form class="my-courses-top__form" action="#">
                        <button class="my-courses-top__form-btn" type="button">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.9235 14.5525L15.2776 14.1995L15.2773 14.1992L14.9235 14.5525ZM10.8445 10.468L10.4972 10.1083L10.1314 10.4615L10.4907 10.8213L10.8445 10.468ZM10.4388 10.8243L10.7926 10.471L10.4765 10.1544L10.1268 10.4335L10.4388 10.8243ZM14.5276 14.9189L14.8825 14.5666L14.8815 14.5655L14.5276 14.9189ZM14.9158 14.9263L15.255 15.2936L15.2556 15.293L14.9158 14.9263ZM15.2773 14.1992L11.1983 10.1146L10.4907 10.8213L14.5697 14.9058L15.2773 14.1992ZM11.1919 10.8276C12.3232 9.73512 13.0295 8.22281 13.0295 6.55073H12.0295C12.0295 7.93367 11.4467 9.19143 10.4972 10.1083L11.1919 10.8276ZM13.0295 6.55073C13.0295 3.1961 10.2017 0.5 6.76474 0.5V1.5C9.68544 1.5 12.0295 3.7837 12.0295 6.55073H13.0295ZM6.76474 0.5C3.32775 0.5 0.5 3.1961 0.5 6.55073H1.5C1.5 3.7837 3.84404 1.5 6.76474 1.5V0.5ZM0.5 6.55073C0.5 9.90536 3.32775 12.6015 6.76474 12.6015V11.6015C3.84404 11.6015 1.5 9.31776 1.5 6.55073H0.5ZM6.76474 12.6015C8.27625 12.6015 9.66626 12.0809 10.7508 11.215L10.1268 10.4335C9.2151 11.1615 8.04392 11.6015 6.76474 11.6015V12.6015ZM10.085 11.1776L14.1738 15.2722L14.8815 14.5655L10.7926 10.471L10.085 11.1776ZM14.1728 15.2712C14.3272 15.4266 14.53 15.5 14.7256 15.5V14.5C14.7768 14.5 14.8357 14.5194 14.8825 14.5666L14.1728 15.2712ZM14.7256 15.5C14.9131 15.5 15.1045 15.4326 15.255 15.2936L14.5767 14.5589C14.6206 14.5183 14.6753 14.5 14.7256 14.5V15.5ZM15.2556 15.293C15.5724 14.9995 15.5828 14.5057 15.2776 14.1995L14.5694 14.9055C14.4739 14.8097 14.4777 14.6505 14.576 14.5595L15.2556 15.293ZM6.76474 11.0728C4.14683 11.0728 2.04902 9.02621 2.04902 6.55073H1.04902C1.04902 9.61382 3.63054 12.0728 6.76474 12.0728V11.0728ZM2.04902 6.55073C2.04902 4.07525 4.14683 2.02864 6.76474 2.02864V1.02864C3.63054 1.02864 1.04902 3.48764 1.04902 6.55073H2.04902ZM6.76474 2.02864C9.38265 2.02864 11.4805 4.07525 11.4805 6.55073H12.4805C12.4805 3.48764 9.89894 1.02864 6.76474 1.02864V2.02864ZM11.4805 6.55073C11.4805 9.0262 9.38239 11.0728 6.76474 11.0728V12.0728C9.89865 12.0728 12.4805 9.61384 12.4805 6.55073H11.4805Z"
                                    fill="#96A5B8" />
                            </svg>
                        </button>
                        <input class="my-courses-top__form-input" type="text" placeholder="Поиск" @input="searchItem"
                            v-model="valueOfInput">
                    </form>
                </section>
                <section class="main__lessons lessons">
                    <h2 class="lessons__title">
                        {{ currentValueOfTitle }}
                    </h2>
                    <div class="lessons__wrap lessons__wrap--first lessons__wrap--active">
                        <div class="lessons__inner lessons__inner--first lessons__inner--active">
                            <div class="lessons__item lessons-item">
                                <div class="lessons-item__img-text">
                                    Официальный
                                </div>
                                <img class="lessons-item__img" src="../../../public/images/lessons-img-1.png" alt="img">
                                <div class="lessons-item__inner">
                                    <div class="lessons-item__box">
                                        <h3 class="lessons-item__box-title">
                                            Пароли и учетные записи
                                        </h3>
                                        <p class="lessons-item__box-text">
                                            Обеспечение безопасности любых учетных записей начинается с выбора надежного
                                            пароля и с ответственного отношения к его хранению и использованию.
                                        </p>
                                        <p class="lessons-item__box-subtext">
                                            Доступные языки: русский
                                        </p>
                                    </div>
                                    <div class="lessons-item__content lessons-item-content">
                                        <a class="lessons-item-content__link" href="#">
                                            Посмотреть
                                        </a>
                                        <a class="lessons-item-content__btn" href="#">
                                            Начать
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="lessons__item lessons-item">
                                <div class="lessons-item__img-text">
                                    Официальный
                                </div>
                                <img class="lessons-item__img" src="../../../public/images/lessons-img-2.png" alt="img">
                                <div class="lessons-item__inner">
                                    <div class="lessons-item__box">
                                        <h3 class="lessons-item__box-title">
                                            Электронная
                                            почта
                                        </h3>
                                        <p class="lessons-item__box-text">
                                            Электронная почта — незаменимый инструмент для любого человека. Даже при наличии
                                            корпоративного адреса личную почту продолжают использовать для пересылки рабочих
                                            документов,

                                        </p>
                                        <p class="lessons-item__box-subtext">
                                            Доступные языки: русский
                                        </p>
                                    </div>
                                    <div class="lessons-item__content lessons-item-content">
                                        <a class="lessons-item-content__link" href="#">
                                            Посмотреть
                                        </a>
                                        <a class="lessons-item-content__btn" href="#">
                                            Начать
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="lessons__item lessons-item">
                                <div class="lessons-item__img-text">
                                    Официальный
                                </div>
                                <img class="lessons-item__img" src="../../../public/images/lessons-img-3.png" alt="img">
                                <div class="lessons-item__inner">
                                    <div class="lessons-item__box">
                                        <h3 class="lessons-item__box-title">
                                            Веб-сайты и интернет
                                        </h3>
                                        <p class="lessons-item__box-text">
                                            Вы даже не представляете, сколько денег может сэкономить вам такое простое
                                            действие, как своевременное обновление на устройствах ваших сотрудников
                                            программного обеспечения.
                                        </p>
                                        <p class="lessons-item__box-subtext">
                                            Доступные языки: русский
                                        </p>
                                    </div>
                                    <div class="lessons-item__content lessons-item-content">
                                        <a class="lessons-item-content__link" href="#">
                                            Посмотреть
                                        </a>
                                        <a class="lessons-item-content__btn" href="#">
                                            Начать
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lessons__wrap lessons__wrap--second">
                        <div class="lessons__inner  lessons__inner--first lessons__inner--active">
                            <div class="lessons__item lessons-item">
                                <div class="lessons-item__img-text">
                                    Официальный
                                </div>
                                <img class="lessons-item__img" src="../../../public/images/lessons-img-2.png" alt="img">
                                <div class="lessons-item__inner">
                                    <div class="lessons-item__box">
                                        <h3 class="lessons-item__box-title">
                                            Электронная
                                            почта
                                        </h3>
                                        <p class="lessons-item__box-text">
                                            Электронная почта — незаменимый инструмент для любого человека. Даже при наличии
                                            корпоративного адреса личную почту продолжают использовать для пересылки рабочих
                                            документов,

                                        </p>
                                        <p class="lessons-item__box-subtext">
                                            Доступные языки: русский
                                        </p>
                                    </div>
                                    <div class="lessons-item__content lessons-item-content">
                                        <a class="lessons-item-content__link" href="#">
                                            Посмотреть
                                        </a>
                                        <a class="lessons-item-content__btn" href="#">
                                            Начать
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="lessons__item lessons-item">
                                <div class="lessons-item__img-text">
                                    Официальный
                                </div>
                                <img class="lessons-item__img" src="../../../public/images/lessons-img-3.png" alt="img">
                                <div class="lessons-item__inner">
                                    <div class="lessons-item__box">
                                        <h3 class="lessons-item__box-title">
                                            Веб-сайты и интернет
                                        </h3>
                                        <p class="lessons-item__box-text">
                                            Вы даже не представляете, сколько денег может сэкономить вам такое простое
                                            действие, как своевременное обновление на устройствах ваших сотрудников
                                            программного обеспечения.
                                        </p>
                                        <p class="lessons-item__box-subtext">
                                            Доступные языки: русский
                                        </p>
                                    </div>
                                    <div class="lessons-item__content lessons-item-content">
                                        <a class="lessons-item-content__link" href="#">
                                            Посмотреть
                                        </a>
                                        <a class="lessons-item-content__btn" href="#">
                                            Начать
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lessons__wrap lessons__wrap--third">
                        <div class="lessons__inner lessons__inner--first lessons__inner--active">
                            <div class="lessons__item lessons-item">
                                <div class="lessons-item__img-text">
                                    Официальный
                                </div>
                                <img class="lessons-item__img" src="../../../public/images/lessons-img-2.png" alt="img">
                                <div class="lessons-item__inner">
                                    <div class="lessons-item__box">
                                        <h3 class="lessons-item__box-title">
                                            Электронная
                                            почта
                                        </h3>
                                        <p class="lessons-item__box-text">
                                            Электронная почта — незаменимый инструмент для любого человека. Даже при наличии
                                            корпоративного адреса личную почту продолжают использовать для пересылки рабочих
                                            документов,

                                        </p>
                                        <p class="lessons-item__box-subtext">
                                            Доступные языки: русский
                                        </p>
                                    </div>
                                    <div class="lessons-item__content lessons-item-content">
                                        <a class="lessons-item-content__link" href="#">
                                            Посмотреть
                                        </a>
                                        <a class="lessons-item-content__btn" href="#">
                                            Начать
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lessons__wrap lessons__wrap--fourth">
                        <div class="lessons__inner lessons__inner--first lessons__inner--active">
                            <div class="lessons__item lessons-item">
                                <div class="lessons-item__img-text">
                                    Официальный
                                </div>
                                <img class="lessons-item__img" src="../../../public/images/lessons-img-3.png" alt="img">
                                <div class="lessons-item__inner">
                                    <div class="lessons-item__box">
                                        <h3 class="lessons-item__box-title">
                                            Веб-сайты и интернет
                                        </h3>
                                        <p class="lessons-item__box-text">
                                            Вы даже не представляете, сколько денег может сэкономить вам такое простое
                                            действие, как своевременное обновление на устройствах ваших сотрудников
                                            программного обеспечения.
                                        </p>
                                        <p class="lessons-item__box-subtext">
                                            Доступные языки: русский
                                        </p>
                                    </div>
                                    <div class="lessons-item__content lessons-item-content">
                                        <a class="lessons-item-content__link" href="#">
                                            Посмотреть
                                        </a>
                                        <a class="lessons-item-content__btn" href="#">
                                            Начать
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="lessons__item lessons-item">
                                <div class="lessons-item__img-text">
                                    Официальный
                                </div>
                                <img class="lessons-item__img" src="../../../public/images/lessons-img-2.png" alt="img">
                                <div class="lessons-item__inner">
                                    <div class="lessons-item__box">
                                        <h3 class="lessons-item__box-title">
                                            Электронная
                                            почта
                                        </h3>
                                        <p class="lessons-item__box-text">
                                            Электронная почта — незаменимый инструмент для любого человека. Даже при наличии
                                            корпоративного адреса личную почту продолжают использовать для пересылки рабочих
                                            документов,

                                        </p>
                                        <p class="lessons-item__box-subtext">
                                            Доступные языки: русский
                                        </p>
                                    </div>
                                    <div class="lessons-item__content lessons-item-content">
                                        <a class="lessons-item-content__link" href="#">
                                            Посмотреть
                                        </a>
                                        <a class="lessons-item-content__btn" href="#">
                                            Начать
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="main__big-catalog-bottom big-catalog-bottom">
                    <div class="big-catalog-bottom__box">
                        <p class="big-catalog-bottom__box-text"> 

                        </p>
                        <!--  -->
                    </div>
                    <div class="big-catalog-bottom__buttons">
                        <button class="big-catalog-bottom__buttons-btn">
                            
                        </button>
                    </div>
                </div>  
            </main>
            <Footer />
        </div>
    </div>
</template>

<script>
import Aside from '../../components/portal-components/Aside.vue';
import Header from '../../components/portal-components/Header.vue';
import Footer from '../../components/portal-components/Footer.vue';
export default {
    components: {
        Aside,
        Header,
        Footer,
    },
    data() {
        return {
            currentValueOfTitle: 'Кибербезопастность',
            listOfTitles: [],
            valueOfInput: '',
            sideMenuActive: false,
        }
    },
    mounted() {
        let allTitles = document.querySelectorAll('.lessons-item__box-title')
        let allTitlesArray = []
        for (let item of allTitles) {
            allTitlesArray.push(item)
        }
        this.listOfTitles = allTitlesArray
    },
    methods: {
        SideMenuToActive() {
            if (this.sideMenuActive == true) {
                this.sideMenuActive = false
            } else {
                this.sideMenuActive = true
            }
        },
        showDirections() {
            if (document.querySelector('.my-courses-top-select').classList.contains('my-courses-top-select--active')) {
                document.querySelector('.my-courses-top-select').classList.remove('my-courses-top-select--active')
            } else {
                document.querySelector('.my-courses-top-select').classList.add('my-courses-top-select--active')
            }
        },
        addFirstElements() {
            let wrapElements = document.querySelectorAll('.lessons__wrap')
            let listOfButtons = document.querySelectorAll('.my-courses-top-select__body-btn')
            for (let item of wrapElements) {
                item.classList.remove('lessons__wrap--active')
            }
            for (let item of listOfButtons) {
                item.classList.remove('my-courses-top-select__body-btn--active')
            }
            document.querySelector('.lessons__wrap--first').classList.add('lessons__wrap--active')
            document.querySelector('.my-courses-top-select__body-btn--first').classList.add('my-courses-top-select__body-btn--active')

            document.querySelector('.my-courses-top-select').classList.remove('my-courses-top-select--active')

            this.currentValueOfTitle = document.querySelector('.my-courses-top-select__body-btn--first').innerHTML
        },
        addSecondElements() {
            let wrapElements = document.querySelectorAll('.lessons__wrap')
            let listOfButtons = document.querySelectorAll('.my-courses-top-select__body-btn')
            for (let item of wrapElements) {
                item.classList.remove('lessons__wrap--active')
            }
            for (let item of listOfButtons) {
                item.classList.remove('my-courses-top-select__body-btn--active')
            }
            document.querySelector('.lessons__wrap--second').classList.add('lessons__wrap--active')
            document.querySelector('.my-courses-top-select__body-btn--second').classList.add('my-courses-top-select__body-btn--active')

            document.querySelector('.my-courses-top-select').classList.remove('my-courses-top-select--active')

            this.currentValueOfTitle = document.querySelector('.my-courses-top-select__body-btn--second').innerHTML
        },
        addThirdElements() {
            let wrapElements = document.querySelectorAll('.lessons__wrap')
            let listOfButtons = document.querySelectorAll('.my-courses-top-select__body-btn')
            for (let item of wrapElements) {
                item.classList.remove('lessons__wrap--active')
            }
            for (let item of listOfButtons) {
                item.classList.remove('my-courses-top-select__body-btn--active')
            }
            document.querySelector('.lessons__wrap--third').classList.add('lessons__wrap--active')
            document.querySelector('.my-courses-top-select__body-btn--third').classList.add('my-courses-top-select__body-btn--active')

            document.querySelector('.my-courses-top-select').classList.remove('my-courses-top-select--active')

            this.currentValueOfTitle = document.querySelector('.my-courses-top-select__body-btn--third').innerHTML
        },
        addFourthElements() {
            let wrapElements = document.querySelectorAll('.lessons__wrap')
            let listOfButtons = document.querySelectorAll('.my-courses-top-select__body-btn')
            for (let item of wrapElements) {
                item.classList.remove('lessons__wrap--active')
            }
            for (let item of listOfButtons) {
                item.classList.remove('my-courses-top-select__body-btn--active')
            }
            document.querySelector('.lessons__wrap--fourth').classList.add('lessons__wrap--active')
            document.querySelector('.my-courses-top-select__body-btn--fourth').classList.add('my-courses-top-select__body-btn--active')

            document.querySelector('.my-courses-top-select').classList.remove('my-courses-top-select--active')

            this.currentValueOfTitle = document.querySelector('.my-courses-top-select__body-btn--fourth').innerHTML
        },
        searchItem() {
            let copyOfListOfTitles = this.listOfTitles
            let count = 0
            let ListOfCharsOfTitles = []
            if (count != copyOfListOfTitles.length) {
                for (let item of copyOfListOfTitles) {
                    ListOfCharsOfTitles.push(item.innerHTML.toLowerCase().split(''))
                    count++
                }
            }
            for (let item of ListOfCharsOfTitles) {
                item.splice(0, 1)
            }

            for (let item of document.querySelectorAll('.lessons-item')) {
                item.classList.add('lessons-item--disabled')
            }

            // // // 

            let copyValueOfInput = this.valueOfInput
            let arrayOfValueOfInput = copyValueOfInput.toLowerCase().split('')
            console.log(arrayOfValueOfInput)
            for (let item of ListOfCharsOfTitles) { // каждый массив символов
                if (arrayOfValueOfInput.length == 0) {
                    for (let lessItem of document.querySelectorAll('.lessons-item')) {
                        lessItem.classList.add('lessons-item--active')
                    }
                } else {
                    for (let ourLenght = 0; ourLenght < arrayOfValueOfInput.length; ourLenght++) {
                        if (item[ourLenght] == arrayOfValueOfInput[ourLenght]) {
                            for (let lessItem of document.querySelectorAll('.lessons-item')) {
                                lessItem.classList.remove('lessons-item--active')
                            }
                            copyOfListOfTitles[ListOfCharsOfTitles.indexOf(item)].parentNode.parentNode.parentNode.classList.remove('lessons-item--disabled')
                            copyOfListOfTitles[ListOfCharsOfTitles.indexOf(item)].parentNode.parentNode.parentNode.classList.add('lessons-item--active')
                        }
                    }
                }
            }
        }
    }

}
</script>


<style lang="scss">
@import '../../assets/scss/vars';

.main-big-catalog {
    .lessons-item__box-title {
        @include adaptiv-value('font-size', 20, 16, 1);
        @include adaptiv-value('margin-bottom', 10, 5, 1);
        max-width: unset;
    }

    .lessons-item__inner {
        flex-direction: column;
        gap: 20px;
        max-width: unset;
    }

    .lessons-item-content {
        flex-direction: row;
        justify-content: center;
    }

    .lessons-item-content__link {
        color: #1294F2;

        &:hover {
            color: #fff;
        }
    }

    .lessons-item__box-subtext {
        color: #1294F2;
        @include adaptiv-value('font-size', 15, 12, 1);
    }

    .lessons-item__box-text {
        margin-bottom: 4px;
        @include adaptiv-value('font-size', 15, 12, 1);
        color: #AEB5D7;
    }

    .lessons-item__inner {
        margin-left: 10px;
        margin-right: 5px;
    }

    .lessons-item-content__btn {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
        color: #FFFFFF;
        padding: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 120px;
        width: 120px;
        background: #1294F2;
        border: 1px solid #1294F2;
        border-radius: 6px;
        transition: background 0.3s, color 0.3s;
        &:hover {
            background: transparent;
            color: #1294F2;
        }
    }

    .lessons-item {
        max-width: 450px;
        position: relative;
    }

    .lessons-item__img-text {
        position: absolute;
        @include adaptiv-value('top', 20, 10, 1);
        @include adaptiv-value('left', 20, 10, 1);
        z-index: 10;
        @include adaptiv-value('font-size', 20, 15, 1);
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
    }
}

@media (max-width: 1450px) {
    .main-big-catalog {
        .lessons-item {
            max-width: 100%;
            display: flex;
            gap: 20px;
        }

        .lessons-item__img {
            object-fit: cover;
            border-radius: 16px;
        }

        .lessons-item-content {
            justify-content: flex-end;
        }
    }

}

@media (max-width: 1050px) {
    .main-big-catalog {
        .my-courses-top {
            flex-direction: row;
            flex-wrap: unset;
        }

        .my-courses-top__form {
            max-width: 560px;
        }
    }

}

@media (max-width: 850px) {
    .main-big-catalog {
        .lessons-item {
            gap: 0;
        }
    }
}

@media (max-width: 550px) {
    .main-big-catalog {
        .my-courses-top__form {
            order: 1;
            border-radius: 15px 0 0 15px;
        }

        .my-courses-top__form-input {
            border-radius: 15px 0 0 15px;
        }

        .my-courses-top-select {
            order: 2;
            margin-left: 55px;
        }
        .lessons-item__box-text {
            color: #60678B;
        }
        .lessons-item-content {
            justify-content: center;
        }
    }

}</style>