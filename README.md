# family-template
我们的系统模板,基于webpack构建。有两种类型使用vue ssr, 和不使用ssr

### 下载
#### 1.通过family-cli下载此模板
```
详见 https://github.com/hurong/family-cli
```

#### 2.分支说明
```
ssr: 使用了服务端渲染的模板

master: 不使用服务端渲染
```

#### 3.技术栈
```
webpack 构建

typescript

vue(使用vue-component-class)

vue-router

vuex

axios

family-ui(ui框架，支持按需加载,使用详见https://github.com/hurong/family-ui)
```

### 根据用户输入，更新package.json信息（如项目名，作 者，项目描述）
```
 1.handlebars 模板处理

 2.Node.js的fs模块,进行读写操作

```

### 这个分支是使用ssr的模板
