<template>
    <div id="subpageone" v-wechat-title="$route.meta.title">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "subpageone"
    }
</script>

<style scoped>

</style>