$(function(){
  $.ajax({
    url:"http://127.0.0.1:3000/banners",
    type:"get",
    dataType:"json",//自动JSON.parse()
    //提前给success赋值一个回调函数
    //在请求成功后自动执行
    //参数data可自动获得服务端返回的数据
    success:function(data){
      console.log(data);
      var html="",str="";
      //循环添加轮播图片片段以及对应的指示符
      for(var item of data){
        html+=`<li>
                  <a href="javascript:;">
                      <img src="${item.src}">
                  </a>
              </li>`;
        str+=`<li></li>`;
      }
      $(".carousel>.carousel-inner").html(html);
      $(".carousel-indicators").html(str);
      $(".carousel-indicators>li").eq(0).addClass("current");
      // 轮播图
      // 保存变量
      var i=0,timer;
      var length=$(".carousel-inner>li").length-1;
      // 使用定时器循环播放一组图片
      function loop(i,next){
        timer=setInterval(()=>{
          if(i>=length){next=0;i=-1}
          $(".carousel-inner>li").eq(next).addClass("active").siblings().removeClass("active");
          $(".carousel-indicators>li").eq(next).addClass("current").siblings().removeClass("current");
          i=next;
          next++;
        },3000)
      }
      loop(i,i+1);
      //为指示符绑定事件
      $(".carousel-indicators>li").hover(
        function(){
            var i=$(this).index();
            clearInterval(timer);
            task(i);
        },
        function(){
            var i=$(this).index();
            loop(i,i+1);
        }
      )
      //为左右箭头绑定点击事件
      $(".carousel>.content>a").click(function(e){
        e.preventDefault();
        //清除定时器
        clearInterval(timer);
        var i=$(".carousel-inner>li.active").index();//获取当前图片
        if($(this).hasClass("left")){
            i--;
        }else{
            i++;
        }
        if(i<0) i=length;
        if(i>length) i=0;
        task(i);
        //3s后恢复定时器
        loop(i,i+1);
      })
      function task(i){
        $(".carousel-indicators>li").eq(i).addClass("current")
        .siblings().removeClass("current");
        $(".carousel-inner>li").eq(i).addClass("active")
        .siblings().removeClass("active");
      }
    }
  })


  //导航栏右出
  $(".right-menu").hide();
  $(".cate-ysh").hover(
    function(){
      $(".cate-ysh>a").next().addClass("show");
    },
    function(){
      $(".cate-ysh>a").next().removeClass("show");
    }
  );
  $(".cate-cake").hover(
    function(){
      $(".cate-cake>.gift").next().addClass("show");
    },
    function(){
      $(".cate-cake>.gift").next().removeClass("show");
    }
  );
  $("a").on("click",function(e){
    e.preventDefault();
  })
  // // 滚动楼层
  // var floor=$(".container>.floor");
  // var winH=$(window).height();
  // window.onscroll=function(){
  //   //获得滚动过的距离——网页顶部超出文档显示区顶部的距离
  //   var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
  //   if(scrollTop>=766 && scrollTop<1482){
  //     $(".layout").addClass("show")
  //     .children(":first").addClass("scroll")
  //     .siblings().removeClass("scroll");
  //   }else if(scrollTop>=1482 && scrollTop<2198){
  //     $(".layout").addClass("show")
  //     .children(":eq(1)").addClass("scroll")
  //     .siblings().removeClass("scroll");
  //   }else if(scrollTop>=2198 && scrollTop<2914){
  //     $(".layout").addClass("show")
  //     .children(":eq(2)").addClass("scroll")
  //     .siblings().removeClass("scroll");
  //   }else if(scrollTop>=2914 && scrollTop<3630){
  //     $(".layout").addClass("show")
  //     .children(":last").addClass("scroll")
  //     .siblings().removeClass("scroll");
  //   }
  //   else $(".layout").removeClass("show").children().css("background","");
  // }
  // $(".layout").on("click","li",function(){
  //   var t=floor.eq($(this).index()).offset().top-winH/2;
  //   $("body,html").animate({
  //     "scrollTop":t
  //   },500);
  // })
  
  var floor=$(".container>.floor");
  var winH=$(window).height();
  var li=$(".layout").find("li");
  $(window).on("scroll",function(){
    var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
    //console.log(scrollTop);
    floor.each(function(i,elem){
      if(scrollTop>=floor.first().offset().top-winH/2 &&scrollTop<=floor.last().offset().top-winH/2+floor.last().height()){
        if(scrollTop>=$(elem).offset().top-winH/2){
          $(".layout").addClass("show");
          li.eq($(elem).index()-2).addClass("scroll").siblings().removeClass("scroll");
        } 
      }else{
        $(".layout").removeClass("show");
      }
    })
  })
  $(".layout").on("click","li",function(){
    var t=floor.eq($(this).index()).offset().top-winH/2;
    $("body,html").animate({
      "scrollTop":t
    },500);
  })
})
