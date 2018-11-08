//console.log("yeah");
//window.scrollBy(100, 100);
//alert(window.pageXOffset + window.pageYOffset);

var counter = document.getElementById('counter');

window.onscroll = function(){

                  var distance = window.pageYOffset;
                  console.log(distance);
                  document.getElementById('counter').innerHTML = Math.floor(distance / 450)+"<span>k</span>";




                  counter.style.top = 60 + distance +"px";
                  counter.style.transform="rotate("+ distance +"deg)";



                  if(distance > 2000){
                    counter.style.backgroundColor ="red";
                    } else {
                    document.getElementById('counter').style.backgroundColor ="#F2E2CF";
                    }




      }
