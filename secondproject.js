let dollar=document.getElementById("dollar");
dollar.onfocus=function(){dollar.style.border="5px solid red";}
dollar.onblur=function(){dollar.style.border="2px dashed black";}
let dirham=document.getElementById("dirham");
dirham.onfocus=function(){dirham.style.border="5px solid blue";}
dirham.onblur=function(){dirham.style.border="2px dashed black";}
onload=function(){document.body.style.backgroundImage="url(IMAGES/black.png)";}
onresize=function(){document.body.style.backgroundImage="url(IMAGES/galaxy.png)";}
dollar.onkeyup=function(){
    dirham.value=(dollar.value)*10;
}
dirham.onkeyup=function(){
    dollar.value=(dirham.value)/10;
}

