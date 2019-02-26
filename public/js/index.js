$(".cate-ysh").on("mouseover",function(){
  $(".cate-ysh .right-menu").addClass("show");
})
$(".cate-ysh").on("mouseout",function(){
  $(".cate-ysh .right-menu").removeClass("show");
})
$(".cate-cake").on("mouseover",function(){
  $(".cate-cake .right-menu").addClass("show");
})
$(".cate-cake").on("mouseout",function(){
  $(".cate-cake .right-menu").removeClass("show");
})
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
  floor.each(function(){
    if(scrollTop>=floor.first().offset().top-winH/2 &&scrollTop<=floor.last().offset().top-winH/2+floor.last().height()){
      if(scrollTop>=$(this).offset().top-winH/2){
        $(".layout").addClass("show");
        li.eq($(this).index()-2).addClass("scroll").siblings().removeClass("scroll");
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

// 轮播图
//循环播放一组图片
//定义函数
//var $ul=$(".carousel>.carousel-inner");
// function task(){
//   var $li=$ul.children(".active");
//   $ul.children().addClass("");
//   if($li.next()!=null){
//     $li.next().addClass("active");
//   }else{
//     $ul.children(":first").addClass("active");
//   } 
// }
// //启动定时器
// var n=setInterval(task,3000);
// //清除定时器
// $(".carousel").on("mouseover",function(){
//   clearInterval(n);
// })
// $(".carousel").on("mouseout",function(){
//   n=setInterval(task,3000);
// })
// $(".carousel-indicators").on("mouseenter","li",function(){
//   clearInterval(n);
//   $(".carousel>.carousel-inner>li").addClass(" ");
//   var $id=$(this).css({
//     cursor:"pointer",
//     background:"#FF6A00"
//   }).attr("data-target");
//   $ul.children($id).addClass("active");
// })
// $(".carousel-indicators").on("mouseleave","li",function(){
//   $(this).css("background","#7F686B");
// })

//循环播放一组图片
//定义函数
var ul=document.querySelector(".carousel>ul");
function task(){
  var li=ul.querySelector("li.active");
  li.className="";
  if(li.nextElementSibling!=null){
    li.nextElementSibling.className="active";
  }else 
    ul.children[0].className="active"; 
}
//启动定时器
var n=setInterval(task,3000);
//清除定时器
var cis=ul.nextElementSibling.children[0].children;
for(var cir of cis){
  cir.onmouseover=function(){
    clearInterval(n);
    var cir=this;
    cir.style.cursor="pointer";
    cir.style.background="#FF6A00";
    var lis=ul.children;
    for(var li of lis){
      li.className="";
    }
    var id=cir.getAttribute("data-target");
    var li=document.querySelector(id);
    li.className="active";
  }
  cir.onmouseout=function(){
    var cir=this;
    cir.style.background="#7F686B";
  }
}