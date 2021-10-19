"use strict";

// トップへ戻るボタン
$(window).on('scroll', function () {
  if (100 < $(this).scrollTop()) {
    $('.totop').addClass('is-show');
  } else {
    $('.totop').removeClass('is-show');
  }
});