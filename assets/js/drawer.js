"use strict";

$('.drawer-icon').on('click', function (e) {
  e.preventDefault();
  $('.drawer-icon').toggleClass('is-active');
  $('.drawer-content').toggleClass('is-active');
  $('.drawer__bg').toggleClass('is-active');
  $('body').toggleClass('noscroll');
  return false;
});
$('.drawer-content a[href]').on('click', function (e) {
  $('.drawer-icon').trigger('click');
});