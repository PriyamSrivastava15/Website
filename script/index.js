$(".heart").on("click", function(e){
    e.preventDefault();

    const link = $(this).attr("href");
    const img=$(this).find("i");

    img.removeClass("beat");
    
    setTimeout(()=>{img.addClass("zoomed")},100);

    setTimeout(() => {
        window.location.href=link;
    }, 1100);
});