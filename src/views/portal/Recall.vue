<template>
    <main class="main main-grow">
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
                        <span>
                            Вернуться 
                        </span>
                        &nbsp; 
                        <span>
                            на главную
                        </span>
                    </a>
                    <a class="recall__buttons-btn" href="#">
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
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../assets/scss/vars';
.recall {
    display: flex;
    justify-content: center;
    margin-left: 30px;
    margin-right: 30px;
    max-width: 995px;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    &__title {
        text-align: center;
        font-weight: 600;

        color: #1B2559;

        @include adaptiv-value('font-size', 36, 16, 1);
        @include adaptiv-value('line-height', 38, 24, 1);
        @include adaptiv-value('margin-bottom', 35, 20, 1);
    }

    &__inner {
        background: #FFFFFF;
        border-radius: 8px;
        @include adaptiv-value('padding-top', 30, 20, 1);
        @include adaptiv-value('padding-bottom', 30, 25, 1);
        @include adaptiv-value('padding-right', 65, 20, 1);
        @include adaptiv-value('padding-left', 65, 20, 1);

    }

    &__subtitle {
        @include adaptiv-value('font-size', 20, 14, 1);
        line-height: 24px;
        color: #1B2559;
        @include adaptiv-value('margin-bottom', 10, 4, 1);
        font-weight: 500;
    }

    &__list {
        display: flex;
        flex-direction: column;
        gap: 5px;
        @include adaptiv-value('margin-bottom', 35, 10, 1);
    }

    &__list-item {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #60678B;
        @include adaptiv-value('padding-left', 25, 20, 1);
        position: relative;
        @include adaptiv-value('font-size', 16, 14, 1);
   
       
        &::before {
            content: '';
            width: 2px;
            height: 2px;
            border-radius: 100%;
            background: #60678B;
            position: absolute;
            @include adaptiv-value('left', 13, 8, 1);
            top: 25%;
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
        line-height: 24px;
        @include adaptiv-value('font-size', 16, 12, 1);
        color: #96A5B8;
        padding: 12px 16px;
        @include adaptiv-value('margin-bottom', 25, 15, 1);
        &:focus::placeholder {
            opacity: 0;
        }
        &::placeholder {
            font-weight: 400;
            @include adaptiv-value('font-size', 16, 12, 1);
            line-height: 24px;
            color: #96A5B8;
        }
    }

    &__buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        @include adaptiv-value('gap', 30, 25, 1);
    }

    &__buttons-link {
        text-align: center;
        color: #1294F2;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #1294F2;
        border-radius: 6px;

        @include adaptiv-value('font-size', 20, 14, 1);
        @include adaptiv-value('line-height', 24, 24, 1);
        @include adaptiv-value('padding', 12, 6, 1);
        @include adaptiv-value('width', 290, 250, 1);
        @include adaptiv-value('max-width', 290, 250, 1);

        transition: background 0.3s, color 0.3s;
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }

    &__buttons-btn {
        @include adaptiv-value('font-size', 20, 14, 1);
        @include adaptiv-value('line-height', 24, 24, 1);
        @include adaptiv-value('padding', 13, 6, 1);
        @include adaptiv-value('width', 230, 125, 1);
        @include adaptiv-value('max-width', 230, 125, 1);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
   
        border-radius: 6px;

      
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
@media (max-width: 1050px) {
    .recall__textarea {
        width: 100%;
    }
}
@media (max-width: 550px) {
    .recall__buttons-btn {
        span:last-child {
            display: none;
        }
    }
    .recall__buttons-link {
        width: 125px;
        span:last-child {
            display: none;
        }
    }
}

@media (max-width: 400px) {
    .recall__subtitle {
        max-width: 200px;
    }
    .recall__list-item {
        max-width: 300px;
    }
}
</style>