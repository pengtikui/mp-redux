# mp-redux

[![npm](https://img.shields.io/npm/v/mp-redux.svg?style=flat-square)](https://www.npmjs.com/package/mp-redux)
[![GitHub issues](https://img.shields.io/github/issues/pengtikui/mp-redux.svg?style=flat-square)](https://github.com/pengtikui/mp-redux/issues)
![npm bundle size](https://img.shields.io/bundlephobia/min/mp-redux.svg?style=flat-square)
[![npm](https://img.shields.io/npm/dt/mp-redux.svg?style=flat-square)](https://www.npmjs.com/package/mp-redux)
[![GitHub](https://img.shields.io/github/license/pengtikui/mp-redux.svg?style=flat-square)](https://github.com/pengtikui/mp-redux/blob/master/LICENSE)

Wechat Mini Program bindings for Redux

⚠️ 暂时不要用于生产环境！

## 特性

* 支持 npm 方式引用
* 内置 Redux
* API 与 `react-redux` 一致

## 使用

> 需要依赖微信开发者工具的 npm 构建功能，具体详情可查阅[官方 npm 文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

1. 安装

```bash
npm install mp-redux
# 或
yarn add mp-redux
```

2. 将 `store` 绑定到 `App` 上

```javascript
// app.js
import { Provider } from 'mp-redux';
import store from 'your_store_path';

App(Provider(store)({
  onLaunch() {
    console.log('onLaunch');
  },
}));
```

3. 通过 `connect` 连接页面和 `store`

```javascript
import { connect } from 'mp-redux';

const mapStateToData = state => ({});
const mapDispatchToThis = dispatch => ({});

Page(connect(mapStateToData, mapDispatchToThis)(
  onLoad() {
    console.log('onLoad');
  },
));
```

`connect` 方法需要传入两个参数 `mapStateToData` 和 `mapDispatchToThis`，然后就可以通过 `this.data.xx` 获取 `mapStateToData` 返回的数据，通过 `this.xx` 获取 `mapDispatchToThis` 返回的方法

> `mapStateToData` 和 `mapDispatchToThis` 等同于 `react-redux` 的 `mapStateToProps` 和 `mapDispatchToProps`

4. 构建 npm

点击微信开发者工具中的菜单栏：工具 -> 构建 npm
