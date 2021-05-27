function slide1(){
    document.getElementById('img').src="assets/img/produto-3.jpeg";
    setTimeout("slide2()", 6000)
}

function slide2(){
    document.getElementById('img').src="assets/img/produto-5.jpg";
    setTimeout("slide3()", 6000)
}    

function slide3(){
    document.getElementById('img').src="assets/img/produto-2.jpeg";
    setTimeout("slide1()", 6000)
}        