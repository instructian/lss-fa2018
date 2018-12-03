



window.onscroll = function(){

var distance = window.pageYOffset;

if ( distance > 1000){
  document.getElementById("walk").classList.add("drop");
}else{
   document.getElementById("walk").classList.remove("drop");
}

}

css
#object{position:absolute;
top:1px;
transition:top 2s;
}

.drop{top:400px;}
