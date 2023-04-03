<template>
    <main class="main main-grow">
        <form class="main__curs-evaluation curs-evaluation" action="#">
            <h1 class="curs-evaluation__title">
                Оцените курс
            </h1>
            <div class="curs-evaluation__inner">
                <div class="curs-evaluation__wrap">
                    <div class="rate">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text">
                        </label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label for="star4" title="text">
                        </label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label for="star3" title="text">
                        </label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text">
                        </label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text">
                        </label>
                    </div>
                    <textarea class="curs-evaluation__textarea" name="text" id="smt" cols="30" rows="10"
                        placeholder="Поделитесь вашим мнением о курсе......."></textarea>
                </div>
                <div class="curs-evaluation__buttons">
                    <a class="curs-evaluation__buttons-link" href="#">
                        <span>
                            Вернуться
                        </span>
                        &nbsp;
                        <span>
                            на главную
                        </span>
                    </a>
                    <a class="curs-evaluation__buttons-btn" href="#">
                        <span>
                            Отправить
                        </span>
                        &nbsp;
                        <span>
                            отзыв
                        </span>
                    </a>
                </div>
            </div>
        </form>
    </main>
</template>

<script>

export default {
    components: {

    }
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';

.curs-evaluation {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;

    &__title {
        font-weight: 600;
        @include adaptiv-value('font-size', 36, 16, 1);
        line-height: 24px;
        color: #1B2559;
        @include adaptiv-value('margin-bottom', 35, 25, 1);
    }

    &__inner {
        background: #FFFFFF;
        border-radius: 8px;

        @include adaptiv-value('padding-top', 25, 20, 1);
        @include adaptiv-value('padding-bottom', 50, 20, 1);
        @include adaptiv-value('padding-right', 75, 15, 1);
        @include adaptiv-value('padding-left', 75, 15, 1);
    }

    &__wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &__textarea {
        border: 1px solid #96A5B8;
        width: 830px;
        border-radius: 4px;
        font-weight: 400;
        @include adaptiv-value('font-size', 16, 12, 1);
        line-height: 24px;
        color: #96A5B8;
        padding: 12px 16px;
        @include adaptiv-value('max-height', 200, 125, 1);
        resize: unset;

        &::placeholder {
            @include adaptiv-value('font-size', 16, 12, 1);
            line-height: 24px;
            color: #96A5B8;
        }

        margin-bottom: 60px;
        &:focus {
            &::placeholder {
                opacity: 0;
            }
        }
    }

    &__buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        @include adaptiv-value('gap', 30, 25, 1);
    }

    &__buttons-link {
        line-height: 24px;
        text-align: center;
    
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px;
   
        width: 285px;
        max-width: 285px;
        border-radius: 6px;
        @include adaptiv-value('font-size', 20, 16, 1);
        @include adaptiv-value('padding', 12, 6, 1);
        transition: background 0.3s, color 0.3s;

        color: #1294F2;
        border: 1px solid #1294F2;
        transition: border 0.3s, background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }

    &__buttons-btn {
        line-height: 24px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
   
        @include adaptiv-value('font-size', 20, 16, 1);
        @include adaptiv-value('padding', 13, 6, 1);
        width: 230px;
        max-width: 230px;

        border-radius: 6px;

        border: 1px solid transparent;
        transition: background 0.3s, color 0.3s, border 0.3s;

        color: #1294F2;
        border: 1px solid #1294F2;
        transition: border 0.3s, background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }
}

// 

.rate {
    float: left;
    gap: 10px;
    @include adaptiv-value('margin-bottom', 50, 15, 1);
}

.rate:not(:checked)>input {
    position: absolute;
    top: -9999px;
}

.rate:not(:checked)>label {
    float: right;
    position: relative;
    @include adaptiv-value('width', 48, 24, 1);
    @include adaptiv-value('height', 48, 24, 1);
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;
    font-size: 30px;
    color: #ccc;
    margin-right: 10px;
}

.rate:not(:checked)>label:before {
    content: '';
    background-image: url(../../../public/images/star-icon-2.svg);
    background-repeat: no-repeat;
    background-size: contain;
    @include adaptiv-value('width', 48, 24, 1);
    @include adaptiv-value('height', 48, 24, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.rate>input:checked~label:before {
    background-image: url(../../../public/images/star-icon.svg);
    background-repeat: no-repeat;
    background-size: contain;
}

.rate:not(:checked)>label:hover,
.rate:not(:checked)>label:hover~label:before {
    background-image: url(../../../public/images/star-icon.svg);
    background-repeat: no-repeat;
    background-size: contain;
}

.rate>input:checked+label:hover,
.rate>input:checked+label:hover~label,
.rate>input:checked~label:hover,
.rate>input:checked~label:hover~label,
.rate>label:hover~input:checked~label:before {
    background-image: url(../../../public/images/star-icon.svg);
    background-repeat: no-repeat;
    background-size: contain;
}

@media (max-width: 1000px) {
    .curs-evaluation__textarea {
        width: 100%;
    }

    .curs-evaluation__inner {
        width: 100%;
    }

    .curs-evaluation {
        width: 100%;
    }
}

@media (max-width: 550px) {
    .curs-evaluation__inner {
        background: transparent;
        padding: 0;
    }

    .curs-evaluation__wrap {
        background: #fff;
        border-radius: 8px;
        padding: 20px 15px;
        margin-bottom: 20px;
    }
    .curs-evaluation__textarea {
        padding-right: 10px;
        margin-bottom: 0;
    }
    .curs-evaluation__buttons-link {
        width: 125px;
        max-width: 125px;
        span:last-child {
            display: none;
        }
    }
    .curs-evaluation__buttons-btn {
        span:last-child {
            display: none;
        }
    }
    .curs-evaluation__buttons-btn {
        width: 140px;
        max-width: 140px;
    }
}


// // </style>