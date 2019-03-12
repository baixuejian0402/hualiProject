$(function(){
    $("#upwd2").blur(function(){
        var upw1=$("#upwd1").val();
        var upw2=$("#upwd2").val();
        if(upw1===upw2){
            console.log("两次密码一致");
        }else{
            console.log("两次密码不一致");
        }
    })
})