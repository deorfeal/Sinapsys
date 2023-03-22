<template>
    <div class="main main-grow">
        <div class="main__evaluation-thanks evaluation-thanks">
            <h1 class="evaluation-thanks__title">
                Спасибо за отзыв
            </h1>
            <p class="evaluation-thanks__text">
                Отзыв отправлен, он будет нам очень полезен.
            </p>
            <a class="evaluation-thanks__link" href="#">
                <span>
                    Вернуться  
                </span>
                &nbsp; 
                <span>
                    на главную
                </span>
            </a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../assets/scss/style.scss';
@import '../../assets/scss/vars';
.main-grow {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 70px 0; 
    flex-grow: 1;
}

.evaluation-thanks {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 40px;

    &__title {
        font-weight: 600;
        @include adaptiv-value('font-size', 36, 16, 1);
        @include adaptiv-value('line-height', 40, 20, 1);
        color: #1B2559;
        @include adaptiv-value('margin-bottom', 30, 15, 1);
    }

    &__text {
        font-weight: 400;

        @include adaptiv-value('font-size', 20, 14, 1);
        @include adaptiv-value('line-height', 24, 24, 1);
        @include adaptiv-value('margin-bottom', 30, 25, 1);
        color: #1B2559;
    }

    &__link {
        color: #FFFFFF;
        background: #1294F2;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 1px solid transparent;
        transition: background 0.3s, color 0.3s, border 0.3s;

        @include adaptiv-value('font-size', 20, 16, 1);
        @include adaptiv-value('line-height', 24, 24, 1);
        @include adaptiv-value('padding', 12, 6, 1);
        @include adaptiv-value('width', 285, 140, 1);
        @include adaptiv-value('max-width', 285, 140, 1);
        &:hover {
            background: #fff;
            color: #1294F2;
            border: 1px solid #1294F2;
        }
    }
}

@media (max-width: 500px) {
    .evaluation-thanks__link {
        span:last-child {
            display: none;
        }
    }
}
</style>