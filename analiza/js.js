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

window.onload=function(){
	
	$(".accordion1").accordion({collapsible: true, active: false});
};

function mepak(id)
{
	var p=document.getElementById(id);
	if(p.innerHTML=="[...shiko me shume]")
		p.innerHTML="[...shiko me pak]";
	else
		p.innerHTML="[...shiko me shume]";
}