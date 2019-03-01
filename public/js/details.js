$(function(){
  $(".dropdown-menu").hide();
  //导航栏下拉
  $(".guid-shopping>h3").parent().mouseover(function(){
    $(".guid-shopping>h3").next().show();
  })
  .mouseout(function(){
    $(".guid-shopping>h3").next().hide();
  })
  /*鼠标进入小图片，切换中图片和大图片*/
  //保存中图片元素:
  var $mImg=$(".pro-preview>.pro-big-img>img");
  var $lgDiv=$("#div-lg");
  var $imgs=$(".pro-preview>.pro-sm-img");
  //利用冒泡: 为imgs绑定鼠标进入
  //当鼠标进入img时，才触发
  $imgs.on("mouseenter","img",function(){
      //获得当前img的data-md和data-lg，分别给中图片和大图片设置新路径
      var $img=$(this);
      $mImg.attr("src",$img.attr("data-md"));
      $lgDiv.css(
          "background-image",
          `url(${$img.attr("data-lg")})`
      );
  })
  /*鼠标进出中图片，控制遮罩层和大图片的显示隐藏*/
  //查找遮罩层:
  var $mask=$("#mask");
  //查找supermask: 作为中图片和半透明遮罩层上层的保护层
  var $smask=$("#super-mask");
  $smask.hover(
    function(){//当鼠标进入时，都显示
      $mask.show();
      $lgDiv.show();//.css("display","block")
    },
    function(){//当鼠标移出时，都隐藏
      $mask.hide();
      $lgDiv.hide();//.css("display","none")
    }
  )
  //为superMask绑定鼠标移动事件
  .mousemove(function(e){
    $(this).css("cursor","pointer");
    var offsetX=e.offsetX;
    var offsetY=e.offsetY;
    var top=offsetY-176/2;
    var left=offsetX-176/2;
    //如果top或left<0,就拉回0
    //如果top或left>224,就拉回224
    if(top<0) top=0; else if(top>224) top=224
    if(left<0) left=0;
    else if(left>224) left=224;
    $mask.css({top,left});
    //让lgDiv的背景图片位置跟随top和left移动
    $lgDiv.css(
      "background-position",
      `-${0.7*left}px -${top}px`
    )
  })
  // 购物保障图片切换
  $("#Server>.tab-indicators").on("mouseover","li",function(){
    var id=$(this).attr("data-target");
    $(id).show().siblings().hide();
  })
})
