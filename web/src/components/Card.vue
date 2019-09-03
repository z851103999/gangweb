<template>

    <div class="card bg-white p-3 mt-3">
        <div class="card-header d-flex pb-3 ai-center ">
            <i class="iconfont" :class="`${icon}`"></i>
            <div class="fs-xl px-3">{{title}}</div>
            <i class="iconfont icon-gengduo flex-1 text-right mr-3"></i>
        </div>
        
        <div class="card-boby">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card.vue",
        props: {
            title: {type: String, required: true},
            icon: {type: String, required: true}
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/_variables.scss';
.card{
    .card-header{
        border-bottom:1px solid $border-color;
    }
    border-bottom: 1px solid $border-color;
}
</style>