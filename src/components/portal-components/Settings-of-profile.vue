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
.profile-settings {
    background: #FFFFFF;
    border-radius: 16px;
    position: relative;
    padding: 30px 90px 105px 35px;
    display: flex;
    justify-content: space-between;
    gap: 50px;

    &__btn {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;

        text-align: center;
        padding: 12px;
        background: #1294F2;
        border-radius: 6px;
        color: #FFFFFF;
        position: absolute;
        bottom: 30px;
        right: 90px;
        width: 155px;
        max-width: 155px;

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
    gap: 30px;
}

.profile-settings-item-box {
    &__title {
        font-weight: 500;
        font-size: 22px;
        line-height: 24px;
        margin-bottom: 25px;
        color: #1B2559;

    }
}

.profile-settings-item-box-row {
    padding-left: 55px;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    gap: 15px;

    &:last-child {
        margin-bottom: 0;
    }

    &__text {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #60678B;
        width: 200px;

        span {
            color: #1294F2;
        }
    }

    &__input {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        border: 1px solid #60678B;
        border-radius: 4px;
        color: #60678B;
        padding: 12px 12px 12px 16px;
        width: 330px;

        &::placeholder {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #60678B;
        }
    }
}
</style>