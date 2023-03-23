<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
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
.custom-select {
    position: relative;
    @include adaptiv-value('width', 330, 175, 1);
    @include adaptiv-value('height', 50, 35, 1);
    @include adaptiv-value('min-height', 50, 35, 1);
    text-align: left;
    outline: none;
    line-height: 35px;
    max-width: 330px;
}

.custom-select .selected {
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #60678B;
    font-weight: 400;
    @include adaptiv-value('font-size', 16, 14, 1);
    line-height: 24px;
    color: #60678B;
    cursor: pointer;
    user-select: none;

    @include adaptiv-value('padding-top', 12, 6, 1);
    @include adaptiv-value('padding-right', 10, 10, 1);
    @include adaptiv-value('padding-bottom', 12, 6, 1);
    @include adaptiv-value('padding-left', 16, 15, 1);
}

.custom-select .selected.open {
    border-radius: 6px 6px 0px 0px;
}

.custom-select .selected:after {
    position: absolute;
    content: "";
    background-image: url(../../../public/images/setting-arrow-down-icon.svg);
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    background-size: contain;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
}

.custom-select .selected.open::after {
    transform: rotate(180deg);
    top: 11px !important;
}

.custom-select .items {
    color: #2C2C2C;
    border-radius: 0px 0px 6px 6px;
    overflow: hidden;
    border-right: 1px solid #666666;;
    border-left: 1px solid #666666;;
    border-bottom: 1px solid #666666;;
    position: absolute;
    background-color: #fff;
    left: 0;
    right: 0;
    z-index: 1;
 
}

.custom-select .items div {
    font-size: 16px;
    line-height: 24px;
    color: #60678B;
    padding: 10px 0;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    transition: background 0.3s;
}

.custom-select .items div:hover {
    background-color: #dcdcdc;
}

.selectHide {
    display: none;
}
</style>
  