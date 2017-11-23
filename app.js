/**
 * 应用程序的启动入口文件
 */

//加载express模块11
var express = require('express');

//加载模板处理模块
var swig = require('swig');

//创建app应用  == NodeJs Http.createServer();
var app = express();

/**
 * 配置应用模板
 * 定义当前应用所使用的模板引擎
 * 参数1：模板引擎的名称，同时也是模板文件的后缀；参数2：表示用于解析处理模板内容的方法
 *
 */
app.engine('html',swig.renderFile);

//设置模板文件存放的目录
//参数1：必须是views；参数2：目录
app.set('views','./views');

//注册所使用的模板引擎；
//参数1:必须是view engine；参数2：和app.engine是一致的
app.set('view engine','html');

//在开发过程中，需要取消模板缓存;默认是开启页面缓存的，
//在开发过程中需要不停的调试页面文件，如果开启缓存在更新文件后就要重启服务
swig.setDefaults({case:false});

/**
 * 首页
 * req  request对象
 * res  response对象
 * next 函数
 *
 */
app.get('/',function (req, res, next) {
    //res.send('<h1>欢迎光临我的博客</h1>');
    /**
     * 读取views目录下的指定文件，解析并返回给客户端
     * 参数1：表示模板的文件，相当于views目录  views/index.html
     * 参数2：传递给模板使用的数据
     */
    res.render('index');

});


//监听http请求
app.listen('8090');

