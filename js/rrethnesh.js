// JavaScript Document

window.onload=function(){
	
};


function clickr(){
	//	if(document.getElementById("replika").style.display=="block"){
	document.getElementById("replika").style.zIndex=-1	;
	$("#replika").hide(1000);
	//document.getElementById("replika").style.display="none";
	document.getElementById("replika").style.backgroundColor="";
	document.getElementById("freplika").src="";
	document.getElementById("ergi").style.display="block";
	document.getElementById("erald").style.display="block";
	document.getElementById("erlind").style.display="block";
	document.getElementById("ergi2").style.display="block";
		
	
}

function click1(){
	
	
	document.getElementById("replika").style.zIndex=1;
	document.getElementById("replika").style.display="block";
	document.getElementById("replika").style.backgroundColor=" ";
	document.getElementById("erlind").style.display="none";
	document.getElementById("freplika").src="foto/erlind.jpg";
}

	


function click2(){
	
	
	document.getElementById("replika").style.zIndex=1;
	document.getElementById("replika").style.display="block";
	document.getElementById("replika").style.backgroundColor="";
	document.getElementById("erald").style.display="none";
	document.getElementById("freplika").src="foto/erald.jpg";

	
}


function click3(){
	
	
	document.getElementById("replika").style.zIndex=1;
	document.getElementById("replika").style.display="block";
	document.getElementById("replika").style.backgroundColor="";
	document.getElementById("ergi").style.display="none";
	document.getElementById("freplika").src="foto/ergi.jpg";

	
}

function click4(){
	
	
	document.getElementById("replika").style.zIndex=1;
	document.getElementById("replika").style.display="block";
	document.getElementById("replika").style.backgroundColor="";
	document.getElementById("ergi2").style.display="none";
	document.getElementById("freplika").src="foto/ergi2.jpg";

	
}


