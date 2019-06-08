<template>
  <div id="app">
    <div>
      <a href="./login.html">登录</a> |
      <a href="./about.html">关于我们</a>
    </div>
    <img :src="require('@/assets/logo.png')" alt="" />
    <HelloWorld></HelloWorld>
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld";
export default {
  components: {
    HelloWorld
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
