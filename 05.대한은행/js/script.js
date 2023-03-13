$(function(){
    $('.gnb').hover(function(){
        $(this).find('.lnb').stop().slideToggle();
    });
})
setInterval(mySlide,3000);
function mySlide(){
 $(".slider").animate({
     'left':'-1200'}, 500, function(){
         //슬라이드인안에 있는 첫번쨰 이미지를 복제해서(clone) 슬라이드인의 뒤에 붙여라
         $('.slider img:first-child')
         .clone().appendTo(".slider");
         $(".slider img:first-child").remove();
         $(".slider").css("left",0);
     });
 }
     //tap
     $(".tab a").click(function(e){
        e.preventDefault();
        $(".tab a").removeClass("active"); //탭의 모든 active를 지운다
        const myid = $(this).data("idx");   //누른 탭에 active를 추가한다
        $(this).addClass("active");     //누른 탭에 data-idx값을 가져온다
        $(".tab-content>div").removeClass("active");    //tap=content의 모든 active를 지운다
        $(myid).addClass("active"); //가져온 data-idx 값과 같은 tab-content에 active를 추가한다.
    });