<template>
    <a ref="currentElement" class="entrance-form-select-box__list-link" @click="sendInfoToParent" :id="this.word.id">
        {{ this.word.value[0] }}
    </a>
</template>
  
<script>
export default {
    name: "Search-item.vue",
    props: ['word'],
    data() {
        return {
        };
    },
    methods: {
        sendInfoToParent() {
            this.$emit('sendInfoToParent', this.word, this.$refs.currentElement)
        }
    }
};
</script>

<style lang="scss">
@import '../../assets/scss/vars';
.reg-two {
    .entrance-form-select-box__list-link {
        font-size: 16px;
        line-height: 24px;
        @include adaptiv-value("font-size", 16, 12, 1);
        @include adaptiv-value("line-height", 24, 15, 1);
        color: #96A5B8;
        &:hover {
            color: #1294F2;
        }
        cursor: pointer;
    }
    .entrance-form-select-box__list-link--active {
        color: #1294F2;
    }
}
</style>