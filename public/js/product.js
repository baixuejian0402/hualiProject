$(function(){
    $(".dropdown-menu").hide();
    //导航栏下拉
    $(".guid-shopping>h3").parent().mouseover(function(){
        $(".guid-shopping>h3").next().show();
    })
    .mouseout(function(){
        $(".guid-shopping>h3").next().hide();
    })
    //轮播图
    //创建定时器，循环播放一组图片
    var i=0,timer;
    function loop(i,next){
        timer=setInterval(()=>{
            if(i>=2){next=0;i=-1;}
            $(".carousel-inner>div").eq(next).addClass("active").siblings().removeClass("active");
            $(".carousel-indicators>li").eq(next).addClass("current").siblings().removeClass("current");
            i=next;
            next++;
        },3000);
    }
    loop(i,i+1);
    //给指示器绑定鼠标移入，移出事件
    $(".carousel-indicators>li").hover(
        function(){
            var i=$(this).index();
            clearInterval(timer);
            $(this).addClass("current")
            .siblings().removeClass("current");
            $(".carousel-inner>div").eq(i).addClass("active")
            .siblings().removeClass("active");
        },
        function(){
            var i=$(this).index();
            setInterval(loop(i,i+1),3000);
        }
    )
    //给左右箭头绑定点击事件
    $(".carousel>a").click(function(e){
        //清除定时器
        clearInterval(timer);
        e.preventDefault();
        var i=$(".carousel-inner>div.active").index();//获取当前图片
        if($(this).hasClass("left")){
            i--;
            if(i<0) i=2;
            task(i);
        }else{
            i++;
            if(i>2) i=0;
            task(i);
        }
        //3s后恢复定时器
        setInterval(loop(i,i+1),3000);
    })
    function task(i){
        $(".carousel-indicators>li").eq(i).addClass("current")
        .siblings().removeClass("current");
        $(".carousel-inner>div").eq(i).addClass("active")
        .siblings().removeClass("active");
    }
})