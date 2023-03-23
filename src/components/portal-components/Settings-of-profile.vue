<template>
    <form class="profile__settings profile-settings" action="#">
        <div class="profile-settings__item profile-settings-item">
            <div class="profile-settings-item__box profile-settings-item-box">
                <h4 class="profile-settings-item-box__title">
                    Личная информация
                </h4>
                <div class="profile-settings-item-box__row profile-settings-item-box-row">
                    <p class="profile-settings-item-box-row__text">
                        <span>*</span>
                        Страна:
                    </p>
                    <CustomSelect :options="['Казахстан', 'Казахстан 2', 'Казахстан 3']" :default="'Казахстан'"
                        class="select" />
                </div>
                <div class="profile-settings-item-box__row profile-settings-item-box-row">
                    <p class="profile-settings-item-box-row__text">
                        <span>*</span>
                        Город:
                    </p>
                    <CustomSelect :options="['Астана', 'Астана 2', 'Астана 3']" :default="'Астана'" class="select" />
                </div>
                <div class="profile-settings-item-box__row profile-settings-item-box-row">
                    <p class="profile-settings-item-box-row__text">
                        <span>*</span>
                        Номер телефона
                    </p>
                    <input class="profile-settings-item-box-row__input" type="phone" placeholder="+7 (708) 717 2438">
                </div>
            </div>
            <div class="profile-settings-item__box profile-settings-item-box">
                <h4 class="profile-settings-item-box__title">
                    Социальные сети
                </h4>
                <div class="profile-settings-item-box__row profile-settings-item-box-row">
                    <p class="profile-settings-item-box-row__text">
                        <span>*</span>
                        Аккаунт Telegram
                    </p>
                    <input class="profile-settings-item-box-row__input" type="text" placeholder="@lolikxxx">
                </div>
                <div class="profile-settings-item-box__row profile-settings-item-box-row">
                    <p class="profile-settings-item-box-row__text">
                        <span>*</span>
                        Номер Whatsapp
                    </p>
                    <input class="profile-settings-item-box-row__input" type="phone" placeholder="+7 (708) 717 2438">
                </div>
            </div>
        </div>
        <div class="profile-settings__item profile-settings-item">
            <div class="profile-settings-item__box profile-settings-item-box">
                <h4 class="profile-settings-item-box__title">
                    Настройки акканута
                </h4>
                <div class="profile-settings-item-box__row profile-settings-item-box-row">
                    <p class="profile-settings-item-box-row__text">
                        Язык
                    </p>
                    <CustomSelect :options="['Русский', 'Русский 2', 'Русский 3']" :default="'Русский'" class="select" />
                </div>
                <div class="profile-settings-item-box__row profile-settings-item-box-row">
                    <p class="profile-settings-item-box-row__text">
                        Часовой пояс
                    </p>
                    <CustomSelect :options="['GMT+6', 'GMT+6 2', 'GMT+6 3']" :default="'GMT+6'" class="select" />
                </div>
            </div>
            <div class="profile-settings-item__box profile-settings-item-box">
                <h4 class="profile-settings-item-box__title">
                    Изменение пароля
                </h4>
                <div class="profile-settings-item-box__row profile-settings-item-box-row">
                    <p class="profile-settings-item-box-row__text">
                        Текущий пароль
                    </p>
                    <input class="profile-settings-item-box-row__input" type="password" placeholder="***********">
                </div>
                <div class="profile-settings-item-box__row profile-settings-item-box-row">
                    <p class="profile-settings-item-box-row__text">
                        Новый пароль
                    </p>
                    <input class="profile-settings-item-box-row__input" type="password" placeholder="52vdvdvv481">
                </div>
                <div class="profile-settings-item-box__row profile-settings-item-box-row">
                    <p class="profile-settings-item-box-row__text">
                        Повторите пароль:
                    </p>
                    <input class="profile-settings-item-box-row__input" type="password" placeholder="***********">
                </div>
            </div>
        </div>
        <button class="profile-settings__btn" type="button" @click="$emit('clickOnButton')">
            Изменить
        </button>
    </form>
</template>

<script>
import CustomSelect from "../../components/portal-components/CustomSelect.vue";
export default {
    data() {
        return {

        }
    },
    components: {
        CustomSelect,
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/vars';
.profile-settings {
    background: #FFFFFF;
    border-radius: 16px;
    position: relative;

    @include adaptiv-value('padding-top', 30, 20, 1);
    @include adaptiv-value('padding-right', 90, 25, 1);
    @include adaptiv-value('padding-bottom', 105, 60, 1);
    @include adaptiv-value('padding-left', 35, 25, 1);
    display: flex;
    justify-content: space-between;
    @include adaptiv-value('gap', 50, 25, 1);

    &__btn {
        font-weight: 500;
        line-height: 24px;
        @include adaptiv-value('font-size', 20, 14, 1);
        text-align: center;
        @include adaptiv-value('padding', 12, 4, 1);
        background: #1294F2;
        border-radius: 6px;
        color: #FFFFFF;
        position: absolute;
        @include adaptiv-value('width', 155, 120, 1);
        @include adaptiv-value('max-width', 155, 120, 1);
        @include adaptiv-value('right', 90, 25, 1);
        @include adaptiv-value('bottom', 30, 20, 1);

        border: 1px solid transparent;
        transition: background 0.3s, color 0.3s, border 0.3s;
        &:hover {
            background: #fff;
            color: #1294F2;
            border: 1px solid #1294F2;
        }
    }
}

.profile-settings-item {
    display: flex;
    flex-direction: column;
    @include adaptiv-value('gap', 30, 25, 1);
}

.profile-settings-item-box {
    &__title {
        font-weight: 500;
        @include adaptiv-value('font-size', 22, 16, 1);
        line-height: 24px;
        @include adaptiv-value('margin-bottom', 25, 15, 1);
        color: #1B2559;

    }
}

.profile-settings-item-box-row {
    @include adaptiv-value('padding-left', 55, 0, 1);
    display: flex;
    align-items: center;
    @include adaptiv-value('margin-bottom', 25, 15, 1);
    @include adaptiv-value('gap', 15, 5, 1);

    &:last-child {
        margin-bottom: 0;
    }

    &__text {
        font-weight: 400;
        @include adaptiv-value('font-size', 20, 14, 1);
        line-height: 24px;
        color: #60678B;
        width: 200px;

        span {
            color: #1294F2;
        }
    }

    &__input {
        font-weight: 400;
        @include adaptiv-value('font-size', 16, 14, 1);
        line-height: 24px;
        border: 1px solid #60678B;
        border-radius: 4px;
        color: #60678B;
        @include adaptiv-value('padding-top', 12, 6, 1);
        @include adaptiv-value('padding-right', 12, 10, 1);
        @include adaptiv-value('padding-bottom', 12, 6, 1);
        @include adaptiv-value('padding-left', 16, 15, 1);
        @include adaptiv-value('width', 330, 175, 1);

        &::placeholder {
            font-weight: 400;
            @include adaptiv-value('font-size', 16, 14, 1);
            line-height: 24px;
            color: #60678B;
        }
    }
}
@media (max-width: 1850px) {
    .profile-settings {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
@media (max-width: 550px) {
    .profile-settings {
        margin-bottom: 25px;
    }
    .profile-settings-item-box-row__text {
        max-width: 85px;
    }
    .profile-settings-item-box-row {
        align-items: flex-start;
    }
}
</style>