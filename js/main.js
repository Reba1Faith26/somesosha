function menu(){
    $(".menu-btn").click(function(){
        $(".menu-content").slideToggle(300);
    });
}
function image1(){
    var image = document.getElementById("advert-img");
    var button = document.getElementById("img1");
    button.addEventListener("click",function(){
        image.src="advert top section/1.jpg";
    },false);
}
function image2(){
    var image = document.getElementById("advert-img");
    var button = document.getElementById("img2");
    button.addEventListener("click",function(){
        image.src="advert top section/2.jpg";
    },false);
}
function image3(){
    var image = document.getElementById("advert-img");
    var button = document.getElementById("img3");
    button.addEventListener("click",function(){
        image.src="advert top section/3.jpg";
    },false);
}
function image4(){
    var image = document.getElementById("advert-img");
    var button = document.getElementById("img4");
    button.addEventListener("click",function(){
        image.src="advert top section/4.jpg";
    },false);
}
function image5(){
    var image = document.getElementById("advert-img");
    var button = document.getElementById("img5");
    button.addEventListener("click",function(){
        image.src="advert top section/5.jpg";
    },false);
}
menu();
image1();
image2();
image3();
image4();
image5();