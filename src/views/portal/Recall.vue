<template>
    <main class="main">
        <div class="main__recall recall">
            <h1 class="recall__title">
                Напишите отзыв
            </h1>
            <div class="recall__inner">
                <h2 class="recall__subtitle">
                    Пожалуйста, ответьте на следующие вопросы:
                </h2>
                <ul class="recall__list">
                    <li class="recall__list-item">
                        Какую задачу вы хотите решить? Опишите ее.
                    </li>
                    <li class="recall__list-item">
                        Как вы решаете ее сейчас?
                    </li>
                    <li class="recall__list-item">
                        Почему текущий способ решения вас не устраивает?
                    </li>
                    <li class="recall__list-item">
                        Какой вы видите идеальную реализацию?
                    </li>
                </ul>
                <textarea class="recall__textarea" name="" id="" cols="30" rows="10"
                    placeholder="Поделитесь вашим мнением о курсе......."></textarea>
                <div class="recall__buttons">
                    <a class="recall__buttons-link" href="#">
                        Вернуться на главную
                    </a>
                    <a class="recall__buttons-btn" href="#">
                        Отправить отзыв
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.recall {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 995px;
    padding-top: 220px;
    flex-direction: column;
    align-items: center;
    padding-bottom: 240px;
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
        padding: 30px 65px;
    }

    &__subtitle {
        font-size: 20px;
        line-height: 24px;
        color: #1B2559;
        margin-bottom: 10px;
        font-weight: 500;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 35px;
    }

    &__list-item {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #60678B;
        padding-left: 25px;
        position: relative;

        &::before {
            content: '';
            width: 2px;
            height: 2px;
            border-radius: 100%;
            background: #60678B;
            position: absolute;
            left: 13px;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    &__textarea {
        width: 825px;
        max-height: 200px;
        resize: unset;
        border: 1px solid #96A5B8;
        border-radius: 4px;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #96A5B8;
        padding: 12px 16px;
        margin-bottom: 25px;

        &::placeholder {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #96A5B8;
        }
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
    }
}
</style>