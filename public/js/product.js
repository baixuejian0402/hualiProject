$(function(){
    $(".dropdown-menu").hide();
    //1 导航栏下拉
    $(".guid-shopping>h3").parent().mouseover(function(){
        $(".guid-shopping>h3").next().show();
    })
    .mouseout(function(){
        $(".guid-shopping>h3").next().hide();
    })
    //2 轮播图
    //2.1创建定时器，循环播放一组图片
    var i=0,timer;
    var length=$(".carousel-inner>li").length-1;
    function loop(i,next){
        timer=setInterval(()=>{
            if(i>=length){next=0;i=-1;}
            $(".carousel-inner>li").eq(next).addClass("active").siblings().removeClass("active");
            $(".carousel-indicators>li").eq(next).addClass("current").siblings().removeClass("current");
            i=next;
            next++;
        },3000);
    }
    loop(i,i+1);
    //2.2 给指示器绑定鼠标移入，移出事件
    $(".carousel-indicators>li").hover(
        function(){
            var i=$(this).index();
            clearInterval(timer);
            task(i);
        },
        function(){
            var i=$(this).index();
            setInterval(loop(i,i+1),3000);
        }
    )
    //2.3给左右箭头绑定点击事件
    $(".carousel>a").click(function(e){
        e.preventDefault();
        //清除定时器
        clearInterval(timer);
        var i=$(".carousel-inner>li.active").index();//获取当前图片
        if($(this).hasClass("left")){
            i--;
            if(i<0) i=length;
            task(i);
        }else{
            i++;
            if(i>length) i=0;
            task(i);
        }
        //3s后恢复定时器
        setInterval(loop(i,i+1),3000);
    })
    //2.4 封装一个函数控制指示符跟对应的图片显示
    function task(i){
        $(".carousel-indicators>li").eq(i).addClass("current")
        .siblings().removeClass("current");
        $(".carousel-inner>li").eq(i).addClass("active")
        .siblings().removeClass("active");
    }
    //3 右侧快速导航栏
    $(".quick").on("mouseenter","ul>li>a",function(){
        $(this).next().show();
    })
    $(".quick").on("mouseleave","ul>li>a",function(){
        $(this).next().hide();
    })
})