<template>
    <div class="custom-select-entry" :tabindex="tabindex" @blur="open = false">
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
        selectStatus: {
            type: Boolean,
            required: false,
        }
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
    watch: {
        selectStatus() {
            console.log( 'smt 2' )
        }
    }
};
</script>
  
<style lang="scss">
@import '../../assets/scss/vars';

.custom-select-entry {
    gap: 5px;
    position: relative;
    @include adaptiv-value('width', 105, 80, 1);
    @include adaptiv-value('height', 50, 35, 1);
    @include adaptiv-value('min-height', 50, 35, 1);
    text-align: left;
    outline: none;
    line-height: 35px;
    max-width: 215px;
    background: #fff;

}

.custom-select-entry .selected {
    background-color: transparent;
    border: 1px solid #96A5B8;
    border-radius: 4px;
    font-weight: 500;
    @include adaptiv-value('font-size', 16, 14, 1);
    font-weight: 500;
    color: #96A5B8;
    line-height: 16px;

    cursor: pointer;
    user-select: none;

    @include adaptiv-value('padding-top', 12, 8, 1);
    @include adaptiv-value('padding-right', 12, 13, 1);
    @include adaptiv-value('padding-bottom', 12, 8, 1);
    @include adaptiv-value('padding-left', 16, 16, 1);
}

.custom-select-entry .selected.open {
    border-radius: 0 0 6px 6px;
}

.custom-select-entry .selected:after {
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

.custom-select-entry .selected.open::after {
    transform: translateY(-35%) rotate(180deg);
    top: 14px !important;
}

.custom-select-entry .items {
    color: #2C2C2C;
    border-radius: 6px 6px 0px 0px;
    overflow: hidden;
    border-top: 1px solid #96A5B8;
    ;
    border-right: 1px solid #96A5B8;
    ;
    border-left: 1px solid #96A5B8;
    ;
    position: absolute;
    background-color: #fff;
    left: 0;
    right: 0;
    bottom: 50px;
    z-index: 1;
}

.custom-select-entry .items div {
    font-size: 16px;
    line-height: 24px;
    color: #96A5B8;
    padding: 10px 0;
    padding-left: 1em;
    cursor: pointer;
    user-select: none;
    transition: background 0.3s;
    &:hover {
        color: #1294F2;
    }
}

.custom-select-entry .items div:hover {

}

.selectHide {
    display: none;
}
</style>
  