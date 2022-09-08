# lianxi

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### 移动端模版 + Rem 布局适配
0、vue2 + vant2
1、npm install postcss postcss-pxtorem --save-dev
2、npm install lib-flexible --save-dev
3、创建postcss.config.js
4、修改node_modules\lib-flexible\flexible.js文件的refreshRem，`width = width * dpr;`解决font-size最大为54px