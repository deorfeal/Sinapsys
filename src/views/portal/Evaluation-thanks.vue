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
                Вернуться на главную
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
    gap: 30px;

    &__title {
        font-weight: 600;
        font-size: 36px;
        line-height: 24px;
        color: #1B2559;
    }

    &__text {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #1B2559;
    }

    &__link {
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
        padding: 12px;
        background: #1294F2;
        border-radius: 6px;
        width: 285px;
        max-width: 285px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}
</style>