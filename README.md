# react-template-h5

> react-template-h5

## 技术栈

- `react` + `react-dom` + `react-router-dom` + `react-redux` + `@rematch/core` + `antd-mobile` + `axios`
- 屏幕适配采用 `rem` 方案
- 对 `antd-mobile` 做了少量主题定制，主题文件 `/theme.json`

## 项目结构

- `/src/api/` 接口配置
- `/src/assets/` 静态资源 图片、css
- `/src/components/` 业务组件
- `/src/widgets/` 通用组件
- `/src/pages/` 页面
- `/src/router/` 路由
- `/src/utils/` 工具集 _提示组件，优先使用 utils/native.js_
- `/src/store/` 数据仓库
- `/static/` 引用外部静态依赖

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev --api=dev # dev 环境
npm run dev --api=sit # sit 环境
npm run dev --api=uat # uat 环境
npm run dev --api=prod # 生产 环境

# build for production with minification
npm run build --api=sit # sit 环境

# build for production and view the bundle analyzer report
npm run build  --api=sit --report
```

## Update Version

```bash
npm run tag # 更新版本号
```

## 关于缓存清除

- 缓存清除，是根据版本来处理的
- 默认执行 `npm run build` 命令时，会强制要求选择一个版本好 `a.b.c` 对应 `大版本.小版本.BUG修复`
- 【特别注意】：一定要保证 `/package.json` 的 `version` 与 `/static/version.json` 相同
- 由于 UI antd-mobile 中部分组件使用了原 react 中的 componentWillReceiveProps 生命周期函数进行一些处理，而在 react 17.X 版本中将该函数改名，故 install 时需要注意 react 版本
