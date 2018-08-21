$(document).ready(function() {

  // ** NAVBARS **

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });

  // ** MODALS **

  $(".modal-button").click(function() {
    $("#" + $(this).data("target")).toggleClass("is-active");
  });

  $('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button').click(function() {
    $(".modal").removeClass("is-active");
  });

  // ** TABS **
  $('#tabs li').on('click', function() {
    var tab = $(this).data('tab');

    $('#tabs li').removeClass('is-active');
    $(this).addClass('is-active');

    $('#tab-content p').removeClass('is-active');
    $('p[data-content="' + tab + '"]').addClass('is-active');
  });

});


