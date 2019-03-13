const express=require('express');
//引入连接池
const pool=require('../pool');
//创建空路由器
var router=express.Router();

//功能一：获取轮播图片
router.get("/banners",(req,res)=>{
    console.log(req.session.uid);
    var sql="SELECT * FROM huali_index_carousel";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
})


//导出路由器
module.exports=router;