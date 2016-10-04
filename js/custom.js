$('header').css({ 'height': $(window).height() });
$(window).on('resize', function() {
  $('header').css({ 'height': $(window).height() });
  $('body').css({ 'width': $(window).width() })
});