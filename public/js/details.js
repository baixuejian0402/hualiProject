$(function(){
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
        $mask.css("display","block");
        $lgDiv.css("display","block");
      },
      function(){//当鼠标移出时，都隐藏
        $mask.css("display","none");
        $lgDiv.css("display","none");
      }
    )
    //为superMask绑定鼠标移动事件
    .mousemove(function(e){
      var offsetX=e.offsetX;
      var offsetY=e.offsetY;
      var top=offsetY-176/2;
      var left=offsetX-176/2;
      //如果top或left<0,就拉回0
      //如果top或left>184,就拉回184
      if(top<0) top=0; else if(top>184) top=184
      if(left<0) left=0;
      else if(left>184) left=184;
      $mask.css({top,left});
      //让lgDiv的背景图片位置跟随top和left移动
      $lgDiv.css(
        "background-position",
        `-${75/36*left}px -${75/36*top}px`
      )
    })
})
