var veri = 1;
var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
    var menu = document.getElementById('menu-hidde');
        if (veri == 1) {
            menu.style.display = "flex";
            menu.style.right = "0px";
            veri = 0;
        }else{
            menu.style.right = "-100%";
            menu.style.display ="none";
            veri = 1;
        }
    }
)
