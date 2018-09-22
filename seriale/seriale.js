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