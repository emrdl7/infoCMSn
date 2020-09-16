$(document).ready(function() {

    $("header button.menu").on("click", function(){
        $("body").toggleClass("open");
        
        $("nav#main-menu ul li").removeClass("active");
        $("nav#main-menu ul li ul li a").removeClass("on");
        $("nav#main-menu ul li ul li ul").removeClass("on");

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


    
    $("nav#main-menu>ul>li>ul>li").each(function () {

        if ($(this).find("ul").length) {

            $(this).find(">a").attr("href", "#");

        }
    });


    $("nav#main-menu>ul>li>ul>li>a").on("click", function () {
        $("nav#main-menu>ul>li>ul>li>a").removeClass("on");
        $("nav#main-menu>ul>li>ul>li>ul").removeClass("on");
        $(this).addClass("on")
        $(this).parent().find("ul").addClass("on");


    });




    $('.tab-navigation div.tabs').slick({
        infinite: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        variableWidth: true,
        nextArrow: $('.tab-navigation .right'),
        prevArrow: $('.tab-navigation .left')
    });





});

