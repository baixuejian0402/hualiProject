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
ul.onmouseover=function(){
  clearInterval(n);
}
ul.onmouseout=function(){
  n=setInterval(task,3000);
}
var cis=ul.nextElementSibling.children;
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