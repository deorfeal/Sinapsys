<template>
    <div class="custom-select-lang" :tabindex="tabindex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
            {{ selected }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div v-for="(option, i) of options" :key="i" @click="
                selected = option;
            open = false;
            $emit('input', option);
                                          ">
                {{ option }}
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
        default: {
            type: String,
            required: false,
            default: null,
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            selected: this.default
                ? this.default
                : this.options.length > 0
                    ? this.options[0]
                    : null,
            open: false,
        };
    },
    mounted() {
        this.$emit("input", this.selected);
    },
};
</script>
  
<style lang="scss">
@import '../../assets/scss/vars';
.custom-select-lang {
    position: relative;
    @include adaptiv-value('width', 330, 175, 1);
    @include adaptiv-value('height', 50, 35, 1);
    @include adaptiv-value('min-height', 50, 35, 1);
    text-align: left;
    outline: none;
    line-height: 35px;
    max-width: 105px;
    background: #fff;
    
}

.custom-select-lang .selected {
    background-color: transparent;
    border: 1px solid #96A5B8;
    border-radius: 4px;
    font-weight: 500;
    @include adaptiv-value('font-size', 16, 14, 1);
    line-height: 24px;
    color: #96A5B8;
    cursor: pointer;
    user-select: none;

    @include adaptiv-value('padding-top', 8, 8, 1);
    @include adaptiv-value('padding-right', 13, 13, 1);
    @include adaptiv-value('padding-bottom', 8, 8, 1);
    @include adaptiv-value('padding-left', 16, 16, 1);
}

.custom-select-lang .selected.open {
    border-radius: 6px 6px 0px 0px;
}

.custom-select-lang .selected:after {
    position: absolute;
    content: "";
    background-image: url(../../../public/images/reg-two-arrow.svg);
    background-repeat: no-repeat;
    width: 32px;
    height: 32px;
    background-size: contain;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
}

.custom-select-lang .selected.open::after {
    transform: translateY(-20%) rotate(180deg);
    top: 11px !important;
}

.custom-select-lang .items {
    color: #2C2C2C;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid #96A5B8;;
    border-left: 1px solid #96A5B8;;
    border-bottom: 1px solid #96A5B8;;
    position: absolute;
    background-color: #fff;
    left: 0;
    right: 0;
    z-index: 1;
 
}

.custom-select-lang .items div {
    font-size: 16px;
    line-height: 24px;
    color: #96A5B8;
    padding: 10px 0;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    transition: background 0.3s;
}

.custom-select-lang .items div:hover {
    background-color: #f5f5f5;
}

.selectHide {
    display: none;
}
</style>
  