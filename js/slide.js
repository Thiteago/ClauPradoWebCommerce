function slide1(){
    document.getElementById('img').src="assets/img/produto-3.jpeg";
    document.getElementById('titulo').innerHTML = 'Unicórnio Camarada';
    document.getElementById('descricao').innerHTML = 'Era uma vez um unicórnio que se chamava rodolfo';
    setTimeout("slide2()", 6000)
}

function slide2(){
    document.getElementById('img').src="assets/img/produto-5.jpg";
    document.getElementById('titulo').innerHTML = 'Leri go, Leri go';
    document.getElementById('descricao').innerHTML = 'Lindas cantigas de ninar para crianças imperativas';
    setTimeout("slide3()", 6000)
}    

function slide3(){
    document.getElementById('img').src="assets/img/produto-2.jpeg";
    document.getElementById('titulo').innerHTML = 'Harry Bruxo';
    document.getElementById('descricao').innerHTML = 'Rasta a tabaca na vara vai sentando na vassoura , eta bruxinha rabuda , eta rabeta que voa';
    setTimeout("slide1()", 6000)
}        