// JavaScript Document
var offsetArray = []
var current = 0;
$(function () {
  $('.main').each(function(index, el) {
    offsetArray.push($(this).offset().top)
  });
  $(window).scroll(function(event) {
    for (var i = offsetArray.length - 1; i >= 0; i--) {
      if(offsetArray[i] < $(this).scrollTop()+100){
		  if(current == i) {
			  break; }
        $('.grow'+(i+1)).fadeIn(1000);
        $('.grow'+(current+1)).fadeOut(1000);
        current = i;
        break;
      }
    };
  })
  $('.button').click(function(){
	  var link = $(this).find('a').attr('href')
	  var top = $(link).offset().top
	  $('body,html').animate({scrollTop: top},1000);
	   console.log(top)
	  return false; 
  });
    $('.blinking').click(function(){
	  var link = $(this).find('a').attr('href')
	  var top = $(link).offset().top
	  $('body,html').animate({scrollTop: top},1000);
	   console.log(top)
	  return false; 
  });
});
