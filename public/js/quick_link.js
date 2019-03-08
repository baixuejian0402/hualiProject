$(function(){
    //1 右侧快速导航栏
    $(".quick").on("mouseenter","ul>li>a",function(){
        $(this).next().show();
    })
    $(".quick>ul>li").on("mouseleave",function(){
        $(this).children().eq(1).hide();
    })
})