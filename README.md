# tsc-go


```

$ npm install -g gulp-cli

// 开发依赖
$ npm install --save-dev typescript gulp gulp-typescript

// 安装Browserify，tsify和vinyl-source-stream。 
// tsify是Browserify的一个插件，就像gulp-typescript一样，它能够访问TypeScript编译器。
// vinyl-source-stream会将Browserify的输出文件适配成gulp能够解析的格式，它叫做vinyl。
$ npm install --save-dev browserify tsify vinyl-source-stream

// Watchify启动Gulp并保持运行状态，当你保存文件时自动编译。 帮你进入到编辑-保存-刷新浏览器的循环中。
// Uglify帮你压缩代码，将花费更少的时间去下载它们。
$ npm install --save-dev watchify gulp-util

// 首先安装Uglify。 因为Uglify是用于混淆你的代码，所以我们还要安装vinyl-buffer和gulp-sourcemaps来支持sourcemaps。
$ npm install --save-dev gulp-uglify vinyl-buffer gulp-sourcemaps
```