//selecting the heading with color game, chossing all the box, selecting the container. 
var randomColor1=document.querySelectorAll("h1")[1];
var gridBox=document.querySelectorAll("div.grid > div");
var backcol=document.querySelector(".container");
var newGame=document.querySelector(".newcol");
var esy=document.querySelector(".easy");
var har=document.querySelector(".hard");
var message=document.querySelector("h2");
var div=document.createElement("div");
var grid=document.querySelector(".grid");
var noi;

//getting the random color

function randomColor(){
	return Math.round(Math.random()*255);
}

//storing the different color in randomCo

var randomCo="rgb"+"("+randomColor()+", "+randomColor()+", "+randomColor()+")";

//printing the random color in the second h1

$("h1:nth-of-type(2)").text(randomCo);

//having the random variable on which the desirable color would be develop

var p=Math.round(Math.random()*6);
function gridColor(){
	for (var i = 0; i < gridBox.length; i++) {
		gridBox[i].style.backgroundColor="rgb"+"("+randomColor()+","+randomColor()+","+randomColor()+")";
	    gridBox[p].style.backgroundColor=randomColor1.innerText;
	    console.log(p);
	     $(".grid >").css("opacity","1");
	     $(".grid >").css("visibility","visible");
    }
    
	};

gridColor();
window.addEventListener("load",function(){
for (var i = 0; i < gridBox.length; i++){
 gridBox[i].onclick=function(){
	  if(this.style.backgroundColor.replace(/\s/g,'')===randomColor1.innerText.replace(/\s/g,'')){
	      backcol.style.backgroundColor=randomColor1.innerText.replace(/\s/g,'');
	      message.textContent="Correct!!";
	      for (var j = 0; j < gridBox.length; j++) {
	              gridBox[j].style.backgroundColor=this.style.backgroundColor;
	      }
	  }
	 
	 else{
	      $(this).animate({opacity: 0}, 1000)

	    $("h2").text("Try Again!! Cap")
	 }
}
}
}
);

//adding events for new game
$(".newcol").on("click",function(){

$("h2").text("");
randomCo="rgb"+"("+randomColor()+", "+randomColor()+", "+randomColor()+")";
randomColor1.innerHTML=randomCo;
gridColor();

 for (var i = 0; i < gridBox.length; i++){
 	$
 	  gridBox[i].onclick=function(){
	  if(this.style.backgroundColor.replace(/\s/g,'')===randomColor1.innerText.replace(/\s/g,'')){
	      backcol.style.backgroundColor=randomColor1.innerText.replace(/\s/g,'');
	      message.textContent="Correct!!";
	      for (var j = 0; j <gridBox.length; j++) {
	              gridBox[j].style.backgroundColor=this.style.backgroundColor;
	      }
	  }
	  else{
	     $(this).animate({opacity: 0}, 1000)
	     $("h2").text("Try Again!! Cap")

	  }
   }
 }
});  
  


$(".hard").on("click",function(){
$("h2").text("");
randomCo="rgb"+"("+randomColor()+", "+randomColor()+", "+randomColor()+")";
randomColor1.innerHTML=randomCo;
gridColor();

 for (var i = 0; i < gridBox.length; i++){
 	
 	  gridBox[i].onclick=function(){
	  if(this.style.backgroundColor.replace(/\s/g,'')===randomColor1.innerText.replace(/\s/g,'')){
	      backcol.style.backgroundColor=randomColor1.innerText.replace(/\s/g,'');
	      message.textContent="Correct!!";
	      for (var j = 0; j <gridBox.length; j++) {
	              gridBox[j].style.backgroundColor=this.style.backgroundColor;
	      }
	  }
	  else{
	     $(this).animate({opacity: 0}, 1000)
	     $("h2").text("Try Again!! Cap")

	  }
   }
 }

}
);
 // for 3 blocks
$(".easy").on("click",function(){
   var randomCo="rgb"+"("+randomColor()+", "+randomColor()+", "+randomColor()+")";
   $("h2").text("");
   randomColor1.innerHTML=randomCo;
   gridColoro();
	     $(".grid >").css("opacity","1");

});

var l=Math.round(Math.random()*2);
function gridColoro(){
	for (var i = 0; i < gridBox.length; i++) {
		gridBox[i].style.backgroundColor="rgb"+"("+randomColor()+","+randomColor()+","+randomColor()+")";
	    gridBox[l].style.backgroundColor=randomColor1.innerText;
	    if(i>2){
	    	gridBox[i].style.visibility="hidden";
	        }
	    }
	    console.log("2");
	};
