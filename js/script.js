/* Author: Jeff Escalante

*/

// Jeff's custom mage slider, v1.0

$('.next').click(function(){
  var $active = $('.slider img.active');
  console.log($active);
  if ( $active.length == 0 ) $active = $('.slider img:last');
  var $next = $active.next().length ? $active.next() : $('.slider img:first');
  $active.addClass('last-active');
  $next.css({opacity: 0}).addClass('active').animate({opacity: 1.0}, 500, function() {
    $active.removeClass('active last-active');
  });
  // rotate dot
  var $dot = $('#progress li.active');
  if ( $dot.length == 0 ) { $dot = $('#progress li:last'); }
  var $nextdot = $dot.next().length ? $dot.next() : $('#progress li:first');
  $nextdot.addClass('active'); $dot.removeClass('active last-active');
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
  // rotate dot
  var $dot = $('#progress li.active');
  if ( $dot.length == 0 ) { $dot = $('#progress li:first'); }
  var $nextdot = $dot.prev().length ? $dot.prev() : $('#progress li:last');
  $nextdot.addClass('active'); $dot.removeClass('active last-active');
});

// Hover functionality for passions
$('.passions li').hover(function(){
  $(this).find('span').fadeIn();
}, function(){
  $(this).find('span').fadeOut();
});

// Create the same number of dots as there are images

var numberofpics = $('.slider img').length,
    fragment = document.createDocumentFragment(),
    div = document.createElement('li');

while (numberofpics--) {
    fragment.appendChild(div.cloneNode(true));
}

$('#progress ul').append(fragment);

// add active classes where needed, center the dots
$('#progress ul li:first-child').addClass('active');
$('.slider img:first-child').addClass('active');
$('#progress ul').css({'margin-left': (958 - $('#progress ul').width())/2 })

// loader

var img = $("<img src='images/2.png' />");
$(img).load(function() {
    $('.loading').fadeOut(200, function(){
      $(this).remove();
    });
});











