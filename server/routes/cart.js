const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建空路由器
var router=express.Router();
//创建路由

//1：将商品添加至购物车
router.get("/addcart",(req,res)=>{
    //0 判断用户是否登录
    var uid=req.session.uid;
    console.log(uid);
    if(!uid){
        res.send({code:-1,msg:"请登录"});
        return;
    }
    //1.获取参数 pid  count   
    var pid=req.query.pid;
    var count=req.query.count;
    //var price=req.query.price;
    var sql="SElECT cid FROM huali_shopping_cart WHERE pid=? AND uid=?";
    pool.query(sql,[pid,uid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            var sql=`UPDATE huali_shopping_cart SET count=count+${count} WHERE pid=${pid} AND uid=${uid}`;
        }else{
            var sql=`INSERT INTO huali_shopping_cart VALUES(NULL,${pid},${uid},${count})`;
        }
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0)
                res.send({code:1,msg:"添加成功"});
            else  res.send({code:-1,msg:"添加失败"});
        })
    })
});

//2 获取购物车列表
router.get("/list",(req,res)=>{
    //参数 uid
    //var uid=req.session.uid;
    var uid=1;
    if(!uid){
        res.send({code:-1,msg:"请登录"});
        return;
    }
    var output={};
    //多表查询
    var sql="SELECT c.cid,c.count,c.pid,c.uid,l.title,l.price";
    sql+=" FROM huali_shopping_cart c,huali_flower l";
    sql+=" WHERE l.fid=c.pid";
    sql+=" AND c.uid=?";
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        if(result.length>0)
        output.data=result;
        for(var i=0;i<output.data.length;i++){
            var fid=output.data[i].pid;
            (function(fid,i){
              pool.query('SELECT sm FROM huali_flower_pic WHERE fid=? LIMIT 1',[fid],(err,result)=>{
                output.data[i].pic=result[0].sm;
                //console.log(result);
              });
            })(fid,i);
        }
        setTimeout(() => {
            res.send(output);
        }, 100);
    })
})

//导出路由器
module.exports=router;