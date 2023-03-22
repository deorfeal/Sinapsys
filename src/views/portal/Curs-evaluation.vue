<template>
    <main class="main main-grow">
        <form class="main__curs-evaluation curs-evaluation" action="#">
            <h1 class="curs-evaluation__title">
                Оцените курс
            </h1>
            <div class="curs-evaluation__inner">
                <textarea class="curs-evaluation__textarea" name="text" id="smt" cols="30" rows="10"
                    placeholder="Поделитесь вашим мнением о курсе......."></textarea>
                <div class="curs-evaluation__buttons">
                    <a class="curs-evaluation__buttons-link" href="#">
                        Вернуться на главную
                    </a>
                    <a class="curs-evaluation__buttons-btn" href="#">
                        Отправить отзыв
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
.curs-evaluation {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__title {
        font-weight: 600;
        font-size: 36px;
        line-height: 24px;
        color: #1B2559;
        margin-bottom: 35px;
    }

    &__inner {
        background: #FFFFFF;
        border-radius: 8px;
        padding: 25px 75px 50px 75px;
    }

    &__textarea {
        border: 1px solid #96A5B8;
        width: 830px;
        border-radius: 4px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #96A5B8;
        padding: 12px 16px;
        max-height: 200px;
        resize: unset;
        &::placeholder {
            font-size: 16px;
            line-height: 24px;
            color: #96A5B8;
        }
        margin-bottom: 60px;
    }

    &__buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }

    &__buttons-link {
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #1294F2;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px;
        width: 285px;
        max-width: 285px;
        border: 1px solid #1294F2;
        border-radius: 6px;

        transition: background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }

    &__buttons-btn {
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        padding: 13px;
        width: 230px;
        max-width: 230px;

        background: #1294F2;
        border-radius: 6px;

        border: 1px solid transparent;
        transition: background 0.3s, color 0.3s, border 0.3s;
        &:hover {
            background: #fff;
            color: #1294F2;
            border: 1px solid #1294F2;
        }
    }
}
</style>