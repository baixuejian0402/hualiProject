setInterval(task,3000);
  function task(){
    var ul=document.getElementsByClassName("carousel_inner")[0];
    var img=ul.querySelector("li>a>img.show");
    img.className="";
    if(img===ul.children[4].children[0].children[0]){
      ul.children[0].children[0].children[0].className="show";
    }else
    img.parentNode.parentNode.nextSibling.children[0].children[0].className="show";
  }