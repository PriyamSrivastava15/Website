$(document).ready(function () {
  $("body").css("display", "none").fadeIn(1000);
});


$(".move-image").on("click", function(e){
    e.preventDefault();

    const img=$(this).find("img");

    img.addClass("move-left");

    setTimeout(()=>{
        $(".love-text").removeClass("invisible fadeOut")
        $(".love-text").addClass("fadeIn");
    },2750);

    setTimeout(()=>{
        $(".love-text").removeClass("fadeIn");
        $(".love-text").addClass("fadeOut");
    },4500);

    setTimeout(()=>{
        img.removeClass("move-left");
        $(".love-text").addClass("invisible");
    },5100);

});

$(".jump a").on("click", function(e){
    e.preventDefault();

    const img=$(this);
    const link=$(this).attr("href");

    $(".jump").removeClass("jump");
    
    setTimeout(()=>{img.addClass("zoomed")},100);

    setTimeout(() => {
        window.location.href=link;
    }, 1100);
});