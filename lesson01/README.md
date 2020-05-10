# vue-cli3.x+ 框架搭建

    author: 则丸
    weChat: yuwq1098

## vue-cli3.x + 框架搭建的 环境准备

    git  smartgit
    node
    npm  cnpm
    yarn  tyarn
    yarn global add @vue/cli
    vue --version （验证是否安装成功）

## 创建新的 vue cli3.x +项目

    vue create myapp
    default (babel, eslint) -- 默认功能（包含 eslint，babel）
    Manually select features -- 手动选择功能

### 选择有星号标记的功能， 按“回车键”标记选中

> bable 、typescript、渐进式应用支持， vue-router、vuex、css 预编译器、代码检测工具

    * (_) Babel
    * (_) TypeScript
    * (_) Progressive Web App (PWA) Support
    * (_) Router
    * (_) Vuex
    * (_) CSS Pre-processors
    * (_) Linter / Formatter
    * ( ) Unit Testing
    * ( ) E2E Testing

### 对应选择的功能

    Vue CLI v4.3.1

    ? Please pick a preset: Manually select features

    ? Check the features needed for your project: Babel, TS, PWA, Router,
    Vuex, CSS Pre-processors, Linter

    ? Use class-style component syntax? Yes
        （是否使用类风格的组件语法）

    ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
        （在 typescript 周边使用 Babel）

    ? Use history mode for router? (Requires proper server setup for index fallback in production) No
        （使用 history 的路由模式， 我们选择使用 hash）

    ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Less
        (选择预编译器，我们用 less)

    ? Pick a linter / formatter config: Prettier
        (选择代码检测工具，我们用 eslint+Prettier)

    ? Pick additional lint features: Lint on save
        (选择额外的检测功能，我们选择检测并保存)

    ? Where do you prefer placing config for Babel, ESLint, etc.?
        （选择以怎样的方式去生成并保存 babel、eslint 等功能的配置，1. 在专用的配置文件中、2.在 package.json 中 ）

    > In dedicated config files
    > In package.json
    > ? Save this as a preset for future projects? (y/N)
    > （是否将其保存为未来项目的预置）
