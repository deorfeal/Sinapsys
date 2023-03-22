<template>
    <div class="main main-grow">
        <div class="main__test test">
            <a class="test__link" href="#">
                <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.4396 21.6358C18.2404 21.6364 18.0436 21.5988 17.8636 21.5259C17.6836 21.453 17.5251 21.3466 17.3996 21.2145L10.9596 14.3821C10.7635 14.1783 10.6562 13.9228 10.6562 13.659C10.6562 13.3953 10.7635 13.1397 10.9596 12.9359L17.6262 6.10356C17.8526 5.87101 18.1778 5.72477 18.5303 5.69701C18.8829 5.66925 19.2339 5.76224 19.5062 5.95553C19.7785 6.14881 19.9498 6.42656 19.9823 6.72767C20.0148 7.02878 19.9059 7.32858 19.6796 7.56113L13.7196 13.6647L19.4796 19.7683C19.6426 19.9354 19.7462 20.139 19.778 20.3548C19.8099 20.5707 19.7686 20.7898 19.6592 20.9862C19.5498 21.1827 19.3768 21.3483 19.1607 21.4634C18.9445 21.5785 18.6943 21.6383 18.4396 21.6358Z"
                        fill="#1B2559" />
                </svg>
                <span>
                    Тест по электронной почте
                </span>
            </a>
            <div class="test__inner">
                <div class="test__box">
                    <h1 class="test__box-title">
                        Тест по электронной почте
                    </h1>
                    <p class="test__box-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    </p>
                </div>
                <div class="test__buttons">
                    <a class="test__buttons-link" href="#">
                        Назад
                    </a>
                    <a class="test__buttons-btn" href="#">
                        <span>
                            Перейти
                        </span>
                        &nbsp;
                        <span>
                            к тесту
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../assets/scss/vars';
.test {
    max-width: 1120px;
    margin-left: 30px;
    margin-right: 30px;
    &__link {
     
        display: flex;
        align-items: center;
        gap: 10px;
        @include adaptiv-value('margin-bottom', 25, 20, 1);
        display: none;
        span {
            font-size: 16px;
            line-height: 24px;
            color: #1B2559;
        }
    }

    &__inner {
        background: #FFFFFF;
        border-radius: 8px;
        padding: 30px 35px 30px 35px;
    }

    &__box {}

    &__box-title {
        font-weight: 600;
        @include adaptiv-value('font-size', 24, 16, 1);
        @include adaptiv-value('line-height', 24, 24, 1);
        @include adaptiv-value('margin-bottom', 25, 4, 1);
        color: #1B2559;
    }

    &__box-text {
        font-weight: 400;
        line-height: 24px;
        @include adaptiv-value('font-size', 16, 12, 1);
        margin-bottom: 75px;
        color: #60678B;
    }

    &__buttons {
        display: flex;
        @include adaptiv-value('gap', 50, 25, 1);
        align-items: center;
        justify-content: center;
    }

    &__buttons-link {
        text-align: center;
        color: #1294F2;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #1294F2;
        border-radius: 6px;
        transition: background 0.3s, color 0.3s;

        @include adaptiv-value('font-size', 20, 16, 1);
        @include adaptiv-value('line-height', 24, 24, 1);
        @include adaptiv-value('padding', 12, 6, 1);
        @include adaptiv-value('width', 185, 125, 1);
        @include adaptiv-value('max-width', 185, 125, 1);
        &:hover {
            background: #1294F2;
            color: #fff;
        }
    }

    &__buttons-btn {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;

        background: #1294F2;
        border-radius: 6px;

        @include adaptiv-value('font-size', 20, 16, 1);
        @include adaptiv-value('line-height', 24, 24, 1);
        @include adaptiv-value('padding', 13, 6, 1);
        @include adaptiv-value('width', 220, 125, 1);
        @include adaptiv-value('max-width', 220, 125, 1);

        border: 1px solid transparent;
        transition: background 0.3s, color 0.3s, border 0.3s;
        &:hover {
            background: #fff;
            color: #1294F2;
            border: 1px solid #1294F2;
        }
    }
}

@media (max-width: 1250px) {
    .test__buttons-btn:last-child {
        span:last-child {
            display: none;
        }
    }
}

@media (max-width: 550px) {
    .test__inner {
        padding: unset;
        background: unset;
    }
    .test__box {
        background: #fff;
        padding: 15px 22px 13px 22px;
        border-radius: 8px;
        margin-bottom: 20px;
    }
    .test__box-text {
        margin-bottom: 0;
    }
    .test__link {
        display: flex;
    }
}
</style>