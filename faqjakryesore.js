$(document).ready(function(){
    $("#carousel").carousel({interval: 2000, pause: "hover"});
    
    $(".item1").click(function(){
        $("#carousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#carousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#carousel").carousel(2);
    });
    $(".left").click(function(){
        $("#carousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#carousel").carousel("next");
    });
});


function shfaqButon()
{	var kthe=document.getElementById("butonFillim");
	if (document.documentElement.scrollTop > 200) {
        kthe.style.display = "block";
    } else {
        kthe.style.display = "none";
    }
}

function ktheFillim() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}

function shikoRezultat()
{
	var input, shuma = new Array(), totalvota=0;
	shuma[0]=0;
	shuma[1]=0;
	shuma[2]=0;
	shuma[3]=0;
	if (document.getElementById("i1").checked) {
		input=document.getElementById("i1").value;
	}
	else if (document.getElementById("i2").checked) {
		input=document.getElementById("i2").value;	
	}
	else if (document.getElementById("i3").checked) {
		input=document.getElementById("i3").value;
	}
	else if (document.getElementById("i4").checked) {
		input=document.getElementById("i4").value;
	}
	totalvota++;
	for(var i=1;i<=4;i++)
	{
		if(i==input)
		{
			var td=document.getElementById("d"+input);
			shuma[input-1]=((shuma[input-1]+1)/totalvota)*100+"%";
			td.innerHTML=shuma[input-1];
		}
		else
		{
			var td=document.getElementById("d"+i);
			td.innerHTML=(shuma[i-1]/totalvota)*100+"%";
		}
	}
}

