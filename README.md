# zhili-index

嗨，我们是北京执理教育科技有限公司。这是我们公司的首页。

## 技术栈

- nuxt.js
- vue
- tailwindcss

## 项目安装

```
npm install
```

### 以服务器的形式运行（非生产环境）

```
npm run dev
```

### 编译静态站点

```
npm run generate
```

### 以服务器的形式运行编译好的静态站点

```
npm run start
```

### 部署至腾讯云 COS 对象存储（目前使用的方式）

#### 准备工作

1. 安装腾讯云提供的[COS 命令行工具](https://cloud.tencent.com/document/product/436/63144)，并添加至 PATH 中（你应该可以通过`coscli`运行他）。
2. 在项目根目录中建立`cos.yaml`文件，并正确配置其内容（此文件已加入`.gitignore`）。

#### 部署

1. 运行`npm run generate`编译静态站点。
2. 运行`npm run deploy`部署至 COS。
