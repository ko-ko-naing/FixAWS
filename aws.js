               
let btn = document.querySelector(".mobile-menu-btn");
let clickTimes = 0;
btn.addEventListener("click",function(){

 var navList = document.querySelector(".nav-right");
 navList.classList.toggle("show-nav");


  clickTimes +=1;
  console.log(clickTimes);

  var icon = document.querySelector(".fa");

  for(var i=0;i < clickTimes; i++){
   if((clickTimes%2)== 0){
     icon.classList.remove("fa-times");
     icon.classList.add("fa-bars");
     console.log('bars');
    }else{
     icon.classList.remove("fa-bars");
     icon.classList.add("fa-times");
     console.log("cross");
    }
  }


  
});


//for nav bar active
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

 