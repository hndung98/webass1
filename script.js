function home(){
}
function products(){
}
function initialize(){
	document.getElementById("menu-item").style.maxHeight = "0px";
}
function initializeProductDetails(){
	document.getElementById("menu-item").style.maxHeight = "0px";

	var ProductImg = document.getElementById("ProductImg");
	var SmallImg = document.getElementsByClassName("small-img");
	SmallImg[0].onclick = function(){
		ProductImg.src = SmallImg[0].src;
	}
	SmallImg[1].onclick = function(){
		ProductImg.src = SmallImg[1].src;
	}
	SmallImg[2].onclick = function(){
		ProductImg.src = SmallImg[2].src;
	}
	SmallImg[3].onclick = function(){
		ProductImg.src = SmallImg[3].src;
	}
}
function initializeCart(){
	document.getElementById("menu-item").style.maxHeight = "0px";
}
function menutoggle(){
	var height = document.getElementById("menu-item").style.maxHeight;
	if(height == "0px"){
		document.getElementById("menu-item").style.maxHeight = "200px";
	}
	else{
		document.getElementById("menu-item").style.maxHeight = "0px";
	}
}
function viewCart(){
	window.open("cart.html","_top");
}

function product(){
	
}
/*

*/