//循环播放一组图片
//定义函数
var ul=document.body.children[1].children[0];
function task(){
  var li=ul.querySelector("li.show");
  li.className="";
  if(li.nextElementSibling!=null){
    li.nextElementSibling.className="show";
  }else 
  ul.children[0].className="show"; 
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