var veri = 1;
var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
    var menu = document.getElementById('menu-hidde');
        if (veri == 1) {
            menu.style.right = "0px";
            veri = 0;
        }else{
            menu.style.right = "-100%";
            veri = 1;
        }
    }
)

new SimpleSlide({
    slide: 'principal', // nome do atributo data-slide="principal"
    nav: true, // se deve ou não mostrar a navegação
    time: 5000, // tempo de transição dos slides
    pauseOnHover: true, // pausa a transição automática
  });