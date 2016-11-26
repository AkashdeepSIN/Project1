$(document).ready(function(){
  $('.slider')._TMS({
    show:0,
    pauseOnHover:true,
    prevBu:'.prev',
    nextBu:'.next',
    playBu:false,
    duration:500,
    preset:'fade',
    pagination:true,//'.pagination',true,'<ul></ul>'
    pagNums:false,
    slideshow:8000,
    numStatus:false,
    banners:'fromBottom',// fromLeft, fromRight, fromTop, fromBottom
    waitBannerAnimation:false,
    progressBar:false
  })

})
$(function(){
  if($(window).width() <= 1066)
  {
    $("#slider .prev").css("left", "55px")
    $("#slider .next").css("right", "55px")
  }
})
