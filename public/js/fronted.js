$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });

  $(".modal-button").click(function() {
    $("#" + $(this).data("target")).toggleClass("is-active");
  });

  $('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button').click(function() {
    $("#modal-ter").removeClass("is-active");
  });

});
