/* Author: Jeff Escalante

*/

// Image slider, v1.0

$('.next').click(function(){
  var $active = $('.slider img.active');
  console.log($active);
  if ( $active.length == 0 ) $active = $('.slider img:last');
  var $next = $active.next().length ? $active.next() : $('.slider img:first');
  $active.addClass('last-active');
  $next.css({opacity: 0}).addClass('active').animate({opacity: 1.0}, 500, function() {
    $active.removeClass('active last-active');
  });
});

$('.prev').click(function(){
  var $active = $('.slider img.active');
  if ( $active.length == 0 ) $active = $('.slider img:first');
  var $previous = $active.prev().length ? $active.prev() : $('.slider img:last');
  $active.addClass('last-active');

  $previous.css({opacity: 0})
    .addClass('active')
    .animate({opacity: 1.0}, 500, function() {
      $active.removeClass('active last-active');
    });

});

// Hover functionality for
$('.passions li').hover(function(){
  $(this).find('span').fadeIn();
}, function(){
  $(this).find('span').fadeOut();
});


















