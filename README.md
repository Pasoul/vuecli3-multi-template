# vue cli3 多页demo


## 如何使用public文件夹

`public`下的文件只会简单的复制，不会经过`webpack`编译：

以`public/styles/reset.css`为例，引入方式：

1. 在`public/index.html`引入，通过`<%= BASE_URL %> `设置链接前缀
```css
<link rel="stylesheet" href="<%= BASE_URL %>styles/reset.css" />
```
2. 在`pages/index/main.js`通过`import`导入
```js
import "../../../public/styles/reset.css";
```


以`public/images/test.png`为例，引入方式：
- 在模板中，你需要向你的组件传入基础 URL：
```js
data () {
  return {
    publicPath: process.env.BASE_URL
  }
}
```
- 然后：
```
<template>
  <img :src="`${publicPath}my-image.png`">
</template>
```

- `BASE_URL` - 会和 `vue.config.js` 中的 `publicPath` 选项相符，即你的应用会部署到的基础路径

[更多关于环境变量的解释](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E5%9C%A8%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BE%A7%E4%BB%A3%E7%A0%81%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)

### 开发模式
```
npm run serve
```
### 打包
```
npm run build
```
### Run your tests
```
npm run test
```
### Lints and fixes files
```
npm run lint
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
