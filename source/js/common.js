$(document).ready(function() {

    $("header button.menu").on("click", function(){
        $("body").toggleClass("open");
        
        $("nav#main-menu ul li").removeClass("active");
    });



    
    $("nav#main-menu h3").each(function () {
        if ($(this).parent().find("ul").length) {
            $(this).find("a").attr("href", "#");

        }
    })


    $("nav#main-menu h3").on("click", function () {
        $("nav#main-menu ul li").removeClass("active");
        $(this).parent().addClass("active");

        if ($(this).parent().find("ul").length) {
            $("body").addClass("open");
        }

    });






});

