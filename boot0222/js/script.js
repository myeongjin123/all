$(function(){
    $(".slick-slider").slick({
        dots: true,
        infinite : true,
        speed:500,
        slidesToShow:3,
        centerMode:true,
        centerPadding:'60px',
        autoplay:true,
        prevArrow:$(".prevArrow"),
        nextArrow:$(".nextArrow"),
        responsive:[
            {
            breakpoint : 768,
            settings:{
                centerMode:true,
                centerpadding:'30px',
                slideToshow: 2
            }
            
        },
        {
            breakpoint : 576,
            settings:{
                centerMode:true,
                slideToshow: 1,
                centerpadding:'30px',
            }
            
        }
        
    ]
    });
})