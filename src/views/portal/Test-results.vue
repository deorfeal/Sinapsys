<template>
    <div class="main">
        <div class="main__test-results test-results">
            <a class="test-results__link" href="#">
                <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                        fill="#1B2559" />
                </svg>
                <span>
                    Результаты по тесту
                </span>
            </a>
            <div class="test-results__inner">
                <h1 class="test-results__title">
                    Вы получили
                    <span>
                        3/10
                    </span>
                    баллов
                    <span>
                        (30%)
                    </span>
                </h1>
                <p class="test-results__text">
                    Вы еще не сдали экзамен. Вам нужно как минимум 80%, чтобы пройти.
                    Просмотрите материал и попробуйте еще раз! У вас есть 3 попытки.
                </p>
                <a class="test-results__btn" href="#">
                    Завершить
                </a>
            </div>
            <a class="test-results__link test-results__btn--bottom" href="#">
                Завершить
            </a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.test-results {
    padding-top: 155px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 875px;
    margin-left: auto;
    margin-right: auto;

    &__link {
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 24px;
        line-height: 24px;
        color: #1B2559;
        align-self: flex-start;
        margin-bottom: 50px;
    }

    &__btn {
        font-size: 20px;
        line-height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        padding: 12px;
        width: 165px;
        max-width: 165px;
        background: #1294F2;
        border-radius: 6px;
        margin-left: auto;
    }

    &__btn--bottom {
        display: none;
    }

    &__inner {
        padding: 15px 70px 30px 20px;
        background: #FFFFFF;
        border-radius: 8px;
    }

    &__title {
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        margin-bottom: 12px;
        color: #1B2559;
    }

    &__text {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 20px;
        color: #1B2559;
    }
}
</style>