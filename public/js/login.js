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
    $(".input_box>input").focus(function(){
        $(this).parent().next().addClass("info-err");
    });
    $(".input_box>input").blur(function(){
        var con=$(this).val();
        var reg=/^\w{6,12}$/;
        if(reg.test(con)){
            $(this).parent().next().addClass("info-suc");
        }else{
            $(this).parent().next().addClass("info-err");
        }
    });
})