$(function(){
    $("#btn").click(function(){
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        console.log(uname,upwd);
        $.ajax({
            url:"http://127.0.0.1:3000/user/login",
            type:"post",
            data:`uname=${uname}&upwd=${upwd}`,
            dataType:"json",//自动JSON.parse()
            //提前给success赋值一个回调函数
            //在请求成功后自动执行
            //参数data可自动获得服务端返回的数据
            success:function(data){
                console.log(data);
            }
        })
    })
})