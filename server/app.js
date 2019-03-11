const express=require('express');
const pool=require("./pool");

// 创建服务器
var app=express();
app.listen(3000);
// 托管静态资源到public目录下
app.use(express.static('public'));

// 加载跨域访问模块
const cors=require('cors');
// 配置跨域访问模块，那个域名跨域访问允许
app.use(cors({
	'credentials':true,  ////跨域访问保存session
	'origin':'http://127.0.0.1:5500'
}));

// 加载express-session模块
const session=require("express-session");
// 配置session 对象
app.use(session({
    secret:"128为随机字符",  //自定义安全字符串
    resave:false,   //每次请求是否都更新数据
    saveUninitialized:true,  //初始化时保存数据
    cookie:{
        maxAge:1000*60*60*8   //数据保存时间
    }
}));

// 加载第三方的模块 body-parser 
// 针对post请求处理请求参数
// 如果配置成功 req.body 
const bodyParser=require("body-parser");
// 配置 对特殊json是否是自动转换 不转
app.use(bodyParser.urlencoded({
    extended:false
}));

app.get("/banners",(req,res)=>{
    var sql="SELECT * FROM huali_index_carousel";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})