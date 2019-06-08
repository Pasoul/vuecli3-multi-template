<template>
  <div id="login">
    登录页
    <a href="./user">个人中心</a>
    <img width="100" height="100" :src="`${publicPath}images/test.png`" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style lang='scss' scoped>
</style>